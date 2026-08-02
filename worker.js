export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/submit' && request.method === 'POST') {
      return handleSubmit(request, env);
    }

    return env.ASSETS.fetch(request);
  }
};

async function handleSubmit(request, env) {
  let formData;
  try {
    formData = await request.formData();
  } catch {
    return json({ error: 'Richiesta non valida' }, 400);
  }

  // Honeypot server-side
  if (formData.get('_honey')) {
    return json({ ok: true }, 200);
  }

  // Validazione Turnstile
  const token = formData.get('cf-turnstile-response');
  if (!token) {
    return json({ error: 'Verifica di sicurezza mancante' }, 400);
  }

  const ip = request.headers.get('CF-Connecting-IP') || '';
  const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: token, remoteip: ip })
  });

  const { success } = await verify.json();
  if (!success) {
    return json({ error: 'Verifica di sicurezza non superata. Riprova.' }, 400);
  }

  formData.delete('cf-turnstile-response');

  const upstream = await fetch('https://formspree.io/f/mqerjzow', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Origin': 'https://dynamismsecurity.com',
      'Referer': 'https://dynamismsecurity.com/'
    },
    body: formData
  });

  const data = await upstream.json();
  return json(data, upstream.status);
}

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}
