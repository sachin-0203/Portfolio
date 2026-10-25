import { useState } from 'react'
import { portfolio } from './data/portfolio.js'
import './App.css'

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      fill="none"
      viewBox="0 0 20 20"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function Brand() {
  return (
    <a className="brand" href="#home" aria-label={`${portfolio.profile.name} home`}>
      <span className="brand-mark">{portfolio.profile.name.charAt(0).toLowerCase()}.</span>
      <span>{portfolio.profile.name}</span>
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="main-navigation"
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span />
          <span />
        </button>
        <nav
          aria-label="Main navigation"
          className={menuOpen ? 'nav-open' : ''}
          id="main-navigation"
        >
          {portfolio.navigation.map((item) => (
            <a
              href={item.href}
              key={item.label}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="nav-contact"
            href={`mailto:${portfolio.profile.email}`}
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk <ArrowIcon diagonal />
          </a>
        </nav>
      </div>
    </header>
  )
}

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function Availability() {
  return (
    <div className="availability">
      <span className="availability-dot" />
      {portfolio.profile.availability}
    </div>
  )
}

function HeroArtwork() {
  return (
    <div
      aria-label="Abstract design workspace illustration"
      className="hero-art"
      role="img"
    >
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="art-sun" />
      <div className="art-window">
        <div className="window-top">
          <div className="window-dots"><i /><i /><i /></div>
          <span>thoughtfully-made.studio</span>
          <span className="window-menu">•••</span>
        </div>
        <div className="window-content">
          <span className="window-kicker">A LITTLE BIT OF EVERYTHING</span>
          <span className="window-title">Good ideas<br />start here<span>.</span></span>
          <span className="window-line" />
          <span className="window-button">Explore the work <ArrowIcon /></span>
        </div>
        <div className="window-stamp">✳</div>
      </div>
      <div className="art-note note-top">Curiosity, meet craft <span>✳</span></div>
      <div className="art-note note-bottom"><span className="note-spark">✳</span> Made with intention</div>
    </div>
  )
}

function Hero() {
  const { profile } = portfolio

  return (
    <section aria-labelledby="hero-title" className="hero section-wrap" id="home">
      <div className="hero-copy">
        <Availability />
        <Eyebrow>{profile.role} <span className="eyebrow-divider">/</span> {profile.location}</Eyebrow>
        <h1 id="hero-title">
          Thoughtful design.<br />
          <span>Purposeful</span> code.
        </h1>
        <p className="hero-description">{profile.intro}</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">
            Explore my work <ArrowIcon />
          </a>
          <a className="text-link" href={`mailto:${profile.email}`}>
            Get in touch <ArrowIcon diagonal />
          </a>
        </div>
        <div className="hero-footnote">
          <span className="footnote-line" />
          <span>Currently creating with care</span>
        </div>
      </div>
      <HeroArtwork />
    </section>
  )
}

function ProjectVisual({ project }) {
  return (
    <div
      aria-hidden="true"
      className={`project-visual visual-${project.visual}`}
    >
      <div className="mock-window">
        <div className="mock-bar">
          <span className="mock-brand"><i />{project.mockBrand}</span>
          <span className="mock-menu">☰</span>
        </div>
        <div className="mock-content">
          <span className="mock-overline">{project.mockOverline}</span>
          <span className="mock-title">{project.mockTitle}</span>
          {project.visual === 'studio' ? (
            <div className="mock-gallery">
              <span /><span /><span />
            </div>
          ) : (
            <div className="mock-cta">{project.mockCta}<ArrowIcon /></div>
          )}
          {project.visual === 'finance' && (
            <div className="mock-chart"><i /><i /><i /><i /><i /><i /><i /><i /></div>
          )}
        </div>
      </div>
      <span className="visual-caption">{project.visualCaption}</span>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <a
        aria-label={`Discuss the ${project.title} project`}
        className="project-card-link"
        href={project.href}
        rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
        target={project.href.startsWith('http') ? '_blank' : undefined}
      >
        <ProjectVisual project={project} />
        <div className="project-meta">
          <div className="project-title-row">
            <div>
              <span className="project-number">0{index + 1} / {project.category}</span>
              <h3>{project.title}</h3>
            </div>
            <span className="project-arrow"><ArrowIcon diagonal /></span>
          </div>
          <p>{project.description}</p>
          <div className="tag-list">
            {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
          </div>
        </div>
      </a>
    </article>
  )
}

function WorkSection() {
  return (
    <section className="work-section section-wrap" id="work">
      <SectionHeading
        description="A few selected projects where clear thinking and considered details come together."
        eyebrow="Selected work · 2023—2025"
        title="Things I’ve made."
      />
      <div className="project-grid">
        {portfolio.projects.map((project, index) => (
          <ProjectCard index={index} key={project.title} project={project} />
        ))}
      </div>
      <div className="work-note">
        <span>More experiments, sketches &amp; good ideas in progress.</span>
        <a href={portfolio.profile.github} rel="noreferrer" target="_blank">
          Find me on GitHub <ArrowIcon diagonal />
        </a>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner section-wrap">
        <div className="about-copy">
          <Eyebrow>A little about me</Eyebrow>
          <h2>Good work comes from staying <span>curious.</span></h2>
          <p>{portfolio.profile.about}</p>
          <a className="text-link" href={`mailto:${portfolio.profile.email}`}>
            A bit more about working together <ArrowIcon diagonal />
          </a>
        </div>
        <div className="about-details">
          <div className="detail-block">
            <span className="detail-label">A few things I do</span>
            <div className="skill-list">
              {portfolio.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
          <div className="detail-block experience-block">
            <span className="detail-label">Along the way</span>
            {portfolio.experience.map((item) => (
              <div className="experience-item" key={`${item.company}-${item.period}`}>
                <div><strong>{item.role}</strong><span>{item.company}</span></div>
                <span>{item.period}</span>
              </div>
            ))}
          </div>
          <div className="detail-block">
            <span className="detail-label">A small reminder</span>
            <p className="about-quote">“{portfolio.profile.motto}”</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contact-section section-wrap" id="contact">
      <div className="contact-card">
        <div className="contact-topline">
          <Eyebrow>Have a good one in mind?</Eyebrow>
          <span className="contact-spark">✳</span>
        </div>
        <h2>Let&apos;s make<br /><span>something matter.</span></h2>
        <p>{portfolio.profile.contactMessage}</p>
        <a className="button button-light" href={`mailto:${portfolio.profile.email}`}>
          Say hello <ArrowIcon diagonal />
        </a>
        <div className="contact-decoration decoration-one" />
        <div className="contact-decoration decoration-two" />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <Brand />
      <span className="footer-note">Designed with intention. Built with care.</span>
      <div className="social-links">
        {portfolio.socials.map((social) => (
          <a href={social.href} key={social.label} rel="noreferrer" target="_blank">
            {social.label} <ArrowIcon diagonal />
          </a>
        ))}
      </div>
      <span className="copyright">© {new Date().getFullYear()} {portfolio.profile.name}</span>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
