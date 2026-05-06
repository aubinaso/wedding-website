import {
  Baby,
  CalendarDays,
  Camera,
  Car,
  Church,
  Clock3,
  Gift,
  HandHeart,
  Heart,
  Hotel,
  MapPin,
  Navigation,
  Phone,
  Send,
  Shirt,
  Sparkles,
  Train,
  Utensils,
} from 'lucide-react';

const wedding = {
  groom: 'Axel',
  bride: 'Aivi',
  couple: 'Axel & Aivi',
  initials: 'A & A',
  mainDate: '15 Août 2026',
  dateLong: 'Samedi 15 Août 2026',
  weddingPeriod: '14 & 15 août 2026',
  dateISO: '2026-08-15T00:00:00',
  rsvpLink: 'https://forms.gle/X6uTjDfS6XoWH4VQ9',
  headline: 'Deux cœurs, une promesse, une vie à bâtir ensemble.',
  invitation:
    'C’est un immense bonheur de partager ce jour unique avec vous. Votre présence à nos côtés rendra cette journée encore plus belle et inoubliable.',
  ceremony: {
    title: 'Cérémonie',
    date: 'Samedi 15 Août 2026',
    time: 'Heure à préciser',
    location: 'Lieu à préciser',
    address: 'Adresse à préciser',
    mapLink: '#map-link-to-update',
  },
  reception: {
    title: 'Réception',
    time: 'Heure à préciser',
    location: 'Lieu de réception à préciser',
    address: 'Adresse à préciser',
    access: 'Parking et accès à préciser',
    contact: 'Contact à préciser',
    mapLink: '#reception-map-link-to-update',
  },
  support: {
    moneyPotLink: '#cagnotte-link-to-update',
    giftListLink: '#gift-list-link-to-update',
    contributionLink: '#contribution-link-to-update',
  },
  // Update these two texts when Axel and Aivi provide their final testimonials.
  testimonials: {
    husband:
      'Depuis le premier jour, j’ai vu en toi une grâce, une force et une douceur qui m’ont profondément marqué. Aujourd’hui, je suis reconnaissant de commencer cette nouvelle aventure à tes côtés.',
    wife:
      'À travers notre histoire, j’ai découvert un amour patient, sincère et construit sur Dieu. Ce jour marque le début d’une alliance que je veux chérir avec foi, joie et engagement.',
  },
  // Keep image paths empty until real files are added. Empty values render designed placeholders.
  images: {
    hero: '',
    gallery: [],
  },
  theme: {
    ivory: '#FFF8EF',
    champagne: '#EFE2D0',
    gold: '#D4AF37',
    burgundy: '#8A1E2D',
    teal: '#0F7C80',
    text: '#2F2A26',
  },
};

const themeVars = {
  '--color-ivory': wedding.theme.ivory,
  '--color-champagne': wedding.theme.champagne,
  '--color-gold': wedding.theme.gold,
  '--color-burgundy': wedding.theme.burgundy,
  '--color-teal': wedding.theme.teal,
  '--color-text': wedding.theme.text,
};

const storyItems = [
  {
    title: 'Rencontre',
    text: 'Le début d’une histoire douce, construite pas à pas avec confiance.',
    icon: Heart,
  },
  {
    title: 'Cheminement',
    text: 'Des saisons traversées ensemble, dans la foi, la patience et la joie.',
    icon: Sparkles,
  },
  {
    title: 'Demande',
    text: 'Une promesse posée avec émotion, comme une évidence pour l’avenir.',
    icon: HandHeart,
  },
  {
    title: 'Mariage',
    text: `Une alliance célébrée devant Dieu et nos proches le ${wedding.mainDate}.`,
    icon: Church,
  },
];

const programItems = [
  { title: 'Cérémonie', time: wedding.ceremony.time, icon: Church },
  { title: 'Photos', time: 'À préciser', icon: Camera },
  { title: 'Vin d’honneur / cocktail', time: 'À préciser', icon: Sparkles },
  { title: 'Réception', time: wedding.reception.time, icon: MapPin },
  { title: 'Repas', time: 'À préciser', icon: Utensils },
  { title: 'Soirée', time: 'À préciser', icon: Heart },
];

const dressColors = [
  { name: 'Burgundy / wine red', value: wedding.theme.burgundy },
  { name: 'Ivory / champagne', value: wedding.theme.champagne },
  { name: 'Gold', value: wedding.theme.gold },
  { name: 'Teal / blue-green', value: wedding.theme.teal },
];

const galleryPlaceholders = ['Souvenir 1', 'Souvenir 2', 'Demande', 'Moments à venir'];

