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
  location: 'Lieu à préciser',
  rsvpLink: '#rsvp',
  rsvpFormLink: 'https://forms.office.com/',
};

const heroImage =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80',
    alt: 'Wedding rings on cream fabric',
  },
  {
    src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=80',
    alt: 'Elegant wedding table with flowers',
  },
  {
    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80',
    alt: 'Wedding guests celebrating outdoors',
  },
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
    alt: 'Couple holding hands',
  },
  {
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
    alt: 'Romantic floral wedding bouquet',
  },
  {
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
    alt: 'Wedding reception with warm lights',
  },
];

const timeline = [
  {
    year: '2018',
    title: 'First hello',
    text: 'A rainy evening, one shared umbrella, and a conversation that lasted longer than either expected.',
  },
  {
    year: '2020',
    title: 'A home in the making',
    text: 'Coffee rituals, Sunday markets, and the small ordinary moments that quietly became everything.',
  },
  {
    year: '2024',
    title: 'The proposal',
    text: 'At sunset, surrounded by red roses and candlelight, one question made the future beautifully clear.',
  },
  {
    year: '2026',
    title: 'We say yes',
    text: 'Together with our favorite people, we begin the next chapter as husband and wife.',
  },
];

const schedule = [
  { time: '14:30', title: 'Guest arrival', icon: Heart },
  { time: '15:00', title: 'Ceremony', icon: Church },
  { time: '16:15', title: 'Champagne toast', icon: Sparkles },
  { time: '18:00', title: 'Dinner', icon: Utensils },
  { time: '21:00', title: 'First dance', icon: Music },
  { time: '00:30', title: 'Late night bites', icon: Clock3 },
];

const practicalInfo = [
  {
    icon: Car,
    title: 'Parking',
    text: 'Free parking is available at the venue entrance. Please follow the burgundy signs on arrival.',
  },
  {
    icon: Hotel,
    title: 'Accommodation',
    text: `A room block is reserved nearby under the names ${wedding.couple} until one month before the wedding.`,
  },
  {
    icon: Camera,
    title: 'Photos',
    text: 'During the ceremony, we kindly ask for an unplugged moment. Afterward, take all the photos you like.',
  },
];

function SectionHeader({ eyebrow, title, children, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {children ? <p className="section-copy mx-auto">{children}</p> : null}
    </div>
  );
}

