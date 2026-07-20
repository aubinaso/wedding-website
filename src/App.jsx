import { useEffect, useRef, useState } from 'react';
import {
  CalendarDays,
  Church,
  Gift,
  GlassWater,
  HandHeart,
  Heart,
  MapPin,
  Navigation,
  Send,
  Sparkles,
} from 'lucide-react';

/* ============================================================
   DONNÉES — Tout ce qui est à personnaliser est ici.
   ============================================================ */
const wedding = {
  groom: 'Axel',
  bride: 'Aivi',
  couple: 'Axel & Aivi',
  initials: 'A & A',
  dateShort: '15 août 2026',
  dateLong: 'Samedi 15 août 2026',
  dateISO: '2026-08-15T15:00:00',
  city: 'Lieu à préciser',

  // Liens (à mettre à jour)
  rsvpFormLink: 'https://forms.gle/X6uTjDfS6XoWH4VQ9',
  support: {
    cagnotte: '#cagnotte-a-mettre-a-jour',
    liste: '#liste-cadeaux-a-mettre-a-jour',
  },

  // Citation du hero
  heroQuote:
    "L'amour ne consiste pas à se regarder l'un l'autre, mais à regarder ensemble dans la même direction.",
  heroQuoteAuthor: 'Antoine de Saint-Exupéry',

  invitation:
    "C'est avec une immense joie que nous vous invitons à célébrer notre union. Votre présence à nos côtés rendra ce jour encore plus précieux et inoubliable.",

  ceremony: {
    date: 'Samedi 15 août 2026',
    time: 'Heure à préciser',
    place: 'Lieu de la cérémonie',
    address: 'Adresse à préciser',
    mapLink: '#itineraire-ceremonie',
  },
  reception: {
    time: 'Heure à préciser',
    place: 'Salle de réception',
    address: 'Adresse à préciser',
    mapLink: '#itineraire-reception',
  },

  images: {
    hero: '/images/couple/les_regards_un_sur_autre.jpeg',
    invitation: '/images/couple/photo_a_2.jpeg',
  },
};

const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Notre histoire', href: '#histoire' },
  { label: 'Programme', href: '#programme' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Dress code', href: '#dresscode' },
  { label: 'RSVP', href: '#rsvp' },
  { label: 'Participer', href: '#participer' },
];

// Timeline « Notre histoire »
const storyItems = [
  {
    step: 'I',
    title: 'La rencontre',
    text: "Le début d'une histoire douce, construite pas à pas dans la confiance et la sincérité.",
    image: '/images/couple/sortie_a_2.jpeg',
    alt: 'Axel et Aivi lors d’une sortie à deux',
  },
  {
    step: 'II',
    title: 'Sous la pluie et le soleil',
    text: 'Des saisons traversées ensemble, dans la patience, la foi et la joie de grandir côte à côte.',
    image: '/images/couple/sous_les_parapluie.jpeg',
    alt: 'Axel et Aivi sous les parapluies',
  },
  {
    step: 'III',
    title: 'La demande',
    text: "Une promesse posée à genoux, avec émotion, comme une évidence tournée vers l'avenir.",
    image: '/images/couple/a_genoux_pour_demande_mariage.jpeg',
    alt: 'Axel à genoux pour la demande en mariage',
  },
  {
    step: 'IV',
    title: 'Les fiançailles',
    text: `Le oui qui ouvre le chemin vers le grand jour, célébré le ${wedding.dateShort}.`,
    image: '/images/couple/demande_fiancailles.jpeg',
    alt: 'Axel et Aivi le jour des fiançailles',
  },
];

