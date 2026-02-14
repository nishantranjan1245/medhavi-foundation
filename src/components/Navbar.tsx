import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import medhaviLogo from "@/assets/medhavi-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Our Initiatives", path: "/initiatives" },
  { label: "Projects", path: "/projects" },
  { label: "Impact", path: "/impact" },
  { label: "Get Involved", path: "/get-involved" },
  { label: "Gallery", path: "/gallery" },
  
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#e5e5e5] ${
        isScrolled ? "shadow-md" : ""
      }`}
      style={{ backgroundColor: '#f7f8f7' }}
    >
      <div className="container-custom flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
            <img src={medhaviLogo} alt="Medhavi Foundation Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-display text-lg lg:text-xl font-bold bg-gradient-to-r from-primary via-[#d4a24e] to-primary bg-clip-text text-transparent">
            Medhavi Foundation
          </span>
        </Link>

        {/* Desktop Nav - Center */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-1.5 text-[15px] font-bold rounded-full transition-colors whitespace-nowrap ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-[#444] hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Donate - Right */}
        <div className="hidden lg:block shrink-0">
          <Button variant="hero" size="default" className="rounded-full px-6" asChild>
            <Link to="/donate">Donate Now</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-[#1a1a2e]">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-[#f7f8f7] p-0">
            <div className="flex flex-col gap-1 p-6 pt-12">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#e5e5e5]">
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                  <img src={medhaviLogo} alt="Medhavi Foundation Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-display text-lg font-bold bg-gradient-to-r from-primary via-[#d4a24e] to-primary bg-clip-text text-transparent">
                  Medhavi Foundation
                </span>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-[#444] hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-[#e5e5e5]">
                <Button variant="hero" className="w-full rounded-full" asChild>
                  <Link to="/donate" onClick={() => setIsOpen(false)}>
                    Donate Now
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
