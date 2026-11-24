// Tot conținutul care se repetă pe site stă aici: date de contact, meniu, servicii, prețuri.
// Câmpurile marcate TODO trebuie completate înainte de lansare.

export const company = {
  brand: 'Tudoo',
  email: 'salut@tudoo.ro', // TODO: confirmă adresa
  phone: '', // TODO: număr de telefon / WhatsApp, de ex. '+40 7xx xxx xxx'
  legalName: '[Denumirea firmei]', // TODO
  cui: '[CUI]', // TODO
  regCom: '[Nr. Registrul Comerțului]', // TODO
  address: '[Sediul social]', // TODO
  status: 'Acceptăm proiecte noi pentru decembrie',
};

export const nav = [
  { href: '/servicii', label: 'Servicii' },
  { href: '/portofoliu', label: 'Portofoliu' },
  { href: '/preturi', label: 'Prețuri' },
  { href: '/cum-lucram', label: 'Cum lucrăm' },
  { href: '/contact', label: 'Contact' },
];

export type PriceRow = { name: string; what: string; time?: string; price: string };

export type Service = {
  slug: string;
  num: string;
  title: string;
  short: string;
  from: string;
  intro: string;
  bullets: string[];
  rows: PriceRow[];
  note?: string;
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'site-uri',
    num: '01',
    title: 'Site-uri și aplicații',
    short: 'De la o pagină simplă la un site cu mai multe pagini sau o aplicație web.',
    from: '900 €',
    intro:
      'Facem site-uri care arată bine pe orice ecran, se încarcă repede și îi ajută pe clienți să te contacteze. Știi prețul și termenul înainte să începem.',
    bullets: [
      'Design adaptat pe telefon',
      'Formular de contact',
      'Certificat SSL',
      'Structură pregătită pentru Google',
      'Găzduire gratuită în primul an',
      '30 de zile de suport după lansare',
    ],
    rows: [
      { name: 'Landing page', what: '1 pagină cu design de la zero, 6–8 secțiuni, 2 runde de modificări', time: '10 zile lucrătoare', price: '900 €' },
      { name: 'Site de prezentare', what: 'Până la 5 pagini, blog simplu, 2 runde de modificări', time: '2–3 săptămâni', price: '1.300 €' },
      { name: 'Site extins', what: 'Până la 10 pagini, blog, a doua limbă opțională, 3 runde de modificări', time: '3–4 săptămâni', price: '1.800 €' },
      { name: 'Mini-aplicație', what: 'Un singur instrument: programări simple, calculator de ofertă, configurator sau formular avansat', time: '2–3 săptămâni', price: '900 €' },
      { name: 'Aplicație simplă', what: 'Programări sau rezervări, conturi de client, panou de administrare', time: '4–6 săptămâni', price: 'de la 1.900 €' },
      { name: 'Aplicație completă', what: 'Plăți online, roluri de utilizator, integrări cu alte sisteme', time: 'după ofertă', price: 'de la 3.500 €' },
    ],
    note: 'Regula e simplă: 900 € pentru prima pagină și 100 € pentru fiecare pagină în plus. Peste 10 pagini, fiecare pagină nouă costă 100 €.',
    faq: [
      { q: 'Al cui e site-ul după lansare?', a: 'Al tău. Domeniul, conținutul și codul îți aparțin, iar la cerere îți predăm toate accesele.' },
      { q: 'Pot modifica singur textele?', a: 'Da. Îți arătăm cum, iar dacă preferi, le facem noi la ora de lucru extra.' },
      { q: 'Ce trebuie să aduc eu?', a: 'Domeniul, logo-ul dacă ai unul, textele și pozele. Dacă nu le ai, le putem face noi contra cost.' },
    ],
  },
  {
    slug: 'magazine-online',
    num: '02',
    title: 'Magazine online',
    short: 'Magazin cu plată cu cardul, facturare automată și curier.',
    from: '2.200 €',
    intro:
      'Un magazin online simplu de administrat, în care clienții găsesc repede produsul, plătesc cu cardul și primesc coletul. Tu vezi comenzile într-un singur loc.',
    bullets: [
      'Până la 50 de produse încărcate de noi',
      'Plată cu cardul și ramburs',
      'Facturare automată',
      'Integrare cu firma de curierat',
      'Pagini de termeni, retur și GDPR',
      'Instruire pentru administrare',
    ],
    rows: [
      { name: 'Magazin online', what: 'Până la 50 de produse, plată cu cardul, facturare automată, curier', time: '4–6 săptămâni', price: 'de la 2.200 €' },
    ],
    note: 'Prețul final depinde de numărul de produse și de integrările de care ai nevoie. Îți trimitem oferta fixă în 24 de ore de la discuție.',
    faq: [
      { q: 'Ce procesator de plăți folosiți?', a: 'Lucrăm cu procesatorii folosiți în România, iar alegerea o facem împreună, după comisioane și după banca ta.' },
      { q: 'Pot adăuga singur produse?', a: 'Da. Primești un panou de administrare și o instruire scurtă.' },
    ],
  },
  {
    slug: 'ui-ux',
    num: '03',
    title: 'Design UI/UX',
    short: 'Ecrane pentru aplicații și site-uri, gândite să fie ușor de folosit.',
    from: '500 €',
    intro:
      'Desenăm în Figma ecrane clare pentru site-uri și aplicații, cu prototip clicabil. Poți testa ideea cu utilizatori sau o poți arăta investitorilor înainte să plătești programarea.',
    bullets: [
      'Audit UX cu probleme și soluții',
      'Redesign de site',
      'Prototip MVP clicabil',
      'Design de aplicație web și mobil',
      'Design system în Figma',
      'Fișiere pregătite pentru programare',
    ],
    rows: [
      { name: 'Audit UX', what: 'Analiza unui site sau a unei aplicații existente, raport cu problemele și soluțiile, în ordinea importanței', time: '5 zile', price: '500 €' },
      { name: 'Redesign de site', what: 'Design nou în Figma pentru un site existent, până la 5 pagini, 2 runde de modificări', time: '1–2 săptămâni', price: 'de la 900 €' },
      { name: 'Prototip MVP', what: 'Fluxul principal al unei aplicații, 8–10 ecrane, prototip clicabil pentru teste sau investitori', time: '2 săptămâni', price: '900 €' },
      { name: 'Design de aplicație', what: 'Până la 20 de ecrane web sau mobile, prototip clicabil, fișiere pregătite pentru programare', time: '3–4 săptămâni', price: 'de la 1.500 €' },
      { name: 'Design system', what: 'Componente, culori, tipografie și reguli în Figma, pentru un produs care crește', time: '2–3 săptămâni', price: 'de la 800 €' },
    ],
    faq: [
      { q: 'Primesc fișierele Figma?', a: 'Da, toate fișierele sunt ale tale la final.' },
      { q: 'Puteți și programa aplicația după design?', a: 'Da. Pachetul Produs digital combină designul cu o aplicație web simplă.' },
    ],
  },
  {
    slug: 'abonament-design',
    num: '04',
    title: 'Abonament de design',
    short: 'Cereri de design web și UI, livrate pe rând, pentru o sumă fixă pe lună.',
    from: '290 €/lună',
    intro:
      'Trimiți cereri de design (pagini noi, secțiuni, ecrane de aplicație, bannere pentru site) și le primești pe rând. Poți pune abonamentul pe pauză sau îl poți opri oricând, cu 7 zile înainte.',
    bullets: [
      'Sumă fixă pe lună',
      'Cereri trimise oricând',
      'Livrare în câteva zile lucrătoare',
      'Pauză sau oprire oricând',
      'Fișierele sunt ale tale',
      '10% reducere la plata pe un an',
    ],
    rows: [
      { name: 'Web', what: 'Până la 8 cereri pe lună: secțiuni sau pagini noi pe site, bannere, mici redesign-uri', time: '2–3 zile lucrătoare per cerere', price: '290 €/lună' },
      { name: 'Produs', what: 'Cereri nelimitate, una în lucru odată: ecrane de aplicație, pagini noi, îmbunătățiri UX', time: '2–3 zile lucrătoare per cerere', price: '690 €/lună' },
      { name: 'Produs Plus', what: 'Tot din Produs, plus programarea paginilor și ecranelor livrate', time: '3–5 zile lucrătoare per cerere', price: '1.190 €/lună' },
    ],
    note: 'Cine plătește pe un an întreg primește 10% reducere.',
    faq: [
      { q: 'Ce înseamnă „una în lucru odată”?', a: 'Lucrăm la o singură cerere până o livrăm, apoi trecem la următoarea din listă. Lista ta poate fi oricât de lungă.' },
      { q: 'Pot opri abonamentul?', a: 'Da, oricând, cu 7 zile înainte de următoarea plată.' },
    ],
  },
  {
    slug: 'logo-brand',
    num: '05',
    title: 'Logo și ghid de brand',
    short: 'O identitate clară, gata de folosit pe site și în aplicație.',
    from: '300 €',
    intro:
      'Pornim de la ce face firma ta și de la clienții tăi. Primești 3 propuneri de logo, alegi una, o rafinăm împreună și îți livrăm fișierele pentru orice folosire.',
    bullets: [
      '3 propuneri de logo',
      '2 runde de modificări',
      'Culori și fonturi',
      'Reguli de folosire',
      'Ghid de brand în PDF',
      'Fișiere SVG, PNG și PDF',
    ],
    rows: [
      { name: 'Logo', what: '3 propuneri, 2 runde de modificări, fișiere SVG, PNG și PDF', time: '5–7 zile', price: '300 €' },
      { name: 'Logo + ghid de brand', what: 'Logo, culori, fonturi, reguli de folosire, ghid de brand în PDF', time: '7–10 zile', price: '600 €' },
    ],
    faq: [
      { q: 'Faceți și cărți de vizită sau flyere?', a: 'Nu. Ne ocupăm de logo și de ghidul de brand, pe care le poți folosi apoi la orice tipografie.' },
    ],
  },
];

