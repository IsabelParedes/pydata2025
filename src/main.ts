import 'reveal.js/dist/reveal.css'
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import RevealMath from 'reveal.js/plugin/math/math.esm.js';
// @ts-ignore
import RevealMermaid from 'reveal.js-mermaid-plugin/plugin/mermaid/mermaid.esm.js';
import './github.css'
import './style.css'

Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: false,
  slideNumber: 'c/t',
  width: 1920,
  height: 1080,
  plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX, RevealMermaid ],
});

console.log('Reveal.js initialized');
