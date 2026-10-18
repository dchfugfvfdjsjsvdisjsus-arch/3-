import React from 'react';
import { COMPANY_INFO, ProjectItem } from '../data/companyData';

interface HeroProps {
  onQuoteClick: () => void;
  onExploreProjects: () => void;
  onSelectFeaturedProject: (project: ProjectItem) => void;
  featuredProject: ProjectItem;
}

export const Hero: React.FC<HeroProps> = ({
  onQuoteClick,
  onExploreProjects,
  onSelectFeaturedProject,
  featuredProject,
}) => {
  return (
    <section className="relative w-full bg-primary-container text-on-primary overflow-hidden py-16 lg:py-24 border-b border-primary">
      {/* Subtle Industrial Background Grid & Vector Glow Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#5bb8fe_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-on-tertiary-container/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text & Action Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/10 backdrop-blur-sm border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
              <span className="font-label-eyebrow text-secondary-fixed tracking-wider uppercase text-xs">
                {COMPANY_INFO.subtitle}
              </span>
            </div>

            <h1 className="font-display-xl text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
              ผู้นำด้านวิศวกรรม<br className="hidden sm:inline" />
              ระบบความเย็น{' '}
              <span className="text-secondary-fixed-dim">และระบายอากาศ</span> ครบวงจร
            </h1>

            <p className="font-body-lg text-surface-container-high leading-relaxed max-w-2xl text-sm sm:text-base">
              รับออกแบบ • เขียนแบบ • ติดตั้ง • ซ่อมบำรุงรักษา ระบบปรับอากาศ อาคารสำนักงาน ห้องเย็น Cold Room ตู้แช่พาณิชย์ และระบบท่อลมควบคุมอุณหภูมิ ด้วยทีมวิศวกรผู้เชี่ยวชาญ ได้มาตรฐานวิศวกรรมระดับสากล
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center gap-2 bg-on-tertiary-container hover:bg-tertiary-container text-white font-title-md px-6 py-3.5 rounded shadow-lg transition-all duration-200 cursor-pointer hover:shadow-orange-900/30"
              >
                <span className="material-symbols-outlined text-xl">request_quote</span>
                <span>ขอใบเสนอราคา / ปรึกษาฟรี</span>
              </button>

              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 bg-surface/15 hover:bg-surface/25 text-white font-title-md px-6 py-3.5 rounded backdrop-blur-sm transition-all duration-200 cursor-pointer border border-white/10"
              >
                <span className="material-symbols-outlined text-xl text-secondary-container">domain_verification</span>
                <span>ชมผลงานโครงการ</span>
              </button>
            </div>

            {/* Trust KPI Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6">
              <div className="bg-surface/5 p-4 rounded backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all">
                <div className="font-display text-2xl lg:text-3xl font-bold text-white tabular-nums">15+</div>
                <div className="font-body-sm text-surface-container-high text-xs mt-1">ปี ประสบการณ์วิศวกรรม</div>
              </div>
              <div className="bg-surface/5 p-4 rounded backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all">
                <div className="font-display text-2xl lg:text-3xl font-bold text-white tabular-nums">100%</div>
                <div className="font-body-sm text-surface-container-high text-xs mt-1">ส่งมอบตรงตามสเปก</div>
              </div>
              <div className="bg-surface/5 p-4 rounded backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all">
                <div className="font-display text-2xl lg:text-3xl font-bold text-secondary-fixed tabular-nums">24/7</div>
                <div className="font-body-sm text-surface-container-high text-xs mt-1">ทีมซัพพอร์ตฉุกเฉิน</div>
              </div>
              <div className="bg-surface/5 p-4 rounded backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all">
                <div className="font-display text-2xl lg:text-3xl font-bold text-on-tertiary-container">ZERO</div>
                <div className="font-body-sm text-surface-container-high text-xs mt-1">Accident Standard</div>
              </div>
            </div>
          </div>

          {/* Featured Project Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-surface rounded-xl p-4 shadow-2xl relative z-10 border border-outline-variant/30">
              <div
                onClick={() => onSelectFeaturedProject(featuredProject)}
                className="relative overflow-hidden rounded cursor-pointer group"
              >
                <img
                  alt="Cooling Tower & Compressor Works"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  src={featuredProject.imageUrl}
                />
                <div className="absolute top-3 left-3 bg-primary/85 backdrop-blur-md px-3 py-1 rounded text-white font-label-eyebrow text-xs flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                  HIGH-PRESSURE CHILLER SYSTEM
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary via-primary/85 to-transparent p-4 text-white">
                  <div className="font-title-md text-xs text-secondary-fixed uppercase tracking-wider">PROJECT HIGHLIGHT</div>
                  <div className="font-body-md text-white font-semibold text-sm line-clamp-2 mt-0.5">
                    งานเปลี่ยน Compressor และติดตั้งชุด Cooling Tower ระบบควบคุมแรงดันสูง
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-on-surface">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">verified</span>
                  <span className="font-label-technical text-xs text-on-surface-variant font-medium">
                    ISO 9001:2015 Spec Ready
                  </span>
                </div>
                <button
                  onClick={onExploreProjects}
                  className="font-label-technical text-xs font-semibold text-secondary hover:text-primary hover:underline flex items-center gap-1 cursor-pointer"
                >
                  ดูผลงานทั้งหมด
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
