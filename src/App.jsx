import { useEffect, useRef, useState } from 'react';
import {
  Camera,
  ChevronLeft,
  ChevronRight,
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
  dateLong: 'Samedi 15 Août 2026',
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

  intro: 'ont la joie de vous convier\nà leur mariage',

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
  { label: 'Nous en photos', href: '#galerie' },
  { label: 'Notre histoire', href: '#histoire' },
  { label: 'Programme', href: '#programme' },
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
  { name: 'Bleu canard', hex: '#0B4F55', image: '/images/colors/satin-bleu-canard.jpg', card: 'on-dark' },
  { name: 'Beige', hex: '#F2E9DA', image: '/images/colors/satin-beige.jpg', card: 'on-light' },
  { name: 'Or', hex: '#C7A24A', image: '/images/colors/satin-or.jpg', card: 'on-gold' },
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
        <path d="M20 137 C 7 126, 12 108, 29 108 C 39 94, 58 101, 57 117 C 72 123, 69 143, 53 148 C 43 162, 23 155, 20 137 Z" />
        <path d="M27 132 C 23 119, 39 111, 48 121 C 59 130, 48 143, 36 140 C 27 141, 22 133, 27 126" />
        <path d="M34 130 C 36 121, 48 123, 46 132 C 44 139, 33 137, 34 130 Z" />
        <path d="M122 103 C 112 95, 115 82, 128 82 C 136 71, 151 77, 150 90 C 162 95, 159 110, 147 114 C 139 124, 124 119, 122 103 Z" />
        <path d="M129 99 C 126 90, 138 84, 145 92 C 153 99, 145 109, 136 107 C 129 108, 126 102, 129 96" />
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
  // Anneau de scintillements dorés (positions déterministes)
  const jitter = [0, 9, -7, 15, -11, 5, 18, -5, 11, -14, 6, -3, 16, -9, 12, 2];
  const sparkles = [];
  const bands = [
    { count: 150, base: 267, min: 3.1 },
    { count: 58, base: 242, min: 2.4 },
    { count: 48, base: 284, min: 2.2 },
  ];
  bands.forEach((band, bi) => {
    for (let i = 0; i < band.count; i += 1) {
      const a = ((i + bi * 1.7) / band.count) * Math.PI * 2;
      const rr = band.base + jitter[(i + bi) % 16] * (bi === 0 ? 1 : 0.5);
      const size = i % 6 === 0 ? band.min : i % 2 ? 1.1 : 1.7;
      sparkles.push([300 + rr * Math.cos(a), 300 + rr * Math.sin(a), size, (i % 3) * 0.14]);
    }
  });

  return (
    <div className="hero-wreath">
      <svg viewBox="0 0 600 600" fill="none" aria-hidden="true" className="wreath-svg">
        <defs>
          <linearGradient id="wgold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E6CC7E" />
            <stop offset="0.5" stopColor="#C7A24A" />
            <stop offset="1" stopColor="#A8842F" />
          </linearGradient>
          <linearGradient id="leaf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#D6B45C" />
            <stop offset="1" stopColor="#A8842F" />
          </linearGradient>
        </defs>

        {/* Anneau principal et halo de poussière dorée. */}
        <circle cx="300" cy="300" r="284" stroke="url(#wgold)" strokeWidth="3.2" opacity="0.98" />
        <circle cx="300" cy="300" r="290" stroke="url(#wgold)" strokeWidth="1.4" strokeDasharray="1.5 9" opacity="0.82" />
        <circle cx="300" cy="300" r="295" stroke="url(#wgold)" strokeWidth="1" strokeDasharray="0.5 13" opacity="0.5" />

        {/* scintillements */}
        {sparkles.map(([cx, cy, sz, op], i) => (
          <circle key={i} cx={cx} cy={cy} r={sz} fill="#E6CC7E" opacity={0.62 + op} />
        ))}

        {/* brins de feuilles dorées (haut & bas) */}
        {[
          { x: 372, y: 96, r: 40, s: 0.9 },
        ].map((p, i) => (
          <g key={i} transform={`translate(${p.x} ${p.y}) rotate(${p.r}) scale(${p.s})`} fill="url(#leaf)" opacity="0.9">
            <ellipse cx="0" cy="0" rx="7" ry="17" />
            <ellipse cx="16" cy="8" rx="6" ry="14" transform="rotate(38 16 8)" />
            <ellipse cx="-16" cy="8" rx="6" ry="14" transform="rotate(-38 -16 8)" />
          </g>
        ))}

      </svg>
      <img
        className="wreath-flowers wreath-flowers-top"
        src="/images/hero-floral-overlay.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="wreath-flowers wreath-flowers-bottom"
        src="/images/hero-floral-overlay.png"
        alt=""
        aria-hidden="true"
      />
      <p className="hero-eyebrow">Entourés de leurs familles</p>
      <div className="hero-inner">{children}</div>
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
          <span className="brand-a brand-a-first">A</span>
          <span className="brand-a brand-a-second">A</span>
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
    <div className="hero-text">
      <h1 className="hero-names">
        Axel
        <span className="amp">&amp;</span>
        Aivi
      </h1>
      <div className="hero-heart"><Heart className="h-3.5 w-3.5" fill="currentColor" /></div>
      <p className="hero-intro">{wedding.intro}</p>
      <p className="hero-date">{wedding.dateLong}</p>
      <div className="hero-cta">
        <a href={wedding.rsvpFormLink} target="_blank" rel="noreferrer" className="btn-primary">
          Confirmer ma présence
        </a>
      </div>
    </div>
  );
}

