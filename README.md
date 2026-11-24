# tudoo.ro

Site-ul Tudoo: site-uri, aplicații și design UI/UX pentru firme mici. Construit cu [Astro](https://astro.build), cu animații GSAP + Lenis.

## Pornire

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # site static în dist/
```

## Unde schimbi conținutul

- `src/data/site.ts`: date de contact, meniu, servicii, prețuri, pași, întrebări. Aproape tot textul repetat stă aici.
- `src/pages/`: câte un fișier pentru fiecare pagină.
- `src/styles/global.css`: culori, fonturi și stiluri.
- `src/scripts/motion.ts`: animațiile.

## Formular

Formularele trimit datele la adresa din variabila `PUBLIC_FORM_ENDPOINT` (de exemplu Web3Forms sau Formspree). Vezi `.env.example`. Fără ea, formularul îi arată vizitatorului adresa de email.

## Publicare

Site-ul e static, deci merge pe Cloudflare Pages, Netlify sau Vercel:

- comanda de build: `npm run build`
- folderul publicat: `dist`
- variabilă de mediu: `PUBLIC_FORM_ENDPOINT`

## De completat înainte de lansare

- datele firmei în `src/data/site.ts` (denumire, CUI, Reg. Com., sediu, telefon);
- textele legale (termeni, confidențialitate, cookies), de verificat cu un jurist;
- proiectele reale în portofoliu (acum sunt concepte, marcate ca atare);
- logo-ul final.
