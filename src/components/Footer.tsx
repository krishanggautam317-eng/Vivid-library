import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">Gyan</span>Sarovar
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Bilaspur's premium study sanctuary. Focused, calm, and designed for serious students aiming for top ranks.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#seats" className="text-muted-foreground hover:text-white transition-colors">Seat Tracker</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-white transition-colors">Passes</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 shrink-0 text-primary" />
                <span>MG Road, Near Civil Lines,<br />Bilaspur, CG 495001</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <span>+91 7987654321</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 shrink-0 text-primary" />
                <span>gyansarovar@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gyan Sarovar Study Library. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
