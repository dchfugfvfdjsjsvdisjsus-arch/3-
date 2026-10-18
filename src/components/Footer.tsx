import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-surface-container-low mt-10 border-t border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Managing Director */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <img
                alt="3T Intercool & Service"
                className="h-10 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRy1OzkIMpI71VvSLTpewUWpU4v0vX8iI7Op8o6m4iTV6pcbsO_oa9gcsOgU8hJ_WIxWFb7gXmC_ki_xqwn6AgGK7vx3jxtAX9JSD5T_AYaGa_wFCtjJvaXDApwqQJQk_IHcfCw95VhqRlpMnvelQU5r9eZQgg5jJdtGEl9XM5pHIFH_zZCgmmFR8GTc1M0VJ4ZKgvKBum0yaGNW0XMhFgy5wZ6K_Sro1dOBrRzZgWG7bgSAiVJXwaHo_bOl5uoqGUIQ"
              />
              <span className="font-headline-md text-sm font-bold tracking-tight text-primary uppercase">
                3T INTERCOOL & SERVICE
              </span>
            </div>

            <p className="font-body-sm text-on-surface-variant leading-relaxed text-xs">
              {COMPANY_INFO.nameTh} ผู้เชี่ยวชาญด้านงานออกแบบ ติดตั้ง และซ่อมบำรุงระบบปรับอากาศและระบบทำความเย็นอุตสาหกรรมครบวงจร (HVAC & Cold Chain Solutions)
            </p>

            <div className="pt-2 border-t border-outline-variant/30 space-y-0.5">
              <p className="font-label-eyebrow text-[11px] text-secondary font-bold uppercase tracking-wide">
                {COMPANY_INFO.director.nameTh}
              </p>
              <p className="font-label-technical text-xs text-on-surface-variant">
                {COMPANY_INFO.director.nameEn}
              </p>
              <p className="font-label-eyebrow text-[10px] text-secondary font-semibold uppercase tracking-wider">
                {COMPANY_INFO.director.title}
              </p>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div className="space-y-3">
            <h3 className="font-title-md text-sm uppercase tracking-wider text-primary border-l-2 border-secondary pl-2 font-bold">
              การบริการหลัก
            </h3>
            <ul className="space-y-2 font-body-sm text-on-surface-variant text-xs">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  ระบบปรับอากาศโรงงาน (VRF / Chiller)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  คลังสินค้าห้องเย็น (Cold Storage)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  ระบบท่อส่งลมและระบายอากาศ (Ductwork)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  สัญญาบริการซ่อมบำรุงรายปี (Preventive Maintenance)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  บริการตรวจเช็กและแก้ไขฉุกเฉิน 24 ชั่วโมง
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h3 className="font-title-md text-sm uppercase tracking-wider text-primary border-l-2 border-secondary pl-2 font-bold">
              เมนูลัด
            </h3>
            <ul className="space-y-2 font-body-sm text-on-surface-variant text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  เกี่ยวกับบริษัท & มาตรฐานวิศวกรรม
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('track-record')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  ประวัติโครงการและลูกค้าอ้างอิง
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('standards')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  ทำไมต้องเลือก 3T Intercool
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  โปรแกรมคำนวณ BTU / ห้องเย็น
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-secondary transition-colors text-left cursor-pointer"
                >
                  ขอใบเสนอราคา / นัดสำรวจหน้างาน
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="space-y-3">
            <h3 className="font-title-md text-sm uppercase tracking-wider text-primary border-l-2 border-secondary pl-2 font-bold">
              ติดต่อเรา
            </h3>
            <div className="space-y-2 font-body-sm text-on-surface-variant text-xs">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-sm mt-0.5 text-secondary shrink-0">location_on</span>
                <span>{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-secondary">call</span>
                <a className="hover:text-secondary transition-colors font-semibold" href={`tel:${COMPANY_INFO.hotline}`}>
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-secondary">chat</span>
                <span>Line ID: {COMPANY_INFO.lineId}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-secondary">mail</span>
                <a className="hover:text-secondary transition-colors" href={`mailto:${COMPANY_INFO.email}`}>
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-secondary">schedule</span>
                <span>{COMPANY_INFO.operatingHours}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & ISO certifications */}
        <div className="pt-6 border-t border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-on-surface-variant text-xs">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.nameTh} ({COMPANY_INFO.nameEn}) สงวนลิขสิทธิ์ทั้งหมด
          </div>
          <div className="flex items-center gap-4">
            <span className="font-label-technical text-secondary font-semibold">ISO 9001:2015 CERTIFIED</span>
            <span className="text-outline-variant">|</span>
            <span className="font-label-technical text-on-surface-variant">ENGINEERING EXCELLENCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
