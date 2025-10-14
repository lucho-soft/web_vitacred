import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Credits from "./components/Credits";
import EnabledOrganisms from "./components/EnabledOrganisms";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import PoliticaDePrivacidad from "./pages/Privacidad"
import TerminosYCondiciones from "./pages/Terminos"

const queryClient = new QueryClient();

const VitacredHomepage = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <Hero />
      <AboutUs />
      <Credits />
      <EnabledOrganisms />
      <Contact />
    </main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VitacredHomepage />} />
          <Route path="/privacidad" element={<PoliticaDePrivacidad />} />
          <Route path="/terminos" element={<TerminosYCondiciones />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
