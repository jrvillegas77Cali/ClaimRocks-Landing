// SVG Icons + shared atomic UI bits
const GOLD = '#FFBB00';

const Icon = ({ name, size = 16, color = GOLD, strokeWidth = 1.2 }) => {
  const common = {
    width: size, height: size, viewBox: '0 0 16 16',
    fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round'
  };
  switch (name) {
    case 'bolt':
      return <svg {...common}><path d="M9 2L4 9h4l-1 5 5-7H8l1-5z" /></svg>;
    case 'clock':
      return <svg {...common}><circle cx="8" cy="8" r="6.5" /><path d="M8 5v3.5l2.5 1.5" /></svg>;
    case 'chart':
      return <svg {...common}><path d="M2 12l4-4 3 3 5-6" /><path d="M14 5h-3" /><path d="M14 5v3" /></svg>;
    case 'shield':
      return <svg {...common}><path d="M8 2L3 4.5v4c0 2.5 2.2 4.7 5 5.5 2.8-.8 5-3 5-5.5v-4L8 2z" /><path d="M5.5 8.5l2 2 3-3" /></svg>;
    case 'arrow':
      return <svg {...common} viewBox="0 0 14 10"><path d="M1 5h12M9 1l4 4-4 4" /></svg>;
    case 'star':
      return <svg {...common}><path d="M8 1.5l1.8 4.2 4.5.4-3.4 3 1 4.4L8 11.3 4.1 13.5l1-4.4-3.4-3 4.5-.4z" /></svg>;
    case 'check':
      return <svg {...common}><path d="M3 8.5l3.5 3.5L13 4.5" /></svg>;
    case 'dot':
      return <svg {...common}><circle cx="8" cy="8" r="3" fill={color} stroke="none" /></svg>;
    case 'sparkle':
      return <svg {...common}><path d="M8 1v5M8 10v5M1 8h5M10 8h5" /></svg>;
    case 'logo-spark':
      return <svg width={size} height={size} viewBox="0 0 16 16" fill={color}><path d="M9.5 1L3 9h4.2l-1 6 6.3-8.5H8.4l1.1-5.5z" /></svg>;
    // ── Process step icons ────────────────────────────────────────
    case 'envelope':
      return <svg {...common} viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="M3 6.5l9 6.5 9-6.5" /></svg>;
    case 'doc-search':
      return <svg {...common} viewBox="0 0 24 24"><path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8l-5-5z" /><path d="M14 3v5h5" /><circle cx="12" cy="14" r="2.5" /><path d="M14 16l2 2" /></svg>;
    case 'shield-check':
      return <svg {...common} viewBox="0 0 24 24"><path d="M12 3L4 6v6c0 4 3.4 7.6 8 9 4.6-1.4 8-5 8-9V6l-8-3z" /><path d="M8.5 12.5l2.5 2.5L15.5 10" /></svg>;
    case 'calculator':
      return <svg {...common} viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="1.5" /><rect x="8" y="6" width="8" height="3" rx="0.5" /><circle cx="9" cy="13" r="0.6" fill={color} stroke="none" /><circle cx="12" cy="13" r="0.6" fill={color} stroke="none" /><circle cx="15" cy="13" r="0.6" fill={color} stroke="none" /><circle cx="9" cy="16" r="0.6" fill={color} stroke="none" /><circle cx="12" cy="16" r="0.6" fill={color} stroke="none" /><circle cx="15" cy="16" r="0.6" fill={color} stroke="none" /></svg>;
    case 'signature':
      return <svg {...common} viewBox="0 0 24 24"><path d="M6 3h8l4 4v11.5A1.5 1.5 0 0 1 16.5 20h-10A1.5 1.5 0 0 1 5 18.5V4.5A1.5 1.5 0 0 1 6.5 3z" /><path d="M14 3v5h4" /><path d="M8 15c1.5-2 2.5-2 3-1s-0.5 2.5 1 2.5 2-2 2-2" /><path d="M7.5 17.5h8" /></svg>;
    // ── Lines (insurance verticals) icons ────────────────────────
    case 'house':
      return <svg {...common} viewBox="0 0 24 24"><path d="M4 11L12 4l8 7" /><path d="M6 10v9h12v-9" /><path d="M10 19v-5h4v5" /></svg>;
    case 'truck':
      return <svg {...common} viewBox="0 0 24 24"><rect x="2" y="7" width="11" height="9" rx="0.5" /><path d="M13 10h4l3 3v3h-7z" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></svg>;
    case 'umbrella':
      return <svg {...common} viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 18 0z" /><path d="M12 3v9" /><path d="M12 18v1.5a2 2 0 0 0 4 0" /></svg>;
    case 'car':
      return <svg {...common} viewBox="0 0 24 24"><path d="M4 16v-4l2-4.5A1.5 1.5 0 0 1 7.4 7h9.2a1.5 1.5 0 0 1 1.4.9L20 12v4" /><path d="M3 16h18" /><path d="M4 16v2h3v-2" /><path d="M17 16v2h3v-2" /><circle cx="7.5" cy="14" r="0.6" fill={color} stroke="none" /><circle cx="16.5" cy="14" r="0.6" fill={color} stroke="none" /></svg>;
    case 'bars':
      return <svg {...common} viewBox="0 0 24 24"><path d="M4 20V4" /><path d="M4 20h16" /><rect x="7" y="13" width="3" height="5" /><rect x="12" y="9" width="3" height="9" /><rect x="17" y="5" width="3" height="13" /></svg>;
    case 'network':
      return <svg {...common} viewBox="0 0 24 24"><circle cx="12" cy="5" r="2" /><circle cx="5" cy="17" r="2" /><circle cx="19" cy="17" r="2" /><circle cx="12" cy="13" r="1.5" /><path d="M12 7v4" /><path d="M11 14l-5 2" /><path d="M13 14l5 2" /></svg>;
    // ── Input icons ───────────────────────────────────────────────
    case 'user':
      return <svg {...common} viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" /></svg>;
    case 'phone':
      return <svg {...common} viewBox="0 0 24 24"><path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L16 14l4 1.5V19a1 1 0 0 1-1 1A15 15 0 0 1 4 5a1 1 0 0 1 1-1z" /></svg>;
    case 'mail':
      return <svg {...common} viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="M3 6.5l9 6.5 9-6.5" /></svg>;
    case 'logo-mark':
      // refined geometric bolt — clean at tiny sizes
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect x="1" y="1" width="22" height="22" rx="5" fill={color} />
          <path d="M13.2 5.5L7.5 13h4l-.9 5.5L17 11h-4l1.1-5.5h-.9z"
            fill="#080808" />
        </svg>);

    default:
      return null;
  }
};

