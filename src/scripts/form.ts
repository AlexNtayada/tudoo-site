// Trimite formularele prin fetch la adresa din PUBLIC_FORM_ENDPOINT (Web3Forms, Formspree etc.).
export function initForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-form]').forEach((form) => {
    const msg = form.querySelector<HTMLElement>('.form-msg')!;
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
    const say = (text: string, ok: boolean) => { msg.hidden = false; msg.textContent = text; msg.className = 'form-msg full ' + (ok ? 'ok' : 'err'); };
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        const bad = form.querySelector<HTMLInputElement>(':invalid');
        say(bad?.type === 'email' ? 'Verifică adresa de email.' : bad?.type === 'checkbox' ? 'Bifează acordul pentru prelucrarea datelor.' : 'Completează câmpurile obligatorii.', false);
        bad?.focus();
        return;
      }
      const data = new FormData(form);
      if (data.get('website')) return; // robot
      const endpoint = form.dataset.endpoint;
      if (!endpoint) { say(`Formularul nu e încă activ. Scrie-ne direct la ${form.dataset.email}.`, false); return; }
      btn.disabled = true;
      try {
        const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        say('Mulțumim! Am primit mesajul și îți răspundem în cel mult o zi lucrătoare.', true);
      } catch {
        say(`Mesajul nu a putut fi trimis. Încearcă din nou sau scrie-ne la ${form.dataset.email}.`, false);
      } finally { btn.disabled = false; }
    });
  });
}
