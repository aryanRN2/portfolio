"use client";

import { useState } from "react";
import Link from "next/link";
import ThreeBackground from "./components/ThreeBackground";
import NeuralNetworkChord from "./components/NeuralNetworkChord";

type TabType = "education" | "projects" | "certificates" | "socials" | "neural";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");

  return (
    <>
      {/* High-performance lightweight 3D Background */}
      <ThreeBackground />

      {/* Main Container */}
      <div className="container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        
        {/* Navigation Removed */}

        {/* Hero & About Section */}
        <main style={{ flex: 1, padding: "3rem 0" }}>
          
          <section id="about" className="animate-fade-in-up" style={{ marginBottom: "4rem" }}>
            <div className="glass-panel" style={{ padding: "40px", position: "relative", overflow: "hidden" }}>
              {/* Decorative subtle glows */}
              <div style={{
                position: "absolute",
                top: "-10%",
                right: "-10%",
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                background: "radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)",
                pointerEvents: "none"
              }} />
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", textAlign: "center" }}>
                
                {/* Meta Tag Badge */}
                <div style={{ display: "inline-flex", alignSelf: "center", marginBottom: "1rem" }}>
                  <div style={{
                    position: "relative",
                    background: "linear-gradient(90deg, rgba(79, 70, 229, 0.1), rgba(8, 145, 178, 0.1))",
                    border: "1px solid rgba(79, 70, 229, 0.3)",
                    color: "var(--primary)",
                    padding: "8px 20px",
                    borderRadius: "30px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    fontFamily: "var(--font-mono)",
                    boxShadow: "0 0 15px rgba(79, 70, 229, 0.15)"
                  }}>
                    <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", marginRight: "8px", boxShadow: "0 0 8px var(--primary)" }}></span>
                    ABOUT ME
                  </div>
                </div>

                {/* Name */}
                <h1 style={{ 
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)", 
                  fontWeight: 900, 
                  lineHeight: 1.1, 
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(135deg, #0f172a 0%, #4f46e5 50%, #0891b2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 4px 12px rgba(79, 70, 229, 0.15))"
                }}>
                  Aryan Maurya
                </h1>

                {/* Tagline focused heavily on ML and AI */}
                <p style={{ 
                  fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)", 
                  fontWeight: 400, 
                  color: "var(--slate-400)", 
                  lineHeight: 1.6, 
                  maxWidth: "850px",
                  marginTop: "0.5rem"
                }}>
                  Training intelligent deep neural architectures and building highly scalable, data-driven AI systems. Specializing in <strong style={{ color: "var(--primary)" }}>Deep Learning</strong>, <strong style={{ color: "var(--primary)" }}>Predictive Modeling</strong>, and <strong style={{ color: "var(--primary)" }}>High-Performance Machine Learning Pipelines</strong>.
                </p>

              </div>
            </div>
          </section>

          {/* AI Engineer Neural Connection Map (Moved to Tabs) */}

          {/* Interactive Hub Section */}
          <section id="hub" className="animate-fade-in-up delay-100" style={{ scrollMarginTop: "100px" }}>
            
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <h2 className="gradient-text" style={{ fontSize: "1.8rem", fontWeight: 700 }}>Interactive Directory</h2>
              <p style={{ color: "var(--slate-400)", fontSize: "0.95rem", marginTop: "6px" }}>Select a section below to explore my credentials</p>
            </div>

            {/* Tab Selectors */}
            <div className="tabs-container">
              <button 
                onClick={() => setActiveTab("projects")} 
                className={`tab-btn ${activeTab === "projects" ? "active" : ""}`}
              >
                {/* SVG Folder/Project Icon */}
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                My Projects
              </button>

              <button 
                onClick={() => setActiveTab("education")} 
                className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
              >
                {/* SVG Education Cap Icon */}
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                My Education
              </button>

              <button 
                onClick={() => setActiveTab("certificates")} 
                className={`tab-btn ${activeTab === "certificates" ? "active" : ""}`}
              >
                {/* SVG Award Icon */}
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                My Certificates
              </button>

              <button 
                onClick={() => setActiveTab("socials")} 
                className={`tab-btn ${activeTab === "socials" ? "active" : ""}`}
              >
                {/* SVG Connections Icon */}
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Social Connect
              </button>



              <Link 
                href="/neural-graph" 
                className="tab-btn"
                style={{ textDecoration: "none" }}
              >
                {/* SVG Radial Circular Mapping Icon */}
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                  <path d="M12 3v6M12 15v6M3 12h6M15 12h9" stroke="currentColor" strokeWidth="2" />
                </svg>
                Master Neural Map ↗
              </Link>
            </div>

            {/* Dynamic Content Panel */}
            <div style={{ minHeight: "400px" }}>
              


              {/* TAB: PROJECTS */}
              {activeTab === "projects" && (
                <div style={{ animation: "fadeInUp 0.5s ease forwards" }}>
                  <div className="cards-grid">
                    
                    {/* Project 1: DeepLink-social-platform */}
                    <div className="glass-panel project-card">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>DeepLink Social Platform</h3>
                        <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--secondary)" }}>2026</span>
                      </div>
                      <p style={{ color: "var(--slate-400)", fontSize: "0.9rem", lineHeight: 1.5, flexGrow: 1, marginBottom: "20px" }}>
                        A beautiful links aggregator and deep-linking system that creates optimized paths for profile sharing and platform-to-platform redirection, preserving developer card context.
                      </p>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                        <span className="tech-tag">JavaScript</span>
                        <span className="tech-tag">HTML5</span>
                        <span className="tech-tag">CSS3</span>
                        <span className="tech-tag">Vercel</span>
                      </div>
                      <div style={{ display: "flex", gap: "16px", fontSize: "0.85rem", fontWeight: 500 }}>
                        <a href="https://github.com/aryanRN2/DeepLink-social-platform" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--primary)" }}>
                          Codebase ↗
                        </a>
                        <a href="https://deeplink-friends.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--secondary)" }}>
                          Live Demo ↗
                        </a>
                      </div>
                    </div>

                    {/* Project 2: VRS Placement Portal Delta */}
                    <div className="glass-panel project-card">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>Placement Project Delta</h3>
                        <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--secondary)" }}>2026</span>
                      </div>
                      <p style={{ color: "var(--slate-400)", fontSize: "0.9rem", lineHeight: 1.5, flexGrow: 1, marginBottom: "20px" }}>
                        A high-performance recruitment tracker and analytics dashboard featuring database integrity layers, active candidate registers, and transactional data exports.
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
                        <a href="https://placement-project-delta.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--secondary)" }}>
                          Live Demo ↗
                        </a>
                      </div>
                    </div>

                    {/* Project 3: VRS Digital Library */}
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

                  </div>
                </div>
              )}

              {/* TAB: EDUCATION - SWAPPED ORDER WITH BEAUTIFUL CIRCULAR SVGs & DIRECT VERIFICATION LINKS */}
              {activeTab === "education" && (
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
                              Pursuing core theoretical mathematics, focusing heavily on algebraic structures, mathematical analysis, differential geometry, numerical analysis, and computational mathematics. Strengthening analytical problem-solving and rigorous scientific proofs.
                            </p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                              <div style={{ fontSize: "0.85rem", color: "var(--foreground)", fontFamily: "var(--font-mono)" }}>
                                <strong>Academic Track:</strong> Dual Degree Candidate • Core Mathematics Major
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
                              Pursuing a rigorous program specializing in Machine Learning, Statistical Modeling, Big Data Analytics, Database Management, and programming frameworks. Gaining deep hands-on expertise in algorithm construction, data processing pipelines, and AI systems.
                            </p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                              <div style={{ fontSize: "0.85rem", color: "var(--foreground)", fontFamily: "var(--font-mono)" }}>
                                <strong>Academic Track:</strong> Dual Degree Candidate • Diploma Level (Diploma in Programming) (Online)
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
              )}

              {/* TAB: CERTIFICATES */}
              {activeTab === "certificates" && (
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
              )}

              {/* TAB: SOCIALS - WITH DIRECT ACADEMIC AND PERSONAL EMAILS */}
              {activeTab === "socials" && (
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
                  <hr style={{ border: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.06) 50%, transparent)", margin: "2rem 0" }} />

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
              )}

            </div>

          </section>

          {/* Epic Call to Action to Neural Map */}
          <div style={{ marginTop: "5rem", marginBottom: "2rem", textAlign: "center" }}>
            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem" }}>
              Explore My Entire Ecosystem
            </h3>
            <p style={{ color: "var(--slate-400)", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2.5rem auto", lineHeight: 1.6 }}>
              Dive into the interactive <strong style={{color: "var(--slate-900)"}}>Master Neural Map</strong> to see the data-driven connections between all my projects, skills, and academic milestones in a stunning visual interface.
            </p>
            <Link 
              href="/neural-graph"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                color: "#ffffff",
                padding: "18px 40px",
                borderRadius: "50px",
                fontSize: "1.15rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4), 0 0 20px rgba(124, 58, 237, 0.3)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 20px 35px -5px rgba(79, 70, 229, 0.5), 0 0 35px rgba(124, 58, 237, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(79, 70, 229, 0.4), 0 0 20px rgba(124, 58, 237, 0.3)";
              }}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
                <circle cx="12" cy="12" r="3" fill="currentColor" strokeWidth="0" />
                <path d="M12 3v6M12 15v6M3 12h6M15 12h9" />
              </svg>
              ENTER NEURAL MAP ↗
            </Link>
          </div>

        </main>

        {/* Footer */}
        <footer>
          <p>© {new Date().getFullYear()} ARYAN MAURYA. BUILT WITH NEXT.JS, THREE.JS & TS. LIGHTWEIGHT & FLUID.</p>
        </footer>

      </div>
    </>
  );
}
