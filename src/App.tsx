import { ThemeProvider } from './context/ThemeProvider';
import { LandingLayout } from './components/layout/LandingLayout';
import { HeroContent } from './components/hero/HeroContent';

export function App() {
  return (
    <ThemeProvider>
      <LandingLayout>
        <HeroContent />
      </LandingLayout>
    </ThemeProvider>
  );
}

export default App;
