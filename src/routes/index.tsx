import { createFileRoute } from '@tanstack/react-router';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroVideo from '@/assets/manychat/hero.webm.asset.json';
import flowImage from '@/assets/manychat/01-desktop-v1.webp.asset.json';
import textImage from '@/assets/manychat/02-desktop.webp.asset.json';
import stepImage from '@/assets/manychat/03-desktop.webp.asset.json';
import intentImage from '@/assets/manychat/04-desktop.webp.asset.json';
import instagram from '@/assets/manychat/instagram.png.asset.json';
import tiktok from '@/assets/manychat/tiktok.svg.asset.json';
import whatsapp from '@/assets/manychat/whatsapp.svg.asset.json';
import messenger from '@/assets/manychat/messenger.svg.asset.json';
import aiCta from '@/assets/manychat/ai-cta.svg.asset.json';

const signup = 'https://app.manychat.com/signup/facebookAuth?channel=instagram';
const site = 'https://manychat.com';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Manychat AI | Stay human at superhuman scale' },
      { name: 'description', content: 'Make more connections without losing your voice. Manychat AI learns your vibe, multiplies your impact, and simplifies your work.' },
      { property: 'og:title', content: 'Manychat AI | Stay human at superhuman scale' },
      { property: 'og:description', content: 'Make more connections without losing your voice. AI that learns your vibe, multiplies your impact, and simplifies your work.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Index,
});

function Cta({ children = 'Get started', outline = false }: { children?: string; outline?: boolean }) {
  return <Button asChild variant={outline ? 'outline' : 'default'} className={`mc-pill ${outline ? 'mc-outline' : ''}`}><a href={outline ? `${site}/pricing` : signup}>{children}</a></Button>;
}

const benefits: [{ title: string; copy: string }, { title: string; copy: string }, { title: string; copy: string }] = [
  { title: 'AI Replies', copy: 'AI + All of your crucial context = Every question answered pitch-perfectly, building trust 24/7.' },
  { title: 'AI Comments', copy: "Catch compliments before Meta's 24-hour window closes. Turn fans into customers." },
  { title: 'AI Goals', copy: 'Those AI automations are pulling some serious numbers. Link them to your goals, and watch the AI naturally turn aimless browsers into buyers.' },
];

const features = [
  { title: 'Flow Builder Assistant', kicker: 'Create the purrrfect flow in seconds', points: ['Tell it your goal, then sit back and watch it build', 'Ask for advice on improving your existing flows', 'Edit any draft with easy drag-and-drop options'], image: flowImage.url, alt: 'Woman with a cat', label: 'What do you want this automation to do?', overlay: 'I want to collect emails and sell my skincare products. I post Reels and ask people to comment “GLOW” for a 10% discount.' },
  { title: 'Text Improver', kicker: 'Light up your messages', points: ['Improve copy across your automations', 'Keep your comms engaging, clear, and on-brand', 'Refine your messaging for better customer interactions'], image: textImage.url, alt: 'Smiling man', label: 'Help me improve this text', overlay: 'Psst… our summer sale just launched — and you’re one of the first to know 😉' },
  { title: 'AI Step', kicker: 'Create the perfect arrangement', points: ['Tell the AI what you want to achieve, and then let it do the talking', 'Flexible: Adapts its approach based on what your followers say', 'Add context: You’ve got 10k characters to tell the AI everything it needs to know'], image: stepImage.url, alt: 'Woman with flowers', label: 'In the Chat', overlay: 'Beautiful choice! We have fresh roses available this week. Want me to share some options?' },
  { title: 'Intention Recognition', kicker: 'Your followers might be confused, but our AI isn’t', points: ['Delivers answers based on intent, not keywords', 'Understands questions in all major languages (and all major typos)', 'Handles a broad range of user needs (no babysitting needed!)'], image: intentImage.url, alt: 'Man brewing coffee', label: 'Recognized intent: Asking about price', overlay: 'This item is $25. Shipping is free 🎉' },
];

const platforms = [
  { title: 'Instagram', text: 'Effortlessly automate DMs and comment replies', icon: instagram.url, href: `${site}/product/instagram` },
  { title: 'TikTok', text: 'Turn viral moments into meaningful conversations', icon: tiktok.url, href: `${site}/product/tiktok` },
  { title: 'WhatsApp', text: 'Simplify communication with instant responses', icon: whatsapp.url, href: `${site}/product/whatsapp` },
  { title: 'Messenger', text: 'Boost conversions and connect with your community', icon: messenger.url, href: `${site}/product/messenger-marketing` },
];

