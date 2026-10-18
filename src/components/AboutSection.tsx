import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-surface scroll-mt-20" id="about">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-on-tertiary-container rounded-xs"></div>
            <span className="font-label-eyebrow text-secondary uppercase tracking-widest text-xs font-bold">
              ABOUT OUR COMPANY
            </span>
          </div>
          <h2 className="font-headline-lg text-2xl lg:text-3xl text-primary font-bold mt-2">
            เกี่ยวกับบริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-3xl mt-2 text-sm sm:text-base">
            ผู้เชี่ยวชาญด้านงานวิศวกรรมระบบความเย็นและระบายอากาศ (HVAC & Refrigeration Engineering Solutions)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Story & 4 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-surface-container-low p-6 lg:p-8 rounded-xl shadow-xs space-y-4 border border-outline-variant/30">
              <h3 className="font-title-lg text-primary font-bold text-lg sm:text-xl">
                ความมุ่งมั่นในมาตรฐานวิศวกรรมระบบความเย็นระดับสากล
              </h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">
                <strong>บริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด (3T INTERCOOL & SERVICE CO., LTD.)</strong>{' '}
                ดำเนินธุรกิจเป็นผู้เชี่ยวชาญด้านงานวิศวกรรมระบบความเย็นและระบบหมุนเวียนอากาศ ครอบคลุมตั้งแต่การออกแบบ คำนวณภาระความเย็น เขียนแบบ ติดตั้ง ตลอดจนการบำรุงรักษาเชิงป้องกัน (Preventive Maintenance)
              </p>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">
                เราให้บริการกลุ่มโรงงานอุตสาหกรรมแปรรูปอาหาร โรงงานประกอบยานยนต์ คลังสินค้าห้องเย็น และห้างสรรพสินค้าชั้นนำระดับประเทศ ด้วยทีมช่างเทคนิคที่ผ่านการรับรองความปลอดภัยและมาตรฐานงานช่างสากล
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-surface-container rounded-lg shadow-xs border border-outline-variant/20 hover:border-secondary/40 transition-all">
                <div className="w-10 h-10 rounded bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl">hub</span>
                </div>
                <h4 className="font-title-md text-primary text-base mb-1">One-Stop Solution</h4>
                <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                  ครบวงจรตั้งแต่ให้คำปรึกษา คำนวณ BTU ออกแบบระบบ ติดตั้ง จนถึงงานซ่อมบำรุง
                </p>
              </div>

              <div className="p-5 bg-surface-container rounded-lg shadow-xs border border-outline-variant/20 hover:border-secondary/40 transition-all">
                <div className="w-10 h-10 rounded bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl">engineering</span>
                </div>
                <h4 className="font-title-md text-primary text-base mb-1">Professional Expertise</h4>
                <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                  ทีมวิศวกรและช่างชำนาญการกว่า 15 ปี แก้ปัญหาตรงจุด ปฏิบัติตามมาตรฐานช่างกลโรงงาน
                </p>
              </div>

              <div className="p-5 bg-surface-container rounded-lg shadow-xs border border-outline-variant/20 hover:border-secondary/40 transition-all">
                <div className="w-10 h-10 rounded bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl">verified_user</span>
                </div>
                <h4 className="font-title-md text-primary text-base mb-1">Safety & Compliance</h4>
                <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                  มาตรการความปลอดภัยเข้มงวด 100% พร้อมใบอนุญาต Hot Work และอุปกรณ์ PPE เต็มรูปแบบ
                </p>
              </div>

              <div className="p-5 bg-surface-container rounded-lg shadow-xs border border-outline-variant/20 hover:border-secondary/40 transition-all">
                <div className="w-10 h-10 rounded bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl">alarm_on</span>
                </div>
                <h4 className="font-title-md text-primary text-base mb-1">Fast Site Response</h4>
                <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                  ทีมฉุกเฉินพร้อมเข้าแก้ไขปัญหาหน้างานตลอด 24 ชั่วโมง ลดความเสี่ยงสินค้าเสียหาย
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Spotlight */}
          <div className="lg:col-span-5 space-y-6">
            {/* Managing Director Card */}
            <div className="bg-primary text-on-primary p-6 lg:p-8 rounded-xl shadow-md relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-[160px]">badge</span>
              </div>
              <div className="relative z-10 space-y-4">
                <span className="font-label-eyebrow text-secondary-fixed text-xs tracking-wider uppercase">
                  Executive Leadership
                </span>
                <div className="space-y-1">
                  <h4 className="font-headline-md text-xl font-bold text-white">
                    {COMPANY_INFO.director.nameTh}
                  </h4>
                  <p className="font-label-technical text-sm text-secondary-fixed-dim">
                    {COMPANY_INFO.director.nameEn}
                  </p>
                  <p className="font-label-eyebrow text-on-tertiary-container font-bold text-xs uppercase tracking-wider">
                    {COMPANY_INFO.director.title}
                  </p>
                </div>
                <p className="font-body-sm text-surface-container-high leading-relaxed pt-2 italic text-xs">
                  "{COMPANY_INFO.director.quote}"
                </p>

                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-surface-container-high">
                    <span className="material-symbols-outlined text-secondary-container text-base">verified</span>
                    <span>ประสบการณ์ควบคุมงานวิศวกรรมระบบความเย็นกว่า 15 ปี</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-surface-container-high">
                    <span className="material-symbols-outlined text-secondary-container text-base">verified</span>
                    <span>ให้คำปรึกษาและลงพื้นที่สำรวจหน้างานจริงด้วยตนเอง</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed">
                    <span className="material-symbols-outlined text-lg">call</span>
                  </div>
                  <a
                    className="font-label-technical text-white font-bold hover:underline"
                    href={`tel:${COMPANY_INFO.director.phone}`}
                  >
                    {COMPANY_INFO.director.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
