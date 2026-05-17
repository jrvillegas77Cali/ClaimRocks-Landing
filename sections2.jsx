// Remaining sections: PorQue, FounderCTA, Footer + App

const GOLD_A = '#FFBB00';

// =====================================================
// POR QUÉ CLAIMROCKS
// =====================================================
const PorQue = () => {
  const cards = [
  { n: '01', title: 'Construido por expertos', text: '17 años de campo en Indemnizaciones en LATAM. AIG, Chubb, BBVA. Entendemos el condicionado, el Código de Comercio y cómo trabajan los reguladores.' },
  { n: '02', title: 'Reservas que resisten auditoría', text: 'Cada cálculo lo produce código determinista — no opinión. Sustento técnico documentado en cada caso.' },
  { n: '03', title: 'El humano siempre decide', text: 'Ninguna comunicación externa sale sin la aprobación del profesional. ClaimRocks acelera el análisis. Su equipo firma la decisión.' }];


  return (
    <section id="nosotros" style={{
      paddingTop: 100,
      paddingBottom: 60,
      background: '#1a1a0e',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.06)'
    }}>
      <Grain />
      <MeshGlow position="bottom-left" intensity={0.05} />

      <div className="container">
        <FadeIn>
          <Eyebrow>La diferencia</Eyebrow>
        </FadeIn>

        <FadeIn delay={80}>
          <h2 style={{
            fontSize: 'clamp(32px, 4.2vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 16,
            color: '#fff'
          }}>
            No es otro software de seguros.<br />
            <span style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#E8E0D0'
            }}>Una ventaja construida desde el campo.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={160}>
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic',
            fontSize: 18,
            background: 'linear-gradient(135deg, #FFD94A 0%, #FFBB00 50%, #FF9500 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 56
          }}>
            De Claims, para Claims. Hecho por Claims.
          </div>
        </FadeIn>

        {/* 3 standard cards + 1 special anchoring card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
          marginBottom: 64
        }} className="why-grid">
          {cards.map((c, i) =>
          <FadeIn key={i} delay={i * 80}>
              <div style={{
              background: '#161616',
              border: '1px solid #1A1A1A',
              borderRadius: 12,
              padding: 32,
              height: '100%',
              transition: 'border-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255,187,0,0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#1A1A1A'}>
              
                <div style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: 11,
                color: GOLD_A,
                marginBottom: 16,
                fontWeight: 500
              }}>{c.n}</div>
                <div style={{
                fontSize: 19,
                fontWeight: 700,
                color: '#fff',
                marginBottom: 14,
                letterSpacing: '-0.01em'
              }}>{c.title}</div>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 14, lineHeight: 1.7 }}>{c.text}</p>
              </div>
            </FadeIn>
          )}

          {/* Card 04 with anchoring */}
          <FadeIn delay={240}>
            <div style={{
              background: '#161616',
              border: '1px solid #1A1A1A',
              borderRadius: 12,
              padding: 32,
              height: '100%',
              transition: 'border-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255,187,0,0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#1A1A1A'}>
              
              <div style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: 11,
                color: GOLD_A,
                marginBottom: 16,
                fontWeight: 500
              }}>04</div>
              <div style={{
                fontSize: 19,
                fontWeight: 700,
                color: '#fff',
                marginBottom: 14,
                letterSpacing: '-0.01em'
              }}>Costo fijo y predecible</div>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 14, lineHeight: 1.7, marginBottom: 22 }}>
                Precio por siniestro analizado. Sin sorpresas. Sin prestaciones.
              </p>

              {/* Anchoring */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                gap: 10,
                alignItems: 'center',
                marginBottom: 12
              }}>
                <div style={{
                  background: '#1A0A0A',
                  border: '1px solid #2A1414',
                  borderRadius: 8,
                  padding: '14px 14px'
                }}>
                  <div style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#7A4A4A',
                    marginBottom: 8
                  }}>Ajustador externo hoy</div>
                  <div style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: 24,
                    color: 'rgba(255,80,80,0.7)',
                    fontWeight: 700,
                    textDecoration: 'line-through',
                    textDecorationThickness: 1.5,
                    letterSpacing: '-0.02em',
                    fontVariantNumeric: 'tabular-nums',
                  }}>$400 USD</div>
                </div>

                {/* 93% menos badge — sits between the two prices */}
                <div style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#4CAF50',
                  background: 'rgba(76,175,80,0.15)',
                  border: '1px solid rgba(76,175,80,0.3)',
                  padding: '6px 9px',
                  borderRadius: 6,
                  whiteSpace: 'nowrap',
                  textAlign: 'center',
                  lineHeight: 1.1,
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                }}>
                  <span style={{ fontSize: 14, letterSpacing: '-0.01em' }}>93%</span>
                  <span style={{ fontSize: 8.5, opacity: 0.9 }}>menos</span>
                </div>

                <div style={{
                  background: '#0E0E0E',
                  border: '1px solid rgba(255,187,0,0.35)',
                  borderRadius: 8,
                  padding: '14px 14px',
                  boxShadow: '0 0 24px rgba(255,187,0,0.08)'
                }}>
                  <div style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: GOLD_A,
                    marginBottom: 8
                  }}>ClaimRocks</div>
                  <div style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: 28,
                    color: GOLD_A,
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    fontVariantNumeric: 'tabular-nums',
                  }}>$30 USD</div>
                </div>
              </div>
              <div style={{
                fontSize: 10,
                color: '#666',
                fontWeight: 500,
                letterSpacing: '0.06em'
              }}>Por siniestro analizado · Precio fundador</div>
            </div>
          </FadeIn>
        </div>

        {/* Pull quote */}
        <FadeIn>
          <div style={{
            borderLeft: `3px solid ${GOLD_A}`,
            paddingLeft: 32,
            maxWidth: 820,
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              left: -14,
              top: -20,
              fontFamily: 'Playfair Display, serif',
              fontSize: 80,
              fontStyle: 'italic',
              color: 'rgba(255,187,0,0.15)',
              lineHeight: 1,
              pointerEvents: 'none'
            }}>"</div>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 22,
              lineHeight: 1.55,
              color: '#E8E0D0',
              marginBottom: 24,
              letterSpacing: '-0.01em'
            }}>
              Después de 17 años ajustando siniestros en AIG, Chubb y BBVA aprendí que el problema
              nunca es la cobertura. Es la brecha entre lo que el asegurado espera y lo que el proceso
              le entrega. ClaimRocks existe para cerrar esa brecha.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0,
                border: '1px solid rgba(255,187,0,0.35)',
                boxShadow: '0 6px 24px rgba(0,0,0,0.4), 0 0 24px rgba(255,187,0,0.12)',
                background: '#161616'
              }}>
                <img
                  src="assets/jose-portrait.jpg"
                  alt="Jose Ricardo Villegas"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }} />
                
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>
                  Jose Ricardo Villegas
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>
                  Founder & CEO · ClaimRocks
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Elegant gold separator after CEO quote */}
        <FadeIn delay={120}>
          <div style={{
            width: 60,
            height: 2,
            background: 'rgba(245,166,35,0.2)',
            margin: '48px auto 0',
            borderRadius: 1,
          }} />
        </FadeIn>
      </div>
    </section>);

};

