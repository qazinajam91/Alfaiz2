export interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  ADMIN_PASSWORD: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/enroll' && request.method === 'POST') {
      try {
        const data = await request.json() as Record<string, string>;
        await env.DB.prepare(
          `INSERT INTO admissions (full_name, student_age, gender, course_interest, phone, notes, created_at)
           VALUES (?, ?, ?, ?, ?, ?, ?)`
        ).bind(
          data.fullName || '',
          data.studentAge || '',
          data.gender || '',
          data.courseInterest || '',
          data.contactPhoneOrWhatsApp || '',
          data.notes || '',
          new Date().toISOString()
        ).run();
        return Response.json({ success: true });
      } catch (err) {
        return Response.json({ success: false, error: String(err) }, { status: 500 });
      }
    }

    if (url.pathname === '/api/admissions' && request.method === 'GET') {
      const password = url.searchParams.get('password');
      if (password !== env.ADMIN_PASSWORD) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
      }
      const { results } = await env.DB.prepare(
        `SELECT * FROM admissions ORDER BY created_at DESC`
      ).all();
      return Response.json({ results });
    }

    return env.ASSETS.fetch(request);
  },
};