// Wordmark — uses actual logo image
const Wordmark = ({ size = 16 }) => (
  <img
    src="assets/logo-wordmark.png"
    alt="ClaimRocks"
    style={{
      height: size * 1.5,
      width: 'auto',
      display: 'block',
    }}
  />
);

// Mini logo for tight UI — same image, smaller
const MiniLogo = ({ size = 11 }) => (
  <img
    src="assets/logo-wordmark.png"
    alt="ClaimRocks"
    style={{
      height: size * 1.5,
      width: 'auto',
      display: 'block',
    }}
  />
);


// Gold separator line
const GoldDivider = ({ width = '100%', opacity = 0.15, my = 32 }) =>
<div style={{
  width,
  height: 1,
  margin: `${my}px auto`,
  background: `linear-gradient(90deg, transparent, rgba(255,187,0,${opacity}), transparent)`
}} />;


// Mesh gradient background
const MeshGlow = ({ position = 'top-right', intensity = 0.06 }) => {
  const positions = {
    'top-right': { top: '-200px', right: '-200px' },
    'top-left': { top: '-200px', left: '-200px' },
    'bottom-right': { bottom: '-200px', right: '-200px' },
    'bottom-left': { bottom: '-200px', left: '-200px' },
    'center-right': { top: '20%', right: '-300px' }
  };
  return (
    <div style={{
      position: 'absolute',
      width: 700,
      height: 700,
      borderRadius: '50%',
      background: `radial-gradient(circle, rgba(255,187,0,${intensity}) 0%, rgba(255,149,0,${intensity * 0.6}) 30%, transparent 70%)`,
      pointerEvents: 'none',
      zIndex: 0,
      filter: 'blur(40px)',
      ...positions[position]
    }} />);

};

// Grain
const Grain = () =>
<div className="grain" style={{
  backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'2\' stitchTiles=\'stitch\'/><feColorMatrix type=\'saturate\' values=\'0\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'1\'/></svg>")'
}} />;


// Section eyebrow / tag — standardized: dash + small caps in gold
const Eyebrow = ({ children }) =>
<div style={{
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  marginBottom: 24,
  color: '#FFBB00',
}}>
    <span aria-hidden="true" style={{
      display: 'inline-block',
      width: 22,
      height: 1.5,
      background: '#FFBB00',
      borderRadius: 1,
    }} />
    <span style={{ color: '#FFBB00' }}>{children}</span>
  </div>;


// FadeIn wrapper
const FadeIn = ({ children, delay = 0, threshold = 0.15, as: As = 'div', ...rest }) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            obs.disconnect();
          }
        });
      },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay, threshold]);
  return (
    <As ref={ref} className={`fade-in${visible ? ' in' : ''}`} {...rest}>
      {children}
    </As>);

};

