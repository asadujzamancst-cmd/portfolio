import React from 'react'

const contact = () => {
     function Contact() {
        const [ref, inView] = useInView();
        const [form, setForm] = useState({ name: "", email: "", message: "" });
        const [sent, setSent] = useState(false);
        const handleSubmit = () => { if (form.name && form.email && form.message) setSent(true); };
     }
  return (
    <div>
     
        return (
          <section id="contact" ref={ref} style={{ padding: "120px 5%", background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
            <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
              <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
                <p style={{ fontFamily: "'Space Mono', monospace", color: "#00f5a0", fontSize: 12, letterSpacing: 4, marginBottom: 12 }}>GET IN TOUCH</p>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>Let's Work Together</h2>
                <p style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8, marginBottom: 48 }}>Have a project in mind? I'd love to hear about it. Send me a message and let's make something great together.</p>
      
                {sent ? (
                  <div style={{ padding: "48px", background: "rgba(0,245,160,0.05)", border: "1px solid rgba(0,245,160,0.2)", borderRadius: 16 }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#fff", marginBottom: 8 }}>Message Sent!</h3>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}>I'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 16, textAlign: "left" }}>
                    {[["Name", "name", "text", "Your name"], ["Email", "email", "email", "your@email.com"]].map(([label, key, type, placeholder]) => (
                      <div key={key}>
                        <label style={{ display: "block", fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 2, color: "rgba(255,255,255,0.4)", marginBottom: 8, textTransform: "uppercase" }}>{label}</label>
                        <input type={type} placeholder={placeholder} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })}
                          style={{ width: "100%", padding: "14px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: 15, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                          onFocus={e => e.target.style.borderColor = "rgba(0,245,160,0.4)"}
                          onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"} />
                      </div>
                    ))}
                    <div>
                      <label style={{ display: "block", fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 2, color: "rgba(255,255,255,0.4)", marginBottom: 8, textTransform: "uppercase" }}>Message</label>
                      <textarea placeholder="Tell me about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5}
                        style={{ width: "100%", padding: "14px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: 15, outline: "none", resize: "vertical", boxSizing: "border-box", transition: "border-color 0.2s" }}
                        onFocus={e => e.target.style.borderColor = "rgba(0,245,160,0.4)"}
                        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"} />
                    </div>
                    <button onClick={handleSubmit}
                      style={{ padding: "16px", background: "#00f5a0", color: "#050510", fontFamily: "'Space Mono', monospace", fontSize: 13, fontWeight: 700, letterSpacing: 2, border: "none", borderRadius: 8, cursor: "pointer", transition: "all 0.2s", marginTop: 8 }}
                      onMouseEnter={e => { e.target.style.background = "#00d488"; e.target.style.transform = "translateY(-2px)"; }}
                      onMouseLeave={e => { e.target.style.background = "#00f5a0"; e.target.style.transform = "translateY(0)"; }}>
                      SEND MESSAGE →
                    </button>
                  </div>
                )}
              </div>
      
              {/* Social Links */}
              <div style={{ marginTop: 72, paddingTop: 48, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "center", gap: 32 }}>
                {[["GitHub", "⌥", "#"], ["LinkedIn", "in", "#"], ["Twitter", "𝕏", "#"], ["Email", "@", "mailto:your@email.com"]].map(([name, icon, href]) => (
                  <a key={name} href={href}
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: 1, transition: "color 0.2s", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
                    onMouseEnter={e => e.currentTarget.style.color = "#00f5a0"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
                  >
                    <span style={{ fontSize: 20 }}>{icon}</span>
                    <span style={{ fontSize: 10 }}>{name}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        );
      
      
    </div>
  )
}

export default contact
