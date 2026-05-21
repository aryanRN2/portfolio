"use client";

import { useEffect, useRef, useState } from "react";

interface Category {
  id: string;
  name: string;
  angle: number; // in radians
  color: string; // HSL color
  glowColor: string;
}

interface SubNode {
  id: string;
  name: string;
  angle: number; // in radians
  categories: string[]; // Connected category IDs
  type: "skill" | "project" | "certificate";
}

interface Connection {
  catId: string;
  nodeId: string;
  color: string;
}

interface Photon {
  catId: string;
  nodeId: string;
  t: number; // Progress 0 to 1
  speed: number;
  color: string;
  size: number;
}

export default function NeuralNetworkChord() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Hover state trackers
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Define AI Categories (Right side)
    // Angles distributed in the right hemisphere (-45deg to 45deg)
    const categories: Category[] = [
      {
        id: "dl",
        name: "DEEP LEARNING & NLP",
        angle: -Math.PI / 4, // -45 deg
        color: "hsl(263, 90%, 65%)", // Vibrant Purple
        glowColor: "rgba(139, 92, 246, 0.4)",
      },
      {
        id: "rag",
        name: "AGENTIC SYSTEMS & RAG",
        angle: -Math.PI / 12, // -15 deg
        color: "hsl(190, 95%, 50%)", // Neon Cyan
        glowColor: "rgba(6, 182, 212, 0.4)",
      },
      {
        id: "ml",
        name: "PREDICTIVE MODELING",
        angle: Math.PI / 12, // 15 deg
        color: "hsl(142, 85%, 50%)", // Neon Green
        glowColor: "rgba(34, 197, 94, 0.4)",
      },
      {
        id: "ops",
        name: "MLOPS & SOFTWARE",
        angle: Math.PI / 4, // 45 deg
        color: "hsl(30, 95%, 50%)", // Neon Orange
        glowColor: "rgba(249, 115, 22, 0.4)",
      },
    ];

    // Define perimeter Sub-nodes (Left and around, from 85deg to 275deg)
    // Spaced out along the rest of the circle
    const subNodesRaw = [
      { id: "pytorch", name: "PyTorch & Deep Learning Core", categories: ["dl"], type: "skill" },
      { id: "trans", name: "Transformers & LLMs", categories: ["dl", "rag"], type: "skill" },
      { id: "lang", name: "LangChain & LangGraph", categories: ["rag", "ops"], type: "skill" },
      { id: "vector", name: "VectorDB & Semantic Search", categories: ["rag"], type: "skill" },
      { id: "scikit", name: "Scikit-Learn & Prediction", categories: ["ml"], type: "skill" },
      { id: "analytics", name: "Google Data Analytics", categories: ["ml"], type: "certificate" },
      { id: "andrew", name: "DeepLearning.AI Andrew Ng", categories: ["dl", "ml"], type: "certificate" },
      { id: "chatbot", name: "AI Chatbot Client", categories: ["dl", "rag"], type: "project" },
      { id: "library", name: "VRS Digital Library", categories: ["ops"], type: "project" },
      { id: "placement", name: "Placement Portal Delta", categories: ["ops", "ml"], type: "project" },
      { id: "deeplink", name: "DeepLink Social Aggregator", categories: ["ops"], type: "project" },
      { id: "hackerrank", name: "HackerRank Software Intern", categories: ["ops"], type: "certificate" },
    ] as const;

    // Distribute subNodes evenly between 95 degrees and 265 degrees
    const startAngle = (100 * Math.PI) / 180;
    const endAngle = (260 * Math.PI) / 180;
    
    const subNodes: SubNode[] = subNodesRaw.map((node, index) => {
      const angle = startAngle + (index * (endAngle - startAngle)) / (subNodesRaw.length - 1);
      return {
        ...node,
        angle,
        categories: [...node.categories],
      };
    });

    // Connections List
    const connections: Connection[] = [];
    subNodes.forEach((node) => {
      node.categories.forEach((catId) => {
        const cat = categories.find((c) => c.id === catId);
        if (cat) {
          connections.push({
            catId,
            nodeId: node.id,
            color: cat.color,
          });
        }
      });
    });

    // Active Photons (particle pulses traveling along paths)
    let photons: Photon[] = [];
    
    // Track active hovered elements inside ref variables to avoid closure stale state
    const currentHoveredNode = { current: null as string | null };
    const currentHoveredCat = { current: null as string | null };

    // Set up canvas sizing
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let radius = 0;

    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = Math.max(500, rect.height);
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.resetTransform();
      ctx.scale(dpr, dpr);

      centerX = width / 2;
      centerY = height / 2;
      // Scaled radius to leave room for text (smaller radius ratio on mobile to fit long text)
      const isMobile = width < 600;
      const isSmallMobile = width < 400;
      radius = Math.min(width, height) * (isSmallMobile ? 0.12 : (isMobile ? 0.16 : 0.28));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Quadratic Bezier interpolation function
    const getBezierPoint = (p0: { x: number; y: number }, p1: { x: number; y: number }, p2: { x: number; y: number }, t: number) => {
      const x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
      const y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;
      return { x, y };
    };

    // Calculate specific node coordinate
    const getNodePos = (angle: number) => {
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    };

    // Calculate quadratic Bezier control point (bowing slightly towards center)
    const getControlPoint = (p0: { x: number; y: number }, p1: { x: number; y: number }) => {
      // Bow curves toward the center but lerp to prevent overlapping right at the middle
      const cpX = centerX * 0.7 + ((p0.x + p1.x) / 2) * 0.3;
      const cpY = centerY * 0.7 + ((p0.y + p1.y) / 2) * 0.3;
      return { x: cpX, y: cpY };
    };

    // Trigger photon along active connections
    const emitPhotonsForSource = (type: "cat" | "node", id: string) => {
      const activeConns = connections.filter((conn) => 
        type === "cat" ? conn.catId === id : conn.nodeId === id
      );

      activeConns.forEach((conn) => {
        // Only trigger if we don't have too many active ones on the same line
        const existingCount = photons.filter(
          (ph) => ph.catId === conn.catId && ph.nodeId === conn.nodeId
        ).length;

        if (existingCount < 2) {
          photons.push({
            catId: conn.catId,
            nodeId: conn.nodeId,
            t: 0,
            speed: 0.008 + Math.random() * 0.008,
            color: conn.color,
            size: 3 + Math.random() * 2,
          });
        }
      });
    };

    // Continuous high-volume emission of data photons
    const autoPulseInterval = setInterval(() => {
      // Emit 2 to 4 random photons continuously
      const emissionCount = Math.floor(Math.random() * 3) + 2;
      for (let i = 0; i < emissionCount; i++) {
        const randomConn = connections[Math.floor(Math.random() * connections.length)];
        if (randomConn) {
          photons.push({
            catId: randomConn.catId,
            nodeId: randomConn.nodeId,
            t: 0,
            speed: 0.004 + Math.random() * 0.006,
            color: randomConn.color,
            size: 2.0 + Math.random() * 2.0,
          });
        }
      }
    }, 150); // Fire extremely frequently for continuous flow

    // Pointer Tracking for dynamic hits (Mouse + Touch)
    const onPointerMove = (event: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      
      let clientX = 0;
      let clientY = 0;
      
      if ('touches' in event) {
        if (event.touches.length > 0) {
          clientX = event.touches[0].clientX;
          clientY = event.touches[0].clientY;
        }
      } else {
        clientX = (event as MouseEvent).clientX;
        clientY = (event as MouseEvent).clientY;
      }

      const mouseX = clientX - rect.left;
      const mouseY = clientY - rect.top;

      let matchedNode: string | null = null;
      let matchedCat: string | null = null;

      // Check Categories
      categories.forEach((cat) => {
        const pos = getNodePos(cat.angle);
        const dist = Math.hypot(mouseX - pos.x, mouseY - pos.y);
        // Active detection zone
        if (dist < 22) {
          matchedCat = cat.id;
        }
      });

      // Check Sub-nodes
      subNodes.forEach((node) => {
        const pos = getNodePos(node.angle);
        const dist = Math.hypot(mouseX - pos.x, mouseY - pos.y);
        if (dist < 16) {
          matchedNode = node.id;
        }
      });

      if (matchedNode !== currentHoveredNode.current) {
        currentHoveredNode.current = matchedNode;
        setHoveredNode(matchedNode);
        if (matchedNode) {
          emitPhotonsForSource("node", matchedNode);
        }
      }

      if (matchedCat !== currentHoveredCat.current) {
        currentHoveredCat.current = matchedCat;
        setHoveredCategory(matchedCat);
        if (matchedCat) {
          emitPhotonsForSource("cat", matchedCat);
        }
      }
    };

    canvas.addEventListener("mousemove", onPointerMove as EventListener);
    canvas.addEventListener("touchstart", onPointerMove as EventListener, { passive: true });
    canvas.addEventListener("touchmove", onPointerMove as EventListener, { passive: true });

    // Main animation frame loop
    let animationId: number;
    let basePulseAngle = 0;

    const render = () => {
      animationId = requestAnimationFrame(render);
      basePulseAngle += 0.015;

      // Draw high-fidelity dark-themed radar terminal style
      ctx.clearRect(0, 0, width, height);

      // Background subtle circular glows
      const glowGrad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, radius * 1.4);
      glowGrad.addColorStop(0, "rgba(8, 5, 24, 0.08)");
      glowGrad.addColorStop(1, "rgba(4, 2, 12, 0)");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw cybernetic network grids (concentric guides)
      ctx.strokeStyle = "rgba(79, 70, 229, 0.04)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Outer dotted boundary line
      ctx.setLineDash([3, 5]);
      ctx.strokeStyle = "rgba(79, 70, 229, 0.08)";
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.8, 0, Math.PI * 2);
      ctx.arc(centerX, centerY, radius * 0.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]); // clear dash pattern

      // Central core node
      const coreGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 0.18);
      coreGrad.addColorStop(0, "rgba(79, 70, 229, 0.15)");
      coreGrad.addColorStop(0.5, "rgba(6, 182, 212, 0.05)");
      coreGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.18, 0, Math.PI * 2);
      ctx.fill();

      // Tiny central text
      ctx.fillStyle = "rgba(99, 102, 241, 0.25)";
      ctx.font = "bold 8px Courier, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("AI ENGINE CORE", centerX, centerY);

      // Render Bezier Curves (Chords)
      // Render static (un-highlighted) curves first to optimize draw calls
      ctx.lineWidth = 1;
      connections.forEach((conn) => {
        const isConnActive =
          currentHoveredCat.current === conn.catId ||
          currentHoveredNode.current === conn.nodeId;

        if (!isConnActive) {
          const cat = categories.find((c) => c.id === conn.catId);
          const node = subNodes.find((n) => n.id === conn.nodeId);
          if (cat && node) {
            const pCat = getNodePos(cat.angle);
            const pNode = getNodePos(node.angle);
            const cp = getControlPoint(pCat, pNode);

            // Inactive state is a faint, glowing HSL line
            ctx.strokeStyle = conn.color.replace(")", ", 0.075)").replace("hsl", "hsla");
            ctx.beginPath();
            ctx.moveTo(pCat.x, pCat.y);
            ctx.quadraticCurveTo(cp.x, cp.y, pNode.x, pNode.y);
            ctx.stroke();
          }
        }
      });

      // Render active/highlighted curves next with shadowBlur (glow)
      connections.forEach((conn) => {
        const isConnActive =
          currentHoveredCat.current === conn.catId ||
          currentHoveredNode.current === conn.nodeId;

        if (isConnActive) {
          const cat = categories.find((c) => c.id === conn.catId);
          const node = subNodes.find((n) => n.id === conn.nodeId);
          if (cat && node) {
            const pCat = getNodePos(cat.angle);
            const pNode = getNodePos(node.angle);
            const cp = getControlPoint(pCat, pNode);

            // Neon glowing line
            ctx.lineWidth = 2.0;
            ctx.shadowBlur = 14;
            ctx.shadowColor = conn.color;
            ctx.strokeStyle = conn.color;
            ctx.beginPath();
            ctx.moveTo(pCat.x, pCat.y);
            ctx.quadraticCurveTo(cp.x, cp.y, pNode.x, pNode.y);
            ctx.stroke();

            // Clear shadow settings immediately for performance
            ctx.shadowBlur = 0;
            ctx.lineWidth = 1;
          }
        }
      });

      // Render categories (Right Side Labels & Nodes)
      categories.forEach((cat) => {
        const pos = getNodePos(cat.angle);
        const isActive = currentHoveredCat.current === cat.id;

        // Draw category halo glow
        if (isActive) {
          ctx.fillStyle = cat.glowColor;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 14, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw primary node circle
        ctx.fillStyle = cat.color;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, isActive ? 7 : 5, 0, Math.PI * 2);
        ctx.fill();

        // Node border
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = isActive ? 2 : 1.5;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, isActive ? 7 : 5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 1;

        // Label rotation outwards
        ctx.save();
        ctx.translate(pos.x, pos.y);
        ctx.rotate(cat.angle);
        
        const isMobile = width < 600;
        const isSmallMobile = width < 400;
        ctx.fillStyle = isActive ? "#ffffff" : "rgba(226, 232, 240, 0.85)";
        
        const fontSizeActive = isSmallMobile ? "7px" : (isMobile ? "9px" : "11px");
        const fontSizeInactive = isSmallMobile ? "6px" : (isMobile ? "7.5px" : "10px");
        ctx.font = `bold ${isActive ? fontSizeActive : fontSizeInactive} var(--font-mono), monospace`;
        
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";

        // Neon shadow text for active state
        if (isActive) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = cat.color;
        }
        
        // Offset text slightly from circle
        const textOffset = isSmallMobile ? 6 : (isMobile ? 12 : 16);
        ctx.fillText(cat.name, textOffset, 0);
        ctx.restore();
      });

      // Render Sub-nodes (Left Side & Outer Nodes)
      subNodes.forEach((node) => {
        const pos = getNodePos(node.angle);
        const isActive = currentHoveredNode.current === node.id;
        const isParentActive =
          currentHoveredCat.current && node.categories.includes(currentHoveredCat.current);

        // Find primary matching color based on node type/category
        const primaryCat = categories.find((c) => node.categories.includes(c.id)) || categories[0];
        const themeColor = primaryCat.color;

        // Hover halo glow
        if (isActive || isParentActive) {
          ctx.fillStyle = primaryCat.glowColor;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 10, 0, Math.PI * 2);
          ctx.fill();
        }

        // Subnode dot
        ctx.fillStyle = isActive || isParentActive ? themeColor : "rgba(100, 116, 139, 0.6)";
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, isActive ? 5.5 : 4, 0, Math.PI * 2);
        ctx.fill();

        // Node Ring outline
        ctx.strokeStyle = isActive || isParentActive ? "#ffffff" : "rgba(255,255,255,0.15)";
        ctx.lineWidth = isActive ? 1.5 : 1;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, isActive ? 5.5 : 4, 0, Math.PI * 2);
        ctx.stroke();

        // Radial outward text logic (flipped on left hemisphere)
        ctx.save();
        ctx.translate(pos.x, pos.y);
        
        // Normalize angle to [-PI, PI] range
        let normAngle = node.angle;
        while (normAngle > Math.PI) normAngle -= Math.PI * 2;
        while (normAngle < -Math.PI) normAngle += Math.PI * 2;

        let rotationAngle = normAngle;
        let isLeftHemisphere = normAngle > Math.PI / 2 || normAngle < -Math.PI / 2;

        const isMobile = width < 600;
        const isSmallMobile = width < 400;
        const nodeOffset = isSmallMobile ? 5 : (isMobile ? 8 : 12);
        
        if (isLeftHemisphere) {
          // Flip angle 180 deg to prevent text being upside down on the left
          rotationAngle = normAngle + Math.PI;
          ctx.rotate(rotationAngle);
          ctx.textAlign = "right";
          ctx.fillText(node.name, -nodeOffset, 0);
        } else {
          ctx.rotate(rotationAngle);
          ctx.textAlign = "left";
          ctx.fillText(node.name, nodeOffset, 0);
        }

        ctx.fillStyle = isActive || isParentActive ? "#ffffff" : "rgba(148, 163, 184, 0.75)";
        const nodeSizeActive = isSmallMobile ? "7px" : (isMobile ? "8.5px" : "10.5px");
        const nodeSizeInactive = isSmallMobile ? "5.5px" : (isMobile ? "7.5px" : "9.5px");
        ctx.font = `${isActive || isParentActive ? "600" : "400"} ${isActive || isParentActive ? nodeSizeActive : nodeSizeInactive} var(--font-sans), sans-serif`;
        ctx.textBaseline = "middle";

        ctx.restore();
      });

      // Update and Render Photon particles
      photons.forEach((ph, index) => {
        const cat = categories.find((c) => c.id === ph.catId);
        const node = subNodes.find((n) => n.id === ph.nodeId);
        if (cat && node) {
          const pCat = getNodePos(cat.angle);
          const pNode = getNodePos(node.angle);
          const cp = getControlPoint(pCat, pNode);

          // Update progression
          ph.t += ph.speed;

          if (ph.t > 1) {
            // Remove when path completes
            photons.splice(index, 1);
            return;
          }

          // Fetch current location coordinate along path
          const curPos = getBezierPoint(pCat, cp, pNode, ph.t);

          // Render glowing particle
          ctx.shadowBlur = 10;
          ctx.shadowColor = ph.color;
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(curPos.x, curPos.y, ph.size, 0, Math.PI * 2);
          ctx.fill();

          // Particle tail/trail (optional effect - drawn simply with alpha)
          ctx.fillStyle = ph.color.replace(")", ", 0.3)").replace("hsl", "hsla");
          ctx.beginPath();
          ctx.arc(curPos.x, curPos.y, ph.size * 1.6, 0, Math.PI * 2);
          ctx.fill();

          ctx.shadowBlur = 0; // reset
        }
      });
    };

    render();

    // Cleanups on unmount
    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(autoPulseInterval);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", onPointerMove as EventListener);
      canvas.removeEventListener("touchstart", onPointerMove as EventListener);
      canvas.removeEventListener("touchmove", onPointerMove as EventListener);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="glass-panel animate-fade-in-up delay-200"
      style={{
        position: "relative",
        background: "rgba(10, 10, 20, 0.96)",
        border: "1px solid rgba(79, 70, 229, 0.2)",
        boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        borderRadius: "20px",
        overflow: "hidden",
        width: "100%",
        padding: "24px",
        marginTop: "2.5rem",
        marginBottom: "3.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Decorative Technical Badging */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          paddingBottom: "16px",
          marginBottom: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Animated pulsing cyber light */}
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#4f46e5",
              boxShadow: "0 0 10px #4f46e5",
              display: "inline-block",
              animation: "pulse 2s infinite ease-in-out",
            }}
          />
          <span
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "0.85rem",
              fontWeight: 600,
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.08em",
            }}
          >
            NEURAL ARCHITECTURE HUB
          </span>
        </div>
        <span
          style={{
            fontSize: "0.75rem",
            color: "rgba(99, 102, 241, 0.65)",
            fontFamily: "var(--font-mono)",
          }}
        >
          INTERACTIVE SYNAPSE MAP
        </span>
      </div>

      {/* Description Text */}
      <p
        style={{
          color: "rgba(148, 163, 184, 0.8)",
          fontSize: "0.9rem",
          lineHeight: 1.5,
          textAlign: "center",
          maxWidth: "700px",
          marginBottom: "24px",
        }}
      >
        Hover over the core AI domains on the right or individual tech nodes around the perimeter to trace 
        connected synapses. Photons indicate active execution lines linking theoretical systems to projects & certs.
      </p>

      {/* Interactive Bounding Canvas */}
      <div style={{ position: "relative", width: "100%", minHeight: "560px" }}>
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
            cursor: "crosshair",
          }}
        />
      </div>

      {/* Custom pulse keyframe injector */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.5; box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.7); }
          70% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 6px rgba(79, 70, 229, 0); }
          100% { transform: scale(0.95); opacity: 0.5; box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
        }
      `}} />
    </div>
  );
}
