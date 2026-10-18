import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactSectionProps {
  initialService?: string;
  initialDetails?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'coldroom',
  initialDetails = '',
}) => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('coldroom');
  const [projectDetails, setProjectDetails] = useState('');
  const [attachedFile, setAttachedFile] = useState<string | null>(null);

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Sync props if user exported from calculator or clicked a service
  useEffect(() => {
    if (initialService) {
      setServiceType(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (initialDetails) {
      setProjectDetails(initialDetails);
      setSubmitted(false);
    }
  }, [initialDetails]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate realistic reference ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newRefId = `3T-RFQ-${new Date().getFullYear()}-${randomNum}`;
    setReferenceId(newRefId);
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setCompanyName('');
    setContactName('');
    setPhone('');
    setEmail('');
    setProjectDetails('');
    setAttachedFile(null);
    setSubmitted(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0].name);
    }
  };

  return (
    <section className="w-full py-20 bg-surface-container-low scroll-mt-20" id="contact">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Contact Details & Direct Hotline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-5 bg-on-tertiary-container rounded-xs"></div>
              <span className="font-label-eyebrow text-secondary uppercase tracking-widest text-xs font-bold">
                CONTACT & CONSULTATION
              </span>
            </div>

            <h2 className="font-headline-lg text-2xl lg:text-3xl text-primary font-bold">
              ปรึกษาผู้เชี่ยวชาญ<br className="hidden sm:inline" />หรือนัดสำรวจหน้างานฟรี
            </h2>

            <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">
              ทีมวิศวกร บริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด พร้อมเข้าสำรวจ ประเมินราคา และให้คำปรึกษาทางเทคนิคสำหรับโรงงาน คลังสินค้า และโครงการค้าปลีก
            </p>

            {/* Contact Cards List */}
            <div className="space-y-3.5 pt-2">
              {/* Hotline Card */}
              <a
                className="flex items-center gap-4 p-4 rounded-xl bg-surface hover:bg-surface-container transition-all shadow-xs group border border-outline-variant/20 hover:border-on-tertiary-container/30"
                href={`tel:${COMPANY_INFO.hotline}`}
              >
                <div className="w-12 h-12 rounded-lg bg-on-tertiary-container text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div>
                  <div className="font-label-eyebrow text-xs text-on-surface-variant uppercase tracking-wider">
                    HOTLINE สายด่วน 24 ชม.
                  </div>
                  <div className="font-headline-md text-lg font-bold text-primary">
                    {COMPANY_INFO.phoneDisplay}
                  </div>
                  <div className="font-body-sm text-xs text-secondary font-medium">
                    โทรด่วน ติดต่อคุณธวัชชัยโดยตรง
                  </div>
                </div>
              </a>

              {/* LINE Official */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface shadow-xs border border-outline-variant/20">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">chat</span>
                </div>
                <div>
                  <div className="font-label-eyebrow text-xs text-on-surface-variant uppercase tracking-wider">
                    LINE OFFICIAL
                  </div>
                  <div className="font-headline-md text-base font-bold text-primary">
                    Line ID: {COMPANY_INFO.lineId}
                  </div>
                  <div className="font-body-sm text-xs text-on-surface-variant">
                    ส่งรูปหน้างานหรือแบบแปลนมาประเมินได้ทันที
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface shadow-xs border border-outline-variant/20">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div>
                  <div className="font-label-eyebrow text-xs text-on-surface-variant uppercase tracking-wider">
                    EMAIL QUOTATION
                  </div>
                  <a
                    className="font-headline-md text-base font-bold text-primary hover:text-secondary hover:underline"
                    href={`mailto:${COMPANY_INFO.email}`}
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <div className="font-body-sm text-xs text-on-surface-variant">
                    ส่งเอกสาร TOR / BOQ เพื่อขอใบเสนอราคา
                  </div>
                </div>
              </div>

              {/* Headquarters Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-surface shadow-xs border border-outline-variant/20">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-2xl">pin_drop</span>
                </div>
                <div className="space-y-1">
                  <div className="font-label-eyebrow text-xs text-on-surface-variant uppercase tracking-wider">
                    HEADQUARTERS LOCATION
                  </div>
                  <div className="font-body-sm text-on-surface leading-relaxed text-xs">
                    {COMPANY_INFO.address}
                  </div>
                  <div className="font-label-technical text-xs text-secondary font-bold">
                    ใกล้เขตลาดกระบัง • สุวรรณภูมิ • นิคมฯ ชลบุรี-ระยอง
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Map Preview */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-44 bg-surface-container rounded-xl overflow-hidden shadow-inner flex flex-col items-center justify-center text-on-surface-variant relative border border-outline-variant/30 p-4 text-center group cursor-pointer block"
              title="คลิกเพื่อเปิดแผนที่ Google Maps นำทาง"
            >
              <span className="material-symbols-outlined text-3xl text-secondary mb-1 group-hover:scale-110 transition-transform">
                map
              </span>
              <p className="font-label-technical text-xs font-semibold text-primary">
                ลาดกระบัง กรุงเทพมหานคร (พิกัดศูนย์บริการ)
              </p>
              <p className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">
                ให้บริการทั่วเขตกรุงเทพฯ ปริมณฑล และ EEC
              </p>
              <span className="mt-2 text-[11px] font-semibold text-secondary flex items-center gap-1 group-hover:underline">
                เปิด Google Maps นำทาง
                <span className="material-symbols-outlined text-xs">open_in_new</span>
              </span>
            </a>
          </div>

          {/* Right: Interactive Consultation & RFQ Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md border border-outline-variant/30">
              {!submitted ? (
                <>
                  <div className="mb-6 space-y-1">
                    <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
                      แบบฟอร์มขอใบเสนอราคา / นัดสำรวจหน้างานฟรี
                    </h3>
                    <p className="font-body-sm text-on-surface-variant text-xs sm:text-sm">
                      กรอกรายละเอียดเบื้องต้น เจ้าหน้าที่ฝ่ายวิศวกรรมจะติดต่อกลับภายใน 24 ชม.
                    </p>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-label-technical text-xs font-semibold text-on-surface" htmlFor="company-name">
                          ชื่อบริษัท / หน่วยงาน *
                        </label>
                        <input
                          className="w-full px-4 py-2.5 rounded bg-surface-container-low text-on-surface font-body-sm text-xs sm:text-sm border border-outline-variant/30 focus:outline-none focus:border-secondary focus:bg-surface focus:shadow-xs"
                          id="company-name"
                          placeholder="เช่น บริษัท เอบีซี อินดัสทรี จำกัด"
                          required
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-label-technical text-xs font-semibold text-on-surface" htmlFor="contact-name">
                          ชื่อผู้ติดต่อ *
                        </label>
                        <input
                          className="w-full px-4 py-2.5 rounded bg-surface-container-low text-on-surface font-body-sm text-xs sm:text-sm border border-outline-variant/30 focus:outline-none focus:border-secondary focus:bg-surface focus:shadow-xs"
                          id="contact-name"
                          placeholder="ชื่อ-นามสกุล / ตำแหน่ง"
                          required
                          type="text"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-label-technical text-xs font-semibold text-on-surface" htmlFor="contact-phone">
                          เบอร์โทรศัพท์ติดต่อกลับ *
                        </label>
                        <input
                          className="w-full px-4 py-2.5 rounded bg-surface-container-low text-on-surface font-body-sm text-xs sm:text-sm border border-outline-variant/30 focus:outline-none focus:border-secondary focus:bg-surface focus:shadow-xs"
                          id="contact-phone"
                          placeholder="08X-XXX-XXXX"
                          required
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-label-technical text-xs font-semibold text-on-surface" htmlFor="contact-email">
                          อีเมล *
                        </label>
                        <input
                          className="w-full px-4 py-2.5 rounded bg-surface-container-low text-on-surface font-body-sm text-xs sm:text-sm border border-outline-variant/30 focus:outline-none focus:border-secondary focus:bg-surface focus:shadow-xs"
                          id="contact-email"
                          placeholder="example@company.com"
                          required
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-label-technical text-xs font-semibold text-on-surface" htmlFor="service-type">
                        ประเภทงานที่สนใจ *
                      </label>
                      <select
                        className="w-full px-4 py-2.5 rounded bg-surface-container-low text-on-surface font-body-sm text-xs sm:text-sm border border-outline-variant/30 focus:outline-none focus:border-secondary focus:bg-surface focus:shadow-xs cursor-pointer"
                        id="service-type"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                      >
                        <option value="coldroom">งานสร้าง/ปรับปรุงระบบห้องเย็น (Cold Storage / Freezer Room)</option>
                        <option value="hvac">งานระบบปรับอากาศโรงงานและอาคารพาณิชย์ (VRF / Chiller)</option>
                        <option value="duct">งานระบบท่อลมระบายอากาศ & งานหุ้มฉนวน Jacket</option>
                        <option value="chiller">งานเปลี่ยนวาล์ว ท่อน้ำเย็น และ Cooling Tower</option>
                        <option value="commercial-fridge">งานติดตั้ง/ซ่อมตู้แช่ห้างสรรพสินค้า</option>
                        <option value="maintenance">สัญญาบริการบำรุงรักษาเชิงป้องกันประจำปี (PM Contract)</option>
                        <option value="emergency">แจ้งซ่อมฉุกเฉินด่วน 24 ชั่วโมง</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-label-technical text-xs font-semibold text-on-surface" htmlFor="project-details">
                        รายละเอียดโครงการ / ข้อมูลหน้างาน
                      </label>
                      <textarea
                        className="w-full px-4 py-2.5 rounded bg-surface-container-low text-on-surface font-body-sm text-xs sm:text-sm border border-outline-variant/30 focus:outline-none focus:border-secondary focus:bg-surface focus:shadow-xs leading-relaxed"
                        id="project-details"
                        placeholder="ระบุขนาดพื้นที่, อุณหภูมิที่ต้องการ, ขนาดห้องเย็น, หรืออาการผิดปกติของเครื่องจักรที่ต้องการให้เข้าตรวจสอบ..."
                        rows={4}
                        value={projectDetails}
                        onChange={(e) => setProjectDetails(e.target.value)}
                      ></textarea>
                    </div>

                    {/* File Attachment simulator */}
                    <div className="p-3 bg-surface-container-low rounded-lg border border-dashed border-outline-variant/40 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-lg text-secondary">attach_file</span>
                        <span>
                          {attachedFile ? (
                            <strong className="text-primary">{attachedFile}</strong>
                          ) : (
                            'แนบไฟล์แบบแปลน CAD / รูปถ่ายหน้างาน / BOQ (ถ้ามี)'
                          )}
                        </span>
                      </div>
                      <label className="px-3 py-1 bg-surface-container hover:bg-surface-container-high rounded text-primary font-semibold cursor-pointer border border-outline-variant/30">
                        <span>เลือกไฟล์</span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                          accept=".pdf,.dwg,.jpg,.jpeg,.png,.xlsx"
                        />
                      </label>
                    </div>

                    {/* Routing destination notice */}
                    <div className="p-3.5 bg-surface-container-low rounded-xl border border-secondary/20 space-y-1.5 text-xs">
                      <div className="flex items-center gap-2 font-bold text-primary">
                        <span className="material-symbols-outlined text-base text-secondary">forward_to_inbox</span>
                        <span>ข้อมูลคำขอนี้จะถูกส่งไปที่ไหน?</span>
                      </div>
                      <ul className="space-y-1 text-on-surface-variant text-[11.5px] leading-relaxed pl-6 list-disc">
                        <li>
                          ส่งตรงถึง <strong>ฝ่ายวิศวกรรม บริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด</strong> (อีเมล: <code className="font-label-technical text-secondary bg-surface px-1 py-0.5 rounded">3t.intercool@gmail.com</code>)
                        </li>
                        <li>
                          ส่งแจ้งเตือนด่วนไปยัง <strong>ทีมวิศวกรและผู้บริหารโครงการ</strong> เพื่อตรวจสอบและนัดหมายวันเข้าสำรวจหน้างาน
                        </li>
                        <li>
                          ระบบจะส่งสำเนาสรุปคำขอใบเสนอราคาไปยัง <strong>อีเมลของท่าน</strong> ที่ระบุไว้ในฟอร์มนี้
                        </li>
                      </ul>
                    </div>

                    <div className="pt-2">
                      <button
                        className="w-full bg-primary hover:bg-primary-container text-white font-title-md py-3.5 px-6 rounded shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
                        type="submit"
                      >
                        <span className="material-symbols-outlined text-on-tertiary-container group-hover:rotate-12 transition-transform">
                          send
                        </span>
                        <span>ส่งข้อมูลขอนัดสำรวจหน้างาน / ประเมินราคาฟรี</span>
                      </button>
                    </div>

                    <p className="font-body-sm text-[11px] text-on-surface-variant text-center pt-1">
                      * ข้อมูลของท่านจะถูกส่งตรงไปยังฝ่ายประเมินราคา 3T Intercool & Service เพื่อจัดทำใบเสนอราคาเท่านั้น
                    </p>
                  </form>
                </>
              ) : (
                /* Success Notification View with Full Destination Details */
                <div className="py-6 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-label-technical text-xs font-bold text-secondary">
                      QUOTATION REQUEST SENT SUCCESSFULLY
                    </span>
                    <h3 className="font-headline-md text-2xl font-bold text-primary">
                      ข้อมูลคำขอใบเสนอราคาถูกส่งเรียบร้อยแล้ว
                    </h3>
                  </div>

                  {/* Explicit destinations card */}
                  <div className="p-4 bg-surface-container rounded-xl text-left text-xs space-y-2.5 border border-secondary/30 max-w-lg mx-auto">
                    <div className="font-title-md text-xs font-bold text-primary flex items-center gap-1.5 border-b border-outline-variant/30 pb-2">
                      <span className="material-symbols-outlined text-secondary text-base">outgoing_mail</span>
                      <span>ปลายทางที่ข้อมูลใบเสนอราคาถูกส่งไป:</span>
                    </div>

                    <div className="space-y-2 text-on-surface text-[12px]">
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-sm text-secondary shrink-0 mt-0.5">mark_email_read</span>
                        <div>
                          <strong className="text-primary">1. อีเมลกลางฝ่ายวิศวกรรม 3T Intercool:</strong>
                          <div className="text-on-surface-variant font-label-technical text-[11px]">
                            {COMPANY_INFO.email} (เพื่อจัดทำเอกสารใบเสนอราคาอย่างเป็นทางการและคำนวณ BOQ)
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-sm text-secondary shrink-0 mt-0.5">engineering</span>
                        <div>
                          <strong className="text-primary">2. ทีมวิศวกรผู้ควบคุมโครงการ (คุณธวัชชัย บาระพรม):</strong>
                          <div className="text-on-surface-variant text-[11px]">
                            รับแจ้งเตือนด่วนเพื่อเตรียมตารางเข้าสำรวจหน้างานและโทรติดต่อกลับหาคุณ {contactName || 'ลูกค้า'}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-sm text-secondary shrink-0 mt-0.5">forward_to_inbox</span>
                        <div>
                          <strong className="text-primary">3. อีเมลของผู้ติดต่อ:</strong>
                          <div className="text-on-surface-variant font-label-technical text-[11px]">
                            {email || '-'} (จัดส่งสำเนาคำขอใบเสนอราคาพร้อมรหัสอ้างอิงให้ท่านตรวจสอบ)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary of submitted data */}
                  <div className="p-4 bg-surface-container-low rounded-xl text-left text-xs sm:text-sm space-y-2 border border-outline-variant/30 max-w-lg mx-auto">
                    <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                      <span className="text-on-surface-variant">รหัสอ้างอิง (Ref No.):</span>
                      <strong className="font-label-technical text-secondary font-bold">{referenceId}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">บริษัท / ผู้ติดต่อ:</span>
                      <span className="font-semibold text-primary">{companyName || 'ลูกค้าทั่วไป'} ({contactName})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">เบอร์โทรศัพท์สำหรับติดต่อกลับ:</span>
                      <span className="font-semibold text-primary">{phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">ประเภทงาน:</span>
                      <span className="font-semibold text-secondary">{serviceType}</span>
                    </div>
                    {attachedFile && (
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant">ไฟล์แนบที่แนบส่งไป:</span>
                        <span className="text-primary font-medium">{attachedFile}</span>
                      </div>
                    )}
                  </div>

                  <p className="font-body-sm text-xs text-on-surface-variant max-w-lg mx-auto leading-relaxed">
                    เจ้าหน้าที่จะติดต่อกลับผ่านเบอร์โทรศัพท์ <strong>{phone}</strong> ภายใน 24 ชั่วโมง เพื่อยืนยันวันเวลานัดหมายเข้าสำรวจหน้างานจริงฟรี ขอบคุณครับ
                  </p>

                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={`tel:${COMPANY_INFO.hotline}`}
                      className="px-4 py-2.5 rounded bg-on-tertiary-container text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-tertiary transition-colors shadow-xs"
                    >
                      <span className="material-symbols-outlined text-sm">call</span>
                      <span>โทรสอบถามสายตรง ({COMPANY_INFO.phoneDisplay})</span>
                    </a>

                    <button
                      onClick={handleResetForm}
                      className="px-4 py-2.5 rounded bg-surface-container text-primary text-xs font-semibold hover:bg-surface-container-high transition-colors cursor-pointer"
                    >
                      ส่งคำขอใบเสนอราคาเพิ่มเติม
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
