import shippingImg from "@/assets/shipping-container.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { Anchor, ArrowRight, CreditCard, FileText, PackageCheck, Ship, Truck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./ui/corporate/SectionHeader";

const ShippingSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const shippingDetails = [
    { label: t("shipping.stats.capacity.label"), value: t("shipping.stats.capacity.value"), icon: Ship },
    { label: t("shipping.stats.moq.label"), value: t("shipping.stats.moq.value"), icon: PackageCheck },
    { label: t("shipping.stats.payment.label"), value: t("shipping.stats.payment.value"), icon: CreditCard },
    { label: t("shipping.stats.terms.label"), value: t("shipping.stats.terms.value"), icon: Truck },
    { label: t("shipping.stats.port.label"), value: t("shipping.stats.port.value"), icon: Anchor },
    { label: t("shipping.stats.docs.label"), value: t("shipping.stats.docs.value"), icon: FileText },
  ];

  return (
    <section id="shipping" ref={sectionRef} className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader label={t("shipping.label")} title={t("shipping.title")} subtitle={t("shipping.subtitle")} />

        <div className="max-w-6xl mx-auto">
          <div
            className={`flex flex-col lg:flex-row gap-12 items-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img src={shippingImg} alt="Shipping Container" className="w-full h-[400px] md:h-[600px] object-cover aspect-[9/16]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-gold text-charcoal px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
                    <Ship className="w-4 h-4" />
                    {t("shipping.detail.title")}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="grid gap-4">
                {shippingDetails.map((detail, index) => {
                  const Icon = detail.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-gold/20 hover:bg-gold/5 transition-all duration-300 group"
                    >
                      <div className="p-2.5 rounded-lg bg-black/40 text-gold group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">{detail.label}</p>
                        <p className="text-white font-semibold text-base leading-relaxed">{detail.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full group flex items-center justify-center gap-3 bg-gold hover:bg-white text-charcoal font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-gold/20"
                >
                  {t("shipping.cta")}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;