function App() {
  return (
    <main className="overflow-hidden font-sans text-ink">
      <section className="relative flex min-h-screen items-center justify-center bg-wine text-cream">
        <div
          className="absolute inset-0 animate-slowZoom bg-cover bg-center opacity-55"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wine/65 via-wine/45 to-wine/80" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 text-center sm:px-8">
          <p className="animate-floatIn text-xs font-bold uppercase tracking-[0.42em] text-champagne">
            Together with their families
          </p>
          <h1 className="mt-8 animate-floatIn font-serif text-6xl font-semibold leading-none sm:text-8xl lg:text-9xl">
            {wedding.groom} <span className="block text-champagne">&</span> {wedding.bride}
          </h1>
          <div className="mx-auto mt-8 flex max-w-xl animate-floatIn flex-col items-center justify-center gap-4 border-y border-cream/35 py-6 text-sm font-semibold uppercase tracking-[0.25em] sm:flex-row sm:gap-8">
            <span>Samedi</span>
            <span className="font-serif text-3xl normal-case tracking-normal text-champagne">
              {wedding.date}
            </span>
            <span>{wedding.location}</span>
          </div>
          <a
            href={wedding.rsvpLink}
            className="mt-10 inline-flex animate-floatIn items-center justify-center rounded-full bg-cream px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-wine transition hover:-translate-y-1 hover:bg-champagne focus:outline-none focus:ring-4 focus:ring-cream/40"
          >
            RSVP
          </a>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="soft-card rounded-[8px] p-8 sm:p-10">
            <p className="eyebrow">Invitation</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-wine sm:text-5xl">
              With full hearts, we invite you to celebrate our wedding day.
            </h2>
          </div>
          <div className="text-base leading-8 text-ink/75">
            <p>
              Please join us for an afternoon of vows, dinner, music, and candlelit celebration as we promise forever to one another.
            </p>
            <p className="mt-5">
              Your presence is the gift we will remember most. We cannot wait to gather everyone we love in one beautiful place.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-porcelain">
        <div className="section-shell">
          <SectionHeader eyebrow="Our Story" title="A Love Written Slowly">
            From a first meeting to a lifetime promise, these are the small chapters that brought us here.
          </SectionHeader>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {timeline.map((item) => (
              <article key={item.year} className="soft-card rounded-[8px] p-6 transition hover:-translate-y-1">
                <p className="font-serif text-4xl font-semibold text-rosewood">{item.year}</p>
                <h3 className="mt-5 text-lg font-bold text-wine">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeader eyebrow="The Day" title="Ceremony & Reception" centered>
          One place for vows, dinner, dancing, and every toast in between.
        </SectionHeader>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="soft-card rounded-[8px] p-8">
            <Church className="h-9 w-9 text-rosewood" />
            <h3 className="mt-5 font-serif text-3xl font-semibold text-wine">Ceremony</h3>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-rosewood">15:00</p>
            <p className="mt-4 leading-7 text-ink/75">
              Chapelle Sainte-Claire, 18 Chemin des Oliviers, 13100 Aix-en-Provence.
            </p>
          </article>
          <article className="soft-card rounded-[8px] p-8">
            <MapPin className="h-9 w-9 text-rosewood" />
            <h3 className="mt-5 font-serif text-3xl font-semibold text-wine">Reception</h3>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-rosewood">17:00</p>
            <p className="mt-4 leading-7 text-ink/75">
              Domaine de la Roseraie, Route des Vignes, 13100 Aix-en-Provence.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-wine text-cream">
        <div className="section-shell">
          <SectionHeader eyebrow="Schedule" title="Wedding Day Rhythm" centered>
            A gentle flow for the celebration, from the first welcome to the final song.
          </SectionHeader>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {schedule.map(({ time, title, icon: Icon }) => (
              <div key={`${time}-${title}`} className="rounded-[8px] border border-cream/15 bg-cream/8 p-6">
                <Icon className="h-7 w-7 text-champagne" />
                <p className="mt-5 font-serif text-3xl font-semibold text-champagne">{time}</p>
                <p className="mt-2 font-semibold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
          <SectionHeader eyebrow="Dress Code" title="Elegant Garden Romance">
            We would love to see our guests in warm neutrals, soft creams, burgundy, dusty rose, deep red, and classic black. Please avoid white.
          </SectionHeader>
          <div className="soft-card rounded-[8px] p-8">
            <Shirt className="h-9 w-9 text-rosewood" />
            <div className="mt-6 flex flex-wrap gap-3">
              {['Cream', 'Burgundy', 'Dusty Rose', 'Champagne', 'Black'].map((tone) => (
                <span key={tone} className="rounded-full border border-wine/15 px-4 py-2 text-sm font-semibold text-wine">
                  {tone}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-porcelain">
        <div className="section-shell">
          <SectionHeader eyebrow="Gallery" title="Moments We Love" centered>
            A few glimpses of the mood we imagine for this celebration: soft light, red roses, and candlelit joy.
          </SectionHeader>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {galleryImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={`h-48 w-full rounded-[8px] object-cover shadow-soft transition duration-500 hover:scale-[1.02] sm:h-64 ${
                  index === 1 || index === 4 ? 'md:translate-y-8' : ''
                }`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="rsvp" className="section-shell">
        <div className="soft-card rounded-[8px] p-8 text-center sm:p-12">
          <p className="eyebrow">RSVP</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-wine sm:text-6xl">
            Say You Will Be There
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-ink/75">
            Please confirm your presence for {wedding.dateLong} so we can prepare your seat, your glass, and your place on the dance floor.
          </p>
          <a
            href={wedding.rsvpFormLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-wine px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-cream transition hover:-translate-y-1 hover:bg-rosewood focus:outline-none focus:ring-4 focus:ring-wine/20"
          >
            Open RSVP Form
          </a>
        </div>
      </section>

      <section className="bg-porcelain">
        <div className="section-shell">
          <SectionHeader eyebrow="Information" title="Practical Notes" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {practicalInfo.map(({ icon: Icon, title, text }) => (
              <article key={title} className="soft-card rounded-[8px] p-6">
                <Icon className="h-8 w-8 text-rosewood" />
                <h3 className="mt-5 text-lg font-bold text-wine">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid items-center gap-8 rounded-[8px] bg-wine p-8 text-cream sm:p-12 lg:grid-cols-[0.7fr_1fr]">
          <Gift className="h-16 w-16 text-champagne" />
          <div>
            <p className="eyebrow text-champagne">Gift</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">A Contribution to Our First Adventure</h2>
            <p className="mt-5 leading-8 text-cream/80">
              Your presence means everything. For those who wish, a wedding box will be available for contributions toward our honeymoon in Italy.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-wine/10 bg-cream px-5 py-10 text-center">
        <p className="font-serif text-3xl font-semibold text-wine">{wedding.couple}</p>
        <p className="mt-3 text-sm uppercase tracking-[0.25em] text-rosewood">{wedding.date}</p>
      </footer>
    </main>
  );
}

export default App;
