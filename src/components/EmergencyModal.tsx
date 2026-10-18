import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(COMPANY_INFO.hotline);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-fadeIn">
      <div className="bg-surface rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-on-tertiary-container/30 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface cursor-pointer"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 text-on-tertiary-container mb-3">
          <div className="w-10 h-10 rounded-full bg-on-tertiary-container/15 flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">emergency</span>
          </div>
          <div>
            <div className="font-label-eyebrow uppercase tracking-widest text-[11px] font-bold">
              24/7 EMERGENCY DISPATCH
            </div>
            <h3 className="font-headline-md text-xl font-bold text-primary">
              บริการแจ้งซ่อมด่วนฉุกเฉิน 24 ชั่วโมง
            </h3>
          </div>
        </div>

        <p className="font-body-sm text-on-surface-variant text-xs sm:text-sm leading-relaxed mb-4">
          สำหรับกรณีเกิดเหตุฉุกเฉินในระบบทำความเย็น ห้องเย็นสินค้าเกษตร/อาหาร หรือระบบ Chiller โรงงานหยุดทำงานกะทันหัน
        </p>

        {/* Primary Dial Call Box */}
        <div className="p-4 rounded-xl bg-on-tertiary-container/10 border border-on-tertiary-container/30 text-center space-y-2 mb-4">
          <div className="font-label-eyebrow text-xs text-on-tertiary-container font-bold">
            สายตรงผู้บริหารและวิศวกรควบคุม
          </div>
          <div className="font-display text-2xl sm:text-3xl font-bold text-primary">
            {COMPANY_INFO.phoneDisplay}
          </div>
          <div className="text-xs text-on-surface-variant">
            คุณธวัชชัย บาระพรม (Managing Director)
          </div>

          <div className="pt-2 flex items-center justify-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.hotline}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-on-tertiary-container hover:bg-tertiary text-white rounded font-bold text-xs shadow-sm transition-colors"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              <span>กดโทรออกทันที</span>
            </a>
            <button
              onClick={handleCopy}
              className="px-3 py-2 bg-surface rounded text-primary text-xs font-semibold border border-outline-variant/40 hover:bg-surface-container cursor-pointer"
            >
              {copied ? 'คัดลอกเบอร์แล้ว ✓' : 'คัดลอกเบอร์'}
            </button>
          </div>
        </div>

        {/* Checklist */}
        <div className="space-y-2 text-xs text-on-surface mb-6">
          <div className="font-bold text-primary">ขั้นตอนเตรียมข้อมูลก่อนโทรแจ้ง:</div>
          <ul className="space-y-1.5 list-disc list-inside text-on-surface-variant">
            <li>ระบุที่ตั้งโรงงาน / ห้างสรรพสินค้า / สาขา</li>
            <li>อาการผิดปกติ (เช่น อุณหภูมิขึ้นสูง, คอมเพรสเซอร์ trip, น้ำยาแอร์รั่ว)</li>
            <li>ประเภทของสารทำความเย็น (R404A, R134a, R410A หรืออื่นๆ)</li>
          </ul>
        </div>

        <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between text-xs text-on-surface-variant">
          <span>เขตบริการ: กทม. ปริมณฑล & EEC</span>
          <button
            onClick={onClose}
            className="text-primary font-bold hover:underline cursor-pointer"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};
