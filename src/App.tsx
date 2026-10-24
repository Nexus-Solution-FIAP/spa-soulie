import { QRCodeSVG } from 'qrcode.react'
import { BrandMark } from './BrandMark'
import { ANDROID_DOWNLOAD_URL, IOS_DOWNLOAD_URL } from './config'
import girassol from './assets/plants/girassol.png'
import semente from './assets/plants/semente.png'
import broto from './assets/plants/broto.png'
import jovem from './assets/plants/jovem.png'
import arvore from './assets/plants/arvore.png'
import pitanga from './assets/plants/pitanga.png'
import './App.css'

const stores = [
  {
    id: 'android' as const,
    name: 'Android',
    store: 'Google Play',
    url: ANDROID_DOWNLOAD_URL,
    hint: 'Celulares e tablets Android',
  },
  {
    id: 'ios' as const,
    name: 'iOS',
    store: 'App Store',
    url: IOS_DOWNLOAD_URL,
    hint: 'iPhone e iPad',
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

function StoreGlyph({ id }: { id: 'android' | 'ios' }) {
  if (id === 'android') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.6 9.5 19.2 6.8a.6.6 0 0 0-.2-.8.6.6 0 0 0-.8.2l-1.6 2.6A9.3 9.3 0 0 0 12 8a9.3 9.3 0 0 0-4.6.8L5.8 6.2a.6.6 0 1 0-1 .6L6.4 9.5A8.6 8.6 0 0 0 3.5 16h17a8.6 8.6 0 0 0-2.9-6.5ZM8.2 13.2a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm7.6 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.2 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9s-1.8-1-3-.9c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.7.7 3 .7 2-.1 2.9-2.3c1.1-1.5 1.5-3 1.5-3.1-.1 0-2.8-1.1-2.8-4.2ZM14.7 5.8c.6-.8 1.1-1.8 1-2.8-1 .1-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.8 1.1.1 2.2-.6 2.8-1.5Z" />
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
            Aponte a câmera do celular para o QR da sua loja — Android ou iOS.
          </p>

          <div className="qr-grid">
            {stores.map((store) => (
              <a
                key={store.id}
                className={`qr-card qr-card--${store.id}`}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="qr-head">
                  <span className="qr-badge">
                    <StoreGlyph id={store.id} />
                    {store.name}
                  </span>
                  <span className="qr-store">{store.store}</span>
                </div>
                <div className="qr-frame">
                  <QRCodeSVG
                    value={store.url}
                    size={200}
                    fgColor="#14532D"
                    bgColor="#FFFFFF"
                    level="M"
                    marginSize={1}
                    title={`QR code para baixar o Soulie no ${store.store}`}
                  />
                </div>
                <p className="qr-hint">{store.hint}</p>
                <span className="qr-action">Abrir link de download</span>
              </a>
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
