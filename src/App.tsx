import { BrandMark } from './BrandMark'
import girassol from './assets/plants/girassol.png'
import semente from './assets/plants/semente.png'
import broto from './assets/plants/broto.png'
import jovem from './assets/plants/jovem.png'
import arvore from './assets/plants/arvore.png'
import pitanga from './assets/plants/pitanga.png'
import './App.css'

const downloads = [
  {
    id: 'site' as const,
    name: 'Site',
    label: 'Abra no celular',
    src: '/qrCodeSite.png',
    alt: 'QR code para abrir o site do Soulie',
    hint: 'Link desta página',
  },
  {
    id: 'apk' as const,
    name: 'APK',
    label: 'Android',
    src: '/linkDoApk.jpg',
    alt: 'QR code para baixar o APK do Soulie',
    hint: 'Instale o aplicativo',
  },
]

const features = [
  {
    title: 'Meu Soulie',
    text: 'Uma planta viva da flora brasileira. Regue, escolha o nome e acompanhe cada estágio — da semente à árvore.',
    icon: 'sprout',
  },
  {
    title: 'Missões verdes',
    text: 'Hábitos sustentáveis do dia. Tire uma foto, a IA confirma a evidência e o XP cai na planta.',
    icon: 'camera',
  },
  {
    title: 'Jardim',
    text: 'Ranking, feed da comunidade e jardins com código de convite. Cuidar juntos rende mais.',
    icon: 'people',
  },
  {
    title: 'Alma',
    text: 'A Soulie IA tira dúvidas de missão, dá dicas verdes e explica XP e ranking — no seu ritmo.',
    icon: 'spark',
  },
]

const stages = [
  { name: 'Semente', xp: '0–49 XP', img: semente, alt: 'Semente sorridente do Soulie' },
  { name: 'Broto', xp: '50–99 XP', img: broto, alt: 'Broto sorridente do Soulie' },
  { name: 'Planta jovem', xp: '100–199 XP', img: jovem, alt: 'Girassol jovem do Soulie' },
  { name: 'Árvore', xp: '200+ XP', img: arvore, alt: 'Ipê-amarelo adulto do Soulie' },
]

function FeatureIcon({ name }: { name: string }) {
  if (name === 'camera') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.2l.8-1.4A1.5 1.5 0 0 1 9.8 4h4.4a1.5 1.5 0 0 1 1.3.6L16.3 6h1.2A2.5 2.5 0 0 1 20 8.5v8A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-8Z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12.5" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  }
  if (name === 'people') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.5 18c.4-3 2.6-4.8 4.5-4.8S13.6 15 14 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14.2 13.4c1.5-.3 3.4.8 4.3 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'spark') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3.5 13.4 8l4.6.4-3.5 3.1 1.1 4.5L12 13.8 8.4 16l1.1-4.5L6 8.4 10.6 8 12 3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 11c-3.2-4.6-7.6-5.4-9.2-4.2-1.2.9-1.1 2.6.4 4.1C5.6 13.3 9.4 14 12 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 10c3-4.2 7.2-5 8.8-3.8 1.2.9 1.1 2.5-.3 4C18.2 12.6 14.8 13.4 12 12.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function App() {
  return (
    <div className="page">
      <div className="sky" aria-hidden="true">
        <span className="leaf leaf-a" />
        <span className="leaf leaf-b" />
        <span className="leaf leaf-c" />
        <span className="leaf leaf-d" />
        <span className="blob blob-sun" />
        <span className="blob blob-mint" />
      </div>

      <header className="topbar">
        <a className="brand" href="#inicio">
          <BrandMark className="brand-mark" />
          <span>Soulie</span>
        </a>
        <a className="topbar-cta" href="#baixar">
          Baixar o app
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Bem-estar sustentável · FIAP 2026</p>
            <h1>
              Plante um hábito.
              <em> Cresça um Soulie.</em>
            </h1>
            <p className="lead">
              O Soulie é o seu jardim de bolso. Cumpra missões ecológicas, tire
              uma foto, ganhe XP e veja sua planta evoluir — da semente à árvore
              — junto da comunidade.
            </p>
            <ul className="motto">
              <li>Plante</li>
              <li>Cuide</li>
              <li>Evolua</li>
            </ul>
          </div>

          <div className="hero-art">
            <img
              className="mascot mascot-main"
              src={girassol}
              alt="Girassol sorridente, a planta mascote do Soulie"
            />
            <img
              className="mascot mascot-side"
              src={pitanga}
              alt=""
              aria-hidden="true"
            />
            <span className="speech">Oi! Vamos cuidar juntos?</span>
          </div>
        </section>

        <section className="download" id="baixar">
          <p className="section-kicker">Leve o jardim no bolso</p>
          <h2>Baixe o Soulie</h2>
          <p className="section-lead">
            Aponte a câmera do celular: o de cima abre o site, o de baixo baixa o APK.
          </p>

          <div className="qr-grid">
            {downloads.map((item) => (
              <article key={item.id} className={`qr-card qr-card--${item.id}`}>
                <div className="qr-head">
                  <span className="qr-badge">{item.name}</span>
                  <span className="qr-store">{item.label}</span>
                </div>
                <div className="qr-frame">
                  <img src={item.src} alt={item.alt} />
                </div>
                <p className="qr-hint">{item.hint}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="features" id="app">
          <p className="section-kicker">O que você encontra</p>
          <h2>Um jardim que cresce com você</h2>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <span className="feature-icon">
                  <FeatureIcon name={feature.icon} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="evolution" id="evolucao">
          <p className="section-kicker">Acompanhe o crescimento</p>
          <h2>Do grãozinho à árvore</h2>
          <p className="section-lead">
            Cada missão cumprida vira XP. Sua planta muda de estágio — e o jardim
            inteiro sente o cuidado.
          </p>
          <ol className="stage-row">
            {stages.map((stage, index) => (
              <li key={stage.name} className="stage">
                <div className="stage-art">
                  <img src={stage.img} alt={stage.alt} />
                </div>
                <strong>{stage.name}</strong>
                <span>{stage.xp}</span>
                {index < stages.length - 1 ? (
                  <span className="stage-arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <BrandMark className="brand-mark" />
          <div>
            <strong>Soulie</strong>
            <p>Nexus Solutions · FIAP 2026</p>
          </div>
        </div>
        <p className="footer-motto">Plante · Cuide · Evolua</p>
      </footer>
    </div>
  )
}

export default App
