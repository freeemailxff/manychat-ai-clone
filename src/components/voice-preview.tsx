import { useEffect, useState } from 'react';
import { AudioLines, Check, Pause, Play, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const samples = {
  en: { name: 'English', locale: 'en', text: 'Every story deserves a voice. Bring your words to life with Voicefy AI.' },
  bn: { name: 'Bengali', locale: 'bn', text: 'প্রতিটি গল্পের একটি কণ্ঠস্বর আছে। আপনার শব্দকে প্রাণ দিন ভয়েসফাই এআই দিয়ে।' },
  hi: { name: 'Hindi', locale: 'hi', text: 'हर कहानी को एक आवाज़ चाहिए। अपने शब्दों को जीवंत बनाएं वॉइसफाई एआई के साथ।' },
};
type Language = keyof typeof samples;

export function VoicePreview() {
  const [language, setLanguage] = useState<Language>('en');
  const [text, setText] = useState(samples.en.text);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceName, setVoiceName] = useState('');
  const [playing, setPlaying] = useState(false);
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (!('speechSynthesis' in window)) return;
    const load = () => setVoices(window.speechSynthesis.getVoices());
    load();
    window.speechSynthesis.addEventListener('voiceschanged', load);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', load);
      window.speechSynthesis.cancel();
    };
  }, []);
  const available = voices.filter(voice => voice.lang.toLowerCase().startsWith(language));
  function changeLanguage(next: Language) {
    window.speechSynthesis?.cancel();
    setPlaying(false);
    setLanguage(next);
    setText(samples[next].text);
    setVoiceName('');
    setMessage('');
  }
  function play() {
    if (!('speechSynthesis' in window)) { setMessage('Audio previews are not supported in this browser.'); return; }
    if (playing) { window.speechSynthesis.cancel(); setPlaying(false); return; }
    const selected = available.find(voice => voice.name === voiceName) ?? available[0];
    if (!selected) { setMessage(`No ${samples[language].name} preview voice is installed on this device.`); return; }
    if (!text.trim()) { setMessage('Add some text to preview.'); return; }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selected;
    utterance.lang = selected.lang;
    utterance.onend = () => setPlaying(false);
    utterance.onerror = (event) => { setPlaying(false); if (event.error !== 'interrupted' && event.error !== 'canceled') setMessage('The audio preview could not play. Please try again.'); };
    setMessage('');
    setPlaying(true);
    window.speechSynthesis.speak(utterance);
  }
  return <div className="vf-studio" id="voice-studio">
    <div className="vf-studio-top"><span><AudioLines size={18} /> VOICE STUDIO</span><span className="vf-demo-label">Browser preview</span></div>
    <div className="vf-language-tabs" role="group" aria-label="Preview language">{(Object.keys(samples) as Language[]).map(key => <Button key={key} variant="ghost" aria-pressed={language === key} className={language === key ? 'vf-language active' : 'vf-language'} onClick={() => changeLanguage(key)}>{samples[key].name}</Button>)}</div>
    <label className="vf-text-label" htmlFor="voice-text">YOUR WORDS</label>
    <textarea id="voice-text" value={text} maxLength={500} onChange={event => setText(event.target.value)} spellCheck={false} />
    <div className="vf-text-count">{text.length} / 500</div>
    <div className="vf-voice-select"><div className="vf-voice-avatar"><Volume2 size={20} /></div><div><label htmlFor="preview-voice">Preview voice</label><select id="preview-voice" value={voiceName} onChange={event => setVoiceName(event.target.value)}><option value="">{available.length ? 'Device default' : `${samples[language].name} · device voice`}</option>{available.map(voice => <option value={voice.name} key={voice.voiceURI}>{voice.name}</option>)}</select></div><Check size={16} /></div>
    <div className={playing ? 'vf-wave playing' : 'vf-wave'} aria-hidden="true">{Array.from({ length: 48 }, (_, index) => <i key={index} />)}</div>
    <Button className="vf-play" onClick={play}>{playing ? <Pause size={16} /> : <Play size={16} fill="currentColor" />}{playing ? 'Stop preview' : 'Listen to preview'}</Button>
    <p className="vf-preview-note" role="status">{message || 'Device voices only. Voicefy’s 400+ voice catalog is not connected yet.'}</p>
  </div>;
}