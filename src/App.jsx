import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="font-[Inter] text-rose-900/90 antialiased">
      <Hero />
      <About />
      <Services />
      <Showcase />
    </div>
  );
}

export default App;
