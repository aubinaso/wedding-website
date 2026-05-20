import {
  CalendarDays,
  Church,
  Gift,
  HandHeart,
  Heart,
  MapPin,
  Navigation,
  Send,
  Shirt,
  Sparkles,
} from 'lucide-react';
import heroFrameReference from '../photofond.jpeg';

const wedding = {
  groom: 'Axel',
  bride: 'Aivi',
  couple: 'Axel & Aivi',
  initials: 'A & A',
  date: '15 Août 2026',
  mainDate: '15 Août 2026',
  dateLong: 'Samedi 15 Août 2026',
  weddingPeriod: '14 & 15 août 2026',
  dateISO: '2026-08-15T00:00:00',
  location: 'Lieu à préciser',
  rsvpLink: '#rsvp',
  rsvpFormLink: 'https://forms.gle/X6uTjDfS6XoWH4VQ9',
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
  images: {
    hero: '/images/couple/les_regards_un_sur_autre.jpeg',
    invitation: '/images/couple/photo_a_2.jpeg',
    story: [
      {
        src: '/images/couple/sous_les_parapluie.jpeg',
        alt: 'Axel et Aivi sous les parapluies',
      },
      {
        src: '/images/couple/sortie_a_2.jpeg',
        alt: 'Axel et Aivi lors d’une sortie à deux',
      },
      {
        src: '/images/couple/a_genoux_pour_demande_mariage.jpeg',
        alt: 'Demande en mariage avec guitare',
      },
      {
        src: '/images/couple/demande_fiancailles.jpeg',
        alt: 'Axel et Aivi le jour des fiançailles',
      },
    ],
    gallery: [
      {
        src: '/images/couple/photo_a_2.jpeg',
        alt: 'Portrait de couple d’Axel et Aivi',
      },
      {
        src: '/images/couple/les_regards_un_sur_autre.jpeg',
        alt: 'Axel et Aivi se regardant avec sourire',
      },
      {
        src: '/images/couple/demande_fiancailles.jpeg',
        alt: 'Aivi avec son bouquet de fiançailles aux côtés d’Axel',
      },
      {
        src: '/images/couple/a_genoux_pour_demande_mariage.jpeg',
        alt: 'Axel à genoux pendant la demande en mariage',
      },
      {
        src: '/images/couple/repas_chez_fiancaille_avec_guitare.jpeg',
        alt: 'Repas de fiançailles avec guitare',
      },
      {
        src: '/images/couple/restaurant.jpeg',
        alt: 'Souvenir au restaurant',
      },
      {
        src: '/images/couple/sortie_a_2_.jpeg',
        alt: 'Sortie à deux d’Axel et Aivi',
      },
      {
        src: '/images/couple/voyage_orlean_pour_bague.jpeg',
        alt: 'Voyage à Orléans pour la bague',
      },
    ],
  },
  theme: {
    ivory: '#FFFFFF',
    champagne: '#FCFCFA',
    gold: '#D4AF37',
    richGold: '#B38728',
    lightGold: '#FCF6BA',
    deepGold: '#AA771C',
    teal: '#007C89',
    darkTeal: '#005F6B',
    white: '#FCFCFA',
    text: '#1F2933',
  },
};

const themeVars = {
  '--color-ivory': wedding.theme.ivory,
  '--color-champagne': wedding.theme.champagne,
  '--color-gold': wedding.theme.gold,
  '--color-rich-gold': wedding.theme.richGold,
  '--color-light-gold': wedding.theme.lightGold,
  '--color-deep-gold': wedding.theme.deepGold,
  '--color-teal': wedding.theme.teal,
  '--color-dark-teal': wedding.theme.darkTeal,
  '--color-white': wedding.theme.white,
  '--color-text': wedding.theme.text,
};

const storyItems = [
  {
    title: 'Rencontre',
    text: 'Le début d’une histoire douce, construite pas à pas avec confiance.',
    icon: Heart,
    image: wedding.images.story[0],
  },
  {
    title: 'Cheminement',
    text: 'Des saisons traversées ensemble, dans la foi, la patience et la joie.',
    icon: Sparkles,
    image: wedding.images.story[1],
  },
  {
    title: 'Demande',
    text: 'Une promesse posée avec émotion, comme une évidence pour l’avenir.',
    icon: HandHeart,
    image: wedding.images.story[2],
  },
  {
    title: 'Mariage',
    text: `Une alliance célébrée devant Dieu et nos proches le ${wedding.mainDate}.`,
    icon: Church,
    image: wedding.images.story[3],
  },
];

const dressColors = [
  { name: 'Deep teal / peacock blue', value: wedding.theme.teal },
  { name: 'Ivory / champagne', value: wedding.theme.ivory },
  { name: 'Gold', value: wedding.theme.gold },
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

const navItems = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Notre histoire', href: '#story' },
  { label: 'Détails', href: '#details' },
  { label: 'Dress code', href: '#dress-code' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'RSVP', href: '#rsvp' },
  { label: 'Cadeaux', href: '#gifts' },
];

