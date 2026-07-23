import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Gift,
  HandHeart,
  Heart,
  MapPin,
  Menu,
  Music,
  Pause,
  Play,
  Send,
  Sparkles,
  X,
  ZoomIn,
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
  dateWeekend: 'Vendredi 14 Août & Samedi 15 Août 2026',
  dateISO: '2026-08-15T15:00:00',
  city: 'Cergy & Herblay-sur-Seine',

  rsvpFormLink: 'https://forms.gle/X6uTjDfS6XoWH4VQ9',
  support: {
    cagnotte: 'https://pots.lydia.me/collect/pots?id=72259-axel-aivi-s-wedding',
    liste: 'https://www.listy.fr/listes/axel-aivi-s-wedding',
  },

  // Musique — déposez le fichier ici : public/audio/notre-chanson.mp3
  music: {
    src: '/audio/notre-chanson.mp3',
    title: 'Notre chanson — Axel & Aivi',
  },

  intro: 'ont la joie de vous convier\nà leur mariage',

  motTitle: 'Mot des mariés',
  mot: "C'est avec une joie immense et le cœur rempli de gratitude que nous vous convions à célébrer notre union. Dans quelques jours, nous nous engagerons l’un à l’autre devant Dieu et entourés de ceux qui nous sont chers.\n\nVotre présence à nos côtés sera pour nous le plus précieux des soutiens.",
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
  { label: 'Notre histoire', href: '/histoire' },
  { label: 'Programme', href: '#programme' },
  { label: 'Notre thème', href: '#couleurs' },
  { label: 'Participer', href: '#participer' },
  { label: 'RSVP', href: '#rsvp' },
];

const storyNavItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Notre histoire', href: '#histoire-page' },
  { label: 'Programme', href: '/#programme' },
  { label: 'Nous en photos', href: '/#galerie' },
  { label: 'RSVP', href: '/#rsvp' },
];

