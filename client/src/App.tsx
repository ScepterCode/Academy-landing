import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import Home from "@/pages/home";
import About from "@/pages/about";
import Programs from "@/pages/programs";
import Contact from "@/pages/contact";
import AIAutomationBootcamp from "@/pages/programs/ai-automation";
import DataScienceCertification from "@/pages/programs/data-science";
import CloudEngineeringTrack from "@/pages/programs/cloud-engineering";
import ProductManagement from "@/pages/programs/product-management";
import DigitalMarketingMastery from "@/pages/programs/digital-marketing";
import CybersecurityFundamentals from "@/pages/programs/cybersecurity";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/programs" component={Programs} />
        <Route path="/programs/ai-automation" component={AIAutomationBootcamp} />
        <Route path="/programs/data-science" component={DataScienceCertification} />
        <Route path="/programs/cloud-engineering" component={CloudEngineeringTrack} />
        <Route path="/programs/product-management" component={ProductManagement} />
        <Route path="/programs/digital-marketing" component={DigitalMarketingMastery} />
        <Route path="/programs/cybersecurity" component={CybersecurityFundamentals} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