// Galerie « Nous en photos »
const galleryImages = [
  { src: '/images/couple/photo_a_2.jpeg', alt: 'Portrait de couple d’Axel et Aivi' },
  { src: '/images/couple/les_regards_un_sur_autre.jpeg', alt: 'Axel et Aivi se regardant' },
  { src: '/images/couple/demande_fiancailles.jpeg', alt: 'Le bouquet de fiançailles' },
  { src: '/images/couple/a_genoux_pour_demande_mariage.jpeg', alt: 'La demande en mariage' },
  { src: '/images/couple/repas_chez_fiancaille_avec_guitare.jpeg', alt: 'Repas de fiançailles avec guitare' },
  { src: '/images/couple/restaurant1.jpeg', alt: 'Souvenir au restaurant' },
  { src: '/images/couple/sortie_a_2_.jpeg', alt: 'Sortie à deux' },
  { src: '/images/couple/voyage_orlean_pour_bague.jpeg', alt: 'Voyage à Orléans pour la bague' },
  { src: '/images/couple/restaurant3.jpeg', alt: 'Au restaurant ensemble' },
  { src: '/images/couple/sous_les_parapluie.jpeg', alt: 'Sous les parapluies' },
  { src: '/images/couple/restaurant.jpeg', alt: 'Dîner en amoureux' },
  { src: '/images/couple/sortie_a_2.jpeg', alt: 'Complices lors d’une sortie' },
];

// Guide des couleurs / dress code
const dressColors = [
  { name: 'Bleu canard', hex: '#12626E', value: '#12626E' },
  { name: 'Or', hex: '#C9A227', value: '#C9A227' },
  { name: 'Ivoire', hex: '#FBF8F1', value: '#FBF8F1' },
];

// Versets
const verses = [
  { ref: 'Colossiens 3:14', text: "Par-dessus tout cela, revêtez-vous de l'amour." },
  { ref: 'Ecclésiaste 4:9', text: 'Deux valent mieux qu’un.' },
  { ref: 'Marc 10:9', text: "Que l'homme ne sépare pas ce que Dieu a uni." },
];

// Participation
const supportCards = [
  {
    icon: Gift,
    title: 'Cagnotte',
    text: 'Participez à notre cagnotte pour nous accompagner dans le début de notre vie à deux.',
    button: 'Participer à la cagnotte',
    href: wedding.support.cagnotte,
  },
  {
    icon: HandHeart,
    title: 'Liste de cadeaux',
    text: 'Une sélection sera partagée prochainement pour ceux qui souhaitent nous offrir un souvenir.',
    button: 'Voir la liste',
    href: wedding.support.liste,
  },
];

/* ============================================================
   COMPTE À REBOURS
   ============================================================ */
