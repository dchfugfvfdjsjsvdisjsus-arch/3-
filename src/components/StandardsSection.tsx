import React from 'react';
import { STANDARDS } from '../data/companyData';

export const StandardsSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-primary text-on-primary relative overflow-hidden scroll-mt-20 border-b border-primary-container" id="standards">
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#5bb8fe_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2">
            <div className="w-1.5 h-5 bg-on-tertiary-container rounded-xs"></div>
            <span className="font-label-eyebrow text-secondary-fixed uppercase tracking-widest text-xs font-bold">
              QUALITY ASSURANCE
            </span>
          </div>
          <h2 className="font-headline-lg text-2xl lg:text-3xl font-bold mt-2 text-white">
            มาตรฐานความปลอดภัยและงานวิศวกรรม 100%
          </h2>
          <p className="font-body-lg text-surface-container-high max-w-2xl mt-2 text-sm sm:text-base">
            เรายึดมั่นในข้อกำหนดของโรงงานอุตสาหกรรมขนาดใหญ่และมาตรฐานสากลทุกขั้นตอน
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STANDARDS.map((std, idx) => {
            const isOrange = std.color === 'orange';
            return (
              <div
                key={idx}
                className="bg-surface/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all space-y-3"
              >
                <div
                  className={`w-10 h-10 rounded flex items-center justify-center ${
                    isOrange
                      ? 'bg-on-tertiary-container/20 text-on-tertiary-container'
                      : 'bg-secondary-container/20 text-secondary-fixed'
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl">{std.icon}</span>
                </div>

                <h3 className="font-title-md text-white font-bold text-base">{std.title}</h3>

                <p className="font-body-sm text-surface-container-high text-xs leading-relaxed">
                  {std.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
