import { useEffect, useRef, useState } from 'react';
import {
  Camera,
  Church,
  Gift,
  GlassWater,
  HandHeart,
  Heart,
  MapPin,
  Menu,
  Music,
  Navigation,
  Pause,
  Play,
  Send,
  Sparkles,
  UtensilsCrossed,
  X,
} from 'lucide-react';

/* ============================================================
   DONNÉES — Tout ce qui est à personnaliser est ici.
   ============================================================ */
const wedding = {
  groom: 'Axel',
  bride: 'Aivi',
  couple: 'Axel & Aivi',
  initials: 'A A',
  dateShort: '15 août 2026',
  dateLong: 'Samedi 15 août 2026',
  dateISO: '2026-08-15T14:00:00',
  city: 'Lieu à préciser',

  // Liens (à mettre à jour)
  rsvpFormLink: 'https://forms.gle/X6uTjDfS6XoWH4VQ9',
  support: {
    cagnotte: '#cagnotte-a-mettre-a-jour',
    liste: '#liste-cadeaux-a-mettre-a-jour',
  },

  // Musique — déposez le fichier ici : public/audio/notre-chanson.mp3
  music: {
    src: '/audio/notre-chanson.mp3',
    title: 'Notre chanson — Axel & Aivi',
  },

  intro: 'ont la joie de vous convier à leur mariage',

  motTitle: 'Mot des mariés',
  mot: "C'est avec une immense joie que nous vous invitons à partager l'un des plus beaux jours de notre vie. Votre présence et vos prières sont nos plus beaux cadeaux.",
  motSignature: 'Avec tout notre amour,\nAxel & Aivi',

  images: {
    hero: '/images/couple/les_regards_un_sur_autre.jpeg',
    mot: '/images/couple/demande_fiancailles.jpeg',
    ceremonie: '/images/couple/photo_a_2.jpeg',
    reception: '/images/couple/repas_chez_fiancaille_avec_guitare.jpeg',
    lieu: '/images/couple/sortie_a_2.jpeg',
  },
};

const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Mot des mariés', href: '#mot' },
  { label: 'Notre histoire', href: '#histoire' },
  { label: 'Programme', href: '#programme' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Nos couleurs', href: '#couleurs' },
  { label: 'RSVP', href: '#rsvp' },
  { label: 'Participer', href: '#participer' },
];

// Frise « Au programme »
const timeline = [
  { time: '14h00', label: 'Cérémonie\nMairie', Icon: Church },
  { time: '15h30', label: 'Cérémonie\nReligieuse', Icon: Heart },
  { time: '17h00', label: 'Séance\nPhotos', Icon: Camera },
  { time: '18h30', label: 'Cocktail', Icon: GlassWater },
  { time: '20h00', label: 'Dîner &\nSoirée', Icon: UtensilsCrossed },
];

