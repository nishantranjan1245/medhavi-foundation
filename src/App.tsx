import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Initiatives from "./pages/Initiatives";
import Projects from "./pages/Projects";
import Impact from "./pages/Impact";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import Gallery from "./pages/Gallery";
import Transparency from "./pages/Transparency";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import Disclaimer from "./pages/Disclaimer";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
