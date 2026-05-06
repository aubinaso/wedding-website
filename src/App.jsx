import {
  CalendarDays,
  Camera,
  Car,
  Church,
  Clock3,
  Gift,
  Heart,
  Hotel,
  MapPin,
  Music,
  Send,
  Shirt,
  Sparkles,
  Utensils,
} from 'lucide-react';

const wedding = {
  groom: 'Axel',
  bride: 'Aivi',
  couple: 'Axel & Aivi',
  date: '15 Août 2026',
  dateLong: 'Samedi 15 Août 2026',
  dateISO: '2026-08-15T00:00:00',
  location: 'Lieu à préciser',
  rsvpLink: '#rsvp',
  rsvpFormLink: 'https://forms.office.com/',
  headline: 'Deux cœurs, une promesse, une vie à bâtir ensemble.',
  invitation:
    'Avec joie et reconnaissance, nous vous invitons à célébrer notre union et à partager avec nous ce jour unique.',
};

const heroImage =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80',
    alt: 'Alliances de mariage sur un tissu ivoire',
  },
  {
    src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=80',
    alt: 'Table de réception élégante avec fleurs',
  },
  {
    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80',
    alt: 'Invités célébrant un mariage',
  },
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
    alt: 'Couple se tenant la main',
  },
  {
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
    alt: 'Bouquet floral romantique',
  },
  {
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
    alt: 'Réception de mariage aux lumières chaleureuses',
  },
];

const timeline = [
  {
    year: '2018',
    title: 'La première rencontre',
    text: 'Un moment simple, quelques mots échangés, et cette impression douce que quelque chose venait de commencer.',
  },
  {
    year: '2020',
    title: 'Les habitudes à deux',
    text: 'Des cafés partagés, des promenades improvisées et la beauté discrète d’un quotidien devenu précieux.',
  },
  {
    year: '2024',
    title: 'La demande',
    text: 'Une soirée intime, une promesse sincère, et un oui qui a illuminé tout ce qui restait à écrire.',
  },
  {
    year: '2026',
    title: 'Le grand oui',
    text: `Entourés de ceux que nous aimons, nous célébrerons notre union le ${wedding.date}.`,
  },
];

const schedule = [
  { time: '14:30', title: 'Accueil des invités', icon: Heart },
  { time: '15:00', title: 'Cérémonie', icon: Church },
  { time: '16:15', title: 'Cocktail', icon: Sparkles },
  { time: '18:00', title: 'Dîner', icon: Utensils },
  { time: '21:00', title: 'Première danse', icon: Music },
  { time: '00:30', title: 'Douceurs de fin de soirée', icon: Clock3 },
];

const practicalInfo = [
  {
    icon: Car,
    title: 'Stationnement',
    text: 'Un espace de stationnement sera indiqué à proximité du lieu de réception.',
  },
  {
    icon: Hotel,
    title: 'Hébergement',
    text: `Des recommandations d’hôtels seront partagées prochainement pour les invités de ${wedding.couple}.`,
  },
  {
    icon: Camera,
    title: 'Photos',
    text: 'Pendant la cérémonie, nous souhaitons profiter d’un moment sans téléphones. Ensuite, immortalisez tout ce que vous aimez.',
  },
];

const dressColors = ['Bleu nuit', 'Ivoire', 'Doré', 'Champagne', 'Bleu royal'];

function getCountdownItems() {
  const diff = Math.max(new Date(wedding.dateISO).getTime() - Date.now(), 0);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);

  return [
    { label: 'Jours', value: days },
    { label: 'Heures', value: hours },
    { label: 'Minutes', value: minutes },
  ];
}

function GoldDivider() {
  return (
    <div className="gold-divider" aria-hidden="true">
      <span />
      <Sparkles className="h-4 w-4" />
      <span />
    </div>
  );
}

function SectionHeader({ eyebrow, title, children, centered = false, light = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className={light ? 'eyebrow text-gold' : 'eyebrow'}>{eyebrow}</p>
      <h2 className={light ? 'section-title text-warm' : 'section-title'}>{title}</h2>
      {children ? (
        <p className={light ? 'section-copy mx-auto text-warm/75' : 'section-copy mx-auto'}>
          {children}
        </p>
      ) : null}
    </div>
  );
}