// =====================================================
// FOUNDER CTA
// =====================================================
const FounderCTA = () => {
  const [form, setForm] = React.useState({ name: '', company: '', phone: '', email: '' });
  const [sent, setSent] = React.useState(false);

  const benefits = [
  'Piloto gratuito — 15 días con casos reales',
  'Precio fundador bloqueado de por vida',
  'Configuración directa con el equipo técnico',
  'Sin integración costosa — solo email para empezar'];


  const onSubmit = (e) => {
    e.preventDefault();

    // ─────────────────────────────────────────────────────────
    // OPCIÓN ACTUAL: mailto fallback
    // Abre el cliente de correo del usuario con los datos pre-llenos.
    // No requiere backend ni servicios externos — funciona inmediato.
    // ─────────────────────────────────────────────────────────
    const subject = encodeURIComponent('Nuevo cliente fundador · ClaimRocks');
    const body = encodeURIComponent(
      `Nombre completo: ${form.name}\n` +
      `Aseguradora / Empresa: ${form.company}\n` +
      `Número celular: ${form.phone}\n` +
      `Correo corporativo: ${form.email}\n\n` +
      `— Enviado desde claimrocks.com`
    );
    window.location.href = `mailto:jose@claimrocks.com?subject=${subject}&body=${body}`;

    // ─────────────────────────────────────────────────────────
    // OPCIÓN PRODUCCIÓN (descomenta cuando tengas el endpoint):
    //
    // 1) Formspree  → https://formspree.io  (free hasta 50/mes)
    //    fetch('https://formspree.io/f/TU_FORM_ID', {
    //      method: 'POST',
    //      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //      body: JSON.stringify(form),
    //    });
    //
    // 2) Web3Forms  → https://web3forms.com  (free, sin cuenta)
    //    fetch('https://api.web3forms.com/submit', {
    //      method: 'POST',
    //      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //      body: JSON.stringify({ access_key: 'TU_KEY', ...form }),
    //    });
    //
    // 3) Supabase / backend propio → tu endpoint REST
    // ─────────────────────────────────────────────────────────

    setSent(true);
  };

  return (
    <section id="fundador" style={{
      padding: '96px 0',
      background: '#111109',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.06)'
    }}>
      <Grain />

      {/* Strong gold glow */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 900,
        height: 600,
        background: 'radial-gradient(ellipse at center, rgba(255,187,0,0.08) 0%, rgba(255,149,0,0.04) 30%, transparent 65%)',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ maxWidth: 880, textAlign: 'center' }}>
        <FadeIn>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            color: GOLD_A,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            background: 'rgba(255,187,0,0.06)',
            border: '1px solid rgba(255,187,0,0.2)',
            padding: '6px 14px',
            borderRadius: 4,
            marginBottom: 32
          }}>
            <Icon name="star" size={10} color={GOLD_A} />
            Acceso fundador · Solo 10 cupos
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: 22,
            color: '#fff'
          }}>
            <span style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#E8E0D0'
            }}>Sea parte</span>{' '}
            de los primeros.
          </h2>
        </FadeIn>

        <FadeIn delay={160}>
          <p style={{
            color: 'rgba(255,255,255,0.78)',
            fontSize: 17,
            lineHeight: 1.7,
            marginBottom: 48,
            maxWidth: 540,
            margin: '0 auto 48px'
          }}>Los primeros 10 clientes fundadores de ClaimRocks  acceden a precio especial permanente y soporte directo del equipo.


          </p>
        </FadeIn>

        {/* Benefits 2x2 */}
        <FadeIn delay={240}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 12,
            marginBottom: 56,
            textAlign: 'left',
            maxWidth: 720,
            margin: '0 auto 56px'
          }} className="benefits-grid">
            {benefits.map((b, i) =>
            <div key={i} style={{
              background: 'rgba(22,22,22,0.6)',
              border: '1px solid #1A1A1A',
              borderRadius: 10,
              padding: '18px 22px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 14
            }}>
                <div style={{
                color: GOLD_A,
                fontSize: 16,
                lineHeight: 1,
                flexShrink: 0,
                marginTop: 1
              }}>✦</div>
                <div style={{ color: 'rgba(255,255,255,0.88)', fontSize: 14, lineHeight: 1.55 }}>{b}</div>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Form or success */}
        <FadeIn delay={320}>
          {!sent ?
          <form onSubmit={onSubmit} style={{ maxWidth: 720, margin: '0 auto' }}>
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12,
                padding: 24,
              }}>
                <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 10,
                marginBottom: 14
              }} className="form-grid">
                {[
              { key: 'name', placeholder: 'Nombre completo', icon: 'user' },
              { key: 'company', placeholder: 'Aseguradora / Empresa', icon: 'shield' },
              { key: 'phone', placeholder: 'Número celular', icon: 'phone' },
              { key: 'email', placeholder: 'Correo corporativo', icon: 'mail' }].
              map((f) =>
              <div key={f.key} style={{ position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  left: 14,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                  opacity: 0.55,
                }}>
                  <Icon name={f.icon} size={16} color="#FFBB00" strokeWidth={1.4} />
                </span>
                <input
                  type={f.key === 'email' ? 'email' : 'text'}
                  placeholder={f.placeholder}
                  value={form[f.key]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  required
                  className="cr-input"
                  style={{
                    width: '100%',
                    background: 'rgba(8,8,8,0.6)',
                    border: '1px solid rgba(245,166,35,0.25)',
                    borderRadius: 8,
                    padding: '14px 14px 14px 40px',
                    color: '#fff',
                    fontSize: 14,
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    outline: 'none',
                    transition: 'border-color 0.2s ease, background 0.2s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(245,166,35,0.7)';
                    e.currentTarget.style.background = 'rgba(8,8,8,0.9)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(245,166,35,0.25)';
                    e.currentTarget.style.background = 'rgba(8,8,8,0.6)';
                  }} />
              </div>
              )}
                </div>
                <ButtonPrimary onClick={() => {}} style={{ width: '100%', justifyContent: 'center' }}>
                  Unirme como fundador <Icon name="arrow" size={12} color="#0A0A0A" />
                </ButtonPrimary>
              </div>
              <div style={{
              fontSize: 11,
              color: '#555',
              marginTop: 16,
              fontWeight: 500
            }}>
                Sin tarjeta de crédito. Sin compromiso. Respondemos en 24 horas.
              </div>
              <style>{`
                .cr-input::placeholder { color: rgba(255,255,255,0.4); }
              `}</style>
            </form> :

          <div style={{
            background: 'linear-gradient(180deg, #161104 0%, #0E0E0E 100%)',
            border: '1px solid rgba(255,187,0,0.3)',
            borderRadius: 12,
            padding: 40,
            maxWidth: 540,
            margin: '0 auto',
            boxShadow: '0 0 60px rgba(255,187,0,0.1)'
          }}>
              <div style={{ marginBottom: 18, display: 'flex', justifyContent: 'center' }}>
                <Icon name="bolt" size={28} color={GOLD_A} strokeWidth={1.5} />
              </div>
              <div style={{
              fontSize: 22,
              fontWeight: 700,
              color: '#fff',
              marginBottom: 10,
              letterSpacing: '-0.01em'
            }}>
                Listo. Te contactamos en las próximas 24 horas.
              </div>
              <div style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              color: GOLD_A,
              fontSize: 16
            }}>
                Bienvenido a la era del ajuste inteligente.
              </div>
            </div>
          }
        </FadeIn>
      </div>
    </section>);

};