const supportCards = [
  {
    title: 'Cagnotte',
    text: 'Votre soutien, sous quelque forme que ce soit, est une bénédiction pour le début de notre vie à deux.',
    button: 'Participer à la cagnotte',
    href: wedding.support.moneyPotLink,
    icon: Gift,
  },
  {
    title: 'Liste de cadeaux',
    text: 'Une sélection pourra être partagée prochainement pour ceux qui souhaitent nous offrir un souvenir utile.',
    button: 'Voir la liste de cadeaux',
    href: wedding.support.giftListLink,
    icon: HandHeart,
  },
  {
    title: 'Contribution libre / bénédiction',
    text: 'Chaque geste, chaque mot et chaque prière accompagneront avec douceur notre nouvelle maison.',
    button: 'Faire une contribution',
    href: wedding.support.contributionLink,
    icon: Sparkles,
  },
];

const bibleVerses = [
  { ref: 'Colossiens 3:14', text: 'Par-dessus tout cela, revêtez-vous de l’amour.' },
  { ref: 'Ecclésiastes 4:9', text: 'Deux valent mieux qu’un.' },
  { ref: 'Marc 10:9', text: 'Que l’homme ne sépare donc pas ce que Dieu a uni.' },
  { ref: 'Ephésiens 5:31', text: 'Les deux deviendront une seule chair.' },
  { ref: 'Proverbes 18:22', text: 'Celui qui trouve une femme trouve le bonheur.' },
];

const practicalInfo = [
  { title: 'Hébergement', text: 'Recommandations à préciser prochainement.', icon: Hotel },
  { title: 'Parking', text: 'Informations de stationnement à confirmer.', icon: Car },
  { title: 'Transport', text: 'Accès et options de transport à ajouter.', icon: Train },
  { title: 'Contacts', text: 'Contact de coordination à préciser.', icon: Phone },
  { title: 'Enfants / famille', text: 'Informations famille à préciser si nécessaire.', icon: Baby },
];

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
      <p className="script-label">{eyebrow}</p>
      <h2 className={light ? 'section-title section-title-light' : 'section-title'}>{title}</h2>
      {children ? <p className={light ? 'section-copy section-copy-light mx-auto' : 'section-copy mx-auto'}>{children}</p> : null}
    </div>
  );
}

function ImagePlaceholder({ label, className = '' }) {
  return (
    <div className={`image-placeholder ${className}`}>
      <div className="placeholder-flower" aria-hidden="true" />
      <span>{wedding.initials}</span>
      <small>{label}</small>
    </div>
  );
}

function HeroVisual() {
  // Add a real hero image later by setting wedding.images.hero to a public path, for example "/images/couple/couple-hero.jpg".
  if (wedding.images.hero) {
    return <img className="hero-oval" src={wedding.images.hero} alt={`${wedding.couple}`} />;
  }

  return (
    <div className="hero-oval hero-oval-placeholder">
      <div className="placeholder-flower" aria-hidden="true" />
      <span>{wedding.initials}</span>
      <small>{wedding.weddingPeriod}</small>
    </div>
  );
}

function Gallery() {
  // Replace placeholders by adding real image paths to wedding.images.gallery.
  if (wedding.images.gallery.length > 0) {
    return (
      <div className="gallery-grid">
        {wedding.images.gallery.map((src, index) => (
          <img key={src} src={src} alt={`${wedding.couple} souvenir ${index + 1}`} className="gallery-image" />
        ))}
      </div>
    );
  }

  return (
    <div className="gallery-grid">
      {galleryPlaceholders.map((label) => (
        <ImagePlaceholder key={label} label={label} className="gallery-placeholder" />
      ))}
    </div>
  );
}