// Button primitives
const ButtonPrimary = ({ children, onClick, style }) =>
<button onClick={onClick} style={{
  background: 'linear-gradient(180deg, #FFD94A 0%, #FFBB00 100%)',
  color: '#0A0A0A',
  border: 'none',
  padding: '15px 26px',
  fontSize: 13,
  fontWeight: 800,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  cursor: 'pointer',
  borderRadius: 8,
  boxShadow: '0 8px 32px rgba(255,187,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  ...style
}}
onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'translateY(-1px)';
  e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,187,0,0.35), inset 0 1px 0 rgba(255,255,255,0.3)';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = '';
  e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,187,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)';
}}>
  
    {children}
  </button>;


const ButtonSecondary = ({ children, onClick, style }) =>
<button onClick={onClick} style={{
  background: 'transparent',
  color: '#FFFFFF',
  border: '1px solid rgba(255,255,255,0.4)',
  padding: '12px 24px',
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  cursor: 'pointer',
  borderRadius: 8,
  transition: 'border-color 0.25s ease, background 0.25s ease',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  ...style
}}
onMouseEnter={(e) => {
  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)';
  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
  e.currentTarget.style.background = 'transparent';
}}>
  
    {children}
  </button>;


const ButtonGhostGold = ({ children, onClick, style }) =>
<button onClick={onClick} style={{
  background: 'transparent',
  color: GOLD,
  border: `1px solid ${GOLD}`,
  padding: '10px 18px',
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  cursor: 'pointer',
  borderRadius: 6,
  transition: 'all 0.3s ease',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  ...style
}}
onMouseEnter={(e) => {
  e.currentTarget.style.background = 'rgba(255,187,0,0.08)';
  e.currentTarget.style.boxShadow = '0 0 24px rgba(255,187,0,0.15)';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.background = 'transparent';
  e.currentTarget.style.boxShadow = 'none';
}}>
  
    {children}
  </button>;


// Typewriter — types/deletes phrases on infinite loop.
// Cursor only visible while typing or deleting; hidden during the read pause.
const Typewriter = ({ phrases, typeSpeed = 55, deleteSpeed = 22, holdMs = 3800 }) => {
  const [phraseIdx, setPhraseIdx] = React.useState(0);
  const [chars, setChars] = React.useState(0);
  const [phase, setPhase] = React.useState('typing'); // typing | holding | deleting

  React.useEffect(() => {
    const current = phrases[phraseIdx];
    let t;

    if (phase === 'typing') {
      if (chars < current.length) {
        t = setTimeout(() => setChars(chars + 1), typeSpeed);
      } else {
        // Done typing — transition to holding (cursor hides)
        t = setTimeout(() => setPhase('holding'), 0);
      }
    } else if (phase === 'holding') {
      t = setTimeout(() => setPhase('deleting'), holdMs);
    } else if (phase === 'deleting') {
      if (chars > 0) {
        t = setTimeout(() => setChars(chars - 1), deleteSpeed);
      } else {
        setPhraseIdx((phraseIdx + 1) % phrases.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(t);
  }, [chars, phase, phraseIdx, phrases, typeSpeed, deleteSpeed, holdMs]);

  const text = phrases[phraseIdx].slice(0, chars);
  // longest phrase reserves the box dimensions
  const longest = phrases.reduce((a, b) => (b.length > a.length ? b : a), '');

  const goldFill = {
    background: 'linear-gradient(135deg, #FFD94A 0%, #FFBB00 50%, #FF9500 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
  };

  // Cursor only visible while actively typing or deleting
  const showCursor = phase === 'typing' || phase === 'deleting';

  return (
    <span style={{ position: 'relative', display: 'inline-block', verticalAlign: 'top' }}>
      {/* Ghost — locks width & height to longest possible state */}
      <span aria-hidden="true" style={{
        visibility: 'hidden',
        whiteSpace: 'normal',
        pointerEvents: 'none',
        display: 'inline-block',
      }}>{longest}</span>
      {/* Live typing layer — owns its own gradient fill */}
      <span style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        whiteSpace: 'normal',
        ...goldFill,
      }}>
        {text}
        {showCursor && (
          <span style={{
            display: 'inline-block',
            width: '0.06em',
            height: '0.95em',
            verticalAlign: '-0.12em',
            marginLeft: '0.04em',
            background: 'linear-gradient(135deg, #FFD94A, #FF9500)',
            WebkitTextFillColor: 'initial',
            color: 'initial',
            animation: 'cr-blink 0.85s steps(2) infinite',
            borderRadius: 1,
          }} />
        )}
      </span>
    </span>
  );
};

Object.assign(window, { Typewriter });

Object.assign(window, {
  Icon, GoldDivider, MeshGlow, Grain, Eyebrow, FadeIn,
  ButtonPrimary, ButtonSecondary, ButtonGhostGold, Wordmark, MiniLogo, GOLD
});