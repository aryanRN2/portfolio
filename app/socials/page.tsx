"use client";

import Link from "next/link";
import ThreeBackground from "../components/ThreeBackground";

export default function Page() {
  return (
    <>
      <ThreeBackground activeTab="socials" />
      <div className="container glow-socials" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <header style={{ padding: "2rem clamp(2rem, 8vw, 8rem)", zIndex: 10 }}>
          <Link href="/" className="btn-xai-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            ← BACK TO HOME
          </Link>
        </header>
        <main style={{ flex: 1, padding: "2rem 0" }}>
          <section className="animate-fade-in-up" style={{ padding: "0 clamp(2rem, 8vw, 8rem)" }}>
            <div style={{ minHeight: "400px" }}>
              <div style={{ animation: "fadeInUp 0.5s ease forwards" }}>
                  
                  <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 1.5rem auto" }}>
                    <p style={{ color: "var(--slate-400)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                      Let's sync up! I am actively engaged across multiple engineering and computational platforms. Explore my technical profiles below:
                    </p>
                  </div>

                  <div className="socials-grid" style={{ marginBottom: "3rem" }}>
                    
                    {/* GitHub (Sleek Charcoal) */}
                    <a href="https://github.com/aryanRN2" target="_blank" rel="noopener noreferrer" className="glass-panel social-btn social-github">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#181717" />
                      </svg>
                      <div>
                        <div style={{ fontWeight: 600 }}>GitHub</div>
                        <div style={{ fontSize: "0.75rem", opacity: 0.8, fontFamily: "var(--font-mono)" }}>@aryanRN2</div>
                      </div>
                    </a>

                    {/* LinkedIn (Rich Brand Blue) */}
                    <a href="https://www.linkedin.com/in/aryan-maurya-vns" target="_blank" rel="noopener noreferrer" className="glass-panel social-btn social-linkedin">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="#0A66C2" />
                      </svg>
                      <div>
                        <div style={{ fontWeight: 600 }}>LinkedIn</div>
                        <div style={{ fontSize: "0.75rem", opacity: 0.8, fontFamily: "var(--font-mono)" }}>@aryan-maurya-vns</div>
                      </div>
                    </a>

                    {/* Kaggle (Brilliant Cyan) */}
                    <a href="https://www.kaggle.com/aryanbhu" target="_blank" rel="noopener noreferrer" className="glass-panel social-btn social-kaggle">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 2.25L11.5 12l7.5 9.75h-3.75L8.75 13.5v8.25H5.5V2.25h3.25v9L15.25 2.25H19z" fill="#20BEFF" />
                      </svg>
                      <div>
                        <div style={{ fontWeight: 600 }}>Kaggle</div>
                        <div style={{ fontSize: "0.75rem", opacity: 0.8, fontFamily: "var(--font-mono)" }}>@aryanbhu</div>
                      </div>
                    </a>

                    {/* LeetCode (Vibrant Orange) */}
                    <a href="https://leetcode.com/u/aryan_bhu/" target="_blank" rel="noopener noreferrer" className="glass-panel social-btn social-leetcode">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.483 0a1.374 1.374 0 0 0-.961.411L7.11 5.823a1.372 1.372 0 0 0-.025 1.917l.025.026a1.372 1.372 0 0 0 1.917.025l5.228-5.011a1.372 1.372 0 0 0-.025-1.917L13.483 0zm5.111 8.248a1.375 1.375 0 0 0-1.917-.025L11.45 13.234a1.372 1.372 0 0 0-.025 1.917l.025.026a1.372 1.372 0 0 0 1.917.025l5.228-5.011a1.372 1.372 0 0 0-.025-1.917l-.001-.026zm-7.618 6.47l-1.637 1.637a1.372 1.372 0 0 1-1.94 0l-4.26-4.26a1.372 1.372 0 0 1 0-1.94l6.197-6.197c.536-.536 1.405-.536 1.94 0l1.638 1.637c.536.536.536 1.405 0 1.94l-5.228 5.228a1.372 1.372 0 0 0 0 1.94l3.29 3.29c.536.536.536 1.405 0 1.94l-.001.002z" fill="#FFA116" />
                      </svg>
                      <div>
                        <div style={{ fontWeight: 600 }}>LeetCode</div>
                        <div style={{ fontSize: "0.75rem", opacity: 0.8, fontFamily: "var(--font-mono)" }}>@aryan_bhu</div>
                      </div>
                    </a>

                    {/* HackerRank (Vibrant Green Block) */}
                    <a href="https://www.hackerrank.com/profile/aryannsv" target="_blank" rel="noopener noreferrer" className="glass-panel social-btn social-hackerrank">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" rx="5" fill="#2EC866" />
                        <path d="M7 6h2.5v4h3V6H15v12h-2.5v-4.5h-3V18H7V6z" fill="#FFF" />
                      </svg>
                      <div>
                        <div style={{ fontWeight: 600 }}>HackerRank</div>
                        <div style={{ fontSize: "0.75rem", opacity: 0.8, fontFamily: "var(--font-mono)" }}>@aryannsv</div>
                      </div>
                    </a>

                  </div>

                  {/* Elegant Separator */}
                  <hr style={{ border: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08) 50%, transparent)", margin: "2rem 0" }} />

                  {/* Direct Contact Channels Section */}
                  <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                    <h3 className="gradient-text" style={{ fontSize: "1.4rem", fontWeight: 700 }}>Direct Channels</h3>
                    <p style={{ color: "var(--slate-400)", fontSize: "0.95rem", marginTop: "4px" }}>Reach out directly via my academic or personal emails</p>
                  </div>

                  <div className="socials-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                    
                    {/* BHU Academic Email (Saffron Circular Seal) */}
                    <div className="glass-panel" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        background: "rgba(255, 128, 0, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(255, 128, 0, 0.15)",
                        flexShrink: 0
                      }}>
                        <img src="/bhu-logo-custom.png" alt="BHU logo" style={{ width: "24px", height: "24px", objectFit: "contain" }} />
                      </div>
                      <div style={{ overflow: "hidden" }}>
                        <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--slate-400)", textTransform: "uppercase", letterSpacing: "0.05em" }}>BHU Academic</div>
                        <a href="mailto:aryanmaurya01.sci.2024@bhu.ac.in" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-900)", textDecoration: "none", wordBreak: "break-all" }}>
                          aryanmaurya01.sci.2024@bhu.ac.in
                        </a>
                      </div>
                    </div>

                    {/* IITM Academic Email (Crimson Crest) */}
                    <div className="glass-panel" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        background: "rgba(122, 28, 28, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(122, 28, 28, 0.15)",
                        flexShrink: 0
                      }}>
                        <img src="/iitm-logo.svg" alt="IITM logo" style={{ width: "24px", height: "24px", objectFit: "contain" }} />
                      </div>
                      <div style={{ overflow: "hidden" }}>
                        <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--slate-400)", textTransform: "uppercase", letterSpacing: "0.05em" }}>IIT Madras Academic</div>
                        <a href="mailto:24f2001627@ds.study.iitm.ac.in" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-900)", textDecoration: "none", wordBreak: "break-all" }}>
                          24f2001627@ds.study.iitm.ac.in
                        </a>
                      </div>
                    </div>

                    {/* Personal Email (Sleek Indigo Envelope) */}
                    <div className="glass-panel" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        background: "rgba(79, 70, 229, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(79, 70, 229, 0.15)",
                        flexShrink: 0
                      }}>
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="var(--primary)" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div style={{ overflow: "hidden" }}>
                        <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--slate-400)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Personal Email</div>
                        <a href="mailto:aryannsv@gmail.com" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-900)", textDecoration: "none", wordBreak: "break-all" }}>
                          aryannsv@gmail.com
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