function useCountdown(targetISO) {
  const target = new Date(targetISO).getTime();
  const [remaining, setRemaining] = useState(() => Math.max(0, target - Date.now()));

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(Math.max(0, target - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const totalSeconds = Math.floor(remaining / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(wedding.dateISO);
  const items = [
    { value: days, label: 'Jours' },
    { value: hours, label: 'Heures' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Secondes' },
  ];
  return (
    <div className="countdown">
      {items.map((item) => (
        <div key={item.label} className="count-box">
          <strong>{String(item.value).padStart(2, '0')}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   RÉVÉLATION AU SCROLL
   ============================================================ */
function Reveal({ children, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </Tag>
  );
}

function SectionHeader({ eyebrow, title, children, center = true }) {
  return (
    <div className={center ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {children ? (
        <p className={`section-copy mt-4 ${center ? 'mx-auto' : ''}`}>{children}</p>
      ) : null}
    </div>
  );
}

/* ============================================================
   APP
   ============================================================ */
function App() {
  return (
    <main className="overflow-hidden">
      {/* NAV */}
      <nav className="nav">
        <a href="#accueil" className="nav-brand">{wedding.couple}</a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </div>
        <a href="#rsvp" className="nav-cta">RSVP</a>
      </nav>

      {/* HERO */}
      <section id="accueil" className="hero">
        <div className="section" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
          <div className="hero-grid">
            <div className="text-center lg:text-left animate-floatIn">
              <p className="eyebrow">Nous nous marions</p>
              <h1 className="hero-names">
                Axel
                <span className="amp">&amp;</span>
                Aivi
              </h1>
              <p className="hero-date">{wedding.dateShort}</p>
              <span className="divider" aria-hidden="true"><span>❦</span></span>
              <p className="hero-quote mx-auto lg:mx-0">
                “{wedding.heroQuote}”
                <small>— {wedding.heroQuoteAuthor}</small>
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a href={wedding.rsvpFormLink} target="_blank" rel="noreferrer" className="btn-primary">
                  <Send className="h-4 w-4" /> Confirmer ma présence
                </a>
                <a href="#histoire" className="btn-ghost">Notre histoire</a>
              </div>
            </div>

            <div className="hero-photo-wrap animate-fadeIn">
              <img
                className="rose-accent animate-sway"
                src="/images/rose-spray.png"
                alt=""
                style={{ width: '9rem', top: '-2.5rem', left: '-2.5rem' }}
              />
              <img
                className="rose-accent"
                src="/images/rose-bloom.png"
                alt=""
                style={{ width: '7rem', bottom: '-1.5rem', right: '-1.5rem' }}
              />
              <div className="photo-frame">
                <img src={wedding.images.hero} alt={`${wedding.couple} se regardant`} />
              </div>
            </div>
          </div>

          {/* Compte à rebours */}
          <div className="mt-14 text-center">
            <p className="eyebrow mb-4">Plus que…</p>
            <Countdown />
          </div>
        </div>
      </section>

      {/* INVITATION */}
      <section className="band-cream">
        <div className="section">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <Reveal>
              <div className="story-media" style={{ maxWidth: '24rem', margin: '0 auto' }}>
                <img src={wedding.images.invitation} alt={`Portrait de ${wedding.couple}`} loading="lazy" />
              </div>
            </Reveal>
            <Reveal>
              <p className="eyebrow">Invitation</p>
              <h2 className="section-title">Vous êtes conviés</h2>
              <p className="section-copy mt-4">{wedding.invitation}</p>
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                <div className="card p-5 text-center">
                  <CalendarDays className="mx-auto h-6 w-6 text-gold" />
                  <p className="mt-3 font-display text-xl text-canardDark font-semibold">{wedding.dateShort}</p>
                </div>
                <div className="card p-5 text-center">
                  <MapPin className="mx-auto h-6 w-6 text-gold" />
                  <p className="mt-3 font-display text-xl text-canardDark font-semibold">{wedding.city}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section id="histoire">
        <div className="section">
          <Reveal>
            <SectionHeader eyebrow="Notre histoire" title="Comment tout a commencé">
              Une histoire née dans la confiance, nourrie par la foi et portée par la joie de bâtir ensemble.
            </SectionHeader>
          </Reveal>

          <div className="mt-16 space-y-16">
            {storyItems.map((item, index) => (
              <Reveal key={item.step}>
                <div className={`story-item ${index % 2 === 1 ? 'reverse' : ''}`}>
                  <div className="story-media">
                    <img src={item.image} alt={item.alt} loading="lazy" />
                  </div>
                  <div className={index % 2 === 1 ? 'lg:pr-6' : 'lg:pl-6'}>
                    <span className="story-step">{item.step}</span>
                    <h3 className="story-title">{item.title}</h3>
                    <p className="section-copy">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMME */}
      <section id="programme" className="band-canard">
        <div className="section">
          <Reveal>
            <SectionHeader eyebrow="Le jour J" title="Programme de la journée">
              Retrouvez ici le déroulé du grand jour. Les horaires seront précisés très prochainement.
            </SectionHeader>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="detail-card h-full">
                <span className="icon-badge mb-4"><Church className="h-6 w-6" /></span>
                <p className="eyebrow" style={{ color: '#A8871B' }}>Cérémonie</p>
                <p className="detail-time mt-2">{wedding.ceremony.time}</p>
                <p className="mt-3 font-display text-2xl text-canardDark font-semibold">{wedding.ceremony.place}</p>
                <p className="mt-1 text-muted">{wedding.ceremony.address}</p>
                <p className="mt-1 text-muted">{wedding.ceremony.date}</p>
                <a href={wedding.ceremony.mapLink} className="btn-ghost mt-5">
                  <Navigation className="h-4 w-4" /> Voir l'itinéraire
                </a>
              </div>
            </Reveal>
            <Reveal>
              <div className="detail-card h-full">
                <span className="icon-badge mb-4"><GlassWater className="h-6 w-6" /></span>
                <p className="eyebrow" style={{ color: '#A8871B' }}>Réception</p>
                <p className="detail-time mt-2">{wedding.reception.time}</p>
                <p className="mt-3 font-display text-2xl text-canardDark font-semibold">{wedding.reception.place}</p>
                <p className="mt-1 text-muted">{wedding.reception.address}</p>
                <p className="mt-1 text-muted">Dîner &amp; soirée dansante</p>
                <a href={wedding.reception.mapLink} className="btn-ghost mt-5">
                  <Navigation className="h-4 w-4" /> Voir l'itinéraire
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section id="galerie">
        <div className="section">
          <Reveal>
            <SectionHeader eyebrow="Nous en photos" title="Quelques souvenirs">
              Des instants choisis pour raconter la tendresse, la complicité et la promesse qui nous unissent.
            </SectionHeader>
          </Reveal>
          <Reveal className="mt-14">
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <div key={image.src + index} className="gallery-item">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* DRESS CODE / GUIDE COULEURS */}
      <section id="dresscode" className="band-cream">
        <div className="section">
          <Reveal>
            <SectionHeader eyebrow="Dress code" title="Nos couleurs">
              Pour une harmonie sur les photos, nous vous proposons de choisir vos tenues dans ces teintes.
            </SectionHeader>
          </Reveal>
          <Reveal className="mt-12">
            <div className="swatch-row">
              {dressColors.map((color) => (
                <div key={color.name} className="swatch">
                  <div className="swatch-dot" style={{ background: color.value }} />
                  <strong>{color.name}</strong>
                  <span>{color.hex}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* VERSETS / FOI */}
      <section className="band-canard">
        <div className="section">
          <Reveal>
            <SectionHeader eyebrow="Foi & promesse" title="Les paroles qui nous portent" />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {verses.map((verse) => (
              <Reveal key={verse.ref}>
                <div className="verse-card h-full">
                  <Sparkles className="mx-auto h-5 w-5 text-goldSoft" />
                  <p className="mt-4 font-display text-2xl italic leading-snug">“{verse.text}”</p>
                  <span className="mt-4 block text-xs uppercase tracking-[0.18em] text-goldSoft">{verse.ref}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp">
        <div className="section">
          <Reveal>
            <div className="rsvp-card">
              <p className="eyebrow">Réponse souhaitée</p>
              <h2 className="section-title mt-2">Confirmez votre présence</h2>
              <p className="section-copy mx-auto mt-4">
                Merci de nous indiquer si vous serez présents afin de préparer ce jour avec le plus grand soin.
              </p>
              <a href={wedding.rsvpFormLink} target="_blank" rel="noreferrer" className="btn-primary mt-8">
                <Send className="h-4 w-4" /> Remplir le formulaire
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARTICIPER */}
      <section id="participer" className="band-cream">
        <div className="section">
          <Reveal>
            <SectionHeader eyebrow="Je participe" title="Nous accompagner">
              Votre présence est déjà le plus beau des cadeaux. Pour ceux qui le souhaitent, voici comment nous gâter.
            </SectionHeader>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {supportCards.map(({ icon: Icon, title, text, button, href }) => (
              <Reveal key={title}>
                <div className="card p-8 h-full text-center">
                  <span className="icon-badge mb-4"><Icon className="h-6 w-6" /></span>
                  <h3 className="font-display text-2xl font-semibold text-canardDark">{title}</h3>
                  <p className="section-copy mx-auto mt-3">{text}</p>
                  <a href={href} className="btn-ghost mt-6">{button}</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p className="footer-names">Axel &amp; Aivi</p>
        <p className="mt-3 text-sm uppercase tracking-[0.28em] text-goldSoft">{wedding.dateLong}</p>
        <p className="mx-auto mt-5 max-w-xl leading-8 text-white/70">
          Merci de faire partie de notre histoire. Nous avons hâte de partager ce moment avec vous.
        </p>
        <a href={wedding.rsvpFormLink} target="_blank" rel="noreferrer" className="btn-primary mt-7">
          <Heart className="h-4 w-4" /> Confirmer ma présence
        </a>
      </footer>

      {/* RSVP flottant mobile */}
      <a href="#rsvp" className="mobile-rsvp">
        <CalendarDays className="h-4 w-4" /> RSVP
      </a>
    </main>
  );
}

export default App;