// Programme détaillé
const programme = [
  {
    title: 'Cérémonie civile',
    date: '15 août 2026 à 14h00',
    place: 'Lieu à préciser',
    image: wedding.images.ceremonie,
    alt: 'Cérémonie civile',
  },
  {
    title: 'Réception',
    date: '15 août 2026 à 18h00',
    place: 'Lieu à préciser',
    image: wedding.images.reception,
    alt: 'Réception & dîner',
  },
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

// Nos couleurs
const dressColors = [
  { name: 'Bleu canard', hex: '#005F73', swatch: 'satin-canard', card: 'on-dark' },
  { name: 'Beige', hex: '#F2E9DA', swatch: 'satin-beige', card: 'on-light' },
  { name: 'Or', hex: '#C7A24A', swatch: 'satin-gold', card: 'on-gold' },
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
   ORNEMENTS SVG — botanique dorée & couronne florale
   ============================================================ */
function BotanicalCorner({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.9">
        <path d="M8 120 C 40 110, 70 90, 92 54 C 104 34, 112 20, 118 8" fill="none" />
        <path d="M92 54 C 70 52, 52 60, 44 78 M92 54 C 96 32, 90 16, 74 8" fill="none" />
        <path d="M60 96 C 44 92, 30 96, 22 110 M60 96 C 66 78, 62 62, 48 52" fill="none" />
        <path d="M120 78 C 104 74, 90 80, 84 96 M120 78 C 126 60, 122 44, 106 36" fill="none" />
      </g>
      <g fill="currentColor" opacity="0.85">
        {[
          [44, 78],[74, 8],[22, 110],[48, 52],[84, 96],[106, 36],[118, 8],
        ].map(([cx, cy], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx="6" ry="10" transform={`rotate(${(i * 47) % 360} ${cx} ${cy})`} />
        ))}
      </g>
    </svg>
  );
}

function FloralWreath({ children }) {
  return (
    <div className="hero-wreath">
      <svg viewBox="0 0 320 320" fill="none" aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <linearGradient id="wgold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#D6B45C" />
            <stop offset="0.5" stopColor="#C7A24A" />
            <stop offset="1" stopColor="#A8842F" />
          </linearGradient>
        </defs>
        {/* anneau scintillant */}
        <circle cx="160" cy="160" r="132" stroke="url(#wgold)" strokeWidth="2" strokeDasharray="1.5 7" opacity="0.9" />
        <circle cx="160" cy="160" r="140" stroke="url(#wgold)" strokeWidth="1" strokeDasharray="0.5 10" opacity="0.6" />
        {/* grappes de fleurs à 4 positions */}
        {[
          { x: 160, y: 24 },
          { x: 296, y: 160 },
          { x: 160, y: 296 },
          { x: 24, y: 160 },
        ].map((p, i) => (
          <g key={i} transform={`translate(${p.x} ${p.y}) rotate(${i * 63})`}>
            <g stroke="url(#wgold)" strokeWidth="1.2" fill="none" opacity="0.9">
              <path d="M0 0 C 18 -6, 34 2, 46 16 M0 0 C -18 -6, -34 2, -46 16" />
              <path d="M0 0 C 8 -20, 6 -34, -2 -46" />
            </g>
            <g fill="url(#wgold)">
              <circle r="9" />
              <ellipse cx="18" cy="4" rx="6" ry="10" transform="rotate(35 18 4)" opacity="0.9" />
              <ellipse cx="-18" cy="4" rx="6" ry="10" transform="rotate(-35 -18 4)" opacity="0.9" />
              <ellipse cx="2" cy="-18" rx="5" ry="9" opacity="0.85" />
            </g>
          </g>
        ))}
        {/* points scintillants */}
        {[
          [80, 60],[240, 60],[270, 110],[50, 110],[260, 220],[60, 220],[120, 300],[210, 22],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i % 2 ? 2.4 : 1.4} fill="#D6B45C" opacity="0.8" />
        ))}
      </svg>
      <div style={{ position: 'relative', padding: '4.5rem 1.5rem', textAlign: 'center' }}>
        {children}
      </div>
    </div>
  );
}

