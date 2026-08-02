"use client";

import Link from "next/link";
import ThreeBackground from "../components/ThreeBackground";

export default function Page() {
  return (
    <>
      <ThreeBackground activeTab="projects" />
      <div className="container glow-projects" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <header style={{ padding: "2rem clamp(2rem, 8vw, 8rem)", zIndex: 10 }}>
          <Link href="/" className="btn-xai-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            ← BACK TO HOME
          </Link>
        </header>
        <main style={{ flex: 1, padding: "2rem 0" }}>
          <section className="animate-fade-in-up" style={{ padding: "0 clamp(2rem, 8vw, 8rem)" }}>
            <div style={{ minHeight: "400px" }}>
              <div style={{ animation: "fadeInUp 0.5s ease forwards" }}>
                  <div className="cards-grid">
                    
                    {/* Project 1: SciQB Platform */}
                    <div className="glass-panel project-card">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>SciQB Platform</h3>
                        <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--secondary)" }}>2026</span>
                      </div>
                      <p style={{ color: "var(--slate-400)", fontSize: "0.9rem", lineHeight: 1.5, flexGrow: 1, marginBottom: "20px" }}>
                        An advanced AI scientific intelligence platform powering quantum reasoning, automated paper synthesis, domain knowledge discovery, and computational research workflows.
                      </p>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                        <span className="tech-tag">Next.js 16</span>
                        <span className="tech-tag">AI Agents</span>
                        <span className="tech-tag">TypeScript</span>
                        <span className="tech-tag">Python</span>
                        <span className="tech-tag">GenAI</span>
                      </div>
                      <div style={{ display: "flex", gap: "16px", fontSize: "0.85rem", fontWeight: 500 }}>
                        <a href="https://sciqb.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--secondary)" }}>
                          Live Platform ↗
                        </a>
                      </div>
                    </div>

                    {/* Project 2: VRS Digital Library */}
                    <div className="glass-panel project-card">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>VRS Digital Library</h3>
                        <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--secondary)" }}>2026</span>
                      </div>
                      <p style={{ color: "var(--slate-400)", fontSize: "0.9rem", lineHeight: 1.5, flexGrow: 1, marginBottom: "20px" }}>
                        A complete full-stack web library application featuring transactional member management, active waiting-rooms, catalog listings, and custom database backup-recovery pipelines.
                      </p>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                        <span className="tech-tag">HTML5</span>
                        <span className="tech-tag">CSS3</span>
                        <span className="tech-tag">Python</span>
                        <span className="tech-tag">Vercel</span>
                      </div>
                      <div style={{ display: "flex", gap: "16px", fontSize: "0.85rem", fontWeight: 500 }}>
                        <a href="https://github.com/aryanRN2/placement-project" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--primary)" }}>
                          Codebase ↗
                        </a>
                        <a href="https://vrs-library.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--secondary)" }}>
                          Live Demo ↗
                        </a>
                      </div>
                    </div>

                    {/* Project 3: CoAide — Kaggle AI IDE */}
                    <div className="glass-panel project-card">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>CoAide — Kaggle AI IDE</h3>
                        <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--secondary)" }}>2026</span>
                      </div>
                      <p style={{ color: "var(--slate-400)", fontSize: "0.9rem", lineHeight: 1.5, flexGrow: 1, marginBottom: "20px" }}>
                        An intelligent agentic AI IDE and workspace co-pilot built during the Kaggle & Google 5-Day AI Agents Vibe Coding Challenge. Features automated notebook debugging, prompt execution, and AI-assisted code synthesis.
                      </p>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                        <span className="tech-tag">AI Agents</span>
                        <span className="tech-tag">Kaggle API</span>
                        <span className="tech-tag">TypeScript</span>
                        <span className="tech-tag">Next.js 16</span>
                        <span className="tech-tag">Vibe Coding</span>
                      </div>
                      <div style={{ display: "flex", gap: "16px", fontSize: "0.85rem", fontWeight: 500 }}>
                        <a href="https://github.com/aryanRN2/kaggle-google" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--primary)" }}>
                          Codebase ↗
                        </a>
                      </div>
                    </div>

                    {/* Project 4: img-to-pdf */}
                    <div className="glass-panel project-card">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>Img-To-PDF Converter</h3>
                        <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--secondary)" }}>2025</span>
                      </div>
                      <p style={{ color: "var(--slate-400)", fontSize: "0.9rem", lineHeight: 1.5, flexGrow: 1, marginBottom: "20px" }}>
                        High-performance client-side images compiler to PDF. Supports batch selection, visual re-ordering, instant previews, and zero-server PDF compiles for complete user data privacy.
                      </p>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                        <span className="tech-tag">HTML5</span>
                        <span className="tech-tag">CSS3</span>
                        <span className="tech-tag">JavaScript</span>
                        <span className="tech-tag">Vercel</span>
                      </div>
                      <div style={{ display: "flex", gap: "16px", fontSize: "0.85rem", fontWeight: 500 }}>
                        <a href="https://github.com/aryanRN2/img-to-pdf" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--primary)" }}>
                          Codebase ↗
                        </a>
                        <a href="https://aryanpdf.vercel.app" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--secondary)" }}>
                          Live Demo ↗
                        </a>
                      </div>
                    </div>

                    {/* Project 5: ai-chatbot */}
                    <div className="glass-panel project-card">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>AI Chatbot Client</h3>
                        <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--secondary)" }}>2025</span>
                      </div>
                      <p style={{ color: "var(--slate-400)", fontSize: "0.9rem", lineHeight: 1.5, flexGrow: 1, marginBottom: "20px" }}>
                        An intelligent, custom conversational interface featuring natural typing visualizers, context-preserving system instructions, and smart prompt execution for seamless AI interactions.
                      </p>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                        <span className="tech-tag">JavaScript</span>
                        <span className="tech-tag">CSS3</span>
                        <span className="tech-tag">API Integration</span>
                        <span className="tech-tag">AI UI</span>
                      </div>
                      <div style={{ display: "flex", gap: "16px", fontSize: "0.85rem", fontWeight: 500 }}>
                        <a href="https://github.com/aryanRN2/ai-chatbot" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--primary)" }}>
                          Codebase ↗
                        </a>
                        <a href="https://rn-ai-120b.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--secondary)" }}>
                          Live Demo ↗
                        </a>
                      </div>
                    </div>

                    {/* Project 6: workshop-helper */}
                    <div className="glass-panel project-card">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>Workshop Helper</h3>
                        <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--secondary)" }}>2026</span>
                      </div>
                      <p style={{ color: "var(--slate-400)", fontSize: "0.9rem", lineHeight: 1.5, flexGrow: 1, marginBottom: "20px" }}>
                        A serverless GenAI RAG system and interactive Next.js dashboard integrating Meta Llama 3 via Hugging Face inference and Three.js 3D WebGL simulations, powered by GCP pipelines.
                      </p>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                        <span className="tech-tag">Next.js 16</span>
                        <span className="tech-tag">Three.js</span>
                        <span className="tech-tag">GCP</span>
                        <span className="tech-tag">Llama 3</span>
                        <span className="tech-tag">RAG</span>
                      </div>
                      <div style={{ display: "flex", gap: "16px", fontSize: "0.85rem", fontWeight: 500 }}>
                        <a href="https://github.com/aryanRN2/workshop-helper" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--primary)" }}>
                          Codebase ↗
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
            </div>
          </section>
        </main>
        <footer style={{ padding: "2rem", textAlign: "center", zIndex: 10 }}>
          <p>© {new Date().getFullYear()} ARYAN MAURYA. BUILT WITH NEXT.JS, THREE.JS & TYPESCRIPT. LIGHTWEIGHT & FLUID.</p>
        </footer>
      </div>
    </>
  );
}
