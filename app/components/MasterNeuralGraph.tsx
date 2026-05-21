"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Define TypeScript interfaces for our Node structure
interface GraphNode {
  id: string;
  name: string;
  type: "center" | "hub" | "data" | "skill";
  hubId?: string; // If data node, which hub it belongs to
  angle: number; // base angle in radians
  radius: number; // radius from center in pixels
  color: string;
  glowColor: string;
  description: string;
  url?: string;
}

interface GraphConnection {
  from: string;
  to: string;
  color: string;
  type: "core" | "primary" | "secondary" | "background";
}

interface Photon {
  from: string;
  to: string;
  t: number; // progress 0 to 1
  speed: number;
  color: string;
  size: number;
}

export default function MasterNeuralGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Interaction State
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [activeConnections, setActiveConnections] = useState<GraphConnection[]>([]);

  // Telemetry counts
  const [nodesCount, setNodesCount] = useState(0);
  const [linksCount, setLinksCount] = useState(0);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- NODE SCHEMATICS DEFINITIONS ---

    // 1. Center Node
    const centerNode: GraphNode = {
      id: "center",
      name: "Aryan Maurya",
      type: "center",
      angle: 0,
      radius: 0,
      color: "#ffffff",
      glowColor: "rgba(99, 102, 241, 0.45)",
      description: "AI & Deep Learning Engineer major specializing in neural architectures, predictive modeling, and scalable intelligent systems.",
    };

    // 2. Left Hemisphere Hubs (Credentials / Creations - radius 140px)
    const leftHubs: GraphNode[] = [
      {
        id: "inst_bhu",
        name: "BHU Varanasi",
        type: "hub",
        angle: 110 * Math.PI / 180, // Left Top-Hemisphere
        radius: 140,
        color: "hsl(195, 95%, 50%)", // Neon Cyan
        glowColor: "rgba(6, 182, 212, 0.3)",
        description: "Banaras Hindu University - Rigorous academic track focusing on abstract mathematical structures, advanced calculus, and linear algebra.",
      },
      {
        id: "inst_iitm",
        name: "IIT Madras",
        type: "hub",
        angle: 130 * Math.PI / 180,
        radius: 140,
        color: "hsl(195, 95%, 50%)", // Neon Cyan
        glowColor: "rgba(6, 182, 212, 0.3)",
        description: "Indian Institute of Technology Madras - Nationally ranked #1 engineering institute. Specialized training in data science and algorithms.",
      },
      {
        id: "inst_google",
        name: "Google Certifications",
        type: "hub",
        angle: 150 * Math.PI / 180,
        radius: 140,
        color: "hsl(45, 95%, 50%)", // Neon Gold
        glowColor: "rgba(234, 179, 8, 0.3)",
        description: "Professional career credentials provider verifying advanced analytics capabilities.",
      },
      {
        id: "inst_hackerrank",
        name: "HackerRank Credentials",
        type: "hub",
        angle: 170 * Math.PI / 180, // Straight Left
        radius: 140,
        color: "hsl(145, 80%, 45%)", // Neon Green
        glowColor: "rgba(34, 197, 94, 0.3)",
        description: "Standardized testing platform verifying modular coding logic, intermediate SQL query design, and styling structures.",
      },
      {
        id: "inst_deeplearning",
        name: "DeepLearning.AI",
        type: "hub",
        angle: 190 * Math.PI / 180,
        radius: 140,
        color: "hsl(280, 95%, 65%)", // Neon Purple
        glowColor: "rgba(168, 85, 247, 0.3)",
        description: "Specialized AI education platform focusing on deep neural network architectures and LLM application development.",
      },
      {
        id: "inst_stanford",
        name: "Stanford Online",
        type: "hub",
        angle: 210 * Math.PI / 180,
        radius: 140,
        color: "hsl(350, 95%, 55%)", // Neon Crimson
        glowColor: "rgba(244, 63, 94, 0.3)",
        description: "Stanford University's computational learning division delivering theoretical machine learning guidelines.",
      },
      {
        id: "inst_kaggle",
        name: "Kaggle Community",
        type: "hub",
        angle: 230 * Math.PI / 180,
        radius: 140,
        color: "hsl(190, 95%, 50%)", // Neon Cyan
        glowColor: "rgba(6, 182, 212, 0.3)",
        description: "Google's machine learning hub hosting dataset exploration, modeling competitions, and notebook portfolios.",
      },
      {
        id: "hub_projects",
        name: "PORTFOLIO PROJECTS",
        type: "hub",
        angle: 250 * Math.PI / 180,
        radius: 140,
        color: "hsl(350, 95%, 55%)", // Neon Red
        glowColor: "rgba(244, 63, 94, 0.3)",
        description: "Full-scale software platforms, computational client engines, database indexers, and LLM chat interfaces.",
      },
    ];

    // 3. Right Hemisphere Hubs (Skill Domains - radius 140px)
    const rightHubs: GraphNode[] = [
      {
        id: "domain_ai",
        name: "DEEP LEARNING & NLP",
        type: "hub",
        angle: -45 * Math.PI / 180, // Right Top-Hemisphere
        radius: 140,
        color: "hsl(280, 95%, 65%)", // Neon Purple/Magenta
        glowColor: "rgba(168, 85, 247, 0.3)",
        description: "Deep neural networks, computational transformer mechanics, sequence modeling, and language embeddings.",
      },
      {
        id: "domain_agentic",
        name: "AGENTIC SYSTEMS & RAG",
        type: "hub",
        angle: -15 * Math.PI / 180,
        radius: 140,
        color: "hsl(175, 95%, 45%)", // Neon Teal
        glowColor: "rgba(13, 148, 136, 0.3)",
        description: "Retrieval-Augmented Generation (RAG), multi-agent orchestration state graphs, semantic memory caches, and automated tool calls.",
      },
      {
        id: "domain_modeling",
        name: "PREDICTIVE MODELING",
        type: "hub",
        angle: 15 * Math.PI / 180,
        radius: 140,
        color: "hsl(142, 85%, 50%)", // Neon Green
        glowColor: "rgba(34, 197, 94, 0.3)",
        description: "Supervised and unsupervised machine learning, statistical regressions, exploratory analysis, and probability distributions.",
      },
      {
        id: "domain_dev",
        name: "MLOPS & WEB DEV",
        type: "hub",
        angle: 45 * Math.PI / 180, // Right Bottom-Hemisphere
        radius: 140,
        color: "hsl(30, 95%, 50%)", // Neon Orange
        glowColor: "rgba(249, 115, 22, 0.3)",
        description: "Full-stack client architecture, type-safe state interfaces, hosting deployment pipelines, and serverless backend API design.",
      },
    ];

    const hubs = [...leftHubs, ...rightHubs];

    // 4. Left Hemisphere Data Nodes (radius 280px)
    const leftDataNodes: GraphNode[] = [
      // BHU Varanasi Details
      {
        id: "edu_bhu",
        name: "BS in Mathematics (BHU)",
        type: "data",
        hubId: "inst_bhu",
        angle: 110 * Math.PI / 180,
        radius: 280,
        color: "hsl(195, 95%, 50%)",
        glowColor: "rgba(6, 182, 212, 0.2)",
        description: "Pursuing theoretical mathematics focusing on algebraic structures, mathematical analysis, and mathematical modeling.",
        url: "https://verify.bhu.ac.in/student/verify/eECba2CD-F10A-dF9F-7Aa0-C9a83f6b2CDc",
      },
      // IIT Madras Details
      {
        id: "edu_iitm",
        name: "BS in Data Science (IITM)",
        type: "data",
        hubId: "inst_iitm",
        angle: 130 * Math.PI / 180,
        radius: 280,
        color: "hsl(195, 95%, 50%)",
        glowColor: "rgba(6, 182, 212, 0.2)",
        description: "Specialized computer science and data science degree focusing on Machine Learning, Database Management, and statistical data modeling.",
        url: "https://ds.study.iitm.ac.in/student/24F2001627",
      },
      // Google Analytics Details
      {
        id: "cert_google_analytics",
        name: "Google Data Analytics Certificate",
        type: "data",
        hubId: "inst_google",
        angle: 150 * Math.PI / 180,
        radius: 280,
        color: "hsl(45, 95%, 50%)",
        glowColor: "rgba(234, 179, 8, 0.2)",
        description: "Google verification of capabilities in SQL queries, data manipulation, R programming, and interactive data visualization.",
        url: "https://coursera.org/share/0de66d0bebc87533d3f1edad2227b7ab",
      },
      // HackerRank Certificates Details
      {
        id: "cert_swe_intern",
        name: "Software Engineer Intern Cert",
        type: "data",
        hubId: "inst_hackerrank",
        angle: 162 * Math.PI / 180,
        radius: 280,
        color: "hsl(145, 80%, 45%)",
        glowColor: "rgba(34, 197, 94, 0.2)",
        description: "Validates core software engineering principles, modular designs, logic parsing, and version control foundations.",
        url: "https://www.hackerrank.com/certificates/483e3a868295",
      },
      {
        id: "cert_sql_intermediate",
        name: "SQL (Intermediate) Cert",
        type: "data",
        hubId: "inst_hackerrank",
        angle: 166 * Math.PI / 180,
        radius: 280,
        color: "hsl(145, 80%, 45%)",
        glowColor: "rgba(34, 197, 94, 0.2)",
        description: "Verifies intermediate relational querying, advanced subqueries, table joins, window analytics, and execution indexing.",
        url: "https://www.hackerrank.com/certificates/ad9fca35a52d",
      },
      {
        id: "cert_python_basic",
        name: "Python (Basic) Cert",
        type: "data",
        hubId: "inst_hackerrank",
        angle: 170 * Math.PI / 180,
        radius: 280,
        color: "hsl(145, 80%, 45%)",
        glowColor: "rgba(34, 197, 94, 0.2)",
        description: "Confirms procedural script design, loop configurations, syntax parsing, and foundational algorithm creation in Python.",
        url: "https://www.hackerrank.com/certificates/89dc7c29d5a4",
      },
      {
        id: "cert_sql_basic",
        name: "SQL (Basic) Cert",
        type: "data",
        hubId: "inst_hackerrank",
        angle: 174 * Math.PI / 180,
        radius: 280,
        color: "hsl(145, 80%, 45%)",
        glowColor: "rgba(34, 197, 94, 0.2)",
        description: "Confirms basic table schema selections, conditional filters, grouping aggregations, and query sorting.",
        url: "https://www.hackerrank.com/certificates/aed520b009e7",
      },
      {
        id: "cert_css_basic",
        name: "CSS (Basic) Cert",
        type: "data",
        hubId: "inst_hackerrank",
        angle: 178 * Math.PI / 180,
        radius: 280,
        color: "hsl(145, 80%, 45%)",
        glowColor: "rgba(34, 197, 94, 0.2)",
        description: "Validates UI layout configurations, responsive grids, custom CSS animations, and modular styling components.",
        url: "https://www.hackerrank.com/certificates/02861798b509",
      },
      // DeepLearning.AI
      {
        id: "cert_langchain_llm",
        name: "LangChain LLM Development",
        type: "data",
        hubId: "inst_deeplearning",
        angle: 190 * Math.PI / 180,
        radius: 280,
        color: "hsl(280, 95%, 65%)",
        glowColor: "rgba(168, 85, 247, 0.2)",
        description: "Professional course credential verifying development of LangChain systems, semantic search integrations, and agent logic.",
        url: "https://learn.deeplearning.ai/accomplishments/2cb1b828-cf93-4268-a1de-5d45b5647997",
      },
      // Stanford Online
      {
        id: "cert_stanford_unsupervised",
        name: "Stanford Unsupervised Learning",
        type: "data",
        hubId: "inst_stanford",
        angle: 210 * Math.PI / 180,
        radius: 280,
        color: "hsl(350, 95%, 55%)",
        glowColor: "rgba(244, 63, 94, 0.2)",
        description: "Andrew Ng's verified specialization covering dimensionality reduction, clustering (K-Means, GMMs), and reinforcement learning systems.",
        url: "https://learn.deeplearning.ai/certificates/df53addd-a4b7-42dc-b46e-646d29b39f34?usp=sharing",
      },
      // Kaggle Expert
      {
        id: "cert_kaggle_expert",
        name: "Kaggle Notebooks Expert",
        type: "data",
        hubId: "inst_kaggle",
        angle: 230 * Math.PI / 180,
        radius: 280,
        color: "hsl(190, 95%, 50%)",
        glowColor: "rgba(6, 182, 212, 0.2)",
        description: "Expert rank acknowledging advanced data visualization notebooks, model validation, and high-engagement exploratory data science runs.",
        url: "https://www.kaggle.com/aryanbhu",
      },
      // Projects
      {
        id: "proj_deeplink",
        name: "DeepLink Social Platform",
        type: "data",
        hubId: "hub_projects",
        angle: 242 * Math.PI / 180,
        radius: 280,
        color: "hsl(350, 95%, 55%)",
        glowColor: "rgba(244, 63, 94, 0.2)",
        description: "A beautiful links aggregator and deep-linking system that creates optimized paths for profile sharing and platform redirection.",
        url: "https://deeplink-friends.vercel.app/",
      },
      {
        id: "proj_placement",
        name: "Placement Portal Delta",
        type: "data",
        hubId: "hub_projects",
        angle: 246 * Math.PI / 180,
        radius: 280,
        color: "hsl(350, 95%, 55%)",
        glowColor: "rgba(244, 63, 94, 0.2)",
        description: "A high-performance recruitment tracker and analytics dashboard featuring database integrity layers and transactional data exports.",
        url: "https://placement-project-delta.vercel.app/",
      },
      {
        id: "proj_library",
        name: "VRS Digital Library",
        type: "data",
        hubId: "hub_projects",
        angle: 250 * Math.PI / 180,
        radius: 280,
        color: "hsl(350, 95%, 55%)",
        glowColor: "rgba(244, 63, 94, 0.2)",
        description: "A full-stack web library application featuring transactional member management, active waiting-rooms, and backup-recovery pipelines.",
        url: "https://vrs-library.vercel.app/",
      },
      {
        id: "proj_pdf",
        name: "Img-To-PDF Converter",
        type: "data",
        hubId: "hub_projects",
        angle: 254 * Math.PI / 180,
        radius: 280,
        color: "hsl(350, 95%, 55%)",
        glowColor: "rgba(244, 63, 94, 0.2)",
        description: "High-performance client-side images compiler to PDF. Supports batch selection, visual re-ordering, and zero-server compiling.",
        url: "https://aryanpdf.vercel.app",
      },
      {
        id: "proj_chatbot",
        name: "AI Chatbot Client",
        type: "data",
        hubId: "hub_projects",
        angle: 258 * Math.PI / 180,
        radius: 280,
        color: "hsl(350, 95%, 55%)",
        glowColor: "rgba(244, 63, 94, 0.2)",
        description: "An intelligent, custom conversational interface featuring natural typing visualizers and context-preserving system instructions.",
        url: "https://rn-ai-120b.vercel.app/",
      },
    ];

    // 5. Right Hemisphere Skill Nodes (radius 280px)
    const rightSkillNodes: GraphNode[] = [
      // Deep Learning skills
      {
        id: "skill_pytorch",
        name: "PyTorch Core",
        type: "skill",
        hubId: "domain_ai",
        angle: -57 * Math.PI / 180,
        radius: 280,
        color: "hsl(280, 95%, 65%)",
        glowColor: "rgba(168, 85, 247, 0.2)",
        description: "Tensor computations, autograd graph engines, custom layers modeling, and deep model checkpoints serialization.",
      },
      {
        id: "skill_transformers",
        name: "Transformers & LLMs",
        type: "skill",
        hubId: "domain_ai",
        angle: -49 * Math.PI / 180,
        radius: 280,
        color: "hsl(280, 95%, 65%)",
        glowColor: "rgba(168, 85, 247, 0.2)",
        description: "Attention mechanisms, weights fine-tuning, tokenization parsing, and quantized model runs.",
      },
      {
        id: "skill_tensorflow",
        name: "TensorFlow & Keras",
        type: "skill",
        hubId: "domain_ai",
        angle: -41 * Math.PI / 180,
        radius: 280,
        color: "hsl(280, 95%, 65%)",
        glowColor: "rgba(168, 85, 247, 0.2)",
        description: "Sequential layers compiling, visual graphs profiling, and cross-platform model exports.",
      },
      {
        id: "skill_dl_theory",
        name: "Deep Learning Theory",
        type: "skill",
        hubId: "domain_ai",
        angle: -33 * Math.PI / 180,
        radius: 280,
        color: "hsl(280, 95%, 65%)",
        glowColor: "rgba(168, 85, 247, 0.2)",
        description: "Gradient descent mechanics, optimization (Adam, SGD), backpropagation, and CNN/RNN structures.",
      },
      // Agentic skills
      {
        id: "skill_langchain",
        name: "LangChain & LangGraph",
        type: "skill",
        hubId: "domain_agentic",
        angle: -27 * Math.PI / 180,
        radius: 280,
        color: "hsl(175, 95%, 45%)",
        glowColor: "rgba(13, 148, 136, 0.2)",
        description: "Multi-step chains, cyclic agent state graphs, tool bindings, and structured output parsing.",
      },
      {
        id: "skill_vectordb",
        name: "Vector Databases",
        type: "skill",
        hubId: "domain_agentic",
        angle: -19 * Math.PI / 180,
        radius: 280,
        color: "hsl(175, 95%, 45%)",
        glowColor: "rgba(13, 148, 136, 0.2)",
        description: "High-dimensional index lookup, cosine similarity, collection sharding, and semantic caching (Pinecone, ChromaDB).",
      },
      {
        id: "skill_semantic",
        name: "Semantic Search",
        type: "skill",
        hubId: "domain_agentic",
        angle: -11 * Math.PI / 180,
        radius: 280,
        color: "hsl(175, 95%, 45%)",
        glowColor: "rgba(13, 148, 136, 0.2)",
        description: "Dense vector retrieval, cross-encoder rerankers, contextual indexing, and text embedding processing.",
      },
      {
        id: "skill_agentic_agents",
        name: "Multi-Agent Systems",
        type: "skill",
        hubId: "domain_agentic",
        angle: -3 * Math.PI / 180,
        radius: 280,
        color: "hsl(175, 95%, 45%)",
        glowColor: "rgba(13, 148, 136, 0.2)",
        description: "Autonomous task delegation, collaborative validation loops, human-in-the-loop steps, and memory management.",
      },
      // Modeling skills
      {
        id: "skill_python",
        name: "Python Programming",
        type: "skill",
        hubId: "domain_modeling",
        angle: 3 * Math.PI / 180,
        radius: 280,
        color: "hsl(142, 85%, 50%)",
        glowColor: "rgba(34, 197, 94, 0.2)",
        description: "Object-oriented scripting, list comprehensions, numeric libraries (NumPy, Pandas), and asynchronous execution.",
      },
      {
        id: "skill_r_lang",
        name: "R Programming",
        type: "skill",
        hubId: "domain_modeling",
        angle: 9 * Math.PI / 180,
        radius: 280,
        color: "hsl(142, 85%, 50%)",
        glowColor: "rgba(34, 197, 94, 0.2)",
        description: "Statistical aggregations, vector computation, ggplot visualization, and exploratory mathematical analysis.",
      },
      {
        id: "skill_scikit",
        name: "Scikit-Learn & ML",
        type: "skill",
        hubId: "domain_modeling",
        angle: 15 * Math.PI / 180,
        radius: 280,
        color: "hsl(142, 85%, 50%)",
        glowColor: "rgba(34, 197, 94, 0.2)",
        description: "Supervised classification, model regression, validation grids (GridSearchCV), and features scaling.",
      },
      {
        id: "skill_stats",
        name: "Statistical Analytics",
        type: "skill",
        hubId: "domain_modeling",
        angle: 21 * Math.PI / 180,
        radius: 280,
        color: "hsl(142, 85%, 50%)",
        glowColor: "rgba(34, 197, 94, 0.2)",
        description: "Hypothesis testing, probability distribution, variance analysis, and exploratory predictive insights.",
      },
      {
        id: "skill_sql",
        name: "SQL & Databases",
        type: "skill",
        hubId: "domain_modeling",
        angle: 27 * Math.PI / 180,
        radius: 280,
        color: "hsl(142, 85%, 50%)",
        glowColor: "rgba(34, 197, 94, 0.2)",
        description: "Relational queries, index optimizations, table joins, transactional operations, and schema backups.",
      },
      // Development skills
      {
        id: "skill_typescript",
        name: "TypeScript",
        type: "skill",
        hubId: "domain_dev",
        angle: 33 * Math.PI / 180,
        radius: 280,
        color: "hsl(30, 95%, 50%)",
        glowColor: "rgba(249, 115, 22, 0.2)",
        description: "Strong typing, interface structures, generic declarations, and type guard validation compile-time safety.",
      },
      {
        id: "skill_javascript",
        name: "JavaScript ES6+",
        type: "skill",
        hubId: "domain_dev",
        angle: 37 * Math.PI / 180,
        radius: 280,
        color: "hsl(30, 95%, 50%)",
        glowColor: "rgba(249, 115, 22, 0.2)",
        description: "Event handling loops, DOM manipulation, asynchronous promises, and runtime execution blocks.",
      },
      {
        id: "skill_nextjs",
        name: "Next.js & React",
        type: "skill",
        hubId: "domain_dev",
        angle: 41 * Math.PI / 180,
        radius: 280,
        color: "hsl(30, 95%, 50%)",
        glowColor: "rgba(249, 115, 22, 0.2)",
        description: "React hydration, page routing systems, server components (RSC), and state management hooks.",
      },
      {
        id: "skill_html_css",
        name: "HTML5 & CSS3",
        type: "skill",
        hubId: "domain_dev",
        angle: 45 * Math.PI / 180,
        radius: 280,
        color: "hsl(30, 95%, 50%)",
        glowColor: "rgba(249, 115, 22, 0.2)",
        description: "Document structures, custom typography styling, flex layouts, responsive grids, and animations.",
      },
      {
        id: "skill_vercel",
        name: "Vercel & DevOps",
        type: "skill",
        hubId: "domain_dev",
        angle: 49 * Math.PI / 180,
        radius: 280,
        color: "hsl(30, 95%, 50%)",
        glowColor: "rgba(249, 115, 22, 0.2)",
        description: "Serverless web deployment, GitHub integrations, build compilation, and environment variable configuration.",
      },
      {
        id: "skill_fastapi",
        name: "FastAPI & APIs",
        type: "skill",
        hubId: "domain_dev",
        angle: 53 * Math.PI / 180,
        radius: 280,
        color: "hsl(30, 95%, 50%)",
        glowColor: "rgba(249, 115, 22, 0.2)",
        description: "Asynchronous backend API design, Pydantic type validation, and automatically documented schemas (Swagger UI).",
      },
      {
        id: "skill_docker",
        name: "Docker & Containers",
        type: "skill",
        hubId: "domain_dev",
        angle: 57 * Math.PI / 180,
        radius: 280,
        color: "hsl(30, 95%, 50%)",
        glowColor: "rgba(249, 115, 22, 0.2)",
        description: "Dockerfile image compiling, volume mapping, network linking, and container orchestration.",
      },
      {
        id: "skill_git",
        name: "Git & Versioning",
        type: "skill",
        hubId: "domain_dev",
        angle: 61 * Math.PI / 180,
        radius: 280,
        color: "hsl(30, 95%, 50%)",
        glowColor: "rgba(249, 115, 22, 0.2)",
        description: "Branch merging pipelines, commit logs tracking, merge conflicts fixing, and repository coordination.",
      },
    ];

    const allNodes: GraphNode[] = [
      centerNode,
      ...hubs,
      ...leftDataNodes,
      ...rightSkillNodes,
    ];

    // --- CONNECTION RULESETS ---
    const connections: GraphConnection[] = [];

    // A. Center to Hubs (Core Threads)
    hubs.forEach((hub) => {
      connections.push({
        from: "center",
        to: hub.id,
        color: hub.color,
        type: "core",
      });
    });

    // B. Hubs to respective Data/Skill Nodes (Primary Cluster Threads)
    // Left hemisphere connections: Hubs -> Data nodes
    leftDataNodes.forEach((node) => {
      if (node.hubId) {
        connections.push({
          from: node.hubId,
          to: node.id,
          color: node.color,
          type: "primary",
        });
      }
    });

    // Right hemisphere connections: Domains -> Skill nodes
    rightSkillNodes.forEach((node) => {
      if (node.hubId) {
        connections.push({
          from: node.hubId,
          to: node.id,
          color: node.color,
          type: "primary",
        });
      }
    });

    // C. Data Nodes to shared Skill Nodes (Cross-linking Secondary Threads from Left to Right)
    const skillMapping: { [key: string]: string[] } = {
      // Projects
      proj_deeplink: ["skill_typescript", "skill_javascript", "skill_nextjs", "skill_html_css", "skill_vercel"],
      proj_placement: ["skill_python", "skill_sql", "skill_nextjs", "skill_html_css", "skill_git"],
      proj_library: ["skill_python", "skill_sql", "skill_nextjs", "skill_html_css", "skill_git"],
      proj_pdf: ["skill_javascript", "skill_nextjs", "skill_html_css", "skill_vercel"],
      proj_chatbot: ["skill_transformers", "skill_langchain", "skill_nextjs", "skill_typescript"],

      // Education
      edu_bhu: ["skill_python", "skill_stats"],
      edu_iitm: ["skill_python", "skill_sql", "skill_r_lang", "skill_stats", "skill_scikit"],

      // Certificates
      cert_google_analytics: ["skill_stats", "skill_sql", "skill_r_lang"],
      cert_stanford_unsupervised: ["skill_python", "skill_dl_theory", "skill_scikit"],
      cert_langchain_llm: ["skill_python", "skill_langchain", "skill_transformers"],
      cert_swe_intern: ["skill_python", "skill_git", "skill_sql"],
      cert_sql_intermediate: ["skill_sql"],
      cert_python_basic: ["skill_python"],
      cert_sql_basic: ["skill_sql"],
      cert_css_basic: ["skill_html_css"],
      cert_kaggle_expert: ["skill_python", "skill_scikit", "skill_dl_theory", "skill_stats"],
    };

    Object.entries(skillMapping).forEach(([dataNodeId, skills]) => {
      const dataNode = leftDataNodes.find((n) => n.id === dataNodeId);
      if (dataNode) {
        skills.forEach((skillId) => {
          connections.push({
            from: dataNodeId,
            to: skillId,
            color: dataNode.color, // connection matches left category style
            type: "secondary",
          });
        });
      }
    });

    // D. Background Filigree Grid (150 micro-synapses crossing hemispheres)
    const backgroundConnections: GraphConnection[] = [];
    allNodes.forEach((nodeA) => {
      if (nodeA.type === "center") return;
      allNodes.forEach((nodeB) => {
        if (nodeB.type === "center" || nodeA.id === nodeB.id) return;

        // Faint links only cross hemisphere
        const isCrossHemisphere = (Math.cos(nodeA.angle) * Math.cos(nodeB.angle) < 0);
        if (!isCrossHemisphere) return;

        const alreadyConnected = connections.some(
          (c) => (c.from === nodeA.id && c.to === nodeB.id) || (c.from === nodeB.id && c.to === nodeA.id)
        );
        if (alreadyConnected) return;

        const angleDiff = Math.abs(nodeA.angle - nodeB.angle);
        const normAngleDiff = Math.min(angleDiff, Math.PI * 2 - angleDiff);
        const radiusDiff = Math.abs(nodeA.radius - nodeB.radius);

        if (normAngleDiff < Math.PI / 4 && radiusDiff <= 140) {
          const bgExists = backgroundConnections.some(
            (c) => (c.from === nodeA.id && c.to === nodeB.id) || (c.from === nodeB.id && c.to === nodeA.id)
          );
          if (!bgExists && Math.random() < 0.15) {
            backgroundConnections.push({
              from: nodeA.id,
              to: nodeB.id,
              color: "rgba(99, 102, 241, 0.025)",
              type: "background",
            });
          }
        }
      });
    });

    // Combine all connections
    const allConnections = [...connections, ...backgroundConnections];

    // Update telemetry state
    setNodesCount(allNodes.length);
    setLinksCount(allConnections.length);

    // --- ANIMATION & RESIZE STATE ---
    let photons: Photon[] = [];
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let baseScale = 1; // layout scale factor

    // Update canvas bounds & scaling
    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width || window.innerWidth || 800;
      height = window.innerHeight || rect.height || 600;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform();
      ctx.scale(dpr, dpr);

      centerX = width / 2;
      centerY = height / 2;

      // Layout scale based on screen size (designed around 900px min dimension)
      baseScale = Math.min(width, height) / 880;
      if (baseScale < 0.45) baseScale = 0.45; // cap lower scaling
      if (baseScale > 1.2) baseScale = 1.2; // cap upper scaling
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Coordinate lookups
    const getNodePosition = (node: GraphNode) => {
      if (node.type === "center") {
        return { x: centerX, y: centerY };
      }
      return {
        x: centerX + node.radius * baseScale * Math.cos(node.angle),
        y: centerY + node.radius * baseScale * Math.sin(node.angle),
      };
    };

    // Calculate bezier curves for clean arched connections
    const getBezierControlPoint = (p0: { x: number; y: number }, p1: { x: number; y: number }) => {
      // Arched bowing away from the center to prevent collisions
      const dx = p1.x - p0.x;
      const dy = p1.y - p0.y;
      const dist = Math.hypot(dx, dy);

      const midX = (p0.x + p1.x) / 2;
      const midY = (p0.y + p1.y) / 2;

      // Normal vector
      const nx = -dy / dist;
      const ny = dx / dist;

      // Bow displacement scaled by distance (caps curve height)
      const bowDisplacement = Math.min(dist * 0.15, 30);

      return {
        x: midX + nx * bowDisplacement,
        y: midY + ny * bowDisplacement,
      };
    };

    const getBezierPoint = (
      p0: { x: number; y: number },
      p1: { x: number; y: number },
      p2: { x: number; y: number },
      t: number
    ) => {
      const x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
      const y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;
      return { x, y };
    };

    // --- CONTINUOUS PHOTON EMISSION ---
    const autoPhotonInterval = setInterval(() => {
      // Choose 1 to 3 connections to send active photons
      const emissionCount = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < emissionCount; i++) {
        // Pick from active logical connections only (non-background)
        const logicalConns = connections;
        const conn = logicalConns[Math.floor(Math.random() * logicalConns.length)];
        if (conn) {
          photons.push({
            from: conn.from,
            to: conn.to,
            t: 0,
            speed: 0.005 + Math.random() * 0.005,
            color: conn.color,
            size: 1.5 + Math.random() * 2,
          });
        }
      }
    }, 200);

    // Emit waves of photons when hovered
    const triggerPhotonBurst = (nodeId: string) => {
      const related = nodeId === "center"
        ? allConnections.filter((c) => c.type !== "background")
        : allConnections.filter((c) => c.from === nodeId || c.to === nodeId);
      related.forEach((c) => {
        photons.push({
          from: c.from,
          to: c.to,
          t: 0,
          speed: 0.012 + Math.random() * 0.008, // faster burst speed
          color: c.type === "background" ? "rgba(99, 102, 241, 0.4)" : c.color,
          size: 2.0 + Math.random() * 2,
        });
      });
    };

    // --- POINTER TRACKING (HOVER/CLICK) ---
    // Save state inside refs to prevent closure locks in animation frame loops
    const pointerState = {
      hoveredNodeId: null as string | null,
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      let clientX = 0;
      let clientY = 0;

      if ("touches" in e) {
        if (e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        }
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      const mx = clientX - rect.left;
      const my = clientY - rect.top;

      let matchedNode: GraphNode | null = null;
      let minDistance = 25; // hit radius in pixels

      allNodes.forEach((node) => {
        const pos = getNodePosition(node);
        const dist = Math.hypot(mx - pos.x, my - pos.y);
        
        // Define variable hit radius based on node type
        let hitZone = 18;
        if (node.type === "center") hitZone = 35;
        if (node.type === "hub") hitZone = 25;

        if (dist < hitZone && dist < minDistance) {
          matchedNode = node;
          minDistance = dist;
        }
      });

      if (matchedNode) {
        const matched: GraphNode = matchedNode;
        if (pointerState.hoveredNodeId !== matched.id) {
          pointerState.hoveredNodeId = matched.id;
          setHoveredNode(matched);
          triggerPhotonBurst(matched.id);

          // Get all connections connected directly to this node (or all if center)
          const activeConns = matched.id === "center"
            ? allConnections.filter((c) => c.type !== "background")
            : allConnections.filter((c) => c.from === matched.id || c.to === matched.id);
          setActiveConnections(activeConns);
        }
      } else {
        if (pointerState.hoveredNodeId !== null) {
          pointerState.hoveredNodeId = null;
          setHoveredNode(null);
          setActiveConnections([]);
        }
      }
    };

    const handlePointerClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      let clicked: GraphNode | null = null;
      allNodes.forEach((node) => {
        const pos = getNodePosition(node);
        const dist = Math.hypot(mx - pos.x, my - pos.y);
        let hitZone = 20;
        if (node.type === "center") hitZone = 40;
        if (node.type === "hub") hitZone = 28;

        if (dist < hitZone) {
          clicked = node;
        }
      });

      if (clicked) {
        setSelectedNode(clicked);
      }
    };

    canvas.addEventListener("mousemove", handlePointerMove);
    canvas.addEventListener("click", handlePointerClick);
    canvas.addEventListener("touchstart", handlePointerMove, { passive: true });
    canvas.addEventListener("touchmove", handlePointerMove, { passive: true });

    // --- ANIMATION LOOP ---
    let animId = 0;
    let globalAngle = 0;

    const renderLoop = () => {
      animId = requestAnimationFrame(renderLoop);
      globalAngle += 0.005; // tiny global wave factor for background lines

      // Detect container size modifications (e.g. late mount sizing)
      if (containerRef.current) {
        const currentRect = containerRef.current.getBoundingClientRect();
        const targetW = currentRect.width || window.innerWidth || 800;
        const targetH = window.innerHeight || currentRect.height || 600;
        if (targetW > 0 && (targetW !== width || targetH !== height)) {
          handleResize();
        }
      }

      // Clean, solid dark charcoal background
      ctx.fillStyle = "#121212";
      ctx.fillRect(0, 0, width, height);

      // --- TECHNICAL CONCENTRIC GRID GUIDES ---
      ctx.lineWidth = 1;

      // Concord guides
      [140, 280, 380].forEach((radiusVal) => {
        ctx.strokeStyle = "rgba(79, 70, 229, 0.035)";
        ctx.beginPath();
        ctx.arc(centerX, centerY, radiusVal * baseScale, 0, Math.PI * 2);
        ctx.stroke();

        // Inner ticks
        ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
        ctx.setLineDash([2, 8]);
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radiusVal - 20) * baseScale, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Subtle radar sweeps radiating outward
      ctx.strokeStyle = "rgba(255, 255, 255, 0.006)";
      ctx.lineWidth = 0.5;
      for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 12) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        const maxLen = Math.max(width, height);
        ctx.lineTo(centerX + maxLen * Math.cos(angle), centerY + maxLen * Math.sin(angle));
        ctx.stroke();
      }

      // --- RENDER CONNECTION LINES ---
      const activeId = pointerState.hoveredNodeId;

      // 1. Draw inactive background filigree first
      ctx.lineWidth = 0.5;
      allConnections.forEach((conn) => {
        if (conn.type !== "background") return;
        const pFrom = getNodePosition(allNodes.find((n) => n.id === conn.from)!);
        const pTo = getNodePosition(allNodes.find((n) => n.id === conn.to)!);
        const cp = getBezierControlPoint(pFrom, pTo);

        ctx.strokeStyle = conn.color;
        ctx.beginPath();
        ctx.moveTo(pFrom.x, pFrom.y);
        ctx.quadraticCurveTo(cp.x, cp.y, pTo.x, pTo.y);
        ctx.stroke();
      });

      // 2. Draw inactive structural lines (from: center/hubs/data/skills)
      ctx.lineWidth = 1.0;
      allConnections.forEach((conn) => {
        if (conn.type === "background") return;

        // Check if connection is highlighted due to hover
        const isHighlighted = activeId
          ? (activeId === "center" || conn.from === activeId || conn.to === activeId)
          : false;

        // Skip rendering active lines in this pass
        if (isHighlighted) return;

        const nodeFrom = allNodes.find((n) => n.id === conn.from)!;
        const nodeTo = allNodes.find((n) => n.id === conn.to)!;
        const pFrom = getNodePosition(nodeFrom);
        const pTo = getNodePosition(nodeTo);
        const cp = getBezierControlPoint(pFrom, pTo);

        // Draw faint transparent lines for inactive logic
        let strokeColor = "rgba(255, 255, 255, 0.08)";
        if (conn.color.startsWith("hsl")) {
          // Convert HSL to HSLA with low opacity
          strokeColor = conn.color.replace(")", ", 0.07)").replace("hsl", "hsla");
        } else {
          strokeColor = conn.color;
        }

        ctx.strokeStyle = strokeColor;
        ctx.beginPath();
        ctx.moveTo(pFrom.x, pFrom.y);
        ctx.quadraticCurveTo(cp.x, cp.y, pTo.x, pTo.y);
        ctx.stroke();
      });

      // 3. Draw active/highlighted connections with high-intensity glowing strokes
      allConnections.forEach((conn) => {
        if (conn.type === "background") return;

        const isHighlighted = activeId
          ? (activeId === "center" || conn.from === activeId || conn.to === activeId)
          : false;

        if (!isHighlighted) return;

        const nodeFrom = allNodes.find((n) => n.id === conn.from)!;
        const nodeTo = allNodes.find((n) => n.id === conn.to)!;
        const pFrom = getNodePosition(nodeFrom);
        const pTo = getNodePosition(nodeTo);
        const cp = getBezierControlPoint(pFrom, pTo);

        // Neon glowing highlights
        ctx.shadowBlur = 10;
        ctx.shadowColor = conn.color;
        ctx.strokeStyle = conn.color;
        ctx.lineWidth = conn.type === "core" ? 2.5 : 1.8;
        
        ctx.beginPath();
        ctx.moveTo(pFrom.x, pFrom.y);
        ctx.quadraticCurveTo(cp.x, cp.y, pTo.x, pTo.y);
        ctx.stroke();

        // Reset shadow/lineWidth immediately
        ctx.shadowBlur = 0;
        ctx.lineWidth = 1.0;
      });

      // --- RENDER NODES ---
      allNodes.forEach((node) => {
        const pos = getNodePosition(node);
        const isHovered = activeId === node.id;
        const isConnectedToHover = activeId
          ? allConnections.some(
              (c) =>
                (c.from === node.id && c.to === activeId) ||
                (c.to === node.id && c.from === activeId)
            )
          : false;

        const isActive = isHovered || isConnectedToHover;

        ctx.save();

        if (node.type === "center") {
          // Aryan Maurya node design
          // Halo outer pulse
          const pulseRadius = (35 + Math.sin(globalAngle * 5) * 4) * baseScale;
          ctx.fillStyle = "rgba(79, 70, 229, 0.08)";
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, pulseRadius, 0, Math.PI * 2);
          ctx.fill();

          // Center solid fill with high-contrast glowing core
          const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 22 * baseScale);
          grad.addColorStop(0, "#4f46e5"); // vibrant indigo core center
          grad.addColorStop(0.6, "rgba(99, 102, 241, 0.85)"); // neon indigo body
          grad.addColorStop(1, "rgba(79, 70, 229, 0)"); // fade out
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 22 * baseScale, 0, Math.PI * 2);
          ctx.fill();

          // Crisp neon white boundary ring
          ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
          ctx.lineWidth = 1.5 * baseScale;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 22 * baseScale, 0, Math.PI * 2);
          ctx.stroke();

          // Node Text label
          ctx.fillStyle = "#ffffff";
          ctx.font = `bold ${11.5 * baseScale}px system-ui, -apple-system, sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          
          if (isHovered) {
            ctx.shadowBlur = 12;
            ctx.shadowColor = "#4f46e5";
          }
          ctx.fillText(node.name, pos.x, pos.y);
        } 
        else if (node.type === "hub") {
          // Hub level nodes (PROJECTS, EDUCATION, etc.)
          const hubRad = (isHovered ? 12 : 9) * baseScale;

          // Glowing background
          if (isActive) {
            ctx.fillStyle = node.glowColor;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, hubRad * 2.2, 0, Math.PI * 2);
            ctx.fill();
          }

          // Main Dot
          ctx.fillStyle = isActive ? node.color : "rgba(255,255,255,0.2)";
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, hubRad, 0, Math.PI * 2);
          ctx.fill();

          // Border outline
          ctx.strokeStyle = isActive ? "#ffffff" : "rgba(255,255,255,0.15)";
          ctx.lineWidth = isActive ? 2.5 : 1.5;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, hubRad, 0, Math.PI * 2);
          ctx.stroke();

          // Text label
          ctx.fillStyle = isActive ? "#ffffff" : "rgba(255,255,255,0.45)";
          ctx.font = `bold ${10.5 * baseScale}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
          
          // Position relative to angle to push outward
          const labelDist = hubRad + 14 * baseScale;
          const labelX = pos.x + labelDist * Math.cos(node.angle);
          const labelY = pos.y + labelDist * Math.sin(node.angle);

          // Horizontal alignment alignment rules
          let align: CanvasTextAlign = "center";
          if (Math.cos(node.angle) > 0.3) align = "left";
          if (Math.cos(node.angle) < -0.3) align = "right";

          ctx.textAlign = align;
          ctx.textBaseline = "middle";

          if (isHovered) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = node.color;
          }
          ctx.fillText(node.name, labelX, labelY);
        } 
        else {
          // Secondary Data Nodes & Tertiary Skill Nodes
          const dotRad = (node.type === "skill" ? (isActive ? 7 : 5.5) : (isActive ? 5.5 : 4)) * baseScale;

          // Halo glow
          if (isActive) {
            ctx.fillStyle = node.glowColor;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, dotRad * 2.5, 0, Math.PI * 2);
            ctx.fill();
          }

          // Node body dot
          ctx.fillStyle = isActive ? node.color : "rgba(148, 163, 184, 0.35)";
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, dotRad, 0, Math.PI * 2);
          ctx.fill();

          // Border Ring outline
          ctx.strokeStyle = isActive ? "#ffffff" : "rgba(255,255,255,0.1)";
          ctx.lineWidth = isActive ? 1.5 : 1.0;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, dotRad, 0, Math.PI * 2);
          ctx.stroke();

          // Radial Text Alignment
          let normAng = node.angle;
          while (normAng > Math.PI) normAng -= Math.PI * 2;
          while (normAng < -Math.PI) normAng += Math.PI * 2;

          let rotAng = normAng;
          const isLeft = normAng > Math.PI / 2 || normAng < -Math.PI / 2;
          const offsetDist = dotRad + (node.type === "skill" ? 10 : 8) * baseScale;

          ctx.translate(pos.x, pos.y);
          
          if (isLeft) {
            rotAng = normAng + Math.PI;
            ctx.rotate(rotAng);
            ctx.textAlign = "right";
            ctx.textBaseline = "middle";
            ctx.fillStyle = isActive ? "#ffffff" : "rgba(148, 163, 184, 0.55)";
            
            const fSize = (node.type === "skill" ? 9.5 : 8) * baseScale;
            ctx.font = `${isActive ? "600" : "400"} ${fSize}px system-ui, -apple-system, sans-serif`;
            ctx.fillText(node.name, -offsetDist, 0);
          } else {
            ctx.rotate(rotAng);
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.fillStyle = isActive ? "#ffffff" : "rgba(148, 163, 184, 0.55)";
            
            const fSize = (node.type === "skill" ? 9.5 : 8) * baseScale;
            ctx.font = `${isActive ? "600" : "400"} ${fSize}px system-ui, -apple-system, sans-serif`;
            ctx.fillText(node.name, offsetDist, 0);
          }
        }

        ctx.restore();
      });

      // --- PHOTON ANIMATION ---
      photons.forEach((ph, idx) => {
        const fromNode = allNodes.find((n) => n.id === ph.from);
        const toNode = allNodes.find((n) => n.id === ph.to);

        if (!fromNode || !toNode) return;

        const pFrom = getNodePosition(fromNode);
        const pTo = getNodePosition(toNode);
        const cp = getBezierControlPoint(pFrom, pTo);

        // Update progress
        ph.t += ph.speed;

        if (ph.t > 1) {
          photons.splice(idx, 1);
          return;
        }

        const curPos = getBezierPoint(pFrom, cp, pTo, ph.t);

        // Draw particle pulse
        ctx.shadowBlur = 8;
        ctx.shadowColor = ph.color;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(curPos.x, curPos.y, ph.size * baseScale, 0, Math.PI * 2);
        ctx.fill();

        // Trail glow
        ctx.fillStyle = ph.color;
        ctx.beginPath();
        ctx.arc(curPos.x, curPos.y, ph.size * 1.5 * baseScale, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0; // reset
      });
    };

    renderLoop();

    // Cleanups on unmount
    return () => {
      cancelAnimationFrame(animId);
      clearInterval(autoPhotonInterval);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handlePointerMove);
      canvas.removeEventListener("click", handlePointerClick);
      canvas.removeEventListener("touchstart", handlePointerMove);
      canvas.removeEventListener("touchmove", handlePointerMove);
    };
  }, []);

  // Display details of currently hovered or selected node
  const activeDetailNode = hoveredNode || selectedNode;

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#121212",
        overflow: "hidden",
      }}
    >
      {/* Full viewport Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          cursor: "crosshair",
        }}
      />

      {/* Floating HUD Interface Header Overlay */}
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "24px",
          right: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        {/* Navigation & Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", pointerEvents: "auto" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              color: "#a1a1aa",
              fontSize: "0.85rem",
              fontWeight: 500,
              textDecoration: "none",
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              padding: "8px 16px",
              borderRadius: "12px",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              width: "fit-content",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.borderColor = "rgba(79, 70, 229, 0.5)";
              e.currentTarget.style.background = "rgba(79, 70, 229, 0.1)";
              e.currentTarget.style.boxShadow = "0 0 15px rgba(79, 70, 229, 0.3)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#a1a1aa";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
              e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "1.25rem",
              fontWeight: 800,
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.08em",
              marginTop: "8px",
            }}
          >
            MASTER NEURAL INTERFACE
          </h1>
        </div>

        {/* System telemetry stat labels */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "4px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "rgba(99, 102, 241, 0.65)",
            textAlign: "right",
          }}
        >
          <span>SYSTEM ACTIVE // 100% SECURE</span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>
            NODES: {allNodesCount()} // LINKS: {allLinksCount()}
          </span>
        </div>
      </div>

      {/* Floating HUD Node Detail Info Box */}
      {activeDetailNode && (
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "24px",
            maxWidth: "440px",
            width: "calc(100% - 48px)",
            backgroundColor: "rgba(18, 18, 18, 0.95)",
            backdropFilter: "blur(12px)",
            border: `1px solid ${activeDetailNode.color || "rgba(255,255,255,0.15)"}`,
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.6), 0 0 15px ${activeDetailNode.glowColor}`,
            borderRadius: "16px",
            padding: "24px",
            color: "#ffffff",
            zIndex: 10,
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            animation: "fadeIn 0.3s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                color: activeDetailNode.color,
                border: `1px solid ${activeDetailNode.color}`,
                padding: "2px 8px",
                borderRadius: "4px",
                textTransform: "uppercase",
              }}
            >
              {activeDetailNode.type} NODE
            </span>
            {activeDetailNode.url && (
              <a
                href={activeDetailNode.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = activeDetailNode.color;
                  e.currentTarget.style.borderColor = activeDetailNode.color;
                  e.currentTarget.style.boxShadow = `0 0 8px ${activeDetailNode.color}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                OPEN NODE LINK ↗
              </a>
            )}
          </div>

          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              fontFamily: "var(--font-sans)",
              marginBottom: "8px",
              textShadow: `0 0 10px ${activeDetailNode.glowColor}`,
            }}
          >
            {activeDetailNode.name}
          </h2>

          <p
            style={{
              fontSize: "0.85rem",
              color: "rgba(255, 255, 255, 0.75)",
              lineHeight: 1.5,
              marginBottom: "16px",
            }}
          >
            {activeDetailNode.description}
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              paddingTop: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.75rem",
              color: "rgba(255, 255, 255, 0.4)",
              fontFamily: "var(--font-mono)",
            }}
          >
            <span>STATUS: ACTIVE</span>
            <span>
              {activeConnections.length > 0
                ? `${activeConnections.length} ACTIVE SYNAPSES`
                : "TAP/HOVER NODE TO ENGAGE"}
            </span>
          </div>
        </div>
      )}

      {/* Mini Telemetry instruction banner */}
      {!activeDetailNode && (
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(4px)",
            borderRadius: "30px",
            padding: "8px 24px",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.06em",
            zIndex: 10,
            pointerEvents: "none",
            textAlign: "center",
          }}
        >
          HOVER OR TAP A SYNAPSE NODE TO ANALYZE ARCHITECTURE CORE
        </div>
      )}

      {/* Global CSS Injectors for fade-in animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );

  // Small helpers to feed telemetry count
  function allNodesCount() {
    return nodesCount || 50;
  }

  function allLinksCount() {
    return linksCount || 250;
  }
}
