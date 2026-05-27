"use client";

import Link from "next/link";
import ThreeBackground from "../components/ThreeBackground";

export default function Page() {
  return (
    <>
      <ThreeBackground activeTab="certificates" />
      <div className="container glow-certificates" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
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
                    


                    {/* Google Data Analytics Certificate */}
                    <div className="glass-panel certificate-card">
                      <div className="certificate-icon" style={{ background: "rgba(66, 133, 244, 0.08)" }}>
                        <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <h3 style={{ fontSize: "1.0rem", fontWeight: 600 }}>Google Data Analytics</h3>
                        <p style={{ color: "var(--slate-400)", fontSize: "0.8rem" }}>Google • 2026</p>
                        <a href="https://coursera.org/share/0de66d0bebc87533d3f1edad2227b7ab" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 500, textDecoration: "none", marginTop: "4px" }}>
                          Verify Credential ↗
                        </a>
                      </div>
                    </div>

                    {/* Real Cert 2: DeepLearning.AI Andrew Ng Course 3 */}
                    <div className="glass-panel certificate-card">
                      <div className="certificate-icon" style={{ background: "rgba(79, 70, 229, 0.08)" }}>
                        <img src="https://www.deeplearning.ai/favicon.ico" width="24" height="24" alt="DeepLearning.AI" style={{ borderRadius: "50%" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <h3 style={{ fontSize: "1.0rem", fontWeight: 600 }}>Unsupervised Learning, Recommenders, Reinforcement Learning</h3>
                        <p style={{ color: "var(--slate-400)", fontSize: "0.8rem" }}>DeepLearning.AI & Stanford • 2025</p>
                        <a href="https://learn.deeplearning.ai/certificates/df53addd-a4b7-42dc-b46e-646d29b39f34?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 500, textDecoration: "none", marginTop: "4px" }}>
                          Verify Credential ↗
                        </a>
                      </div>
                    </div>

                    {/* DeepLearning.AI LangChain */}
                    <div className="glass-panel certificate-card">
                      <div className="certificate-icon" style={{ background: "rgba(79, 70, 229, 0.08)" }}>
                        <img src="https://www.deeplearning.ai/favicon.ico" width="24" height="24" alt="DeepLearning.AI" style={{ borderRadius: "50%" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <h3 style={{ fontSize: "1.0rem", fontWeight: 600 }}>LangChain for LLM Application Development</h3>
                        <p style={{ color: "var(--slate-400)", fontSize: "0.8rem" }}>DeepLearning.AI • 2026</p>
                        <a href="https://learn.deeplearning.ai/accomplishments/2cb1b828-cf93-4268-a1de-5d45b5647997" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 500, textDecoration: "none", marginTop: "4px" }}>
                          Verify Credential ↗
                        </a>
                      </div>
                    </div>


                    {/* Real Cert 3: HackerRank Software Engineer Intern */}
                    <div className="glass-panel certificate-card">
                      <div className="certificate-icon" style={{ background: "rgba(46, 200, 102, 0.08)" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="5" fill="#2EC866" />
                          <path d="M7 6h2.5v4h3V6H15v12h-2.5v-4.5h-3V18H7V6z" fill="#FFF" />
                        </svg>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <h3 style={{ fontSize: "1rem", fontWeight: 600 }}>Software Engineer Intern</h3>
                        <p style={{ color: "var(--slate-400)", fontSize: "0.8rem" }}>HackerRank Platform • 2026</p>
                        <a href="https://www.hackerrank.com/certificates/483e3a868295" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 500, textDecoration: "none", marginTop: "4px" }}>
                          Verify Credential ↗
                        </a>
                      </div>
                    </div>

                    {/* Real Cert 4: SQL (Intermediate) */}
                    <div className="glass-panel certificate-card">
                      <div className="certificate-icon" style={{ background: "rgba(46, 200, 102, 0.08)" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="5" fill="#2EC866" />
                          <path d="M7 6h2.5v4h3V6H15v12h-2.5v-4.5h-3V18H7V6z" fill="#FFF" />
                        </svg>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <h3 style={{ fontSize: "1rem", fontWeight: 600 }}>SQL (Intermediate)</h3>
                        <p style={{ color: "var(--slate-400)", fontSize: "0.8rem" }}>HackerRank Platform • 2026</p>
                        <a href="https://www.hackerrank.com/certificates/ad9fca35a52d" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 500, textDecoration: "none", marginTop: "4px" }}>
                          Verify Credential ↗
                        </a>
                      </div>
                    </div>

                    {/* Real Cert 5: Python (Basic) */}
                    <div className="glass-panel certificate-card">
                      <div className="certificate-icon" style={{ background: "rgba(46, 200, 102, 0.08)" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="5" fill="#2EC866" />
                          <path d="M7 6h2.5v4h3V6H15v12h-2.5v-4.5h-3V18H7V6z" fill="#FFF" />
                        </svg>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <h3 style={{ fontSize: "1rem", fontWeight: 600 }}>Python (Basic)</h3>
                        <p style={{ color: "var(--slate-400)", fontSize: "0.8rem" }}>HackerRank Platform • 2026</p>
                        <a href="https://www.hackerrank.com/certificates/89dc7c29d5a4" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 500, textDecoration: "none", marginTop: "4px" }}>
                          Verify Credential ↗
                        </a>
                      </div>
                    </div>

                    {/* Real Cert 6: SQL (Basic) */}
                    <div className="glass-panel certificate-card">
                      <div className="certificate-icon" style={{ background: "rgba(46, 200, 102, 0.08)" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="5" fill="#2EC866" />
                          <path d="M7 6h2.5v4h3V6H15v12h-2.5v-4.5h-3V18H7V6z" fill="#FFF" />
                        </svg>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <h3 style={{ fontSize: "1rem", fontWeight: 600 }}>SQL (Basic)</h3>
                        <p style={{ color: "var(--slate-400)", fontSize: "0.8rem" }}>HackerRank Platform • 2026</p>
                        <a href="https://www.hackerrank.com/certificates/aed520b009e7" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 500, textDecoration: "none", marginTop: "4px" }}>
                          Verify Credential ↗
                        </a>
                      </div>
                    </div>

                    {/* Real Cert 7: CSS (Basic) */}
                    <div className="glass-panel certificate-card">
                      <div className="certificate-icon" style={{ background: "rgba(46, 200, 102, 0.08)" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="5" fill="#2EC866" />
                          <path d="M7 6h2.5v4h3V6H15v12h-2.5v-4.5h-3V18H7V6z" fill="#FFF" />
                        </svg>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <h3 style={{ fontSize: "1rem", fontWeight: 600 }}>CSS (Basic)</h3>
                        <p style={{ color: "var(--slate-400)", fontSize: "0.8rem" }}>HackerRank Platform • 2026</p>
                        <a href="https://www.hackerrank.com/certificates/02861798b509" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 500, textDecoration: "none", marginTop: "4px" }}>
                          Verify Credential ↗
                        </a>
                      </div>
                    </div>

                    {/* Kaggle Expert Badge */}
                    <div className="glass-panel certificate-card">
                      <div className="certificate-icon" style={{ background: "rgba(32, 190, 255, 0.1)" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M19 2.25L11.5 12l7.5 9.75h-3.75L8.75 13.5v8.25H5.5V2.25h3.25v9L15.25 2.25H19z" fill="#20BEFF" />
                        </svg>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <h3 style={{ fontSize: "1rem", fontWeight: 600 }}>Kaggle Notebooks Expert</h3>
                        <p style={{ color: "var(--slate-400)", fontSize: "0.8rem" }}>Kaggle Platform • 2025</p>
                        <a href="https://www.kaggle.com/aryanbhu" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 500, textDecoration: "none", marginTop: "4px" }}>
                          Verify Profile ↗
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
