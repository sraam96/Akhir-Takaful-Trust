import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

import { Shell } from '@/components/layout/Shell';

import Home from '@/pages/Home';
import Solutions from '@/pages/Solutions';
import SolutionMedicalCard from '@/pages/SolutionMedicalCard';
import SolutionHibah from '@/pages/SolutionHibah';
import SolutionCriticalIllness from '@/pages/SolutionCriticalIllness';
import SolutionProtectionPlanning from '@/pages/SolutionProtectionPlanning';
import About from '@/pages/About';
import HowItWorks from '@/pages/HowItWorks';
import Resources from '@/pages/Resources';
import JoinAkhir from '@/pages/JoinAkhir';
import Contact from '@/pages/Contact';

const queryClient = new QueryClient();

function Router() {
  return (
    <Shell>
      <RoutedErrorBoundary>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/solutions/medical-card" component={SolutionMedicalCard} />
          <Route path="/solutions/hibah-family-protection" component={SolutionHibah} />
          <Route path="/solutions/critical-illness" component={SolutionCriticalIllness} />
          <Route path="/solutions/protection-planning" component={SolutionProtectionPlanning} />
          <Route path="/about" component={About} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/resources" component={Resources} />
          <Route path="/join-akhir" component={JoinAkhir} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </RoutedErrorBoundary>
    </Shell>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