function PaletteFlourish() {
  return (
    <svg className="palette-flourish" viewBox="0 0 150 20" fill="none" aria-hidden="true">
      <path d="M4 10H61M89 10H146" stroke="currentColor" strokeWidth="1" />
      <path d="M75 3C77 7 79 9 84 10C79 11 77 13 75 17C73 13 71 11 66 10C71 9 73 7 75 3Z" fill="currentColor" />
    </svg>
  );
}

function ColorSprig({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 120 110" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 101C40 82 60 55 75 12" />
        <path d="M39 78C26 71 19 62 19 51C32 53 41 60 43 72" />
        <path d="M51 62C43 49 42 38 48 28C58 36 61 46 57 57" />
        <path d="M61 44C61 30 66 20 76 14C80 26 76 36 66 43" />
        <path d="M39 79C53 79 63 85 69 96C56 99 46 94 39 84" />
        <path d="M53 61C67 59 78 63 86 73C74 78 63 74 56 66" />
        <path d="M65 43C78 38 89 40 99 48C89 56 78 55 69 48" />
        <path d="M73 22C86 16 96 17 106 24C97 33 86 32 77 27" />
      </g>
    </svg>
  );
}

function PhotoCarousel() {
  const total = galleryImages.length;
  const slides = [galleryImages[total - 1], ...galleryImages, galleryImages[0]];
  const [position, setPosition] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const activeIndex = position === 0 ? total - 1 : position === total + 1 ? 0 : position - 1;

  const move = (direction) => {
    setAnimate(true);
    setPosition((current) => current + direction);
  };

  const goTo = (index) => {
    setAnimate(true);
    setPosition(index + 1);
  };

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => move(1), 4000);
    return () => clearInterval(id);
  }, [paused]);

  const handleTransitionEnd = () => {
    if (position === 0) {
      setAnimate(false);
      setPosition(total);
    } else if (position === total + 1) {
      setAnimate(false);
      setPosition(1);
    }
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = touchStartX.current - event.changedTouches[0].clientX;
    touchStartX.current = null;
    if (Math.abs(distance) > 40) move(distance > 0 ? 1 : -1);
  };

  return (
    <div
      className="photo-carousel"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Photos d'Axel et Aivi"
      tabIndex="0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          move(-1);
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          move(1);
        }
      }}
      onTouchStart={(event) => { touchStartX.current = event.changedTouches[0].clientX; }}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="photo-carousel-track"
        style={{
          transform: `translateX(-${position * 100}%)`,
          transition: animate ? 'transform 380ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((image, index) => {
          const isClone = index === 0 || index === slides.length - 1;
          const originalIndex = index === 0 ? total - 1 : index === slides.length - 1 ? 0 : index - 1;
          return (
            <figure
              key={`${isClone ? 'clone' : 'slide'}-${image.src}-${index}`}
              className="photo-carousel-slide"
              aria-hidden={isClone || originalIndex !== activeIndex}
            >
              <img
                src={image.src}
                alt={isClone ? '' : image.alt}
                loading={originalIndex === 0 ? 'eager' : 'lazy'}
              />
            </figure>
          );
        })}
      </div>

      <BotanicalCorner className="photo-carousel-botanical top" />
      <BotanicalCorner className="photo-carousel-botanical bottom" />

      <button type="button" className="photo-carousel-btn prev" onClick={() => move(-1)} aria-label="Photo précédente">
        <ChevronLeft aria-hidden="true" />
      </button>
      <button type="button" className="photo-carousel-btn next" onClick={() => move(1)} aria-label="Photo suivante">
        <ChevronRight aria-hidden="true" />
      </button>

      <div className="photo-carousel-dots" role="group" aria-label="Choisir une photo">
        {galleryImages.map((image, index) => (
          <button
            type="button"
            key={image.src}
            className={`photo-carousel-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goTo(index)}
            aria-label={`Afficher la photo ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : undefined}
          />
        ))}
      </div>
      <p className="sr-only" aria-live="polite">Photo {activeIndex + 1} sur {total}</p>
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

      {/* HERO — couronne florale centrée (identique mobile & desktop) */}
      <section id="accueil" className="hero">
        <BotanicalCorner className="hero-botanical tl" />
        <BotanicalCorner className="hero-botanical ml" />
        <BotanicalCorner className="hero-botanical tr" />
        <BotanicalCorner className="hero-botanical br" />
        <div className="section hero-section">
          <FloralWreath>
            <HeroText />
          </FloralWreath>
          <Flourish />
        </div>
      </section>

      {/* COMPTE À REBOURS */}
      <section className="band-cream">
        <div className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <Reveal className="text-center">
            <p className="eyebrow">Le grand jour approche</p>
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

      {/* GALERIE */}
      <section id="galerie" className="band-cream">
        <div className="section">
          <Reveal>
            <SectionHeader eyebrow="Souvenirs" title="Nous en photos" center={false}>
              Des instants choisis pour raconter la tendresse, la complicité et la promesse qui nous unissent.
            </SectionHeader>
          </Reveal>
          <Reveal className="mt-12">
            <PhotoCarousel />
          </Reveal>
        </div>
      </section>

      {/* NOS COULEURS */}
      <section id="couleurs" className="colors-section">
        <div className="section">
          <Reveal className="colors-panel">
            <ColorSprig className="colors-panel-sprig" />
            <PaletteFlourish />
            <header className="colors-heading">
              <h2>Nos Couleurs</h2>
              <span className="colors-heading-line" aria-hidden="true" />
              <p>
                Pour ce jour béni, le thème du mariage est chic et élégant dont les couleurs sont :{' '}
                <strong>bleu canard, beige et or.</strong>
              </p>
            </header>
            <div className="colors-list">
              {dressColors.map((color) => (
                <article key={color.name} className={`color-card ${color.card}`}>
                  <img className="color-swatch" src={color.image} alt={`Satin ${color.name.toLowerCase()}`} />
                  <div className="color-details">
                    <p className="color-name">{color.name}</p>
                    <p className="color-hex">{color.hex}</p>
                  </div>
                  <ColorSprig className="color-card-sprig" />
                </article>
              ))}
            </div>
          </Reveal>
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