export const extras: PriceRow[] = [
  { name: 'Oră de lucru extra', what: 'Modificări în afara pachetului sau a abonamentului de design', price: '100 €/oră' },
  { name: 'Texte pentru site', what: 'Scrise de noi, pe baza unei discuții de 30 de minute', price: '50 €/pagină' },
];

export const bundles = [
  { name: 'Lansare rapidă', what: 'Logo + landing page', was: '1.200 €', price: '1.090 €' },
  { name: 'Firmă nouă', what: 'Logo + ghid de brand, site de prezentare', was: '1.900 €', price: '1.690 €' },
  { name: 'Produs digital', what: 'Design de aplicație + aplicație simplă', was: '3.400 €', price: '2.990 €' },
];

export const steps = [
  { t: 'Discuție gratuită de 20 de minute', d: 'La telefon sau pe video, despre ce ai nevoie.' },
  { t: 'Ofertă fixă în 24 de ore', d: 'Cu preț, termen și tot ce e inclus.' },
  { t: 'Avans de 50%', d: 'Și materialele de la tine: logo, texte, poze, acces la domeniu.' },
  { t: 'Prima propunere de design', d: 'În 3–5 zile lucrătoare, urmată de rundele de modificări din pachet.' },
  { t: 'Construim site-ul', d: 'Și ți-l trimitem spre verificare pe un link de test.' },
  { t: 'Lansăm', d: 'Plătești restul de 50% și primești un ghid scurt de folosire.' },
  { t: '30 de zile de suport gratuit', d: 'După lansare, apoi modificări la cerere, plătite pe oră.' },
];

