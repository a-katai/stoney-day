import Image from 'next/image';

const iconSize = 32;

const tracks = [
  { id: '44WxetHXSTxjpkTYbaRLMb', title: 'Missin U' },
  { id: '7xXTTLY5GVknapMWY6qxtO', title: 'O.D.' },
];

const videos = [
  { id: 'hrAKBqgm0Qc', title: 'Highway' },
  { id: '1BCGSNBn5zU', title: 'O.D.' },
  { id: 'Z88ocrYlTZ4', title: 'Jekyll/Experiment' },
];

const socialLinks = [
  {
    href: 'https://www.instagram.com/stoneyday/?utm_source=ig_web_button_share_sheet',
    label: 'Instagram',
    svg: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
    ),
  },
  {
    href: 'https://x.com/BritneyStoney',
    label: 'Twitter',
    svg: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08A4.48 4.48 0 0 0 12 9.5c0 .35.04.7.1 1.03A12.7 12.7 0 0 1 3.1 5.1a4.48 4.48 0 0 0 1.39 5.98c-.7-.02-1.36-.21-1.94-.53v.05a4.48 4.48 0 0 0 3.6 4.4c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.48 4.48 0 0 0 4.18 3.1A9 9 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.2 0-.39-.01-.58a9.1 9.1 0 0 0 2.24-2.3z"/>
      </svg>
    ),
  },
  {
    href: 'https://youtu.be/faJ6U-AoOZg?si=KPgy7U52dtzgiRQh',
    label: 'YouTube',
    svg: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.2 6 12 6 12 6s-6.2 0-7.86.06a2.75 2.75 0 0 0-1.94 1.94A28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.94 1.94C5.8 18 12 18 12 18s6.2 0 7.86-.06a2.75 2.75 0 0 0 1.94-1.94A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z"/>
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
      }}>
        <Image
          src="/DMT02846.TIF"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div
        style={{
          position: 'fixed',
          top: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(92vw, 400px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          zIndex: 1,
        }}
      >
        {tracks.map(track => (
          <iframe
            key={track.id}
            title={track.title}
            src={`https://open.spotify.com/embed/album/${track.id}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            style={{ borderRadius: 12, border: 'none' }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        ))}
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: 116,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(92vw, 400px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: 10,
          zIndex: 1,
        }}
      >
        {videos.map(video => (
          <button
            key={video.id}
            onClick={() => window.open(`https://youtu.be/${video.id}`, '_blank', 'noopener,noreferrer')}
            aria-label={video.title}
            style={{
              position: 'relative',
              width: '100%',
              minWidth: 0,
              height: 68,
              padding: 0,
              margin: 0,
              border: 'none',
              borderRadius: 10,
              overflow: 'hidden',
              cursor: 'pointer',
              background: 'none',
              transition: 'transform 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <span
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.28)',
              }}
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        ))}
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: 32,
          left: 0,
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          gap: 36,
          zIndex: 1,
        }}
      >
        {socialLinks.map(link => (
          <button
            key={link.label}
            onClick={() => window.open(link.href, '_blank', 'noopener,noreferrer')}
            aria-label={link.label}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              margin: 0,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              transition: 'transform 0.2s, opacity 0.2s',
              opacity: 0.92,
            }}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.12)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {link.svg}
          </button>
        ))}
      </div>
    </>
  );
}