function App() {
  const countdownItems = getCountdownItems();

  return (
    <main className="site-bg overflow-hidden font-sans" style={themeVars}>
      <section className="hero-section relative flex min-h-screen items-center px-5 py-16 sm:px-8">
        <div className="floral-corner floral-corner-left" aria-hidden="true" />
        <div className="floral-corner floral-corner-right" aria-hidden="true" />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="hero-card relative px-6 py-12 text-center sm:px-10 lg:text-left">
            <p className="script-label">Livre d’or</p>
            <h1 className="mt-5 font-serif text-6xl font-semibold leading-none text-burgundy sm:text-8xl">
              {wedding.couple}
            </h1>
            <p className="mt-6 font-serif text-3xl leading-tight text-text/85 sm:text-4xl">
              {wedding.headline}
            </p>
            <div className="mt-8 grid gap-3 border-y border-gold/45 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-teal sm:grid-cols-2">
              <span>{wedding.weddingPeriod}</span>
              <span>{wedding.mainDate}</span>
            </div>
            <a href={wedding.rsvpLink} target="_blank" rel="noreferrer" className="premium-button mt-8">
              Confirmer ma présence
            </a>
          </div>
          <div className="flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lux-card p-8 sm:p-10">
            <p className="script-label">Invitation</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-burgundy sm:text-5xl">
              {wedding.invitation}
            </h2>
          </div>
          <div className="text-base leading-8 text-text/75">
            <p>
              Nous avons souhaité créer un espace chaleureux, inspiré de notre livre d’or, pour vous accueillir avant même le grand jour.
            </p>
            <p className="mt-5">
              Merci d’être présents dans cette saison si précieuse de notre histoire.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      <section className="soft-band">
        <div className="section-shell text-center">
          <SectionHeader eyebrow="Compte à rebours" title="Avant le grand jour" centered>
            Chaque jour nous rapproche de cette promesse que nous avons hâte de partager avec vous.
          </SectionHeader>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-3 sm:gap-5">
            {countdownItems.map((item) => (
              <div key={item.label} className="lux-card p-5 sm:p-7">
                <p className="font-serif text-4xl font-semibold text-gold sm:text-6xl">{item.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-burgundy">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeader eyebrow="Témoignages" title="Ce que nos cœurs souhaitent partager" centered>
          Deux mots personnels, à ajuster lorsque les textes définitifs seront prêts.
        </SectionHeader>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="testimonial-card">
            <p className="script-label">Témoignage du mari</p>
            <p className="mt-5 leading-8 text-text/75">{wedding.testimonials.husband}</p>
          </article>
          <article className="testimonial-card">
            <p className="script-label">Témoignage de la femme</p>
            <p className="mt-5 leading-8 text-text/75">{wedding.testimonials.wife}</p>
          </article>
        </div>
      </section>

      <GoldDivider />

      <section>
        <div className="section-shell">
          <SectionHeader eyebrow="Notre histoire" title="Une histoire écrite avec douceur">
            Une ligne du temps simple, en attendant d’ajouter nos vrais souvenirs en images.
          </SectionHeader>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {storyItems.map(({ title, text, icon: Icon }) => (
              <article key={title} className="story-card">
                <div className="story-icon"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-6 font-serif text-3xl font-semibold text-burgundy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-text/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeader eyebrow="Le jour J" title="Détails du mariage" centered>
          Les informations pratiques seront précisées ici au fur et à mesure.
        </SectionHeader>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="lux-card p-8 transition duration-300 hover:-translate-y-1">
            <Church className="h-9 w-9 text-gold" />
            <h3 className="mt-5 font-serif text-3xl font-semibold text-burgundy">{wedding.ceremony.title}</h3>
            <dl className="mt-5 space-y-3 text-sm leading-7 text-text/75">
              <div><dt className="font-bold text-teal">Date</dt><dd>{wedding.ceremony.date}</dd></div>
              <div><dt className="font-bold text-teal">Heure</dt><dd>{wedding.ceremony.time}</dd></div>
              <div><dt className="font-bold text-teal">Lieu</dt><dd>{wedding.ceremony.location}</dd></div>
              <div><dt className="font-bold text-teal">Adresse</dt><dd>{wedding.ceremony.address}</dd></div>
            </dl>
            <a href={wedding.ceremony.mapLink} className="secondary-button mt-6">
              <Navigation className="h-4 w-4" /> Voir l’itinéraire
            </a>
          </article>
          <article className="lux-card p-8 transition duration-300 hover:-translate-y-1">
            <CalendarDays className="h-9 w-9 text-gold" />
            <h3 className="mt-5 font-serif text-3xl font-semibold text-burgundy">Période</h3>
            <p className="mt-5 text-4xl font-serif text-teal">{wedding.weddingPeriod}</p>
            <p className="mt-4 leading-7 text-text/75">
              Une célébration pensée sur deux jours, avec le mariage principal le {wedding.mainDate}.
            </p>
          </article>
        </div>
      </section>

      <section className="soft-band">
        <div className="section-shell">
          <SectionHeader eyebrow="Réception" title={wedding.reception.title} centered>
            Retrouvez ici les informations de réception dès qu’elles seront confirmées.
          </SectionHeader>
          <div className="mt-10 lux-card p-8 sm:p-10">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                ['Lieu de réception', wedding.reception.location],
                ['Heure de début', wedding.reception.time],
                ['Adresse', wedding.reception.address],
                ['Parking / accès', wedding.reception.access],
                ['Contact', wedding.reception.contact],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{label}</p>
                  <p className="mt-3 leading-7 text-text/75">{value}</p>
                </div>
              ))}
            </div>
            <a href={wedding.reception.mapLink} className="premium-button mt-8">
              Voir l’itinéraire
            </a>
          </div>
        </div>
      </section>

      <section className="burgundy-band text-cream">
        <div className="section-shell">
          <SectionHeader eyebrow="Déroulé" title="Le programme de la journée" centered light>
            Une trame simple, à affiner lorsque les horaires définitifs seront confirmés.
          </SectionHeader>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programItems.map(({ title, time, icon: Icon }) => (
              <div key={title} className="program-card">
                <Icon className="h-7 w-7 text-gold" />
                <p className="mt-5 font-serif text-3xl font-semibold text-cream">{title}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-cream/70">{time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      <section className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <SectionHeader eyebrow="Dress code" title="Burgundy, ivoire, or & teal">
            Une palette chaleureuse inspirée du livre d’or, pensée pour une ambiance élégante et harmonieuse.
          </SectionHeader>
          <div className="lux-card p-8">
            <Shirt className="h-9 w-9 text-gold" />
            <div className="mt-6 grid gap-4">
              {dressColors.map((tone) => (
                <div key={tone.name} className="flex items-center gap-4 rounded-full border border-gold/30 bg-cream px-4 py-3">
                  <span className="h-9 w-9 shrink-0 rounded-full border border-gold/60" style={{ background: tone.value }} aria-hidden="true" />
                  <span className="text-sm font-semibold text-text">{tone.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="soft-band">
        <div className="section-shell">
          <SectionHeader eyebrow="Galerie" title="Souvenirs à venir" centered>
            Les vraies photos pourront être ajoutées plus tard. Pour l’instant, ces cadres gardent l’esprit du livre d’or.
          </SectionHeader>
          <Gallery />
        </div>
      </section>

      <section id="rsvp" className="section-shell scroll-mt-10">
        <div className="rsvp-card p-8 text-center sm:p-12">
          <p className="script-label">Inscription</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-cream sm:text-6xl">
            Confirmer votre présence
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-cream/85">
            Merci de confirmer votre présence afin de nous aider à préparer ce jour avec soin.
          </p>
          <a href={wedding.rsvpLink} target="_blank" rel="noreferrer" className="premium-button mt-8">
            <Send className="h-4 w-4" />
            Confirmer ma présence
          </a>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeader eyebrow="Soutien" title={`Soutenir ${wedding.couple}`} centered>
          Votre soutien, sous quelque forme que ce soit, est une bénédiction pour le début de notre vie à deux.
        </SectionHeader>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {supportCards.map(({ title, text, button, href, icon: Icon }) => (
            <article key={title} className="lux-card p-6 transition duration-300 hover:-translate-y-1">
              <Icon className="h-8 w-8 text-gold" />
              <h3 className="mt-5 text-lg font-bold text-burgundy">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-text/70">{text}</p>
              <a href={href} className="secondary-button mt-6">{button}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="faith-section">
        <div className="section-shell">
          <SectionHeader eyebrow="Bénédiction" title="Versets qui nous accompagnent" centered light>
            Quelques paroles comme une prière douce sur notre alliance.
          </SectionHeader>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {bibleVerses.map((verse) => (
              <article key={verse.ref} className="verse-card">
                <p className="font-serif text-xl text-gold">{verse.ref}</p>
                <p className="mt-3 text-sm leading-7 text-cream/80">{verse.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-band">
        <div className="section-shell">
          <SectionHeader eyebrow="Informations" title="Informations pratiques" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {practicalInfo.map(({ icon: Icon, title, text }) => (
              <article key={title} className="lux-card p-6 transition duration-300 hover:-translate-y-1">
                <Icon className="h-8 w-8 text-gold" />
                <h3 className="mt-5 text-lg font-bold text-burgundy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-text/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer-shell px-5 py-12 text-center">
        <p className="font-serif text-3xl font-semibold text-gold">{wedding.couple}</p>
        <p className="mt-3 text-sm uppercase tracking-[0.25em] text-cream/75">{wedding.weddingPeriod}</p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-cream/80">
          Merci de faire partie de notre histoire.
        </p>
        <a href={wedding.rsvpLink} target="_blank" rel="noreferrer" className="footer-link mt-6 inline-flex">
          Confirmer ma présence
        </a>
      </footer>

      <a href={wedding.rsvpLink} target="_blank" rel="noreferrer" className="mobile-rsvp">
        <CalendarDays className="h-4 w-4" />
        RSVP
      </a>
    </main>
  );
}

export default App;