export const payment = [
  { q: 'Prețurile includ TVA?', a: 'Prețurile sunt în euro, fără TVA. Plata se face în lei, la cursul BNR din ziua facturării.' },
  { q: 'Cum se face plata?', a: '50% avans la semnare și 50% la lansare. Abonamentele se plătesc lunar, în avans.' },
  { q: 'Ce e inclus în orice site?', a: 'Design adaptat pe telefon, formular de contact, certificat SSL, structură pregătită pentru Google (titluri, descrieri, sitemap, viteză) și găzduire gratuită în primul an.' },
  { q: 'Ce trebuie să aduc eu?', a: 'Domeniul (aproximativ 10 € pe an pentru .ro), logo-ul dacă ai, textele și pozele. Dacă nu le ai, le facem noi contra cost.' },
];

export const faqs = [
  ...payment,
  { q: 'În cât timp e gata un site?', a: 'Între 10 zile lucrătoare pentru un landing page și 3–4 săptămâni pentru un site extins. Termenul exact e scris în ofertă.' },
  { q: 'Al cui e site-ul după lansare?', a: 'Al tău. Domeniul, conținutul și codul îți aparțin.' },
  { q: 'Ce se întâmplă dacă nu-mi place designul?', a: 'Fiecare pachet are runde de modificări incluse. Lucrăm până ești mulțumit în limita lor, iar orice extra are prețul stabilit dinainte.' },
  { q: 'Lucrați doar cu firme din orașul vostru?', a: 'Nu. Lucrăm cu firme din toată țara, la telefon și pe video.' },
];

