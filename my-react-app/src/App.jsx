import { useState, useEffect, useRef } from "react";
import Logo from "./assets/552283821_785207207650855_3652127371700890113_n.jpg";
import image from "./assets/Screenshot 2026-07-03 024708.png";
import whats from "./assets/pngtree-whatsapp-icon-png-image_3584845.jpg";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

const SKILLS = [
  { name: "React", level: 92, icon: "⚛️" },
  { name: "JavaScript", level: 88, icon: "🟨" },
  { name: "Next.js", level: 80, icon: "🟩" },
  { name: "TypeScript", level: 75, icon: "🔷" },
  { name: "Tailwind CSS", level: 85, icon: "🎨" },
  { name: "MySQL", level: 70, icon: "🍃" },
  { name: "Git & GitHub", level: 82, icon: "🐙" },
  { name: "REST APIs", level: 78, icon: "🔌" },
  { name: "Django", level: 70, icon: "🐍" },
];

const PROJECTS = [
  {
    id: 1,
   
    title: "Restaurant Management System",
    desc: "Full-stack restaurant management system with order handling, authentication, and admin dashboard,rider management.",
    tags: ["React", "Django", "MySQL"],
    color: "#00f5a0",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Library Management System",
    
    desc: "Digital library system for managing books, users, and borrowing records with admin control.",
    tags: ["React", "TypeScript", "Django", "MySQL"],
    color: "#7c3aed",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    
    title: "Bulk Mail Sender",
    desc: "Send multiple personalized emails at once using CSV upload with attachment support.",
    tags: ["React", "Node.js", "Nodemailer", "CSV"],
    color: "#f59e0b",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Chat system in website",
    desc: "Real-time chat system for websites using WebSockets, allowing instant messaging between users and support agents.",
    tags: ["React", "Django", "WebSocket"],
    color: "#ef4444",
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "E-commerce Website",
    desc: "Modern e-commerce platform with product listing, cart system, and payment integration.",
    tags: ["React", "Next.js", "Django", "MySQL"],
    color: "#8b5cf6",
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Personal Portfolio",
    desc: "A sleek personal portfolio website to showcase projects and skills, built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS"],
    color: "#10b981",
    link: "#",
    github: "#",

  },
  {
    id: 7,
    title: "School Management System",
    desc: "Comprehensive school management system for handling student records, attendance, grades, and communication.",
    tags: ["React", "Django", "MySQL"],
    color: "#f59e0b",
    link: "#",
    github: "#",
  }
];
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const move = (e) => { mx = e.clientX; my = e.clientY; };
    const animate = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (dot.current) { dot.current.style.left = mx + "px"; dot.current.style.top = my + "px"; }
      if (ring.current) { ring.current.style.left = rx + "px"; ring.current.style.top = ry + "px"; }
      requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", move);
    animate();
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <>
      <div ref={dot} style={{ position: "fixed", width: 8, height: 8, background: "#00f5a0", borderRadius: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 9999, transition: "background 0.2s" }} />
      <div ref={ring} style={{ position: "fixed", width: 36, height: 36, border: "1.5px solid rgba(0,245,160,0.5)", borderRadius: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 9998 }} />
    </>
  );
}
function FacebookButton() {
  return (
    <a
      href="https://www.facebook.com/profile.php?id=61571667248926"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        background: "#1877f2",
        color: "#fff",
        fontFamily: "'Space Mono', monospace",
        fontSize: 11,
        letterSpacing: 1,
        textDecoration: "none",
        padding: "10px 8px",
        borderRadius: "8px 0 0 8px",
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        gap: 8,
        boxShadow: "-2px 0 12px rgba(24,119,242,0.3)",
        transition: "all 0.2s",
      }}
      onMouseEnter={e => e.currentTarget.style.padding = "10px 12px"}
      onMouseLeave={e => e.currentTarget.style.padding = "10px 8px"}
    >
      f  Facebook
    </a>
  );
}

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled || menuOpen ? "rgba(5,5,15,0.95)" : "transparent",
      backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,245,160,0.08)" : "none",
      transition: "all 0.4s ease",
      fontFamily: "'Space Mono', monospace",
    }}>
      <div style={{ padding: "0 5%", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <span style={{ fontSize: 18, color: "#00f5a0", letterSpacing: 1.5, fontWeight: 200 }}>
          AZSaaSStudio
        </span>
        <div style={{ display: "flex", gap: 36 }} className="desktop-links">
          {NAV_LINKS.map(n => (
            <a key={n} href={`#${n.toLowerCase()}`}
              onClick={() => setActive(n)}
              style={{
                fontSize: 13, letterSpacing: 1.5,
                color: active === n ? "#00f5a0" : "rgba(255,255,255,0.55)",
                textDecoration: "none", transition: "color 0.2s",
                textTransform: "uppercase",
              }}
            >{n}</a>
          ))}
        </div>
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="hamburger-btn"
          style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 8 }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 22, height: 1.5,
              background: "#00f5a0",
              transition: "all 0.3s ease",
              transformOrigin: "center",
              transform:
                menuOpen && i === 0 ? "translateY(6.5px) rotate(45deg)" :
                menuOpen && i === 2 ? "translateY(-6.5px) rotate(-45deg)" : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>
      <div style={{
        overflow: "hidden",
        maxHeight: menuOpen ? 400 : 0,
        opacity: menuOpen ? 1 : 0,
        transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
        borderTop: menuOpen ? "1px solid rgba(0,245,160,0.08)" : "none",
      }} className="mobile-menu">
        {NAV_LINKS.map(n => (
          <a key={n} href={`#${n.toLowerCase()}`}
            onClick={() => { setActive(n); setMenuOpen(false); }}
            style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "16px 8%", fontSize: 12, letterSpacing: 2,
              textTransform: "uppercase", textDecoration: "none",
              color: active === n ? "#00f5a0" : "rgba(255,255,255,0.55)",
              borderBottom: "1px solid rgba(0,245,160,0.05)",
              transition: "color 0.2s",
            }}
          >
            {n}
            <span style={{ fontSize: 10, opacity: active === n ? 1 : 0.3 }}>→</span>
          </a>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

function Hero() {
  const [typed, setTyped] = useState("");
  const roles = ["Full-Stack Developer", "UI/UX Enthusiast", "Problem Solver", "Open Source Contributor"];
  const roleRef = useRef(0);
  const charRef = useRef(0);
  const deleting = useRef(false);
  const timerRef = useRef(null);

useEffect(() => {
    function tick() {
      const role = roles[roleRef.current];
      if (!deleting.current) {
        charRef.current++;
        setTyped(role.slice(0, charRef.current));
        if (charRef.current >= role.length) {
          deleting.current = true;
          timerRef.current = setTimeout(tick, 1800);
        } else {
          timerRef.current = setTimeout(tick, 65);
        }
      } else {
        charRef.current--;
        setTyped(role.slice(0, charRef.current));
        if (charRef.current <= 0) {
          deleting.current = false;
          charRef.current = 0;
          roleRef.current = (roleRef.current + 1) % roles.length;
          timerRef.current = setTimeout(tick, 400);
        } else {
          timerRef.current = setTimeout(tick, 40);
        }
      }
    }
    timerRef.current = setTimeout(tick, 500);
    return () => clearTimeout(timerRef.current);
  }, []);

  function startTyping() {
    const interval = setInterval(() => {
      const role = roles[roleRef.current];
      if (deleting.current) {
        setTyped(role.slice(0, charRef.current - 1));
        charRef.current--;
        if (charRef.current === 0) {
          deleting.current = false;
          roleRef.current = (roleRef.current + 1) % roles.length;
          clearInterval(interval);
          setTimeout(() => startTyping(), 300);
        }
      }
    }, 40);
  }

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", textAlign: "center",
      padding: "0 6%", width: "100%", boxSizing: "border-box",
    }}>
      {/* Grid bg */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(0,245,160,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,160,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Glow blobs — clipped inside section */}
      <div style={{ position: "absolute", width: "60vw", height: "60vw", maxWidth: 500, maxHeight: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,160,0.08) 0%, transparent 70%)", top: "10%", left: "-15%", filter: "blur(40px)", animation: "float1 8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: "50vw", height: "50vw", maxWidth: 400, maxHeight: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)", bottom: "10%", right: "-15%", filter: "blur(40px)", animation: "float2 10s ease-in-out infinite" }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 700,marginTop: 70 }}>
        <p style={{ fontFamily: "'Space Mono', monospace", color: "#00f5a0", fontSize: 13, letterSpacing: 4, marginBottom: 24, opacity: 0.8 }}>
          HELLO, WORLD. I AM
        </p>
        <h1 style={{
          fontFamily: "'Clash Display', 'Playfair Display', Georgia, serif",
          fontSize: "clamp(28px, 8vw, 90px)",
          fontWeight: 700, lineHeight: 1.1,
          background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: 8,
          width: "100%",
        }}>
          MD ASADUJZAMAN
        </h1>
        <div style={{ height: 60, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(14px, 3vw, 26px)",
            color: "#00f5a0",
            letterSpacing: 2,
          }}>
            {typed}<span style={{ animation: "blink 0.9s step-end infinite" }}>|</span>
          </span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.45)", maxWidth: 520, margin: "20px auto 44px", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", fontSize: 16 }}>
          We build modern SaaS solutions for businesses 🚀<br />
          Custom Software | Web Apps | Automation
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#projects" style={{
            padding: "14px 36px", background: "#00f5a0", color: "#050510",
            fontFamily: "'Space Mono', monospace", fontSize: 13, letterSpacing: 1.5,
            textDecoration: "none", fontWeight: 700, borderRadius: 4,
            transition: "all 0.2s", display: "inline-block",
          }}
            onMouseEnter={e => { e.target.style.background = "#00d488"; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.target.style.background = "#00f5a0"; e.target.style.transform = "translateY(0)"; }}>
            VIEW PROJECTS
          </a>
          <a href="https://www.facebook.com/profile.php?id=100084847490330" style={{
            padding: "14px 36px", background: "transparent", color: "#00f5a0",
            fontFamily: "'Space Mono', monospace", fontSize: 13, letterSpacing: 1.5,
            textDecoration: "none", fontWeight: 700, borderRadius: 4,
            border: "1.5px solid rgba(0,245,160,0.4)",
            transition: "all 0.2s", display: "inline-block",
          }}
            onMouseEnter={e => { e.target.style.borderColor = "#00f5a0"; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.target.style.borderColor = "rgba(0,245,160,0.4)"; e.target.style.transform = "translateY(0)"; }}>
            CONTACT ME
          </a>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "fadeIn 2s 1.5s both" }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: 3, color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>scroll</span>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(0,245,160,0.5), transparent)", animation: "scrollLine 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}

