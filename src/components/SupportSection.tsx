import React from "react";
import { SectionHeader } from "./ui/corporate/SectionHeader";
import mof from "@/assets/mof-cert.png";
import car from "@/assets/carsurin-cert.png";
import survey from "@/assets/surveyor-cert.png";

const SupportSection: React.FC = () => {
  return (
    <section id="support" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader label="support & certification" title="Trusted by Official Institutions" subtitle="Our products and processes are government endorsed and certified by leading third parties." className="mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Ministry of Trade */}

          <div>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 flex items-center justify-center h-36 transition-all duration-500 hover:bg-white/10">
              <div className="text-center">
                <img src={mof} alt="Ministry of Trade - Republic of Indonesia" className="mx-auto max-h-19 object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="sr-only">Ministry of Trade - Republic of Indonesia</div>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-3 text-sm">Ministry Of Trade</p>
          </div>

          {/* CARSURIN */}
          <div>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 flex items-center justify-center h-36 transition-all duration-500 hover:bg-white/10">
              <div className="text-center">
                <img src={car} alt="CARSURIN 1968" className="mx-auto max-h-19 object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="sr-only">CARSURIN 1968</div>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-3 text-sm">Carsurin 1968</p>
          </div>

          {/* Surveyor Indonesia */}
          <div>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 flex items-center justify-center h-36 transition-all duration-500 hover:bg-white/10">
              <div className="text-center">
                <img src={survey} alt="Surveyor Indonesia" className="mx-auto max-h-19 object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="sr-only">Surveyor Indonesia</div>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-3 text-sm">Surveyor Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
