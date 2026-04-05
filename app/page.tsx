'use client';

import { useState } from 'react';
import { ArrowRight, Award, Star, TrendingUp, Users, Zap, ChevronDown, Menu, X } from 'lucide-react';

const awards = [
  { year: '2024', title: 'Cannes Lions Grand Prix', category: 'Brand Experience' },
  { year: '2023', title: 'D&AD Black Pencil', category: 'Digital Marketing' },
  { year: '2023', title: 'Effie Gold Award', category: 'Brand Strategy' },
  { year: '2022', title: 'Webby Award Winner', category: 'Integrated Campaign' },
];

const services = [
  {
    icon: <Zap size={28} />,
    title: 'Brand Strategy',
    desc: 'We build the foundation of who you are — your story, your voice, your position in the market.',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Performance Marketing',
    desc: 'Data-driven campaigns across every channel, engineered for growth and optimised relentlessly.',
  },
  {
    icon: <Star size={28} />,
    title: 'Creative Direction',
    desc: 'Concepts that stop thumbs, change minds, and make people feel something worth remembering.',
  },
  {
    icon: <Users size={28} />,
    title: 'Content & Social',
    desc: 'Culturally-aware content that builds community and turns audiences into advocates.',
  },
];

const work = [
  { client: 'Meridian', category: 'Brand Relaunch', result: '+340% Brand Recall', bg: '#1A1A1A', text: '#F5C518' },
  { client: 'Volta', category: 'Product Launch', result: '12M Reach in 30 Days', bg: '#F5C518', text: '#1A1A1A' },
  { client: 'Solace', category: 'Campaign Strategy', result: '6× ROAS', bg: '#F4F4F4', text: '#1A1A1A' },
  { client: 'Kova', category: 'Identity & Web', result: 'D&AD Pencil Winner', bg: '#2C2C2C', text: '#FFFFFF' },
];

const testimonials = [
  {
    quote: 'Aurum didn\'t just deliver a campaign — they delivered a movement. Our brand has never felt more alive.',
    name: 'Sarah Chen',
    role: 'CMO, Meridian',
    initials: 'SC',
  },
  {
    quote: 'The strategic depth and creative output is unlike anything we\'ve experienced. Pure class.',
    name: 'James Okafor',
    role: 'Founder, Volta',
    initials: 'JO',
  },
  {
    quote: 'Working with Aurum is the best marketing decision we\'ve made. The results speak for themselves.',
    name: 'Lena Brandt',
    role: 'CEO, Solace',
    initials: 'LB',
  },
];

