import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200/60 dark:border-neutral-800 py-8 mt-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-500 dark:text-neutral-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Be'emnet Yitayh. All rights reserved.</p>
          <p>Built with love, React, and a sprinkle of 3D.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
