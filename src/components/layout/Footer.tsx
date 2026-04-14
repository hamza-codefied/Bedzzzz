import React from "react";
import { Globe, Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center border border-zinc-50">
                  <img
                    src="/bedzzz-logo.png"
                    alt="Bedzzz Logo"
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <span className="text-zinc-900 font-bold text-xl tracking-tight">
                  Bedzzz
                </span>
              </div>
              <p className="text-zinc-500 text-base leading-relaxed font-medium max-w-sm">
                We make the world's most comfortable bedding. Shop with us for a better sleep.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <SocialLink icon={<MessageCircle />} />
              <SocialLink icon={<Globe />} />
              <SocialLink icon={<Mail />} />
            </div>
          </div>

          {/* Nav Columns */}
          <FooterColumn title="Shop Products">
            <FooterLink to="/products">New Bedding</FooterLink>
            <FooterLink to="/products">Soft Sheets</FooterLink>
            <FooterLink to="/products">Home Decor</FooterLink>
          </FooterColumn>

          <FooterColumn title="Support">
            <FooterLink to="#">Shipping Info</FooterLink>
            <FooterLink to="#">Return Policy</FooterLink>
            <FooterLink to="#">Contact Us</FooterLink>
          </FooterColumn>

          <FooterColumn title="Company">
            <FooterLink to="#">About Us</FooterLink>
            <FooterLink to="/admin/login">Admin Login</FooterLink>
            <FooterLink to="#">Privacy Policy</FooterLink>
          </FooterColumn>
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ContactCard
            icon={<MapPin />}
            title="Our Office"
            text="123 Dream Lane, NY"
          />
          <ContactCard
            icon={<Mail />}
            title="Email Us"
            text="hello@bedzzz.com"
          />
          <ContactCard
            icon={<Phone />}
            title="Call Us"
            text="+1 (555) 321-0101"
          />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-xs font-medium">
            © 2026 Bedzzz Store. All rights reserved.
          </p>
          <div className="flex gap-6 text-zinc-400 text-xs font-medium">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-6">
    <h4 className="text-zinc-900 font-bold uppercase tracking-widest text-[10px]">
      {title}
    </h4>
    <ul className="space-y-3">{children}</ul>
  </div>
);

const FooterLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      to={to}
      className="text-zinc-500 hover:text-primary transition-all font-medium text-sm"
    >
      {children}
    </Link>
  </li>
);

const SocialLink = ({ icon }: { icon: React.ReactNode }) => (
  <button className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-white transition-all shadow-sm">
    {React.isValidElement(icon)
      ? React.cloneElement(icon as React.ReactElement<any>, {
          className: "w-5 h-5",
        })
      : icon}
  </button>
);

const ContactCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="bg-zinc-50/50 p-6 rounded-2xl flex items-center gap-4 border border-zinc-100">
    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
      {React.isValidElement(icon)
        ? React.cloneElement(icon as React.ReactElement<any>, {
            className: "w-5 h-5",
          })
        : icon}
    </div>
    <div>
      <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">
        {title}
      </p>
      <p className="text-zinc-900 font-bold text-sm">{text}</p>
    </div>
  </div>
);

export default Footer;