function GoldDivider() {
  return (
    <div className="gold-divider" aria-hidden="true">
      <i className="divider-flower divider-flower-left" />
      <span />
      <Sparkles className="h-4 w-4" />
      <span />
      <i className="divider-flower divider-flower-right" />
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
  return (
    <div className="hero-photo-cluster" aria-label={`Photos de ${wedding.couple}`}>
      <div className="hero-reference-frame" data-frame-reference={heroFrameReference}>
        <div className="hero-sparkle-flow" aria-hidden="true" />
        <div className="hero-gold-dust hero-gold-dust-left" aria-hidden="true" />
        <div className="hero-gold-dust hero-gold-dust-right" aria-hidden="true" />
        <div className="hero-main-photo-wrap">
          {wedding.images.hero ? (
            <img className="hero-oval hero-oval-main" src={wedding.images.hero} alt={`${wedding.couple} se regardant avec sourire`} />
          ) : (
            <div className="hero-oval hero-oval-placeholder">
              <div className="placeholder-flower" aria-hidden="true" />
              <span>{wedding.initials}</span>
              <small>{wedding.weddingPeriod}</small>
            </div>
          )}
        </div>
        <div className="hero-photo-plate">
          <span>{wedding.couple}</span>
          <small>{wedding.mainDate}</small>
        </div>
        <div className="hero-ornament" aria-hidden="true">
          <i />
          <span />
          <i />
        </div>
        <p className="hero-married-script">Nous nous marions</p>
      </div>
      <img
        className="hero-orbit-photo hero-orbit-one"
        src="/images/couple/photo_a_2.jpeg"
        alt="Portrait d’Axel et Aivi"
      />
      <img
        className="hero-orbit-photo hero-orbit-two"
        src="/images/couple/demande_fiancailles.jpeg"
        alt="Axel et Aivi le jour des fiançailles"
      />
    </div>
  );
}

function Gallery() {
  if (wedding.images.gallery.length > 0) {
    return (
      <div className="gallery-grid">
        {wedding.images.gallery.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt || `${wedding.couple} souvenir ${index + 1}`}
            className="gallery-image"
            loading="lazy"
          />
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
  return (
    <main className="site-bg overflow-hidden font-sans" style={themeVars}>
      <nav className="top-nav">
        <a href="#hero" className="nav-brand">{wedding.couple}</a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </div>
        <div className="nav-menu-dot" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <a href={wedding.rsvpLink} className="nav-rsvp">RSVP</a>
      </nav>

      <section id="hero" className="hero-section relative flex min-h-screen items-center px-5 py-20 sm:px-8">
        <div className="floral-corner floral-corner-left" aria-hidden="true" />
        <div className="floral-corner floral-corner-right" aria-hidden="true" />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="hero-card relative px-6 py-12 text-center sm:px-10 lg:text-left">
            <p className="script-label">Avec joie</p>
            <h1 className="hero-names" aria-label={wedding.couple}>
              <span>Axel</span>
              <em>&</em>
              <span>Aivi</span>
            </h1>
            <p className="hero-main-date">{wedding.mainDate}</p>
            <div className="hero-gold-emblem" aria-hidden="true">
              <span />
            </div>
            <p className="mt-5 font-serif text-3xl leading-tight text-text/85 sm:text-4xl">
              {wedding.headline}
            </p>
            <div className="hero-details">
              <span>{wedding.dateLong}</span>
              <span>{wedding.weddingPeriod}</span>
              <span>{wedding.location}</span>
            </div>
            <a href={wedding.rsvpFormLink} target="_blank" rel="noreferrer" className="premium-button mt-8">
              Confirmer ma présence
            </a>
          </div>
          <div className="flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </section>

      <section className="section-shell floral-section floral-section-invitation">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lux-card floral-card p-8 sm:p-10">
            <p className="script-label">Invitation</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-teal sm:text-5xl">
              {wedding.invitation}
            </h2>
            <div className="mini-detail-grid mt-8">
              <div>
                <span>Date</span>
                <strong>{wedding.mainDate}</strong>
              </div>
              <div>
                <span>Lieu</span>
                <strong>{wedding.location}</strong>
              </div>
            </div>
          </div>
          <div className="text-base leading-8 text-text/75">
            <p>
              Nous avons souhaité créer un espace chaleureux, inspiré de notre livre d’or, pour vous accueillir avant même le grand jour.
            </p>
            <p className="mt-5">
              Merci d’être présents dans cette saison si précieuse de notre histoire.
            </p>
            {wedding.images.invitation ? (
              <img
                src={wedding.images.invitation}
                alt={`Portrait de ${wedding.couple}`}
                className="invitation-photo mt-8"
                loading="lazy"
              />
            ) : null}
          </div>
        </div>
      </section>

      <GoldDivider />

      <section id="story" className="floral-section floral-section-story">
        <div className="section-shell">
          <SectionHeader eyebrow="Notre histoire" title="Une histoire écrite avec douceur">
            Une histoire née dans la confiance, nourrie par la foi et portée par la joie de bâtir ensemble.
          </SectionHeader>
          <div className="story-quote mt-10">
            <p>“Deux valent mieux qu’un.”</p>
            <span>Ecclésiastes 4:9</span>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {storyItems.map(({ title, text, icon: Icon, image }) => (
              <article key={title} className="story-card">
                {image?.src ? (
                  <img src={image.src} alt={image.alt} className="story-photo" loading="lazy" />
                ) : (
                  <div className="story-icon"><Icon className="h-6 w-6" /></div>
                )}
                <div className="story-icon story-icon-floating"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-6 font-serif text-3xl font-semibold text-teal">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-text/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="details" className="section-shell">
        <SectionHeader eyebrow="Le jour J" title="Détails du mariage" centered>
          Les informations de la cérémonie et de la réception seront précisées ici au fur et à mesure.
        </SectionHeader>
        <div className="details-callout mt-10">
          <CalendarDays className="h-8 w-8 text-gold" />
          <div>
            <p>{wedding.dateLong}</p>
            <span>{wedding.ceremony.time} · {wedding.ceremony.location}</span>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="lux-card p-8 transition duration-300 hover:-translate-y-1">
            <Church className="h-9 w-9 text-gold" />
            <h3 className="mt-5 font-serif text-3xl font-semibold text-teal">{wedding.ceremony.title}</h3>
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
            <h3 className="mt-5 font-serif text-3xl font-semibold text-teal">Période</h3>
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

      <section id="dress-code" className="section-shell floral-section floral-section-dress">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <SectionHeader eyebrow="Dress code" title="Teal, ivoire & or">
            Une palette élégante inspirée de la référence, pensée pour une ambiance douce et harmonieuse.
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

      <section id="gallery" className="soft-band floral-section floral-section-gallery">
        <div className="section-shell">
          <SectionHeader eyebrow="Galerie" title="Souvenirs à venir" centered>
            Quelques images de notre chemin, choisies pour raconter la tendresse, la joie et la promesse.
          </SectionHeader>
          <Gallery />
        </div>
      </section>

      <section className="faith-section floral-section floral-section-story">
        <div className="section-shell">
          <SectionHeader eyebrow="Foi & promesse" title="Les versets qui nous portent" centered>
            Quelques paroles qui inspirent notre engagement et accompagnent le début de notre vie à deux.
          </SectionHeader>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bibleVerses.map((verse) => (
              <article key={verse.ref} className="verse-card">
                <p className="font-serif text-2xl leading-snug text-teal">“{verse.text}”</p>
                <span className="mt-4 block text-xs font-bold uppercase tracking-[0.18em] text-gold">
                  {verse.ref}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rsvp" className="section-shell floral-section floral-section-rsvp scroll-mt-10">
        <div className="rsvp-card p-8 text-center sm:p-12">
          <div className="rsvp-floral rsvp-floral-left" aria-hidden="true" />
          <div className="rsvp-floral rsvp-floral-right" aria-hidden="true" />
          <p className="script-label">Inscription</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-teal sm:text-6xl">
            Confirmer votre présence
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-text/75">
            Merci de confirmer votre présence afin de nous aider à préparer ce jour avec soin.
          </p>
          <a href={wedding.rsvpFormLink} target="_blank" rel="noreferrer" className="premium-button mt-8">
            <Send className="h-4 w-4" />
            Confirmer ma présence
          </a>
        </div>
      </section>

      <section id="gifts" className="section-shell floral-section floral-section-gifts">
        <SectionHeader eyebrow="Soutien" title={`Soutenir ${wedding.couple}`} centered>
          Votre soutien, sous quelque forme que ce soit, est une bénédiction pour le début de notre vie à deux.
        </SectionHeader>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {supportCards.map(({ title, text, button, href, icon: Icon }) => (
            <article key={title} className="lux-card p-6 transition duration-300 hover:-translate-y-1">
              <Icon className="h-8 w-8 text-gold" />
              <h3 className="mt-5 text-lg font-bold text-teal">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-text/70">{text}</p>
              <a href={href} className="secondary-button mt-6">{button}</a>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer-shell footer-floral px-5 py-12 text-center">
        <p className="font-serif text-3xl font-semibold text-teal">{wedding.couple} — {wedding.date}</p>
        <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gold">{wedding.weddingPeriod}</p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text/75">
          Merci de faire partie de notre histoire.
        </p>
        <a href={wedding.rsvpFormLink} target="_blank" rel="noreferrer" className="footer-link mt-6 inline-flex">
          Confirmer ma présence
        </a>
      </footer>

      <a href={wedding.rsvpLink} className="mobile-rsvp">
        <CalendarDays className="h-4 w-4" />
        RSVP
      </a>
    </main>
  );
}

export default App;
