// All page sections
const GOLD_C = '#FFBB00';

// =====================================================
// NAVBAR
// =====================================================
const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(8,8,8,0.75)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
      transition: 'box-shadow 0.3s ease',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        paddingTop: 18,
        paddingBottom: 18,
      }}>
        <Wordmark size={15} />

        <div style={{
          display: 'flex',
          gap: 32,
          fontSize: 13,
          fontWeight: 500,
          color: '#999',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
        }} className="navbar-links">
          {['Cómo funciona', 'Líneas', 'Nosotros', 'FAQ'].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`}
              style={{ color: '#999', textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
            >
              {l}
            </a>
          ))}
        </div>

        <ButtonGhostGold
          onClick={() => document.getElementById('fundador')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          Ser cliente fundador <Icon name="arrow" size={11} color={GOLD_C} />
        </ButtonGhostGold>
      </div>
    </nav>
  );
};

// =====================================================
// HERO
// =====================================================
const Hero = () => {
  const stats = [
    { value: '< 5 min', label: 'Primer análisis' },
    { value: '−80%', label: 'Tiempo en informes' },
    { value: '×3', label: 'Capacidad operativa' },
    { value: '0%', label: 'Variación de criterio' },
  ];

  return (
    <section style={{
      position: 'relative',
      paddingTop: 130,
      paddingBottom: 88,
      overflow: 'hidden',
      background: '#111109',
    }}>
      <Grain />
      <MeshGlow position="top-right" intensity={0.08} />
      <MeshGlow position="bottom-left" intensity={0.04} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 88,
          alignItems: 'center',
        }} className="hero-grid">
          {/* Left text column */}
          <div>
            <FadeIn>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 32,
              }}>
                <span style={{
                  width: 36,
                  height: 1,
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,187,0,0.6) 100%)',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 17,
                  background: 'linear-gradient(135deg, #FFD94A 0%, #FFBB00 60%, #FF9500 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.005em',
                  lineHeight: 1.2,
                }}>Humanizando los siniestros con IA</span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 style={{
                fontSize: 'clamp(38px, 5vw, 64px)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: 18,
                fontWeight: 800,
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}>
                <span style={{
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: '#E8E0D0',
                  display: 'block',
                  marginBottom: 4,
                }}>El costo real de un siniestro</span>
                <span style={{
                  color: '#FFFFFF',
                  display: 'block',
                  marginBottom: 4,
                }}>no es la pérdida.</span>
                <span style={{
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #FFD94A 0%, #FFBB00 50%, #FF9500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'block',
                  minHeight: '1.1em',
                }}>
                  <Typewriter phrases={[
                    'Es la ineficiencia.',
                    'Es el tiempo perdido.',
                    'Es la falta de atención al cliente.',
                  ]} />
                </span>
              </h1>
            </FadeIn>

            {/* ICP qualifier */}
            <FadeIn delay={150}>
              <div style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#FFBB00',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                marginBottom: 28,
                lineHeight: 1.5,
              }}>
                Para Directores y Jefes de Siniestros · Aseguradoras en LATAM
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <p style={{
                color: 'rgba(255,255,255,0.78)',
                fontSize: 17,
                lineHeight: 1.7,
                marginBottom: 36,
                maxWidth: 480,
              }}>
                ClaimRocks entrega el primer análisis de ajuste en menos de 5 minutos.
                Reserva justificada, auditable y clara.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
                <ButtonPrimary onClick={() => document.getElementById('fundador')?.scrollIntoView({ behavior: 'smooth' })}>
                  Unirme como cliente fundador <Icon name="arrow" size={12} color="#0A0A0A" />
                </ButtonPrimary>
                <ButtonSecondary onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}>
                  Ver cómo funciona
                </ButtonSecondary>
              </div>
              <div style={{ fontSize: 10, color: '#555', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Primeros clientes fundadores · Cupos limitados
              </div>
            </FadeIn>

            {/* Stats grid */}
            <FadeIn delay={400}>
              <div className="hero-stats" style={{
                marginTop: 56,
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                border: '1px solid #181818',
                borderRadius: 14,
                overflow: 'visible',
                background: 'linear-gradient(180deg, rgba(20,20,20,0.4) 0%, rgba(12,12,12,0.4) 100%)',
                backdropFilter: 'blur(8px)',
              }}>
                {stats.map((s, i) => {
                  const isLast = i === stats.length - 1;
                  return (
                    <div key={i} className="hero-stat-cell" style={{
                      padding: '28px 22px 24px',
                      borderRight: isLast ? 'none' : '1px solid #181818',
                      position: 'relative',
                    }}>
                      {/* Index */}
                      <div style={{
                        position: 'absolute',
                        top: 14,
                        right: 16,
                        fontSize: 9,
                        fontFamily: 'DM Mono, monospace',
                        color: '#3A3A3A',
                        letterSpacing: '0.12em',
                      }}>0{i + 1}</div>

                      <div style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: 34,
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: 8,
                        letterSpacing: '-0.035em',
                        lineHeight: 1,
                        fontVariantNumeric: 'tabular-nums',
                      }}>{s.value}</div>
                      <div style={{
                        fontSize: 12.5,
                        color: 'rgba(255,255,255,0.7)',
                        fontWeight: 500,
                        letterSpacing: '0.005em',
                      }}>{s.label}</div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>

          {/* Right mockup column */}
          <FadeIn delay={200}>
            <ProductMockup />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// PROBLEMA
// =====================================================
const Problema = () => {
  const cards = [
    { value: '5+ días', text: 'Para el primer informe de ajuste. Eso es tiempo que su asegurado lleva esperando  y sin información.' },
    { value: '+80%', text: 'Del tiempo de su equipo va en redactar informes. No en decidir. No en cerrar.' },
    { value: '±30%', text: 'De variación en criterio entre ajustadores del mismo caso. Eso no resiste auditoría.' },
  ];

  return (
    <section style={{
      background: '#1a1a0e',
      padding: '88px 0',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <Grain />
      <MeshGlow position="top-left" intensity={0.04} />

      <div className="container">
        <FadeIn>
          <Eyebrow>El problema</Eyebrow>
        </FadeIn>

        <FadeIn delay={80}>
          <h2 style={{
            fontSize: 'clamp(32px, 4.2vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 64,
            maxWidth: 800,
            color: '#fff',
          }}>
            Su área de siniestros está perdiendo<br />
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>tiempo y clientes que no recupera.</span>
          </h2>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          marginBottom: 60,
        }} className="problem-grid">
          {cards.map((c, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="hover-card" style={{
                background: '#161616',
                border: '1px solid #1A1A1A',
                borderRadius: 12,
                padding: 32,
                height: '100%',
                transition: 'border-color 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255,187,0,0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#1A1A1A'}
              >
                {/* Index marker */}
                <div style={{
                  position: 'absolute',
                  top: 22,
                  right: 26,
                  fontFamily: 'DM Mono, monospace',
                  fontSize: 10,
                  color: '#3A3A3A',
                  letterSpacing: '0.1em',
                }}>0{i + 1}</div>

                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: 72,
                  color: '#E8E0D0',
                  marginTop: 8,
                  marginBottom: 30,
                  letterSpacing: '-0.025em',
                  lineHeight: 1,
                }}>{c.value}</div>

                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 15, lineHeight: 1.65 }}>{c.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <p style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.75)',
            fontSize: 16,
            lineHeight: 1.75,
            maxWidth: 560,
            margin: '0 auto',
            fontStyle: 'italic',
          }}>
            El modelo tradicional depende de personas, criterio subjetivo y procesos manuales.
            Cada día que tarda un siniestro es un costo que su compañía absorbe en silencio.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

// =====================================================
// CALCULATOR SECTION
// =====================================================
const CalculatorSection = () => (
  <section style={{
    padding: '88px 0',
    background: '#111109',
    position: 'relative',
    overflow: 'hidden',
    borderTop: '1px solid rgba(255,255,255,0.06)',
  }}>
    <Grain />
    <MeshGlow position="center-right" intensity={0.05} />

    <div className="container">
      <FadeIn>
        <Eyebrow>Calcule su ahorro</Eyebrow>
      </FadeIn>

      <FadeIn delay={80}>
        <h2 style={{
          fontSize: 'clamp(32px, 4.2vw, 52px)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: 18,
          color: '#fff',
        }}>
          ¿Cuánto le está costando<br />
          <span style={{
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#E8E0D0',
          }}>el modelo tradicional?</span>
        </h2>
      </FadeIn>

      <FadeIn delay={160}>
        <p style={{
          color: 'rgba(255,255,255,0.78)',
          fontSize: 16,
          lineHeight: 1.7,
          marginBottom: 48,
          maxWidth: 580,
        }}>
          Mueva el slider y vea en tiempo real el ahorro mensual de su operación.
        </p>
      </FadeIn>

      <FadeIn delay={240}>
        <SavingsCalculator />
      </FadeIn>
    </div>
  </section>
);

// =====================================================
// CÓMO FUNCIONA
// =====================================================
const ComoFunciona = () => {
  const phases = [
    { n: '01', title: 'EXTRAE', icon: 'envelope', text: 'Póliza · vigencia · deducibles · exclusiones' },
    { n: '02', title: 'ETIQUETA', icon: 'doc-search', text: 'Línea de negocio · tipo de cobertura · completitud documental' },
    { n: '03', title: 'ANALIZA', icon: 'shield-check', text: '3 marcos normativos · consistencia documental · inconsistencias en el relato' },
    { n: '04', title: 'CALCULA', icon: 'calculator', text: 'Reserva técnica · pérdida ajustada · deducible aplicable · neto a pagar' },
    { n: '05', title: 'ENTREGA', icon: 'signature', text: 'A · Informe parcial\nB · Informe completo + liquidación\nC · Informe completo + borrador de objeción' },
  ];

  const lines = [
    { name: 'Hogar y Copropiedades', icon: 'house', state: 'active' },
    { name: 'Transporte y Carga', icon: 'truck', state: 'soon' },
    { name: 'Responsabilidad Civil', icon: 'umbrella', state: 'soon' },
    { name: 'Autos', icon: 'car', state: 'soon' },
    { name: 'Líneas Financieras', icon: 'bars', state: 'soon' },
    { name: 'Reaseguro', icon: 'network', state: 'special', subtext: 'Agente diseñado para reaseguradoras' },
  ];

  return (
    <section id="como-funciona" style={{
      padding: '88px 0',
      background: '#1a1a0e',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <Grain />
      <MeshGlow position="bottom-right" intensity={0.05} />

      <div className="container">
        <FadeIn>
          <Eyebrow>El motor</Eyebrow>
        </FadeIn>

        <FadeIn delay={80}>
          <h2 style={{
            fontSize: 'clamp(32px, 4.2vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 18,
            color: '#fff',
          }}>
            De la notificación a la recomendación.<br />
            <span style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#E8E0D0',
            }}>En minutos, no en semanas.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={160}>
          <p style={{
            color: 'rgba(255,255,255,0.78)',
            fontSize: 16,
            lineHeight: 1.7,
            marginBottom: 56,
            maxWidth: 600,
          }}>
            Cinco fases. Siempre en ese orden. Sin intervención manual hasta la aprobación final.
          </p>
        </FadeIn>

        {/* Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 16,
          marginBottom: 56,
        }} className="phases-grid">
          {phases.map((p, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="hover-card" style={{
                background: '#0E0E0E',
                border: '1px solid #1A1A1A',
                borderRadius: 12,
                padding: '28px 22px',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255,187,0,0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#1A1A1A'}
              >
                {/* Watermark number */}
                <div style={{
                  position: 'absolute',
                  top: -10,
                  right: -8,
                  fontSize: 100,
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.025)',
                  lineHeight: 1,
                  letterSpacing: '-0.05em',
                  pointerEvents: 'none',
                }}>{p.n}</div>
                <div style={{ position: 'relative' }}>
                  {/* Step icon — 28px line icon, top-left */}
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    border: '1px solid rgba(255,187,0,0.2)',
                    background: 'rgba(255,187,0,0.04)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 18,
                  }}>
                    <Icon name={p.icon} size={22} color={GOLD_C} strokeWidth={1.3} />
                  </div>
                  <div style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: 11,
                    color: GOLD_C,
                    marginBottom: 10,
                    fontWeight: 500,
                  }}>{p.n}</div>
                  <div style={{
                    fontSize: 14,
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: '#fff',
                    marginBottom: 14,
                  }}>{p.title}</div>
                  <p style={{
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.78)',
                    lineHeight: 1.65,
                    whiteSpace: 'pre-line',
                  }}>{p.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Confidence note */}
        <FadeIn delay={300}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <GoldDivider width="80px" opacity={0.4} my={16} />
            <p style={{
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.78)',
              fontSize: 15,
              lineHeight: 1.7,
              maxWidth: 580,
              margin: '0 auto',
              fontFamily: 'Playfair Display, serif',
            }}>
              Ninguna comunicación sale sin la aprobación del profesional a cargo.<br />
              La IA acelera — el experto decide siempre.
            </p>
          </div>
        </FadeIn>

        {/* Honest line — pratfall */}
        <FadeIn>
          <div style={{
            borderTop: '1px solid #1A1A1A',
            paddingTop: 40,
            marginBottom: 40,
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: 14,
              color: '#777',
              lineHeight: 1.75,
              maxWidth: 720,
              margin: '0 auto',
            }} id="líneas">
              Hoy operamos en <span style={{ color: '#fff', fontWeight: 600 }}>Hogar y Copropiedades</span>. Transporte, RC, Autos y Líneas Financieras
              llegan en los próximos meses. Y tenemos un agente muy especial diseñado para reaseguradoras.
              <br />
              Cada portafolio es diferente — <span style={{ color: GOLD_C, fontStyle: 'italic', fontFamily: 'Playfair Display, serif' }}>hablemos</span>.
            </p>
          </div>
        </FadeIn>

        {/* Lines grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 18,
        }} className="lines-grid">
          {lines.map((l, i) => {
            const isActive = l.state === 'active';
            const isSpecial = l.state === 'special';
            const isSoon = l.state === 'soon';

            return (
              <FadeIn key={i} delay={i * 60}>
                <div style={{
                  background: isSpecial ? 'linear-gradient(135deg, #161104 0%, #0E0E0E 100%)' : '#0E0E0E',
                  border: isActive
                    ? '1px solid rgba(255,187,0,0.4)'
                    : isSpecial
                      ? '1px solid rgba(255,187,0,0.3)'
                      : '1px solid #1A1A1A',
                  borderRadius: 12,
                  padding: '24px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  minHeight: 86,
                  opacity: isSoon ? 0.4 : 1,
                  transform: isSoon ? 'scale(0.97)' : 'none',
                  transformOrigin: 'center',
                  transition: 'opacity 0.3s ease, border-color 0.3s ease, transform 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: isActive ? '0 0 30px rgba(255,187,0,0.06)' : isSpecial ? '0 0 40px rgba(255,187,0,0.08)' : 'none',
                }}>
                  {isSpecial && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle at top right, rgba(255,187,0,0.06), transparent 60%)',
                      pointerEvents: 'none',
                    }} />
                  )}
                  {/* Line icon — reduced opacity when soon */}
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 9,
                    border: isActive
                      ? '1px solid rgba(34,197,94,0.25)'
                      : isSpecial
                        ? '1px solid rgba(255,187,0,0.3)'
                        : '1px solid rgba(255,255,255,0.08)',
                    background: isActive
                      ? 'rgba(34,197,94,0.05)'
                      : isSpecial
                        ? 'rgba(255,187,0,0.06)'
                        : 'rgba(255,255,255,0.02)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    opacity: isSoon ? 0.35 : 1,
                    position: 'relative',
                  }}>
                    <Icon
                      name={l.icon}
                      size={20}
                      color={isActive ? '#22C55E' : isSpecial ? GOLD_C : '#E8E0D0'}
                      strokeWidth={1.4}
                    />
                  </div>
                  <div style={{ position: 'relative', flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: l.subtext ? 6 : 0,
                      letterSpacing: '-0.01em',
                    }}>{l.name}</div>
                    {l.subtext && (
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{l.subtext}</div>
                    )}
                  </div>
                  <div style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: isActive ? '#22C55E' : isSpecial ? GOLD_C : '#666',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: isActive
                      ? 'rgba(34,197,94,0.1)'
                      : isSpecial
                        ? 'rgba(255,187,0,0.1)'
                        : 'rgba(255,255,255,0.03)',
                    padding: '5px 10px',
                    borderRadius: 4,
                    flexShrink: 0,
                    position: 'relative',
                    whiteSpace: 'nowrap',
                  }}>
                    {isActive && <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E' }} />}
                    {isSpecial && <Icon name="star" size={9} color={GOLD_C} />}
                    {isActive ? 'Disponible' : isSpecial ? 'Especial' : 'Próximamente'}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// =====================================================
// INTERCAMBIO
// =====================================================
const Intercambio = () => {
  const dan = [
    'El aviso del siniestro (el mismo correo que ya usan hoy)',
    'El condicionado particular del asegurado',
    'Los documentos disponibles al momento (fotos, denuncia, cotizaciones)',
    'Su aprobación final antes de cualquier comunicación externa',
  ];
  const reciben = [
    'Análisis de cobertura completo',
    'Reserva técnica justificada y auditable',
    'Reporte en su formato estándar y ajustable',
    'Comunicación lista para aprobar (solicitud de docs, finiquito u objeción)',
  ];

  return (
    <section style={{
      padding: '88px 0',
      background: '#111109',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <Grain />
      <MeshGlow position="top-right" intensity={0.04} />

      <div className="container">
        <FadeIn>
          <Eyebrow>El intercambio</Eyebrow>
        </FadeIn>

        <FadeIn delay={80}>
          <h2 style={{
            fontSize: 'clamp(32px, 4.2vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 64,
            color: '#fff',
            maxWidth: 880,
          }}>
            El mismo correo que hoy le envían<br />
            a un ajustador externo.{' '}
            <span style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#E8E0D0',
            }}>Solo que ahora regresa en minutos.</span>
          </h2>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1px 1fr',
          gap: 96,
          alignItems: 'stretch',
        }} className="exchange-grid">
          <FadeIn delay={100}>
            <div>
              <div style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#888',
                marginBottom: 28,
              }}>Lo que nos envían</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {dan.map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{
                      color: '#666',
                      fontFamily: 'DM Mono, monospace',
                      fontSize: 14,
                      flexShrink: 0,
                      marginTop: 2,
                    }}>→</span>
                    <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.65 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div style={{
            width: 1,
            background: 'linear-gradient(180deg, transparent, rgba(255,187,0,0.2), transparent)',
          }} className="exchange-divider" />

          <FadeIn delay={250}>
            <div>
              <div style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: GOLD_C,
                marginBottom: 28,
              }}>Lo que reciben</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {reciben.map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{
                      color: GOLD_C,
                      fontFamily: 'DM Mono, monospace',
                      fontSize: 14,
                      flexShrink: 0,
                      marginTop: 2,
                    }}>→</span>
                    <span style={{ color: '#fff', fontSize: 15, lineHeight: 1.65 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Navbar, Hero, Problema, CalculatorSection, ComoFunciona, Intercambio });