// Site-uri desenate pentru hero și portofoliul-concept. Sunt exemple, nu clienți reali.
export type Mini = {
  n: string; kind: string; h: string; b: string;
  bg: string; fg: string; ac: string; ak: string; si: string; ic: string; art: string;
};

export const minis: Mini[] = [
  { n: 'Florăria Mira', kind: 'florărie', h: 'Flori proaspete, livrate azi.', b: 'Comandă', bg: '#FFF1F3', fg: '#3B0A1A', ac: '#E11D48', ak: '#fff', ic: 'flower', si: '#fff', art: 'radial-gradient(circle at 78% 22%,#FDA4AF 0 20%,transparent 20.5%),radial-gradient(circle at 18% 82%,#FFD84D 0 16%,transparent 16.5%),linear-gradient(150deg,#FB7185,#BE123C)' },
  { n: 'Barber Nord', kind: 'frizerie', h: 'Tuns la 11:30? Rezervi online.', b: 'Rezervă', bg: '#131416', fg: '#F5F5F4', ac: '#F59E0B', ak: '#131416', ic: 'scissors', si: '#131416', art: 'repeating-linear-gradient(135deg,#F59E0B 0 14px,#FBBF24 14px 28px)' },
  { n: 'Atelier Lut', kind: 'ceramică', h: 'Ceramică lucrată de mână.', b: 'Magazin', bg: '#F3EDE4', fg: '#3A2A1E', ac: '#3A2A1E', ak: '#F3EDE4', ic: 'vase', si: '#F3EDE4', art: 'radial-gradient(ellipse at 50% 110%,#7C4A2D 0 38%,transparent 38.5%),linear-gradient(170deg,#D6A77A,#A0623A)' },
  { n: 'Brutăria Ana', kind: 'brutărie', h: 'Pâine caldă, în fiecare dimineață.', b: 'Comandă', bg: '#FFF7E6', fg: '#2B1B0E', ac: '#C2410C', ak: '#fff', ic: 'loaf', si: '#FFF7E6', art: 'radial-gradient(circle at 72% 75%,#FFD84D 0 16%,transparent 16.5%),radial-gradient(circle at 22% 25%,#FDBA74 0 22%,transparent 22.5%),linear-gradient(150deg,#F59E0B,#C2410C)' },
  { n: 'Colț Coffee', kind: 'cafenea', h: 'Cafea bună, la 2 pași de birou.', b: 'Meniu', bg: '#0F3D2E', fg: '#ECFDF5', ac: '#FFD84D', ak: '#0F3D2E', ic: 'cup', si: '#0F3D2E', art: 'radial-gradient(circle at 30% 30%,#FFE58A 0 18%,transparent 18.5%),linear-gradient(160deg,#FFD84D,#F59E0B)' },
  { n: 'Prana Yoga', kind: 'studio de yoga', h: 'Prima oră de yoga e din partea casei.', b: 'Încearcă', bg: '#EEF1FF', fg: '#1A1B4B', ac: '#2F4BFF', ak: '#fff', ic: 'sun', si: '#fff', art: 'radial-gradient(circle at 50% 120%,#FFD84D 0 34%,transparent 34.5%),linear-gradient(180deg,#6D82FF,#2F4BFF)' },
  { n: 'Clinica Zâmbet', kind: 'cabinet stomatologic', h: 'Programare la dentist în 2 minute.', b: 'Programare', bg: '#ECFEFF', fg: '#083344', ac: '#0891B2', ak: '#fff', ic: 'tooth', si: '#fff', art: 'radial-gradient(circle at 80% 80%,#A5F3FC 0 22%,transparent 22.5%),linear-gradient(150deg,#22D3EE,#0E7490)' },
  { n: 'Service Rapid', kind: 'service auto', h: 'Revizia mașinii, fără bătăi de cap.', b: 'Sună', bg: '#FFE94D', fg: '#16140F', ac: '#16140F', ak: '#FFE94D', ic: 'wrench', si: '#FFE94D', art: 'linear-gradient(135deg,#16140F 0 50%,#2A2720 50%)' },
];

