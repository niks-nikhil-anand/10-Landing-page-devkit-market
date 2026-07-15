import type { CSSProperties } from "react";
import { templates } from "./templates";

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="DevKit Market home">
          <span className="brandMark" aria-hidden="true">DK</span>
          <span>DevKit Market</span>
        </a>
        <a className="navButton" href="#collection">Explore collection <span aria-hidden="true">↓</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span />10 production-ready concepts</p>
          <h1>Landing pages built to <em>launch.</em></h1>
        </div>
        <div className="heroAside">
          <p>
            A curated Next.js collection for ambitious products, modern services,
            and ideas that deserve a sharper first impression.
          </p>
          <a className="primaryButton" href="#collection">Browse all templates <span aria-hidden="true">↘</span></a>
        </div>
      </section>

      <section className="stats shell" aria-label="Collection details">
        <div><strong>10</strong><span>Unique templates</span></div>
        <div><strong>Next.js</strong><span>App Router</span></div>
        <div><strong>100%</strong><span>Responsive</span></div>
        <div><strong>Ready</strong><span>Static export</span></div>
      </section>

      <section className="collection shell" id="collection">
        <header className="sectionHeader">
          <div>
            <p className="eyebrow muted"><span />The collection</p>
            <h2>Choose your starting point.</h2>
          </div>
          <p>Each concept is a complete, independently designed experience. Open a card to explore the live page.</p>
        </header>

        <div className="cardGrid">
          {templates.map((template, index) => (
            <a
              className="card"
              href={template.href}
              key={template.href}
              aria-label={`Open ${template.title} template`}
              style={{
                "--accent": template.accent,
                "--surface": template.surface,
                "--card-ink": template.ink,
              } as CSSProperties}
            >
              <div className="preview" aria-hidden="true">
                <div className="previewWindow">
                  <div className="previewNav"><i /><i /><i /><b /></div>
                  <div className="previewBody">
                    <div className="previewCopy">
                      <span />
                      <strong />
                      <strong className="short" />
                      <i />
                    </div>
                    <div className="previewArt"><span>+</span></div>
                  </div>
                </div>
                <p>{template.shortTitle}</p>
              </div>
              <div className="cardContent">
                <div>
                  <div className="cardMeta">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="pill">{template.category}</span>
                  </div>
                  <h3>{template.title}</h3>
                  <p>{template.description}</p>
                </div>
                <span className="cardArrow" aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="closing shell">
        <div>
          <p className="eyebrow dark"><span />Ready when you are</p>
          <h2>Pick a page. Make it yours. Ship it.</h2>
        </div>
        <a href="#collection">View the collection <span aria-hidden="true">↑</span></a>
      </section>

      <footer className="footer shell">
        <p>© 2026 DevKit Market</p>
        <p>Ten focused landing pages. One launch-ready collection.</p>
      </footer>
    </main>
  );
}
