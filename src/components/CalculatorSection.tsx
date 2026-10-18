import React, { useState, useMemo } from 'react';

interface CalculatorSectionProps {
  onExportToQuote: (details: string, serviceType: string) => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({ onExportToQuote }) => {
  const [appType, setAppType] = useState<'freezer' | 'chilled' | 'cleanroom' | 'factory'>('chilled');
  const [width, setWidth] = useState<number>(6);
  const [length, setLength] = useState<number>(8);
  const [height, setHeight] = useState<number>(3.5);
  const [storageWeightTon, setStorageWeightTon] = useState<number>(5);

  const calculations = useMemo(() => {
    const area = width * length;
    const volume = area * height;

    let btuPerM3 = 250;
    let tempTarget = '0°C ถึง +4°C';
    let pirThickness = '75 มม. (3 นิ้ว) แผ่นฉนวน PIR B1';
    let serviceCategory = 'coldroom';
    let hpMultiplier = 12000;

    if (appType === 'freezer') {
      btuPerM3 = 450;
      tempTarget = '-18°C ถึง -25°C';
      pirThickness = '100 - 125 มม. (4-5 นิ้ว) แผ่นฉนวน PIR B1 เกรดกันไฟ';
      serviceCategory = 'coldroom';
      hpMultiplier = 9500;
    } else if (appType === 'chilled') {
      btuPerM3 = 280;
      tempTarget = '0°C ถึง +4°C';
      pirThickness = '75 มม. (3 นิ้ว) แผ่นฉนวน PIR B1';
      serviceCategory = 'coldroom';
      hpMultiplier = 11000;
    } else if (appType === 'cleanroom') {
      btuPerM3 = 380;
      tempTarget = '20°C ถึง 22°C (ควบคุม RH 50-55%)';
      pirThickness = '50 มม. Sandwich Panel + HEPA Ductwork';
      serviceCategory = 'duct';
      hpMultiplier = 12000;
    } else {
      btuPerM3 = 220;
      tempTarget = '24°C ถึง 25°C';
      pirThickness = 'ท่อดักท์หุ้มฉนวนใยแก้วฟอยล์ 2 นิ้ว';
      serviceCategory = 'hvac';
      hpMultiplier = 12000;
    }

    // Cooling requirement base + product load
    const baseBtu = volume * btuPerM3;
    const productLoadBtu = storageWeightTon * 1200;
    const totalBtu = Math.round(baseBtu + productLoadBtu);
    const estimatedHp = (totalBtu / hpMultiplier).toFixed(1);
    const estimatedTonRef = (totalBtu / 12000).toFixed(1);
    const estimatedCfm = Math.round(totalBtu / 30);

    return {
      area,
      volume,
      tempTarget,
      pirThickness,
      serviceCategory,
      totalBtu,
      estimatedHp,
      estimatedTonRef,
      estimatedCfm,
    };
  }, [appType, width, length, height, storageWeightTon]);

  const handleExport = () => {
    const text = `ผลคำนวณเบื้องต้นจากระบบ Sizer:
- ประเภทงาน: ${
      appType === 'freezer'
        ? 'ห้องแช่แข็ง Freezer (-18°C ถึง -25°C)'
        : appType === 'chilled'
        ? 'ห้องแช่เย็น Chilled (0°C ถึง +4°C)'
        : appType === 'cleanroom'
        ? 'คลีนรูม/ห้องควบคุมความชื้น (20-22°C)'
        : 'ระบบปรับอากาศโรงงาน (24-25°C)'
    }
- ขนาดพื้นที่: กว้าง ${width} ม. x ยาว ${length} ม. x สูง ${height} ม. (พื้นที่ ${calculations.area} ตร.ม., ปริมาตร ${calculations.volume} ลบ.ม.)
- ปริมาณสินค้าหมุนเวียนโดยประมาณ: ${storageWeightTon} ตัน
- ขนาดภาระความเย็นคำนวณ: ประมาณ ${calculations.totalBtu.toLocaleString()} BTU/hr (${calculations.estimatedHp} HP / ${calculations.estimatedTonRef} TR)
- ฉนวนที่แนะนำ: ${calculations.pirThickness}`;

    onExportToQuote(text, calculations.serviceCategory);
  };

  return (
    <section className="w-full py-20 bg-surface-container-low border-b border-outline-variant/30 scroll-mt-20" id="calculator">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2">
            <div className="w-1.5 h-5 bg-on-tertiary-container rounded-xs"></div>
            <span className="font-label-eyebrow text-secondary uppercase tracking-widest text-xs font-bold">
              ENGINEERING ESTIMATOR TOOL
            </span>
          </div>
          <h2 className="font-headline-lg text-2xl lg:text-3xl text-primary font-bold mt-2">
            โปรแกรมประเมินขนาด BTU & ห้องเย็นเบื้องต้น
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mt-2 text-sm">
            คำนวณขนาดภาระความเย็น แรงม้าคอมเพรสเซอร์ (HP) และความหนาฉนวน PIR สำหรับโรงงานและคลังสินค้าของคุณ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-surface rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md border border-outline-variant/30">
          {/* Inputs Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <label className="block font-label-technical text-xs font-semibold text-primary mb-2">
                1. เลือกประเภทการใช้งานห้องและอุณหภูมิเป้าหมาย
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setAppType('freezer')}
                  className={`p-3 rounded-lg text-left border text-xs transition-all cursor-pointer ${
                    appType === 'freezer'
                      ? 'border-secondary bg-secondary-fixed/30 text-primary font-bold shadow-xs'
                      : 'border-outline-variant/30 hover:border-outline-variant bg-surface-container-lowest text-on-surface-variant'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-secondary">severe_cold</span>
                    <span className="font-semibold">ห้องแช่แข็ง Freezer</span>
                  </div>
                  <div className="text-[11px] text-on-surface-variant mt-1">-18°C ถึง -25°C</div>
                </button>

                <button
                  type="button"
                  onClick={() => setAppType('chilled')}
                  className={`p-3 rounded-lg text-left border text-xs transition-all cursor-pointer ${
                    appType === 'chilled'
                      ? 'border-secondary bg-secondary-fixed/30 text-primary font-bold shadow-xs'
                      : 'border-outline-variant/30 hover:border-outline-variant bg-surface-container-lowest text-on-surface-variant'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-secondary">ac_unit</span>
                    <span className="font-semibold">ห้องแช่เย็น Chilled</span>
                  </div>
                  <div className="text-[11px] text-on-surface-variant mt-1">0°C ถึง +4°C</div>
                </button>

                <button
                  type="button"
                  onClick={() => setAppType('cleanroom')}
                  className={`p-3 rounded-lg text-left border text-xs transition-all cursor-pointer ${
                    appType === 'cleanroom'
                      ? 'border-secondary bg-secondary-fixed/30 text-primary font-bold shadow-xs'
                      : 'border-outline-variant/30 hover:border-outline-variant bg-surface-container-lowest text-on-surface-variant'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-secondary">air</span>
                    <span className="font-semibold">คลีนรูม / ไลน์ผลิต</span>
                  </div>
                  <div className="text-[11px] text-on-surface-variant mt-1">20°C - 22°C (ควบคุม RH)</div>
                </button>

                <button
                  type="button"
                  onClick={() => setAppType('factory')}
                  className={`p-3 rounded-lg text-left border text-xs transition-all cursor-pointer ${
                    appType === 'factory'
                      ? 'border-secondary bg-secondary-fixed/30 text-primary font-bold shadow-xs'
                      : 'border-outline-variant/30 hover:border-outline-variant bg-surface-container-lowest text-on-surface-variant'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-secondary">apartment</span>
                    <span className="font-semibold">แอร์โรงงาน / อาคาร</span>
                  </div>
                  <div className="text-[11px] text-on-surface-variant mt-1">24°C - 25°C สบาย</div>
                </button>
              </div>
            </div>

            {/* Dimension Sliders */}
            <div className="space-y-4 pt-2">
              <label className="block font-label-technical text-xs font-semibold text-primary">
                2. ระบุขนาดห้องจริง (เมตร)
              </label>

              <div>
                <div className="flex justify-between text-xs text-on-surface-variant mb-1">
                  <span>ความกว้าง (Width):</span>
                  <span className="font-bold text-primary font-label-technical">{width} ม.</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="30"
                  step="0.5"
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value))}
                  className="w-full accent-secondary cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-on-surface-variant mb-1">
                  <span>ความยาว (Length):</span>
                  <span className="font-bold text-primary font-label-technical">{length} ม.</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  step="0.5"
                  value={length}
                  onChange={(e) => setLength(parseFloat(e.target.value))}
                  className="w-full accent-secondary cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-on-surface-variant mb-1">
                  <span>ความสูง (Height):</span>
                  <span className="font-bold text-primary font-label-technical">{height} ม.</span>
                </div>
                <input
                  type="range"
                  min="2.2"
                  max="12"
                  step="0.2"
                  value={height}
                  onChange={(e) => setHeight(parseFloat(e.target.value))}
                  className="w-full accent-secondary cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-on-surface-variant mb-1">
                  <span>ปริมาณสินค้าหมุนเวียน / วัน:</span>
                  <span className="font-bold text-primary font-label-technical">{storageWeightTon} ตัน</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  step="1"
                  value={storageWeightTon}
                  onChange={(e) => setStorageWeightTon(parseFloat(e.target.value))}
                  className="w-full accent-secondary cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-6 bg-primary text-white p-6 sm:p-8 rounded-xl shadow-lg space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-label-eyebrow text-secondary-fixed text-xs tracking-wider uppercase">
                  CALCULATION RESULT
                </span>
                <h3 className="font-headline-md text-xl font-bold mt-0.5">ผลการคำนวณเบื้องต้น</h3>
              </div>
              <span className="material-symbols-outlined text-secondary-container text-2xl">
                calculate
              </span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface/5 p-3.5 rounded-lg border border-white/10">
                <div className="font-label-eyebrow text-surface-container-high text-[11px]">
                  ภาระความเย็นคำนวณ
                </div>
                <div className="text-xl sm:text-2xl font-bold font-display text-white mt-1 tabular-nums">
                  {calculations.totalBtu.toLocaleString()}{' '}
                  <span className="text-xs font-normal text-secondary-fixed">BTU/hr</span>
                </div>
              </div>

              <div className="bg-surface/5 p-3.5 rounded-lg border border-white/10">
                <div className="font-label-eyebrow text-surface-container-high text-[11px]">
                  ขนาดคอมเพรสเซอร์ (HP)
                </div>
                <div className="text-xl sm:text-2xl font-bold font-display text-secondary-fixed mt-1 tabular-nums">
                  ~{calculations.estimatedHp}{' '}
                  <span className="text-xs font-normal text-white">HP ({calculations.estimatedTonRef} TR)</span>
                </div>
              </div>

              <div className="bg-surface/5 p-3.5 rounded-lg border border-white/10">
                <div className="font-label-eyebrow text-surface-container-high text-[11px]">
                  พื้นที่ / ปริมาตรห้อง
                </div>
                <div className="text-base sm:text-lg font-bold font-label-technical text-white mt-1 tabular-nums">
                  {calculations.area} ตร.ม.{' '}
                  <span className="text-xs text-surface-container-high">({calculations.volume} ลบ.ม.)</span>
                </div>
              </div>

              <div className="bg-surface/5 p-3.5 rounded-lg border border-white/10">
                <div className="font-label-eyebrow text-surface-container-high text-[11px]">
                  การไหลเวียนลมโดยประมาณ
                </div>
                <div className="text-base sm:text-lg font-bold font-label-technical text-white mt-1 tabular-nums">
                  ~{calculations.estimatedCfm.toLocaleString()}{' '}
                  <span className="text-xs text-surface-container-high">CFM</span>
                </div>
              </div>
            </div>

            {/* Recommended Spec */}
            <div className="bg-surface/10 p-4 rounded-lg space-y-1.5 border border-white/10 text-xs">
              <div className="font-label-eyebrow text-secondary-fixed-dim uppercase tracking-wider">
                ข้อกำหนดฉนวนและระบบที่แนะนำ:
              </div>
              <div className="font-bold text-white text-sm">{calculations.pirThickness}</div>
              <p className="text-surface-container-high text-xs leading-relaxed">
                อุณหภูมิควบคุม {calculations.tempTarget} พร้อมชุดเซ็นเซอร์ควบคุมอุณหภูมิดิจิทัล Carel/Dixell และประตูกันความเย็นสูญญากาศ
              </p>
            </div>

            {/* Export CTA */}
            <button
              type="button"
              onClick={handleExport}
              className="w-full bg-on-tertiary-container hover:bg-tertiary-container text-white py-3 px-4 rounded font-title-md text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-base">forward_to_inbox</span>
              <span>นำข้อมูลนี้ไปกรอกแบบฟอร์มขอใบเสนอราคา</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
