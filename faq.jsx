// FAQ — Preguntas frecuentes / objeciones
const GOLD_F = '#FFBB00';

const FAQ_ITEMS = [
  {
    q: '¿Qué pasa si el análisis está mal? ¿Quién responde?',
    a: 'Siempre hay una persona revisando la recomendación. ClaimRocks presenta la recomendación, la empresa toma la decisión. La responsabilidad técnica y legal sigue siendo exactamente como hoy. Lo que cambia es que llegan a esa decisión en minutos, con sustento documentado, no en días con criterio subjetivo.',
    tag: 'Responsabilidad',
  },
  {
    q: '¿Qué pasa con la información confidencial de nuestros asegurados?',
    a: 'Firmamos NDA antes de cualquier piloto. Los datos se procesan bajo estándares de seguridad internacionales y nunca se comparten con terceros. Cada interacción queda en el log de auditoría completo — quién envió qué, cuándo, y qué produjo el sistema. Si su compañía tiene requerimientos específicos de la Superfinanciera o del regulador local, los revisamos en la conversación de onboarding.',
    tag: 'Seguridad',
  },
  {
    q: '¿Necesitamos integrar ClaimRocks con nuestro sistema core?',
    a: 'No. Para empezar, el canal es el mismo correo que hoy le envían a un ajustador externo. Sin APIs, sin proyectos de IT, sin reuniones con el área de sistemas. Si en el futuro quieren integración vía API, la tenemos. Pero el día uno es literalmente un correo.',
    tag: 'Implementación',
  },
  {
    q: '¿Por qué no desarrollar esto internamente?',
    a: 'Su equipo puede hacerlo. La pregunta es en cuánto tiempo y con qué nivel de confianza desde el día uno. Los errores que cometerán en el camino —en lógica normativa, en manejo de condicionados, en edge cases del mercado— ya los recorrimos nosotros. Es una herramienta de claims, para claims, creada por claims.',
    tag: 'Build vs. buy',
  },
  {
    q: 'Cualquier herramienta de IA puede hacer esto.',
    a: 'ChatGPT puede resumir un documento. ClaimRocks lee el condicionado particular de su asegurado, lo cruza contra tres marcos normativos del mercado, detecta inconsistencias en el relato, calcula la reserva técnica con deducible aplicable y produce un borrador de comunicación en el formato que ya usan sus equipos. Son cosas distintas.',
    tag: 'Diferenciación',
  },
  {
    q: 'Somos reaseguradora. ¿ClaimRocks aplica para nuestra operación?',
    a: 'Sí, y de manera diferente. Tenemos un agente diseñado específicamente para reaseguradoras: consistencia entre el reporte de la cedente, la documentación de soporte y el cobro de honorarios. Es una conversación distinta a la de las aseguradoras directas. Si quieren explorarla, hablemos.',
    tag: 'Reaseguro',
  },
];

const FAQItem = ({ n, q, a, tag, open, onToggle }) => {
  const contentRef = React.useRef(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (!contentRef.current) return;
    setHeight(open ? contentRef.current.scrollHeight : 0);
  }, [open, a]);

  return (
    <div
      style={{
        background: open ? '#161616' : 'rgba(22,22,22,0.55)',
        border: `1px solid ${open ? 'rgba(255,187,0,0.32)' : '#1A1A1A'}`,
        borderRadius: 12,
        transition: 'border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
        boxShadow: open ? '0 0 40px rgba(255,187,0,0.05)' : 'none',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        if (!open) e.currentTarget.style.borderColor = 'rgba(255,187,0,0.2)';
      }}
      onMouseLeave={(e) => {
        if (!open) e.currentTarget.style.borderColor = '#1A1A1A';
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          padding: '24px 28px',
          display: 'grid',
          gridTemplateColumns: '52px 1fr auto',
          gap: 20,
          alignItems: 'center',
          cursor: 'pointer',
          textAlign: 'left',
          color: '#fff',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}
      >
        <div
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: 11,
            fontWeight: 500,
            color: GOLD_F,
            letterSpacing: '0.08em',
          }}
        >
          {n}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: open ? GOLD_F : '#555',
              transition: 'color 0.3s ease',
            }}
          >
            {tag}
          </div>
          <div
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '-0.01em',
              lineHeight: 1.35,
            }}
          >
            {q}
          </div>
        </div>

        <div
          aria-hidden="true"
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            border: `1px solid ${open ? 'rgba(255,187,0,0.5)' : 'rgba(255,255,255,0.12)'}`,
            background: open ? 'rgba(255,187,0,0.08)' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            flexShrink: 0,
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            style={{
              transition: 'transform 0.3s ease',
              transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          >
            <line x1="6" y1="2" x2="6" y2="10" stroke={open ? GOLD_F : '#999'} strokeWidth="1.4" strokeLinecap="round" />
            <line x1="2" y1="6" x2="10" y2="6" stroke={open ? GOLD_F : '#999'} strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
      </button>

      <div
        style={{
          height,
          transition: 'height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
        }}
      >
        <div
          ref={contentRef}
          style={{
            padding: '0 28px 28px 100px',
          }}
          className="faq-answer-body"
        >
          <div
            style={{
              borderLeft: `2px solid ${GOLD_F}`,
              paddingLeft: 18,
              color: 'rgba(255,255,255,0.78)',
              fontSize: 15,
              lineHeight: 1.7,
              letterSpacing: '-0.005em',
            }}
          >
            {a}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = React.useState(0);

  return (
    <section
      id="faq"
      style={{
        padding: '100px 0',
        background: '#111109',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Grain />
      <MeshGlow position="top-right" intensity={0.04} />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.4fr',
            gap: 80,
            alignItems: 'flex-start',
          }}
          className="faq-grid"
        >
          {/* LEFT — Heading */}
          <div style={{ position: 'sticky', top: 100 }} className="faq-left">
            <FadeIn>
              <Eyebrow>Preguntas frecuentes</Eyebrow>
            </FadeIn>

            <FadeIn delay={80}>
              <h2
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  lineHeight: 1.05,
                  marginBottom: 22,
                  color: '#fff',
                }}
              >
                Las objeciones{' '}
                <span
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: '#E8E0D0',
                  }}
                >
                  que ya escuchamos.
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={160}>
              <p
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: 15,
                  lineHeight: 1.7,
                  marginBottom: 28,
                  maxWidth: 380,
                }}
              >
                Si está evaluando ClaimRocks para su operación, probablemente tenga
                alguna de estas preguntas. Aquí responde el equipo, sin rodeos.
              </p>
            </FadeIn>

            <FadeIn delay={240}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '14px 16px',
                  background: 'rgba(255,187,0,0.04)',
                  border: '1px solid rgba(255,187,0,0.18)',
                  borderRadius: 10,
                  maxWidth: 380,
                }}
              >
                <Icon name="mail" size={16} color={GOLD_F} strokeWidth={1.4} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: '#888',
                    }}
                  >
                    ¿Otra pregunta?
                  </div>
                  <a
                    href="mailto:jose@claimrocks.com"
                    style={{
                      fontSize: 13,
                      color: '#fff',
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = GOLD_F)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                  >
                    jose@claimrocks.com
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT — Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }} className="faq-right">
            {FAQ_ITEMS.map((it, i) => (
              <FadeIn key={i} delay={i * 50}>
                <FAQItem
                  n={String(i + 1).padStart(2, '0')}
                  q={it.q}
                  a={it.a}
                  tag={it.tag}
                  open={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .faq-left {
            position: static !important;
          }
        }
        @media (max-width: 600px) {
          .faq-answer-body {
            padding: 0 20px 22px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { FAQ });