// Programme détaillé
const programme = [
  {
    title: 'Mairie',
    date: 'Vendredi 14 août 2026 à 15h30',
    venue: 'Mairie de Cergy',
    address: '3 place Olympe de Gouges, 95800 Cergy',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=3%20place%20Olympe%20de%20Gouges%2C%2095800%20Cergy',
    image: '/images/programme/ceremonie-civile.jpg',
    alt: 'Cérémonie civile',
  },
  {
    title: 'Bénédiction',
    date: 'Samedi 15 août 2026 à 15h00',
    venue: 'Herblay-sur-Seine',
    address: '5 bis avenue Paul Langevin, 95220 Herblay-sur-Seine',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=5%20bis%20avenue%20Paul%20Langevin%2C%2095220%20Herblay-sur-Seine',
    image: '/images/programme/benediction.jpg',
    alt: 'Bénédiction du mariage',
  },
  {
    title: 'Réception',
    date: 'Samedi 15 août 2026 à 19h00',
    venue: 'Herblay-sur-Seine',
    address: '5 bis avenue Paul Langevin, 95220 Herblay-sur-Seine',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=5%20bis%20avenue%20Paul%20Langevin%2C%2095220%20Herblay-sur-Seine',
    image: '/images/programme/reception.jpg',
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
  { src: '/images/galeris/image1.jpg', alt: 'Axel et Aivi, souvenir 1' },
  { src: '/images/galeris/image2.jpg', alt: 'Axel et Aivi, souvenir 2' },
  { src: '/images/galeris/image3.jpg', alt: 'Axel et Aivi, souvenir 3' },
  { src: '/images/galeris/image3.jpeg', alt: 'Axel et Aivi, souvenir 4' },
  { src: '/images/galeris/image4.jpg', alt: 'Axel et Aivi, souvenir 5' },
  { src: '/images/galeris/image6.jpg', alt: 'Axel et Aivi, souvenir 6' },
  { src: '/images/galeris/image7.jpg', alt: 'Axel et Aivi, souvenir 7' },
  { src: '/images/galeris/image8.jpg', alt: 'Axel et Aivi, souvenir 8' },
  { src: '/images/galeris/image9.jpg', alt: 'Axel et Aivi, souvenir 9' },
  { src: '/images/galeris/image10.jpg', alt: 'Axel et Aivi, souvenir 10' },
];

// Notre thème
const dressColors = [
  { name: 'Bleu canard', image: '/images/colors/fabric-bleu-canard.png', card: 'on-dark' },
  { name: 'Beige', image: '/images/colors/fabric-beige.png', card: 'on-light' },
  { name: 'Or', image: '/images/colors/fabric-or.png', card: 'on-gold' },
];

// Versets
const verses = [
  {
    ref: 'Matthieu 19:6',
    text: "Ainsi ils ne sont plus deux, mais une seule chair. Que l'homme donc ne sépare pas ce que Dieu a joint.",
  },
  {
    ref: 'Proverbes 18:22',
    text: "Celui qui a trouvé une femme a trouvé le bonheur ; c'est une grâce qu'il obtient de l'Éternel.",
  },
  {
    ref: 'Ecclésiaste 4.11.12',
    text: "Et si quelqu'un est plus fort qu'un seul, les deux peuvent lui résister; et la corde à trois fils ne se rompt pas facilement.",
  },
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
    text: 'Consultez notre liste pour choisir un cadeau qui nous accompagnera dans notre vie à deux.',
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
      <span className="player-mobile-title">Play our song</span>
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
function TopBar({ homeHref = '#accueil', items = navItems }) {
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
        <a href={homeHref} className="brand-mono" aria-label={wedding.couple}>
          <span className="brand-initials">
            <span className="brand-letter-first">A</span>
            <span className="brand-amp">&amp;</span>
            <span className="brand-letter-second">A</span>
          </span>
          <span className="brand-floral-sprig" aria-hidden="true" />
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
          {items.map((item) => (
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
  const [zoomed, setZoomed] = useState(false);
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
    if (paused || zoomed) return undefined;
    const id = setInterval(() => move(1), 4000);
    return () => clearInterval(id);
  }, [paused, zoomed]);

  useEffect(() => {
    if (!zoomed) return undefined;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setZoomed(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [zoomed]);

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
    <>
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
        <button type="button" className="photo-carousel-zoom" onClick={() => setZoomed(true)} aria-label="Agrandir la photo">
          <ZoomIn aria-hidden="true" />
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
      {zoomed ? createPortal((
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo agrandie"
          onClick={() => setZoomed(false)}
        >
          <button type="button" className="photo-lightbox-close" onClick={() => setZoomed(false)} aria-label="Fermer la photo">
            <X aria-hidden="true" />
          </button>
          <img
            src={galleryImages[activeIndex].src}
            alt={galleryImages[activeIndex].alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ), document.body) : null}
    </>
  );
}

function SiteLike() {
  const [liked, setLiked] = useState(() => {
    try {
      return window.localStorage.getItem('axel-aivi-site-liked') === 'true';
    } catch {
      return false;
    }
  });

  const toggleLike = () => {
    setLiked((current) => {
      const next = !current;
      try {
        window.localStorage.setItem('axel-aivi-site-liked', String(next));
      } catch {
        // Le bouton reste utilisable lorsque le stockage local est désactivé.
      }
      return next;
    });
  };

  return (
    <button
      type="button"
      className={`site-like ${liked ? 'liked' : ''}`}
      onClick={toggleLike}
      aria-pressed={liked}
    >
      <Heart fill={liked ? 'currentColor' : 'none'} aria-hidden="true" />
      <span>{liked ? 'Vous aimez ce site' : "J’aime ce site"}</span>
      <strong aria-label={`${liked ? 1 : 0} mention J’aime`}>{liked ? 1 : 0}</strong>
    </button>
  );
}

/* ============================================================
   APP
   ============================================================ */
function HomePage() {
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
          <p className="hero-date hero-date-below">{wedding.dateWeekend}</p>
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
            <div className="countdown-ornament" aria-hidden="true">
              <Heart className="countdown-heart" fill="currentColor" />
              <Flourish />
            </div>
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
              <p className="section-copy" style={{ whiteSpace: 'pre-line' }}>{wedding.mot}</p>
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
              <h2>Notre thème</h2>
              <span className="colors-heading-line" aria-hidden="true" />
              <p>
                Pour célébrer notre amour en beauté et afin de vous inspirer pour vos tenues, notre mariage aura pour dress code :{' '}
                <strong>un écrin chic aux nuances de bleu canard, beige et or.</strong>
              </p>
            </header>
            <div className="colors-list">
              {dressColors.map((color) => (
                <article key={color.name} className={`color-card ${color.card}`}>
                  <Heart className="color-card-heart" fill="currentColor" aria-hidden="true" />
                  <img className="color-swatch" src={color.image} alt={`Satin ${color.name.toLowerCase()}`} />
                  <div className="color-details">
                    <p className="color-name">{color.name}</p>
                  </div>
                  <ColorSprig className="color-card-sprig" />
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* AU PROGRAMME */}
      <section id="programme" className="programme-section">
        <div className="section">
          <Reveal className="programme-panel">
            <h2 className="programme-title">Programme</h2>
            <div className="programme-grid">
              {programme.map((item) => (
                <article key={item.title} className="prog-card">
                  <div className="prog-card-img">
                    <img src={item.image} alt={item.alt} loading="lazy" />
                  </div>
                  <div className="prog-card-body">
                    <h3 className="prog-card-title">{item.title}</h3>
                    <p className="prog-card-date">{item.date}</p>
                    <a href={item.mapsUrl} target="_blank" rel="noreferrer" className="prog-card-place">
                      <MapPin aria-hidden="true" />
                      <span className="prog-card-location-text">
                        <span className="prog-card-venue">{item.venue}</span>
                        <span className="prog-card-address">{item.address}</span>
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section id="histoire" className="story-teaser-section">
        <div className="section">
          <Reveal as="article" className="story-teaser-card">
            <header className="story-teaser-copy">
              <ColorSprig className="story-teaser-sprig" />
              <p className="eyebrow">Notre histoire</p>
              <h2>Là où tout<br />a commencé</h2>
              <p>
                Une histoire née dans la confiance, nourrie par la foi et portée par la joie de bâtir ensemble.
              </p>
            </header>

            <div className="story-teaser-media">
              <img src="/images/couple/sous_les_parapluie.jpeg" alt="Axel et Aivi sous les parapluies" loading="lazy" />
              <span className="story-teaser-heart" aria-hidden="true">
                <Heart />
              </span>
            </div>

            <a href="/histoire" className="story-teaser-link">
              <span className="story-teaser-link-icon" aria-hidden="true"><BookOpen /></span>
              <span className="story-teaser-link-copy">
                <strong>Découvrez notre histoire</strong>
                <small>De la rencontre à la promesse</small>
              </span>
              <span className="story-teaser-link-arrow" aria-hidden="true"><ChevronRight /></span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* NOUS ACCOMPAGNER */}
      <section id="participer" className="support-section">
        <BotanicalCorner className="support-botanical support-botanical-top" />
        <BotanicalCorner className="support-botanical support-botanical-side" />
        <BotanicalCorner className="support-botanical support-botanical-bottom" />
        <div className="section support-inner">
          <Reveal as="header" className="support-heading">
            <PaletteFlourish />
            <p className="eyebrow">Je participe</p>
            <h2>Nous accompagner</h2>
            <div className="support-divider" aria-hidden="true">
              <span /><Heart fill="currentColor" /><span />
            </div>
            <p>
              Votre présence est déjà le plus beau des cadeaux.<br />
              Pour ceux qui le souhaitent, voici comment nous faire plaisir.
            </p>
          </Reveal>

          <div className="support-grid">
            {supportCards.map(({ icon: Icon, title, text, button, href }, index) => (
              <Reveal as="article" className="support-card" key={title}>
                <div className="support-icon-row" aria-hidden="true">
                  <span />
                  <span className="support-emblem"><Icon /></span>
                  <span />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`support-button ${index === 0 ? 'support-button-primary' : ''}`}
                >
                  {button}<ChevronRight aria-hidden="true" />
                </a>
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

      {/* VERSETS / FOI */}
      <section className="band-canard">
        <div className="section">
          <Reveal>
            <SectionHeader eyebrow="Foi & promesse" title="Versets bibliques" />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {verses.map((verse) => (
              <Reveal key={verse.ref}>
                <div className="verse-card h-full">
                  <Sparkles className="mx-auto h-5 w-5 text-goldSoft" />
                  <p className="verse-copy">“{verse.text}”</p>
                  <span className="mt-4 block text-xs uppercase tracking-[0.18em] text-goldSoft">{verse.ref}</span>
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
          Merci de faire partie de notre histoire. Nous avons hâte de partager ces moments avec vous.
        </p>
        <SiteLike />
      </footer>

      <a href={wedding.rsvpFormLink} target="_blank" rel="noreferrer" className="mobile-rsvp">
        <Send className="h-4 w-4" /> RSVP
      </a>

    </main>
  );
}

function StoryPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Notre histoire — ${wedding.couple}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="story-page overflow-hidden">
      <TopBar homeHref="/" items={storyNavItems} />

      <section id="histoire-page" className="story-page-hero">
        <BotanicalCorner className="story-page-botanical left" />
        <BotanicalCorner className="story-page-botanical right" />
        <div className="section">
          <Reveal className="story-page-heading">
            <a href="/" className="story-page-back">
              <ChevronLeft aria-hidden="true" /> Retour à l'accueil
            </a>
            <p className="eyebrow">Axel &amp; Aivi</p>
            <h1>Notre histoire</h1>
            <p>De la rencontre à la promesse, découvrez les étapes qui nous ont conduits jusqu'au grand jour.</p>
          </Reveal>
        </div>
      </section>

      <section className="band-cream story-details-section">
        <div className="section">
          <Reveal>
            <SectionHeader eyebrow="Notre histoire" title="Là où tout a commencé">
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
                    <h2 className="story-title">{item.title}</h2>
                    <p className="section-copy">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-names">Axel &amp; Aivi</p>
        <p className="mt-3 text-sm uppercase tracking-[0.28em] text-goldSoft">{wedding.dateLong}</p>
        <a href="/" className="btn-primary mt-7">
          <ChevronLeft className="h-4 w-4" /> Retour à l'accueil
        </a>
      </footer>

      <a href={wedding.rsvpFormLink} target="_blank" rel="noreferrer" className="mobile-rsvp">
        <Send className="h-4 w-4" /> RSVP
      </a>
    </main>
  );
}

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  return pathname === '/histoire' ? <StoryPage /> : <HomePage />;
}

export default App;
