export interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  ADMIN_PASSWORD: string;
}

function checkAuth(url: URL, env: Env): boolean {
  return url.searchParams.get('password') === env.ADMIN_PASSWORD;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Public: create enrollment from website form
    if (url.pathname === '/api/enroll' && request.method === 'POST') {
      try {
        const data = await request.json() as Record<string, string>;
        await env.DB.prepare(
          `INSERT INTO admissions (full_name, student_age, gender, course_interest, phone, notes, created_at, status)
           VALUES (?, ?, ?, ?, ?, ?, ?, 'active')`
        ).bind(
          data.fullName || '', data.studentAge || '', data.gender || '',
          data.courseInterest || '', data.contactPhoneOrWhatsApp || '',
          data.notes || '', new Date().toISOString()
        ).run();
        return Response.json({ success: true });
      } catch (err) {
        return Response.json({ success: false, error: String(err) }, { status: 500 });
      }
    }

    // Admin: list all enrollments
    if (url.pathname === '/api/admissions' && request.method === 'GET') {
      if (!checkAuth(url, env)) return Response.json({ error: 'Unauthorized' }, { status: 401 });
      const { results } = await env.DB.prepare(`SELECT * FROM admissions ORDER BY created_at DESC`).all();
      return Response.json({ results });
    }

    // Admin: manually add a new admission
    if (url.pathname === '/api/admissions' && request.method === 'POST') {
      if (!checkAuth(url, env)) return Response.json({ error: 'Unauthorized' }, { status: 401 });
      try {
        const data = await request.json() as Record<string, string>;
        await env.DB.prepare(
          `INSERT INTO admissions (full_name, student_age, gender, course_interest, phone, notes, created_at, status)
           VALUES (?, ?, ?, ?, ?, ?, ?, 'active')`
        ).bind(
          data.fullName || '', data.studentAge || '', data.gender || '',
          data.courseInterest || '', data.phone || '',
          data.notes || '', new Date().toISOString()
        ).run();
        return Response.json({ success: true });
      } catch (err) {
        return Response.json({ success: false, error: String(err) }, { status: 500 });
      }
    }

    // Admin: toggle active/inactive
    if (/^\/api\/admissions\/\d+\/status$/.test(url.pathname) && request.method === 'PATCH') {
      if (!checkAuth(url, env)) return Response.json({ error: 'Unauthorized' }, { status: 401 });
      const id = url.pathname.split('/')[3];
      const body = await request.json() as { status: string };
      await env.DB.prepare(`UPDATE admissions SET status = ? WHERE id = ?`).bind(body.status, id).run();
      return Response.json({ success: true });
    }

    // Admin: delete
    if (/^\/api\/admissions\/\d+$/.test(url.pathname) && request.method === 'DELETE') {
      if (!checkAuth(url, env)) return Response.json({ error: 'Unauthorized' }, { status: 401 });
      const id = url.pathname.split('/')[3];
      await env.DB.prepare(`DELETE FROM admissions WHERE id = ?`).bind(id).run();
      return Response.json({ success: true });
    }

    return env.ASSETS.fetch(request);
  },
};