function App() {
  const countdownItems = getCountdownItems();

  return (
    <main className="ornamental-bg overflow-hidden font-sans text-navy">
      <section className="relative flex min-h-screen items-center justify-center bg-navy text-warm">
        <div
          className="absolute inset-0 animate-slowZoom bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy" />
        <div className="absolute inset-x-6 top-6 bottom-6 border border-gold/25 sm:inset-x-10 sm:top-10 sm:bottom-10" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-24 text-center sm:px-8">
          <p className="animate-floatIn text-xs font-bold uppercase tracking-[0.42em] text-gold">
            Ensemble avec leurs familles
          </p>
          <h1 className="mt-8 animate-floatIn font-serif text-6xl font-semibold leading-none sm:text-8xl lg:text-9xl">
            {wedding.groom} <span className="block text-gold">&</span> {wedding.bride}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl animate-floatIn font-serif text-3xl leading-tight text-ivory sm:text-4xl">
            {wedding.headline}
          </p>
          <div className="mx-auto mt-8 flex max-w-2xl animate-floatIn flex-col items-center justify-center gap-4 border-y border-gold/45 py-6 text-sm font-semibold uppercase tracking-[0.24em] sm:flex-row sm:gap-8">
            <span>{wedding.dateLong}</span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-gold sm:block" />
            <span>{wedding.location}</span>
          </div>
          <a href={wedding.rsvpLink} className="premium-button mt-10 animate-floatIn">
            Confirmer ma présence
          </a>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lux-card p-8 sm:p-10">
            <p className="eyebrow">Invitation</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl">
              {wedding.invitation}
            </h2>
          </div>
          <div className="text-base leading-8 text-navy/75">
            <p>
              Nous serions honorés de vous compter parmi nous pour une journée placée sous le signe de l’amour, de la famille et de la fête.
            </p>
            <p className="mt-5">
              Votre présence rendra ce moment encore plus précieux, du premier regard à la dernière danse.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      <section className="bg-ivory/70">
        <div className="section-shell text-center">
          <SectionHeader eyebrow="Compte à rebours" title="Avant le grand jour" centered>
            Chaque jour nous rapproche de cette promesse que nous avons hâte de partager avec vous.
          </SectionHeader>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-3 sm:gap-5">
            {countdownItems.map((item) => (
              <div key={item.label} className="lux-card p-5 sm:p-7">
                <p className="font-serif text-4xl font-semibold text-gold sm:text-6xl">{item.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-royal">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      <section>
        <div className="section-shell">
          <SectionHeader eyebrow="Notre histoire" title="Une histoire écrite avec douceur">
            De la première rencontre à cette promesse, voici quelques chapitres de notre chemin.
          </SectionHeader>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {timeline.map((item) => (
              <article key={item.year} className="lux-card group p-6 transition duration-300 hover:-translate-y-1">
                <p className="font-serif text-4xl font-semibold text-gold">{item.year}</p>
                <h3 className="mt-5 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-navy/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      <section className="section-shell">
        <SectionHeader eyebrow="Le jour J" title="Cérémonie & réception" centered>
          Un lieu, une promesse, puis une soirée pour célébrer entourés de nos proches.
        </SectionHeader>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="lux-card p-8 transition duration-300 hover:-translate-y-1">
            <Church className="h-9 w-9 text-gold" />
            <h3 className="mt-5 font-serif text-3xl font-semibold text-navy">Cérémonie</h3>
            <p className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-royal">
              <Clock3 className="h-4 w-4 text-gold" /> 15:00
            </p>
            <p className="mt-4 leading-7 text-navy/75">
              {wedding.location}. Les informations détaillées seront communiquées prochainement.
            </p>
          </article>
          <article className="lux-card p-8 transition duration-300 hover:-translate-y-1">
            <MapPin className="h-9 w-9 text-gold" />
            <h3 className="mt-5 font-serif text-3xl font-semibold text-navy">Réception</h3>
            <p className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-royal">
              <Clock3 className="h-4 w-4 text-gold" /> 17:00
            </p>
            <p className="mt-4 leading-7 text-navy/75">
              Cocktail, dîner et soirée dansante dans une atmosphère élégante et chaleureuse.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-navy text-warm">
        <div className="section-shell">
          <SectionHeader eyebrow="Programme" title="Le rythme de la journée" centered light>
            Une journée pensée avec douceur, de l’accueil des invités jusqu’aux dernières notes de musique.
          </SectionHeader>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {schedule.map(({ time, title, icon: Icon }) => (
              <div
                key={`${time}-${title}`}
                className="rounded-[8px] border border-gold/25 bg-warm/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/70 hover:bg-warm/10"
              >
                <Icon className="h-7 w-7 text-gold" />
                <p className="mt-5 font-serif text-3xl font-semibold text-gold">{time}</p>
                <p className="mt-2 font-semibold text-warm">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      <section className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
          <SectionHeader eyebrow="Dress code" title="Élégance bleu nuit & touches dorées">
            Nous vous invitons à privilégier des tenues élégantes dans des tons bleu nuit, ivoire, champagne, doré ou bleu royal. Merci d’éviter le blanc total.
          </SectionHeader>
          <div className="lux-card p-8">
            <Shirt className="h-9 w-9 text-gold" />
            <div className="mt-6 flex flex-wrap gap-3">
              {dressColors.map((tone) => (
                <span
                  key={tone}
                  className="rounded-full border border-gold/40 bg-ivory px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold hover:bg-gold hover:text-navy"
                >
                  {tone}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory/70">
        <div className="section-shell">
          <SectionHeader eyebrow="Galerie" title="L’atmosphère de notre journée" centered>
            Lumière douce, détails dorés, fleurs délicates et instants de joie à partager.
          </SectionHeader>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {galleryImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={`h-48 w-full rounded-[8px] border border-gold/20 object-cover shadow-luxe transition duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:border-gold sm:h-64 ${
                  index === 1 || index === 4 ? 'md:translate-y-8' : ''
                }`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="rsvp" className="section-shell scroll-mt-10">
        <div className="lux-card bg-navy p-8 text-center text-warm sm:p-12">
          <p className="eyebrow text-gold">RSVP</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-warm sm:text-6xl">
            Votre réponse compte beaucoup
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-warm/75">
            Merci de confirmer votre présence pour {wedding.dateLong}, afin que nous puissions préparer chaque détail avec soin.
          </p>
          <a href={wedding.rsvpFormLink} target="_blank" rel="noreferrer" className="premium-button mt-8">
            <Send className="h-4 w-4" />
            Ouvrir le formulaire RSVP
          </a>
        </div>
      </section>

      <section className="bg-ivory/70">
        <div className="section-shell">
          <SectionHeader eyebrow="Informations" title="Notes pratiques" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {practicalInfo.map(({ icon: Icon, title, text }) => (
              <article key={title} className="lux-card p-6 transition duration-300 hover:-translate-y-1">
                <Icon className="h-8 w-8 text-gold" />
                <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-navy/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid items-center gap-8 rounded-[8px] border border-gold/30 bg-navy p-8 text-warm shadow-luxe sm:p-12 lg:grid-cols-[0.7fr_1fr]">
          <Gift className="h-16 w-16 text-gold" />
          <div>
            <p className="eyebrow text-gold">Cadeau</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Une contribution à notre première aventure</h2>
            <p className="mt-5 leading-8 text-warm/80">
              Votre présence est notre plus beau cadeau. Pour ceux qui le souhaitent, une urne sera disponible afin de contribuer à notre voyage de noces.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-gold/25 bg-navy px-5 py-12 text-center text-warm">
        <p className="font-serif text-3xl font-semibold text-gold">{wedding.couple} — {wedding.date}</p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-warm/75">
          Merci de faire partie de notre histoire et de partager avec nous ce moment si précieux.
        </p>
      </footer>

      <a
        href={wedding.rsvpLink}
        className="fixed bottom-4 left-4 right-4 z-50 inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 bg-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-navy shadow-luxe transition hover:-translate-y-1 sm:hidden"
      >
        <CalendarDays className="h-4 w-4" />
        RSVP
      </a>
    </main>
  );
}

export default App;
