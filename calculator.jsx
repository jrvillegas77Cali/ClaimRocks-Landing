// Interactive savings calculator
const SavingsCalculator = () => {
  const [claims, setClaims] = React.useState(100);
  const GOLD = '#FFBB00';

  const PRECIO_EXTERNO = 400;
  const PRECIO_CR = 30;
  const AHORRO = 370;

  const externo = claims * PRECIO_EXTERNO;
  const cr = claims * PRECIO_CR;
  const ahorro = claims * AHORRO;
  const ahorroAnual = ahorro * 12;

  const maxValor = 500 * PRECIO_EXTERNO;
  const altoExterno = (externo / maxValor) * 160;
  const altoCR = (cr / maxValor) * 160;

  const fmt = (n) => n.toLocaleString('es-CO');

  const sliderPercent = ((claims - 10) / (500 - 10)) * 100;

  return (
    <div style={{
      background: 'linear-gradient(180deg, #0F0F0F 0%, #0C0C0C 100%)',
      border: '1px solid #161616',
      borderRadius: 12,
      padding: 36,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle inner gold mesh */}
      <div style={{
        position: 'absolute',
        top: '-40%',
        right: '-20%',
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(255,187,0,0.05), transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Slider section */}
        <div style={{ marginBottom: 36 }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 18,
          }}>
            <div>
              <div style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#C8C8C8',
                marginBottom: 6,
              }}>Siniestros por mes</div>
              <div style={{ fontSize: 13, color: '#666' }}>
                Ajusta el volumen de tu operación
              </div>
            </div>
            <div style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 34,
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
            }}>
              {claims}
              <span style={{ fontSize: 13, color: '#666', marginLeft: 6, fontWeight: 500 }}>/ mes</span>
            </div>
          </div>

          <input
            type="range"
            className="cr-slider"
            min={10}
            max={500}
            step={10}
            value={claims}
            onChange={(e) => setClaims(parseInt(e.target.value, 10))}
            style={{ '--val': `${sliderPercent}%` }}
          />

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 8,
            fontSize: 10,
            color: '#444',
            fontFamily: 'DM Mono, monospace',
          }}>
            <span>10</span>
            <span>250</span>
            <span>500+</span>
          </div>
        </div>

        {/* 3 panels — comparison */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr 1fr',
          gap: 12,
          marginBottom: 32,
        }}>
          {/* Sin ClaimRocks */}
          <div style={{
            background: '#1A0A0A',
            border: '1px solid #3A1A1A',
            borderRadius: 10,
            padding: 18,
          }}>
            <div style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#FF7A7A',
              marginBottom: 10,
            }}>Sin ClaimRocks</div>
            <div style={{ fontSize: 11, color: '#888', marginBottom: 14, lineHeight: 1.5 }}>
              Costo mensual actual
            </div>
            <div style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 26,
              fontWeight: 700,
              color: '#FF6B6B',
              letterSpacing: '-0.02em',
              marginBottom: 6,
              fontVariantNumeric: 'tabular-nums',
            }}>
              ${fmt(externo)}
              <span style={{ fontSize: 11, color: '#7A4A4A', marginLeft: 4, fontWeight: 600 }}>USD</span>
            </div>
            <div style={{ fontSize: 10, color: '#FF4A4A', opacity: 0.7 }}>
              en ajustadores externos
            </div>
          </div>

          {/* Center — Ahorro */}
          <div style={{
            background: 'linear-gradient(180deg, #161104 0%, #0F0C04 100%)',
            border: '1px solid rgba(255,187,0,0.25)',
            borderRadius: 10,
            padding: 18,
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
            boxShadow: '0 0 40px rgba(255,187,0,0.08), inset 0 1px 0 rgba(255,187,0,0.08)',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(255,187,0,0.08), transparent 60%)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative' }}>
              <div style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: GOLD,
                marginBottom: 10,
              }}>Su ahorro mensual</div>
              <div style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 48,
                fontWeight: 800,
                background: 'linear-gradient(135deg, #FFD94A 0%, #FFBB00 50%, #FF9500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: 4,
                textShadow: '0 0 40px rgba(255,187,0,0.4)',
                fontVariantNumeric: 'tabular-nums',
              }}>
                ${fmt(ahorro)}
              </div>
              <div style={{
                fontSize: 11,
                color: '#FFD94A',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.04em',
                marginBottom: 12,
              }}>
                USD / mes
              </div>
              <div style={{ fontSize: 11, color: '#888', marginBottom: 12 }}>
                Eso es <span style={{ color: '#fff', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>${fmt(ahorroAnual)} USD</span> al año
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: GOLD,
                background: 'rgba(255,187,0,0.08)',
                border: '1px solid rgba(255,187,0,0.2)',
                padding: '4px 10px',
                borderRadius: 4,
              }}>
                <Icon name="star" size={9} color={GOLD} />
                Precio fundador · 10 cupos disponibles
              </div>
            </div>
          </div>

          {/* Con ClaimRocks */}
          <div style={{
            background: '#0E0E0E',
            border: '1px solid rgba(255,187,0,0.15)',
            borderRadius: 10,
            padding: 18,
          }}>
            <div style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: GOLD,
              marginBottom: 10,
            }}>Con ClaimRocks</div>
            <div style={{ fontSize: 11, color: '#888', marginBottom: 14, lineHeight: 1.5 }}>
              Costo mensual
            </div>
            <div style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 26,
              fontWeight: 700,
              color: GOLD,
              letterSpacing: '-0.02em',
              marginBottom: 6,
              fontVariantNumeric: 'tabular-nums',
            }}>
              ${fmt(cr)}
              <span style={{ fontSize: 11, color: '#7A6A2A', marginLeft: 4, fontWeight: 600 }}>USD</span>
            </div>
            <div style={{ fontSize: 10, color: GOLD, opacity: 0.7 }}>
              precio fijo por siniestro
            </div>
          </div>
        </div>

        {/* Bar chart */}
        <div style={{
          background: '#0A0A0A',
          border: '1px solid #161616',
          borderRadius: 10,
          padding: '24px 28px 20px',
        }}>
          <div style={{
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#666',
            marginBottom: 18,
          }}>Comparación visual</div>

          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            gap: 80,
            height: 200,
            padding: '0 20px',
            position: 'relative',
          }}>
            {/* Externo bar */}
            <div style={{
              width: 180,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              position: 'relative',
              zIndex: 1,
            }}>
              <div style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 13,
                color: '#FF6B6B',
                fontWeight: 700,
                fontVariantNumeric: 'tabular-nums',
              }}>${fmt(externo)}</div>
              <div style={{
                width: '100%',
                height: altoExterno,
                background: 'linear-gradient(180deg, rgba(255,74,74,0.7) 0%, rgba(180,40,40,0.7) 100%)',
                border: '1px solid rgba(255,74,74,0.3)',
                borderRadius: '4px 4px 0 0',
                transition: 'height 0.4s ease',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
              }} />
              <div style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#888',
                marginTop: 4,
              }}>Ajustador externo</div>
            </div>

            {/* CR bar */}
            <div style={{
              width: 180,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              position: 'relative',
              zIndex: 1,
            }}>
              <div style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 13,
                color: GOLD,
                fontWeight: 700,
                fontVariantNumeric: 'tabular-nums',
              }}>${fmt(cr)}</div>
              <div style={{
                width: '100%',
                height: Math.max(altoCR, 6),
                background: 'linear-gradient(180deg, #FFD94A 0%, #FF9500 100%)',
                border: '1px solid rgba(255,187,0,0.5)',
                borderRadius: '4px 4px 0 0',
                transition: 'height 0.4s ease',
                boxShadow: '0 0 30px rgba(255,187,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)',
              }} />
              <div style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: GOLD,
                marginTop: 4,
              }}>ClaimRocks</div>
            </div>
          </div>
        </div>

        <div style={{
          fontSize: 10,
          color: '#444',
          marginTop: 20,
          lineHeight: 1.6,
        }}>
          * Cálculo referencial basado en tarifas promedio de mercado LATAM.
          El precio de ClaimRocks puede variar según volumen y configuración.
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { SavingsCalculator });
