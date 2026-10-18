import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/companyData';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section className="w-full py-20 bg-surface-container-low scroll-mt-20 border-y border-outline-variant/30" id="services">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2">
            <div className="w-1.5 h-5 bg-on-tertiary-container rounded-xs"></div>
            <span className="font-label-eyebrow text-secondary uppercase tracking-widest text-xs font-bold">
              OUR SPECIALIZED CAPABILITIES
            </span>
          </div>
          <h2 className="font-headline-lg text-2xl lg:text-3xl text-primary font-bold mt-2">
            ขอบเขตบริการหลักด้านวิศวกรรมความเย็นและระบายอากาศ
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mt-2 text-sm sm:text-base">
            บริการออกแบบ ติดตั้ง ตรวจสอบ และซ่อมบำรุงด้วยวิศวกรผู้มีประสบการณ์ตามมาตรฐานวิศวกรรมควบคุม
          </p>
        </div>

        {/* 4 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-surface rounded-xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group border border-outline-variant/20 hover:border-secondary/30"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container text-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">{service.iconName}</span>
                </div>

                <div className="font-label-eyebrow text-secondary text-xs font-bold">{service.code}</div>

                <h3 className="font-title-md text-primary font-bold text-base">{service.title}</h3>

                <p className="font-body-sm text-on-surface-variant leading-relaxed text-xs">
                  {service.shortDesc}
                </p>

                <ul className="space-y-1.5 pt-2 border-t border-outline-variant/20">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-body-sm text-xs text-on-surface">
                      <span className="material-symbols-outlined text-sm text-secondary shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1 font-label-technical text-xs font-bold text-secondary hover:text-primary transition-colors cursor-pointer"
                >
                  <span>ดูสเปกงาน</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>

                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="px-2.5 py-1 text-[11px] font-semibold bg-surface-container text-primary rounded hover:bg-primary hover:text-white transition-colors cursor-pointer"
                >
                  ขอใบเสนอราคา
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-surface rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-outline-variant/30 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-primary text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">{selectedService.iconName}</span>
                </div>
                <div>
                  <div className="font-label-eyebrow text-secondary text-xs font-bold">
                    {selectedService.code}
                  </div>
                  <h3 className="font-headline-md text-lg sm:text-xl font-bold text-primary">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-on-surface-variant">
              <div>
                <h4 className="font-bold text-primary mb-1">คำอธิบายบริการวิศวกรรม</h4>
                <p className="leading-relaxed">{selectedService.fullDesc}</p>
              </div>

              <div className="p-4 bg-surface-container-low rounded-lg space-y-2">
                <h4 className="font-bold text-primary">มาตรฐานการส่งมอบ (Deliverables)</h4>
                <ul className="space-y-1.5 list-disc list-inside">
                  {selectedService.deliverables.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-1.5">แบรนด์อุปกรณ์และมาตรฐานวัสดุที่เลือกใช้</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.equipmentBrands.map((brand, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-surface-container text-primary font-label-technical text-xs rounded border border-outline-variant/20 font-semibold"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 bg-secondary-container/15 rounded text-secondary font-medium">
                <span className="material-symbols-outlined text-base">verified</span>
                <span>{selectedService.warranty}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 rounded text-xs font-semibold text-on-surface-variant hover:bg-surface-container cursor-pointer"
              >
                ปิดหน้าต่าง
              </button>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForQuote(title);
                }}
                className="px-5 py-2.5 rounded bg-primary hover:bg-primary-container text-white font-title-md text-xs font-semibold shadow-sm cursor-pointer flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">send</span>
                <span>ขอใบเสนอราคางานนี้</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