function About() {
  const [ref, inView] = useInView();
  return (
    <section id="about" ref={ref} style={{ padding: "120px 6%", width: "100%", maxWidth: 1100, margin: "0 auto", boxSizing: "border-box" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="about-grid">
        {/* Avatar */}
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-50px)", transition: "all 0.8s ease" }}>
          <div style={{ position: "relative", width: "fit-content", maxWidth: "100%" }}>
            <div style={{ width: 300, height: 340, maxWidth: "100%", borderRadius: 16, background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", border: "1px solid rgba(0,245,160,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 120, position: "relative", overflow: "hidden" }}>
              <span><img src={Logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></span>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,245,160,0.04), transparent)" }} />
            </div>
            <div style={{ position: "absolute", top: -16, right: -16, width: 100, height: 100, border: "1.5px solid rgba(0,245,160,0.2)", borderRadius: 12, zIndex: -1 }} />
            <div style={{ position: "absolute", bottom: -16, left: -16, width: 70, height: 70, background: "rgba(0,245,160,0.06)", borderRadius: 10, zIndex: -1 }} />
            <div style={{ position: "absolute", bottom: -24, right: -24, background: "rgba(0,245,160,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(0,245,160,0.2)", borderRadius: 12, padding: "12px 20px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 24, fontWeight: 700, color: "#00f5a0" }}>3+</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: 1 }}>Years Exp.</div>
            </div>
          </div>
        </div>
        {/* Text */}
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(50px)", transition: "all 0.8s 0.2s ease" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", color: "#00f5a0", fontSize: 12, letterSpacing: 4, marginBottom: 16 }}>ABOUT ME</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 24 }}>
            Turning ideas into<br /><em style={{ color: "#00f5a0", fontStyle: "italic" }}>digital reality.</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.9, fontFamily: "'DM Sans', sans-serif", fontSize: 15, marginBottom: 16 }}>
            I'm a passionate full-stack developer with 3+ years of experience building web applications that are fast, accessible, and delightful to use. I love clean code, creative UIs, and solving real-world problems.
          </p>
          <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.9, fontFamily: "'DM Sans', sans-serif", fontSize: 15, marginBottom: 36 }}>
            When I'm not coding, I'm exploring new tech, contributing to open source, or brewing a perfect cup of coffee ☕.
          </p>
          <div style={{ display: "flex", gap: 32, marginBottom: 36 }}>
            {[["10+", "Projects"], ["5+", "Clients"], ["100%", "Dedication"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 26, fontWeight: 700, color: "#00f5a0" }}>{num}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", letterSpacing: 1 }}>{label}</div>
              </div>
            ))}
          </div>
          <a href={image} download style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "12px 28px", border: "1.5px solid rgba(0,245,160,0.3)",
            color: "#00f5a0", fontFamily: "'Space Mono', monospace", fontSize: 12,
            letterSpacing: 1.5, textDecoration: "none", borderRadius: 4,
            transition: "all 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(0,245,160,0.08)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            ↓ DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, delay, inView }) {
  return (
    <div style={{ marginBottom: 20, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: `all 0.6s ${delay}s ease` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 18 }}>{skill.icon}</span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "rgba(255,255,255,0.8)", letterSpacing: 1 }}>{skill.name}</span>
        </div>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "#00f5a0" }}>{skill.level}%</span>
      </div>
      <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: 2,
          background: "linear-gradient(90deg, #00f5a0, #00b4d8)",
          width: inView ? `${skill.level}%` : "0%",
          transition: `width 1.2s ${delay + 0.3}s cubic-bezier(0.4,0,0.2,1)`,
        }} />
      </div>
    </div>
  );
}