// =====================================================
// FOOTER
// =====================================================
const Footer = () =>
<footer style={{
  padding: '60px 0 50px',
  background: '#1a1a0e',
  borderTop: '1px solid rgba(255,255,255,0.06)',
  position: 'relative'
}}>
    <div className="container">
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr 1fr',
      gap: 48,
      alignItems: 'flex-start',
      marginBottom: 40
    }} className="footer-top">
        {/* Brand + credibility strip */}
        <div>
          <div style={{ marginBottom: 14 }}>
            <Wordmark size={16} />
          </div>
          <div style={{
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic',
          color: '#888',
          fontSize: 14,
          marginBottom: 22,
        }}>
            Humanizing Claims through AI
          </div>
          <div style={{
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: 8,
          }}>Construido por ex—</div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontSize: 11,
            color: '#aaa',
            fontWeight: 600,
            letterSpacing: '0.04em',
          }}>
            <span>AIG</span>
            <span style={{ color: '#333' }}>·</span>
            <span>Chubb</span>
            <span style={{ color: '#333' }}>·</span>
            <span>BBVA</span>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <div style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: 14,
          }}>Enlaces</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { label: 'Cómo funciona', href: '#como-funciona' },
              { label: 'Líneas', href: '#líneas' },
              { label: 'Nosotros', href: '#nosotros' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Ser cliente fundador', href: '#fundador' },
            ].map((l) => (
              <a key={l.label}
                href={l.href}
                style={{
                  color: '#ddd',
                  textDecoration: 'none',
                  fontSize: 13,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFBB00'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#ddd'}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div>
          <div style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#555',
          marginBottom: 14
        }}>Contacto</div>
          <a href="mailto:jose@claimrocks.com" style={{
          color: '#ddd',
          textDecoration: 'none',
          display: 'block',
          marginBottom: 8,
          fontSize: 13,
        }}>jose@claimrocks.com</a>
          <a href="https://www.claimrocks.com" style={{
          color: '#888',
          textDecoration: 'none',
          fontSize: 12
        }}>www.claimrocks.com</a>
        </div>
      </div>

      <GoldDivider opacity={0.1} my={32} />

      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 11,
      color: '#555',
      flexWrap: 'wrap',
      gap: 12
    }}>
        <div>© 2026 ClaimRocks SAS · Bogotá, Colombia</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E' }} />
          Operando en Hogar y Copropiedades
        </div>
      </div>
    </div>
  </footer>;


Object.assign(window, { PorQue, FounderCTA, Footer });