export const icons: Record<string, string> = {
  flower: '<circle cx="24" cy="18" r="4"/><circle cx="24" cy="10" r="5"/><circle cx="32" cy="18" r="5"/><circle cx="24" cy="26" r="5"/><circle cx="16" cy="18" r="5"/><path d="M24 31v12M24 38c-4-4-9-4-11-2M24 40c4-4 9-4 11-2"/>',
  scissors: '<circle cx="14" cy="36" r="5"/><circle cx="34" cy="36" r="5"/><path d="M17 32L34 6M31 32L14 6"/>',
  vase: '<path d="M18 6h12M19 6c0 6-8 9-8 20 0 10 5 16 13 16s13-6 13-16c0-11-8-14-8-20"/><path d="M13 24h22"/>',
  loaf: '<path d="M6 32c0-11 8-18 18-18s18 7 18 18v5H6z"/><path d="M16 20l3 7M24 18v8M32 20l-3 7"/>',
  cup: '<path d="M9 18h24v9a12 12 0 0 1-24 0z"/><path d="M33 21h3a4 4 0 0 1 0 8h-4M17 6c0 3 3 3 3 6M25 6c0 3 3 3 3 6"/>',
  sun: '<circle cx="24" cy="24" r="8"/><path d="M24 6v5M24 37v5M6 24h5M37 24h5M11 11l3.5 3.5M33.5 33.5L37 37M37 11l-3.5 3.5M14.5 33.5L11 37"/>',
  tooth: '<path d="M16 7c-5 0-9 4-9 9 0 6 3 8 4 14s2 11 5 11 3-8 8-8 5 8 8 8 4-5 5-11 4-8 4-14c0-5-4-9-9-9-3 0-5 2-8 2s-5-2-8-2z"/>',
  wrench: '<path d="M31 6a9 9 0 0 0-8.5 12L8 32.5a3.5 3.5 0 0 0 5 5L27.5 23A9 9 0 0 0 40 14l-5.5 5.5-5-1-1-5L34 8a9 9 0 0 0-3-2z"/>',
};