function Flourish() {
  return (
    <svg className="flourish" viewBox="0 0 120 24" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none">
        <path d="M60 12 C 48 4, 34 4, 20 12 C 30 10, 40 12, 48 16" />
        <path d="M60 12 C 72 4, 86 4, 100 12 C 90 10, 80 12, 72 16" />
      </g>
      <path d="M60 6 L63 12 L60 18 L57 12 Z" fill="currentColor" />
      <circle cx="14" cy="12" r="2" fill="currentColor" />
      <circle cx="106" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

/* ============================================================
   LECTEUR DE MUSIQUE
   ============================================================ */
function formatTime(sec) {
  if (!Number.isFinite(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [ready, setReady] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => setPlaying(false));
    }
  };

  const progress = duration ? (current / duration) * 100 : 0;

  return (
    <div className="player">
      <audio
        ref={audioRef}
        src={wedding.music.src}
        preload="metadata"
        onLoadedMetadata={(e) => {
          setDuration(e.currentTarget.duration);
          setReady(true);
        }}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onError={() => setReady(false)}
      />
      <button
        type="button"
        className="player-btn"
        onClick={toggle}
        aria-label={playing ? 'Mettre en pause' : 'Écouter notre chanson'}
        disabled={!ready}
        style={!ready ? { opacity: 0.55, cursor: 'default' } : undefined}
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" style={{ marginLeft: 1 }} />}
      </button>
      <div className="player-meta">
        <p className="player-title">{wedding.music.title}</p>
        <div className="player-bar"><i style={{ width: `${progress}%` }} /></div>
      </div>
      <span className="player-time">
        {formatTime(current)} / {ready ? formatTime(duration) : '--:--'}
      </span>
      <Music className="player-note h-4 w-4" aria-hidden="true" />
    </div>
  );
}

/* ============================================================
   BARRE HAUTE + MENU
   ============================================================ */
function TopBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="topbar">
        <a href="#accueil" className="brand-mono" aria-label={wedding.couple}>
          {wedding.initials}
        </a>
        <MusicPlayer />
        <button
          type="button"
          className="menu-btn"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </header>

      <div className={`menu-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        <nav className="menu-panel" onClick={(e) => e.stopPropagation()} aria-label="Navigation principale">
          <button type="button" className="menu-close" onClick={() => setOpen(false)} aria-label="Fermer le menu">
            <X className="h-6 w-6" />
          </button>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

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

/* Bloc texte du hero (réutilisé dans la couronne mobile & à côté de la photo desktop) */
function HeroText() {
  return (
    <div className="hero-text animate-floatIn">
      <p className="eyebrow">Entourés de leurs familles</p>
      <h1 className="hero-names">
        Axel
        <span className="amp">&amp;</span>
        Aivi
      </h1>
      <div className="hero-heart"><Heart className="h-4 w-4" fill="currentColor" /></div>
      <p className="hero-intro">{wedding.intro}</p>
      <p className="hero-date mt-4">{wedding.dateLong}</p>
      <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3">
        <a href={wedding.rsvpFormLink} target="_blank" rel="noreferrer" className="btn-primary">
          <Send className="h-4 w-4" /> Confirmer ma présence
        </a>
      </div>
    </div>
  );
}

/* ============================================================
   APP
   ============================================================ */
function App() {
  return (
    <main className="overflow-hidden">
      <TopBar />

      {/* HERO */}
      <section id="accueil" className="hero">
        <BotanicalCorner className="hero-botanical tl" />
        <BotanicalCorner className="hero-botanical br" />
        <div className="section" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
          <div className="hero-grid">
            {/* Desktop : photo à gauche */}
            <div className="hero-media">
              <div className="hero-photo-wrap animate-fadeIn">
                <img
                  className="rose-accent animate-sway"
                  src="/images/rose-spray.png"
                  alt=""
                  style={{ width: '8rem', top: '-2rem', left: '-2rem' }}
                />
                <img
                  className="rose-accent"
                  src="/images/rose-bloom.png"
                  alt=""
                  style={{ width: '6.5rem', bottom: '-1.5rem', right: '-1rem' }}
                />
                <div className="oval-frame">
                  <img src={wedding.images.hero} alt={`${wedding.couple} se regardant`} />
                </div>
              </div>
            </div>

            {/* Desktop : texte à droite / Mobile : couronne florale */}
            <div>
              <div className="only-desktop">
                <HeroText />
              </div>
              <div className="only-mobile">
                <FloralWreath>
                  <HeroText />
                </FloralWreath>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPTE À REBOURS */}
      <section className="band-cream">
        <div className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <Reveal className="text-center">
            <p className="eyebrow">Jours avant le grand jour</p>
            <div className="mt-8">
              <Countdown />
            </div>
            <Flourish />
          </Reveal>
        </div>
      </section>

      {/* MOT DES MARIÉS */}
      <section id="mot">
        <div className="section">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <Reveal>
              <div className="mot-media" style={{ maxWidth: '28rem', margin: '0 auto' }}>
                <img src={wedding.images.mot} alt="Bouquet du mariage" loading="lazy" />
              </div>
            </Reveal>
            <Reveal>
              <p className="eyebrow">{wedding.motTitle}</p>
              <span className="divider" aria-hidden="true" style={{ margin: '1rem 0', justifyContent: 'flex-start' }}>
                <span>❦</span>
              </span>
              <p className="section-copy">{wedding.mot}</p>
              <p className="mot-signature" style={{ whiteSpace: 'pre-line' }}>{wedding.motSignature}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section id="histoire" className="band-cream">
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

      {/* AU PROGRAMME — FRISE */}
      <section id="programme" className="band-canard">
        <div className="section">
          <Reveal>
            <SectionHeader eyebrow="Le jour J" title="Au programme">
              Retrouvez ici le déroulé du grand jour. Les lieux seront précisés très prochainement.
            </SectionHeader>
          </Reveal>

          <Reveal className="mt-16">
            <div className="timeline">
              {timeline.map((step) => (
                <div key={step.time} className="timeline-step">
                  <span className="timeline-icon"><step.Icon className="h-8 w-8" /></span>
                  <p className="timeline-time">{step.time}</p>
                  <p className="timeline-label" style={{ whiteSpace: 'pre-line' }}>{step.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Cartes détaillées */}
          <div className="mt-16 grid gap-7 md:grid-cols-2">
            {programme.map((item) => (
              <Reveal key={item.title}>
                <div className="prog-card h-full">
                  <div className="prog-card-img">
                    <img src={item.image} alt={item.alt} loading="lazy" />
                  </div>
                  <div className="prog-card-body">
                    <h3 className="prog-card-title">{item.title}</h3>
                    <p className="prog-card-date">{item.date}</p>
                    <a href="#lieu" className="prog-card-place">
                      <MapPin className="h-4 w-4" /> {item.place}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LE LIEU */}
      <section id="lieu">
        <div className="section" style={{ paddingTop: '4.5rem', paddingBottom: '4.5rem' }}>
          <Reveal>
            <div className="lieu-card">
              <span className="lieu-pin"><MapPin className="h-8 w-8" /></span>
              <div className="lieu-body">
                <p className="eyebrow" style={{ color: 'var(--gold-deep)' }}>Le lieu</p>
                <h3 className="font-display text-3xl font-semibold text-canardDark mt-1">Bientôt dévoilé</h3>
                <p className="section-copy mt-2">
                  Découvrez très bientôt tous les détails du lieu de notre mariage.
                </p>
              </div>
              <a href={wedding.rsvpFormLink} target="_blank" rel="noreferrer" className="btn-ghost">
                <Navigation className="h-4 w-4" /> En savoir plus
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALERIE */}
      <section id="galerie" className="band-cream">
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

      {/* NOS COULEURS */}
      <section id="couleurs">
        <div className="section">
          <Reveal>
            <SectionHeader eyebrow="Dress code" title="Nos couleurs">
              Pour ce jour béni, le thème du mariage est chic et élégant. Nous vous proposons de choisir vos
              tenues dans ces teintes : bleu canard, beige et or.
            </SectionHeader>
          </Reveal>
          <Reveal className="mt-12">
            <div className="colors-list">
              {dressColors.map((color) => (
                <div key={color.name} className={`color-card ${color.card}`}>
                  <div className={`color-swatch ${color.swatch}`} />
                  <p className="color-name">{color.name}</p>
                  <p className="color-hex">{color.hex}</p>
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
              <a href={wedding.rsvpFormLink} target="_blank" rel="noreferrer" className="btn-primary btn-gold mt-8">
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
        <p className="mx-auto mt-5 max-w-xl leading-8" style={{ color: 'rgba(255,249,240,0.7)' }}>
          Merci de faire partie de notre histoire. Nous avons hâte de partager ce moment avec vous.
        </p>
        <a href={wedding.rsvpFormLink} target="_blank" rel="noreferrer" className="btn-primary mt-7">
          <Heart className="h-4 w-4" /> Confirmer ma présence
        </a>
      </footer>

      {/* RSVP flottant mobile */}
      <a href={wedding.rsvpFormLink} target="_blank" rel="noreferrer" className="mobile-rsvp">
        <Send className="h-4 w-4" /> RSVP
      </a>
    </main>
  );
}

export default App;
