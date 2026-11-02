import { useState } from "react";
import { FiMail, FiPhone, FiSend, FiUser } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { contactForm, personal } from "../data/portfolioData.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

const empty = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    // Option A: a form service (Formspree) is configured -> send directly.
    if (contactForm.formspreeUrl) {
      setSending(true);
      try {
        const res = await fetch(contactForm.formspreeUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus({ type: "success", text: "Thank you! Your message has been sent." });
        setForm(empty);
      } catch {
        setStatus({
          type: "error",
          text: `Sorry, the message could not be sent. Please email me at ${personal.email}.`,
        });
      } finally {
        setSending(false);
      }
      return;
    }

    // Option B (default, no backend needed): open the visitor's email app, message pre-filled.
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nReply to: ${form.email}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setStatus({
      type: "success",
      text: "Your email app should open with the message ready. Just press Send there.",
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="Open to internships, placements and learning opportunities"
        />
        <div className="contact-grid">
          <Reveal>
            <div className="glass contact-info">
              <h3>Let's connect</h3>
              <ul>
                <li>
                  <span className="skill-icon"><FiUser /></span>
                  <div><small>Name</small><strong>{personal.name}</strong></div>
                </li>
                <li>
                  <span className="skill-icon"><FiMail /></span>
                  <div><small>Email</small><a href={`mailto:${personal.email}`}>{personal.email}</a></div>
                </li>
                <li>
                  <span className="skill-icon"><FiPhone /></span>
                  <div><small>Phone</small><a href={`tel:+91${personal.phone}`}>{personal.phone}</a></div>
                </li>
                <li>
                  <span className="skill-icon"><FaLinkedin /></span>
                  <div>
                    <small>LinkedIn</small>
                    <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                      Meghana G M on LinkedIn
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="glass contact-form" onSubmit={onSubmit}>
              <label>
                Your Name
                <input name="name" type="text" required value={form.name} onChange={onChange} placeholder="Your name" autoComplete="name" />
              </label>
              <label>
                Your Email
                <input name="email" type="email" required value={form.email} onChange={onChange} placeholder="you@example.com" autoComplete="email" />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" required value={form.message} onChange={onChange} placeholder="Write your message here" />
              </label>
              <button type="submit" className="btn btn-primary" disabled={sending}>
                <FiSend /> {sending ? "Sending..." : "Send Message"}
              </button>
              {status.text && (
                <p className={`form-status ${status.type}`} role="status">{status.text}</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
