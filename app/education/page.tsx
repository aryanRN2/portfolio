"use client";

import Link from "next/link";
import ThreeBackground from "../components/ThreeBackground";

export default function Page() {
  return (
    <>
      <ThreeBackground activeTab="education" />
      <div className="container glow-education" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <header style={{ padding: "2rem clamp(2rem, 8vw, 8rem)", zIndex: 10 }}>
          <Link href="/" className="btn-xai-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            ← BACK TO HOME
          </Link>
        </header>
        <main style={{ flex: 1, padding: "2rem 0" }}>
          <section className="animate-fade-in-up" style={{ padding: "0 clamp(2rem, 8vw, 8rem)" }}>
            <div style={{ minHeight: "400px" }}>
              <div style={{ animation: "fadeInUp 0.5s ease forwards" }}>
                  <div className="timeline" style={{ padding: "10px 0 10px 32px" }}>
                    
                    {/* Education Item 1: BHU (Banaras Hindu University) */}
                    <div className="timeline-item">
                      <div className="timeline-dot" />
                      <div className="glass-panel" style={{ padding: "24px" }}>
                        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                          
                          {/* Beautiful Circular BHU Vector SVG Image */}
                          <div style={{
                            width: "54px",
                            height: "54px",
                            borderRadius: "14px",
                            background: "rgba(255, 255, 255, 0.95)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 6px 16px rgba(255, 128, 0, 0.12)",
                            border: "1px solid rgba(0, 0, 0, 0.08)",
                            padding: "2px",
                            flexShrink: 0
                          }}>
                            <img 
                              src="/bhu-logo-custom.png" 
                              alt="BHU Logo" 
                              style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                            />
                          </div>

                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "8px" }}>
                              <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>Bachelor of Science (BS) in Mathematics</h3>
                              <span style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--secondary)", background: "rgba(6, 182, 212, 0.08)", padding: "4px 8px", borderRadius: "6px" }}>
                                2023 — Present
                              </span>
                            </div>
                            <h4 style={{ fontSize: "1rem", color: "var(--primary)", fontWeight: 500, marginBottom: "12px" }}>
                              Banaras Hindu University (BHU)
                            </h4>
                            <p style={{ color: "var(--slate-400)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "14px" }}>
                              Pursuing core theoretical mathematics, focusing heavily on algebraic structures, mathematical analysis, differential geometry, numerical analysis, data analysis, LaTeX typesetting, vector databases, and computational mathematics. Strengthening analytical problem-solving and rigorous scientific proofs.
                            </p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                              <div style={{ fontSize: "0.85rem", color: "var(--foreground)", fontFamily: "var(--font-mono)" }}>
                                <strong>Academic Track:</strong> Dual Degree • Core Mathematics Major
                              </div>
                              <a href="https://verify.bhu.ac.in/student/verify/eECba2CD-F10A-dF9F-7Aa0-C9a83f6b2CDc" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "var(--primary)", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }}>
                                Verify Student Profile ↗
                              </a>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* Education Item 2: IITM (Indian Institute of Technology Madras - ONLINE) */}
                    <div className="timeline-item">
                      <div className="timeline-dot" />
                      <div className="glass-panel" style={{ padding: "24px" }}>
                        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                          
                          {/* Official IITM Logo SVG Image */}
                          <div style={{
                            width: "54px",
                            height: "54px",
                            borderRadius: "14px",
                            background: "rgba(255, 255, 255, 0.95)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 6px 16px rgba(122, 28, 28, 0.12)",
                            border: "1px solid rgba(0, 0, 0, 0.08)",
                            padding: "2px",
                            flexShrink: 0
                          }}>
                            <img 
                              src="/iitm-logo.svg" 
                              alt="IITM Logo" 
                              style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                            />
                          </div>

                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "8px" }}>
                              <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>Bachelor of Science (BS) in Data Science & Applications (Online)</h3>
                              <span style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--secondary)", background: "rgba(6, 182, 212, 0.08)", padding: "4px 8px", borderRadius: "6px" }}>
                                2023 — Present
                              </span>
                            </div>
                            <h4 style={{ fontSize: "1rem", color: "var(--primary)", fontWeight: 500, marginBottom: "12px" }}>
                              Indian Institute of Technology Madras (IITM) (Online)
                            </h4>
                            <p style={{ color: "var(--slate-400)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "14px" }}>
                              Pursuing a rigorous program specializing in Machine Learning, Statistical Modeling, Big Data Analytics, Database Management, Algebra, Calculus, and programming frameworks. Gaining deep hands-on expertise in algorithm construction, data processing pipelines, and AI systems.
                            </p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                              <div style={{ fontSize: "0.85rem", color: "var(--foreground)", fontFamily: "var(--font-mono)" }}>
                                <strong>Academic Track:</strong> Dual Degree • Diploma Level (Diploma in Programming) (Online)
                              </div>
                              <a href="https://ds.study.iitm.ac.in/student/24F2001627" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "var(--primary)", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }}>
                                Verify Student Profile ↗
                              </a>
                            </div>
                          </div>

                        </div>
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