const stats = [
  { value: '180+', label: 'Clients Worldwide' },
  { value: '40+', label: 'Industry Awards' },
  { value: '12×', label: 'Average ROAS' },
  { value: '11yr', label: 'In Business' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      {/* NAV */}
      <nav style={{ borderBottom: '1px solid #EBEBEB' }} className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            <span style={{ color: '#1A1A1A' }}>AU</span>
            <span style={{ color: '#F5C518' }}>RUM</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Work', 'Services', 'About', 'Awards'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 500, color: '#1A1A1A', textDecoration: 'none', letterSpacing: '0.02em' }}
                className="hover:opacity-60 transition-opacity">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact"
              style={{ background: '#1A1A1A', color: '#FFFFFF', fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.875rem', padding: '0.625rem 1.5rem', borderRadius: '100px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Start a Project <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: '#FFFFFF', borderTop: '1px solid #EBEBEB', padding: '1.5rem' }}>
            {['Work', 'Services', 'About', 'Awards', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', fontFamily: 'Syne, sans-serif', fontSize: '1.25rem', fontWeight: 600, color: '#1A1A1A', padding: '0.75rem 0', textDecoration: 'none', borderBottom: '1px solid #F4F4F4' }}>
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="max-w-7xl mx-auto px-6">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFF3B0', border: '1px solid #F5C518', borderRadius: '100px', padding: '0.375rem 1rem', marginBottom: '2rem', width: 'fit-content' }}>
          <Award size={14} style={{ color: '#1A1A1A' }} />
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: '#1A1A1A', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Cannes Lions Grand Prix 2024
          </span>
        </div>

        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 800, lineHeight: '1.0', letterSpacing: '-0.04em', color: '#1A1A1A', marginBottom: '1.5rem', maxWidth: '900px' }}>
          We make brands<br />
          <span style={{ color: '#F5C518' }}>impossible</span><br />
          to ignore.
        </h1>

        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 400, color: '#6B6B6B', maxWidth: '520px', lineHeight: '1.7', marginBottom: '3rem' }}>
          Aurum is an award-winning creative and performance marketing agency. We craft campaigns that move people, build brands that endure, and deliver results that matter.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a href="#work"
            style={{ background: '#F5C518', color: '#1A1A1A', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', padding: '1rem 2rem', borderRadius: '100px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'transform 0.2s' }}>
            See Our Work <ArrowRight size={18} />
          </a>
          <a href="#contact"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1rem', color: '#1A1A1A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '2px solid #1A1A1A', paddingBottom: '2px' }}>
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: '5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6B6B6B' }}>
          <ChevronDown size={20} style={{ animation: 'bounce 2s infinite' }} />
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll to explore</span>
        </div>
      </section>

      {/* STATS TICKER */}
      <section style={{ background: '#1A1A1A', padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#F5C518', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#AAAAAA', marginTop: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '8rem 0', background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ marginBottom: '4rem' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#F5C518', display: 'block', marginBottom: '1rem' }}>
              What We Do
            </span>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '600px' }}>
              Full-spectrum creative power.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i}
                style={{ background: i % 2 === 0 ? '#F4F4F4' : '#1A1A1A', borderRadius: '16px', padding: '2.5rem', transition: 'transform 0.2s' }}
                className="hover:-translate-y-1">
                <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: '#F5C518', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#1A1A1A' }}>
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: i % 2 === 0 ? '#1A1A1A' : '#FFFFFF', marginBottom: '0.75rem' }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: '1.7', color: i % 2 === 0 ? '#6B6B6B' : '#AAAAAA' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ padding: '8rem 0', background: '#F4F4F4' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#F5C518', display: 'block', marginBottom: '1rem' }}>
                Selected Work
              </span>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Work that wins.
              </h2>
            </div>
            <a href="#contact"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.875rem', color: '#1A1A1A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '2px solid #1A1A1A', paddingBottom: '2px' }}>
              View All Projects <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {work.map((w, i) => (
              <div key={i}
                style={{ background: w.bg, borderRadius: '16px', padding: '3rem', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer', transition: 'transform 0.2s' }}
                className="hover:-translate-y-1">
                <div>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: w.text, opacity: 0.6 }}>
                    {w.category}
                  </span>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '2.5rem', fontWeight: 800, color: w.text, marginTop: '0.5rem', letterSpacing: '-0.03em' }}>
                    {w.client}
                  </h3>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: w.text }}>
                    {w.result}
                  </span>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: w.text, display: 'flex', alignItems: 'center', justifyContent: 'center', color: w.bg }}>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards" style={{ padding: '8rem 0', background: '#1A1A1A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#F5C518', display: 'block', marginBottom: '1rem' }}>
            Recognition
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '4rem' }}>
            Industry-recognised.<br />Globally respected.
          </h2>

          <div style={{ borderTop: '1px solid #2C2C2C' }}>
            {awards.map((a, i) => (
              <div key={i}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem 0', borderBottom: '1px solid #2C2C2C', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.875rem', fontWeight: 700, color: '#F5C518', minWidth: '50px' }}>
                    {a.year}
                  </span>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 700, color: '#FFFFFF' }}>
                    {a.title}
                  </h3>
                </div>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#6B6B6B', background: '#2C2C2C', padding: '0.375rem 1rem', borderRadius: '100px' }}>
                  {a.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '8rem 0', background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#F5C518', display: 'block', marginBottom: '1rem' }}>
            Client Stories
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '4rem' }}>
            The proof is in the praise.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: '#F4F4F4', borderRadius: '16px', padding: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '1.5rem' }}>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} style={{ fill: '#F5C518', color: '#F5C518' }} />
                  ))}
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: '1.7', color: '#2C2C2C', marginBottom: '2rem' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.75rem', fontWeight: 700, color: '#F5C518' }}>
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.9rem', fontWeight: 700, color: '#1A1A1A' }}>{t.name}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#6B6B6B' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: '8rem 0', background: '#F5C518' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, color: '#1A1A1A', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '1.5rem' }}>
            Ready to be<br />impossible to ignore?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#2C2C2C', maxWidth: '480px', margin: '0 auto 3rem', lineHeight: '1.7' }}>
            Tell us about your brand. We&rsquo;ll tell you what&rsquo;s possible.
          </p>
          <a href="mailto:hello@aurum.agency"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#1A1A1A', color: '#FFFFFF', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', padding: '1.125rem 2.5rem', borderRadius: '100px', textDecoration: 'none' }}>
            Start a Conversation <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#1A1A1A', padding: '3rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            <span style={{ color: '#FFFFFF' }}>AU</span>
            <span style={{ color: '#F5C518' }}>RUM</span>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#6B6B6B' }}>
            © 2026 Aurum Creative Agency. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Privacy', 'Terms', 'Contact'].map(link => (
              <a key={link} href="#"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#6B6B6B', textDecoration: 'none' }}
                className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </div>
  );
}