const faqs = [
  ['How does AI Replies work?', 'Think about all the information that’s most important to your users, then give the AI all the details and context it needs to respond effectively. It handles it from there.'],
  ['Will it sound like me, or like a bot?', 'Manychat AI sounds like you, because you tell it how: you can add up to 250k characters of context. AI Comments even uses your past Instagram replies to perfectly match your style.'],
  ['Can I approve responses before they go out?', 'You’ve got the final say. With AI Comments, you approve every reply. With AI Replies, you’ll preview the AI’s recommended responses. Then, it’ll fine-tune replies based on what’s actually said.'],
  ['Do I need to know how to code?', 'Nope. Manychat AI is simple and intuitive, no coding needed.'],
  ['How much does it cost?', 'Manychat AI is an add-on to Manychat Pro, and costs $29/month.'],
];

function SectionHeading({ title, copy }: { title: string; copy: string }) {
  return <div className="mc-section-heading"><h2>{title}</h2><p>{copy}</p></div>;
}

function Index() {
  return (
    <div className="mc-page">
      <header className="mc-header">
        <a className="mc-logo" href={site} aria-label="Manychat home">Manychat</a>
        <nav className="mc-nav" aria-label="Main navigation">
          <a href={`${site}/product`}>Product</a><a href={`${site}/solutions`}>Solutions</a><a href={`${site}/agencies`}>Agencies</a><a href={`${site}/pricing`}>Pricing</a><a href={`${site}/resources`}>Resources</a>
        </nav>
        <div className="mc-nav-actions">
          <Button asChild variant="ghost" className="mc-header-cta"><a href={signup}>Get started</a></Button>
          <a className="mc-signin" href="https://app.manychat.com/login">Sign in</a>
        </div>
        <details className="mc-mobile-menu">
          <summary className="mc-mobile-toggle" aria-label="Toggle menu"><Menu size={22} /></summary>
          <nav className="mc-mobile-links" aria-label="Mobile navigation">
            <a href={`${site}/product`}>Product</a><a href={`${site}/solutions`}>Solutions</a><a href={`${site}/agencies`}>Agencies</a><a href={`${site}/pricing`}>Pricing</a><a href={`${site}/resources`}>Resources</a>
          </nav>
        </details>
      </header>

      <main>
        <section className="mc-hero">
          <div className="mc-hero-copy mc-container">
            <h1>Stay human at<br />superhuman scale</h1>
            <p>Make more connections without losing your voice. AI that learns your vibe, multiplies your impact, and simplifies your work.</p>
            <Cta />
          </div>
          <div className="mc-hero-stage">
            <div className="mc-prompt"><span>What’s the goal of the conversation?</span><strong>Send coupon code if customer asks about deals</strong></div>
            <video className="mc-hero-video" autoPlay muted loop playsInline aria-label="Manychat AI conversation demonstration"><source src={heroVideo.url} type="video/webm" /></video>
          </div>
        </section>

        <section className="mc-section mc-assistant mc-container">
          <SectionHeading title="Your always-on social media assistant" copy="Set and forget. Minimum effort, maximum outcomes." />
          <div className="mc-assistant-grid">
            <article className="mc-assistant-item"><div className="mc-assistant-visual"><div className="mc-faux-phone"><div className="faux-top">✦ &nbsp; Messages</div><div className="mc-bubble">Hey! Is this still available?</div><div className="mc-bubble out">Hey there! Yes, it is ✨</div><div className="mc-bubble">Amazing! Tell me more</div></div></div><h3>{benefits[0].title}</h3><p>{benefits[0].copy}</p></article>
            <article className="mc-assistant-item"><div className="mc-assistant-visual"><div className="mc-comment-stack"><div className="mc-comment"><span>♥ &nbsp; New comment</span>Love this! Where can I get one?</div><div className="mc-comment"><span>↗ &nbsp; AI suggested reply</span>So glad you love it! Check your DMs 💌</div></div></div><h3>{benefits[1].title}</h3><p>{benefits[1].copy}</p></article>
            <article className="mc-assistant-item"><div className="mc-assistant-visual"><div className="mc-goal-graphic">↗<span>Goal achieved ✓</span></div></div><h3>{benefits[2].title}</h3><p>{benefits[2].copy}</p></article>
          </div>
          <div className="mc-centered-cta"><Cta /></div>
        </section>

        <section className="mc-section mc-features mc-container">
          <SectionHeading title="Smarter automations, better conversations" copy="Improve your automations and keep your business flowing." />
          {features.map((feature) => <article className="mc-feature" key={feature.title}>
            <div className="mc-feature-copy"><h3>{feature.title}</h3><p className="mc-kicker">{feature.kicker}</p><ul>{feature.points.map(point => <li key={point}>{point}</li>)}</ul></div>
            <div className="mc-feature-image"><img src={feature.image} alt={feature.alt} loading="lazy" /><div className="mc-feature-overlay"><small>✦ &nbsp; {feature.label}</small>{feature.overlay}</div></div>
          </article>)}
        </section>

        <section className="mc-section mc-platforms mc-container">
          <SectionHeading title="Connect everywhere you make connections" copy="Get personalized AI assistance on all these platforms." />
          <div className="mc-platform-grid">{platforms.map(platform => <a className="mc-platform" href={platform.href} key={platform.title}><img src={platform.icon} alt="" loading="lazy" /><h3>{platform.title}</h3><p>{platform.text}</p><span>Learn more ↗</span></a>)}</div>
        </section>

        <section className="mc-section mc-container">
          <SectionHeading title="Stop leaving money on the table" copy="Always-on AI means 24/7 earning and learning about your audience." />
          <div className="mc-compare-grid">
            <div className="mc-compare-panel"><span>Before Manychat:</span><h3>Losing sleep and money</h3><ul><li>Racing Meta's 24-hour reply window manually</li><li>Only 20% of your content is working</li><li>Followers wander without clear next steps</li><li>Missing sales every time you’re offline (the audacity!)</li></ul><Cta /></div>
            <div className="mc-compare-panel after"><span>After Manychat:</span><h3>Have your cake and eat it, too</h3><ul><li>Every interaction caught while still hot</li><li>Every post pulls its weight</li><li>Automatically guide lost visitors toward your goals</li><li>Making money while living your actual life</li></ul><Cta /></div>
          </div>
        </section>

        <section className="mc-section mc-container">
          <SectionHeading title="Live in 5. Literally." copy="From set-up to success in less time than it takes to brew a cup of coffee." />
          <div className="mc-steps"><div className="mc-step"><span>01 / 03</span><h3>Sign up for free</h3><p>Start your free trial* — no credit card required</p><small>*AI only available as add-on to Manychat Pro</small></div><div className="mc-step"><span>02 / 03</span><h3>Go live in minutes</h3><p>Seriously, it’s that simple</p></div><div className="mc-step"><span>03 / 03</span><h3>Cancel anytime</h3><p>But you won’t want to ;)</p></div></div>
          <div className="mc-steps-actions"><Cta /><Cta outline>See plans</Cta></div>
        </section>

        <section className="mc-final-cta"><div className="mc-final-copy"><h2>Level up your<br />social media game</h2><p>Manychat AI is available as an add-on to your Pro plan, giving you the full oomph of AI within the Manychat platform.</p><Cta /></div><img src={aiCta.url} alt="AI assistant helping a business owner" loading="lazy" /></section>

        <section className="mc-section mc-container"><div className="mc-faq"><div className="mc-section-heading"><h2>Frequently asked questions</h2></div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
      </main>
      <footer className="mc-footer"><div className="mc-container"><div className="mc-footer-top"><a className="mc-logo" href={site}>Manychat</a><div className="mc-footer-columns"><div className="mc-footer-column"><span>Product</span><a href={`${site}/product/instagram`}>Instagram</a><a href={`${site}/product/tiktok`}>TikTok</a><a href={`${site}/product/whatsapp`}>WhatsApp</a><a href={`${site}/product/ai`}>Manychat AI</a></div><div className="mc-footer-column"><span>Explore</span><a href={`${site}/solutions`}>Solutions</a><a href={`${site}/agencies`}>Agencies</a><a href={`${site}/pricing`}>Pricing</a><a href={`${site}/resources`}>Resources</a></div><div className="mc-footer-column"><span>Company</span><a href={`${site}/about`}>About us</a><a href={`${site}/blog`}>Blog</a><a href={`${site}/contact`}>Contact</a></div></div></div><div className="mc-footer-bottom"><span>© 2026 Manychat</span><div><a href={`${site}/privacy`}>Privacy</a><a href={`${site}/terms`}>Terms</a></div></div></div></footer>
    </div>
  );
}