function Skills() {
  const [ref, inView] = useInView();
  return (
    <section id="skills" ref={ref} style={{ padding: "120px 6%", background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", width: "100%", boxSizing: "border-box" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p style={{ fontFamily: "'Space Mono', monospace", color: "#00f5a0", fontSize: 12, letterSpacing: 4, marginBottom: 12 }}>WHAT I KNOW</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#fff" }}>My Tech Stack</h2>
        </div>
        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px" }}>
          {SKILLS.map((s, i) => <SkillBar key={s.name} skill={s} delay={i * 0.08} inView={inView} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay, inView }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hover ? project.color + "40" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 16, padding: "36px 32px",
        transition: "all 0.3s ease",
        transform: inView ? (hover ? "translateY(-6px)" : "translateY(0)") : "translateY(30px)",
        opacity: inView ? 1 : 0,
        transitionDelay: `${delay}s`,
        cursor: "pointer",
        position: "relative", overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${project.color}, transparent)`, opacity: hover ? 1 : 0, transition: "opacity 0.3s" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: project.color + "15", border: `1px solid ${project.color}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 20 }}>🚀</span>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <a href={project.github} style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "#fff"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}>⌥</a>
          <a href={project.link} style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "#fff"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}>↗</a>
        </div>
      </div>
      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{project.title}</h3>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginBottom: 24 }}>{project.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {project.tags.map(t => (
          <span key={t} style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: 1, color: project.color, background: project.color + "10", border: `1px solid ${project.color}20`, padding: "4px 10px", borderRadius: 4 }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const [ref, inView] = useInView();
  return (
    <section id="projects" ref={ref} style={{ padding: "120px 6%", width: "100%", boxSizing: "border-box" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p style={{ fontFamily: "'Space Mono', monospace", color: "#00f5a0", fontSize: 12, letterSpacing: 4, marginBottom: 12 }}>WHAT I'VE BUILT</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#fff" }}>Featured Projects</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} delay={i * 0.1} inView={inView} />)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [ref, inView] = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "120px 6%",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* TITLE */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView
              ? "translateY(0)"
              : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <p className="text-[#00f5a0] text-sm tracking-[4px] mb-3">
            CONTACT ME
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>

          <p className="text-white/50 max-w-lg mx-auto mb-10 leading-7">
            Need a website, SaaS solution, or want to discuss a
            project? Message me directly on WhatsApp.
          </p>

          {/* WhatsApp Button */}
          <div className="flex justify-center">
            <a
              href="https://wa.me/8801797320260"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-7 py-5 rounded-2xl bg-green-500/10 border border-green-500/20 hover:bg-green-500 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl">
              
               <span><img src={whats} alt="Logo" style={{ width: "20px", height: "20px", objectFit: "cover" }} /></span>
              </div>

              <div className="text-left">
                <p className="text-white text-lg font-semibold group-hover:text-black transition">
                  WhatsApp Me
                </p>

                <p className="text-white/50 text-sm group-hover:text-black/70 transition">
                  Fast response within minutes
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div
          style={{
            marginTop: 72,
            paddingTop: 48,
            borderTop:
              "1px solid rgba(164, 50, 156, 0.06)",
            display: "flex",
            justifyContent: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          {[
            [
              "GitHub",
              "⌥",
              "https://github.com/asadujzamancst-cmd",
            ],
            [
              "YouTube",
              "▶",
              "https://www.youtube.com/@azsaasstudio",
            ],
            [
              "Facebook",
              "F",
              "https://www.facebook.com/profile.php?id=61571667248926",
            ],
            [
              "Email",
              "@",
              "mailto:asadujzaman.cst@gmail.com",
            ],
          ].map(([name, icon, href]) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                color: "white",
                textDecoration: "none",
                letterSpacing: 1,
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color =
                  "#1feca4";
                e.currentTarget.style.transform =
                  "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              <span style={{ fontSize: 20 }}>
                {icon}
              </span>
              <span style={{ fontSize: 10 }}>
                {name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}




function Footer() {
  return (
    <footer style={{ padding: "32px 6%", borderTop: "1px solid rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", boxSizing: "border-box" }}>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "white", letterSpacing: 1 }}>© 2026 AZ SaaS Studio</span>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "white", letterSpacing: 1 }}>Designed & Built with ❤️</span>
    </footer>
  );
}

export default function App() {
  const [active, setActive] = useState("Home");
  return (
    <div style={{ background: "#050510", color: "#fff", minHeight: "100vh", width: "100%", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { scroll-behavior: smooth; overflow-x: hidden; width: 100%; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050510; }
        ::-webkit-scrollbar-thumb { background: rgba(0,245,160,0.3); border-radius: 2px; }
        @keyframes float1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,20px)} }
        @keyframes float2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,30px)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scrollLine { 0%{transform:scaleY(0);transform-origin:top} 50%{transform:scaleY(1);transform-origin:top} 51%{transform:scaleY(1);transform-origin:bottom} 100%{transform:scaleY(0);transform-origin:bottom} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Cursor />
      <FacebookButton />

      <Navbar active={active} setActive={setActive} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
