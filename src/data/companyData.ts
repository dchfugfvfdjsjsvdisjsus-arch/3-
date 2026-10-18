export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  location: string;
  category: 'coldroom' | 'duct' | 'chiller' | 'jacket';
  imageUrl: string;
  tag: string;
  status: string;
  description: string;
  detailedScope: string[];
  specs: {
    capacity?: string;
    temperature?: string;
    materials?: string;
    duration?: string;
  };
}

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
  deliverables: string[];
  equipmentBrands: string[];
  warranty: string;
}

export const COMPANY_INFO = {
  nameTh: 'บริษัท 3ต อินเตอร์คูล แอนด์ เซอร์วิส จำกัด',
  nameEn: '3T INTERCOOL & SERVICE CO., LTD.',
  shortName: '3T INTERCOOL',
  tagline: 'Engineering & Service',
  subtitle: 'Industrial HVAC & Cold Storage Engineering Solutions',
  hotline: '081-5163898',
  phoneDisplay: '081-5163898',
  lineId: 'chelsea898',
  email: '3t.intercool@gmail.com',
  address: 'เลขที่ 109/94 หมู่บ้านพฤกษา51 ซอย ฉลองกรุง53 แขวงลำปลาทิว เขตลาดกระบัง จังหวัดกรุงเทพมหานคร 10520',
  operatingHours: 'จันทร์ - เสาร์: 08:30 - 17:30 น. (บริการแจ้งเหตุฉุกเฉิน 24 ชั่วโมง)',
  coverageArea: 'กรุงเทพฯ, ปริมณฑล, นิคมอุตสาหกรรมภาคตะวันออก (EEC: ชลบุรี, ระยอง, ฉะเชิงเทรา) และทั่วประเทศ',
  director: {
    nameTh: 'นาย ธวัชชัย บาระพรม',
    nameEn: 'MR. TAWATCHAI BARAPHOM',
    title: 'MANAGING DIRECTOR',
    quote: 'เรายึดมั่นในความซื่อสัตย์ มาตรฐานความปลอดภัย และการส่งมอบงานระบบปรับอากาศและทำความเย็นที่สมบูรณ์แบบที่สุด เพื่อให้ธุรกิจของคู่ค้าดำเนินไปได้อย่างต่อเนื่องโดยไม่มีสะดุด',
    phone: '081-5163898'
  },
  metrics: [
    { value: '15+', label: 'ปี ประสบการณ์วิศวกรรม', highlight: 'white' },
    { value: '100%', label: 'ส่งมอบตรงตามสเปก', highlight: 'white' },
    { value: '24/7', label: 'ทีมซัพพอร์ตฉุกเฉิน', highlight: 'cyan' },
    { value: 'ZERO', label: 'Accident Standard', highlight: 'orange' },
  ]
};

export const CLIENTS = [
  { name: 'CP GROUP', sector: 'ธุรกิจอาหารและเกษตรอุตสาหกรรม', projectType: 'Cold Storage & Cleanroom Logistics' },
  { name: 'ISUZU MOTORS', sector: 'อุตสาหกรรมประกอบยานยนต์', projectType: 'AHU Ventilation & Factory Ductwork' },
  { name: 'KCE ELECTRONICS', sector: 'อุตสาหกรรมแผงวงจรอิเล็กทรอนิกส์', projectType: 'High-Pressure Chiller & Cleanroom Duct' },
  { name: 'DON DON DONKI', sector: 'ห้างค้าปลีกและซูเปอร์มาร์เก็ตญี่ปุ่น', projectType: 'Commercial Showcases & Cold Chain System' },
  { name: 'THE MALL GROUP', sector: 'ห้างสรรพสินค้าชั้นนำ', projectType: 'Supermarket Refrigeration & Food Hall Freezers' },
  { name: 'TOSHIBA CARRIER', sector: 'ผู้ผลิตระบบปรับอากาศชั้นนำ', projectType: 'Air Distribution & Duct Modification' },
  { name: 'SANDEN INTERCOOL', sector: 'ผู้นำด้านตู้แช่พาณิชย์', projectType: 'Commercial Freezer Piping & Stainless Jackets' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'hvac',
    code: 'SERVICE 01',
    title: 'งานระบบปรับอากาศ & ตู้แช่',
    shortDesc: 'ติดตั้ง ซ่อมแซม บำรุงรักษา แอร์โรงงาน VRV/VRF, Chilled Water System, Split Type และตู้แช่พาณิชย์ทุกแบรนด์ ทั้งแบบตู้เปิด ตู้กระจก สำหรับซูเปอร์มาร์เก็ต',
    fullDesc: 'บริการออกแบบ คำนวณภาระความเย็น (Cooling Load Calculation) ติดตั้ง และซ่อมบำรุงระบบปรับอากาศเชิงพาณิชย์และอุตสาหกรรมทุกขนาด ตั้งแต่ระบบ VRV/VRF อัจฉริยะประหยัดพลังงาน แอร์คอยล์เปลือย แอร์ดักท์ แอร์เพดาน และตู้แช่โชว์อาหารสด เครื่องดื่ม ทั้งแบบ Plug-in และ Remote Condensing Unit',
    iconName: 'ac_unit',
    highlights: [
      'ระบบ VRV / VRF อัจฉริยะ',
      'ตู้แช่เคาน์เตอร์ และตู้แช่เย็นห้างสรรพสินค้า',
      'ตรวจเช็ครอยรั่วน้ำยา และประสิทธิภาพคอมเพรสเซอร์'
    ],
    deliverables: [
      'แบบแปลน As-Built Drawing และรายงานการวัดอุณหภูมิ',
      'การทดสอบแรงดันระบบน้ำยาไนโตรเจนและแวคคั่มลึก',
      'ใบรับประกันงานติดตั้งและบริการหลังการขาย'
    ],
    equipmentBrands: ['Daikin VRV', 'Mitsubishi Heavy / Electric', 'Carrier', 'Bitzer', 'Copeland', 'Sanden'],
    warranty: 'รับประกันงานติดตั้งระบบ 1 ปีเต็ม พร้อมบริการตรวจเช็คฟรีตามรอบ'
  },
  {
    id: 'coldroom',
    code: 'SERVICE 02',
    title: 'งานระบบห้องเย็น (Cold Room)',
    shortDesc: 'ออกแบบและสร้างห้องเย็นอุตสาหกรรม (Chilled Room & Freezer Room) คลีนรูม แผงฉนวน Sandwich Panel PIR/PU ควบคุมอุณหภูมิได้อย่างแม่นยำ ปลอดภัยตามเกณฑ์ GMP/HACCP',
    fullDesc: 'รับสร้างห้องเย็นอุตสาหกรรมทุกช่วงอุณหภูมิ ตั้งแต่ห้องชิลเก็บผักผลไม้ (+0°C ถึง +15°C) ห้องแช่แข็งเนื้อสัตว์และอาหารแช่แข็ง (-18°C ถึง -25°C) จนถึงห้องฟรีซด่วน Blast Freezer (-35°C ถึง -40°C) ด้วยแผ่นฉนวนกันความร้อน PIR ชนิดไม่ลามไฟ มาตรฐาน Food-grade',
    iconName: 'severe_cold',
    highlights: [
      'แผงฉนวนกันไฟ PIR เกรด Food Contact',
      'ชุด Condensing Unit & คอยล์เย็นคุณภาพสูง',
      'ระบบควบคุมอุณหภูมิดิจิทัลและ Alarm เตือนภัย'
    ],
    deliverables: [
      'งานเทคอนกรีตฐานและวางแผงฉนวนพื้น/ผนัง/เพดาน',
      'ประตูกันความเย็นบานเลื่อนหรือบานเปิดพร้อมระบบ Heater ป้องกันเกาะน้ำแข็ง',
      'ตู้คอนโทรลอุณหภูมิดิจิทัลบันทึก Data Logger รองรับมาตรฐาน HACCP/GMP'
    ],
    equipmentBrands: ['Bitzer Semi-hermetic', 'Copeland Scroll', 'Guntner', 'Kueba', 'Dixell / Carel Controls'],
    warranty: 'รับประกันโครงสร้างห้องและแผงฉนวน 2 ปี, อุปกรณ์เครื่องจักร 1 ปี'
  },
  {
    id: 'duct',
    code: 'SERVICE 03',
    title: 'งานท่อลม & ระบายอากาศ (Duct)',
    shortDesc: 'ผลิตและติดตั้งท่อส่งลมแอร์ (Air Ductwork), ท่อระบายอากาศ Exhaust Air, ท่อดักท์สังกะสี ท่อสแตนเลส หัวจ่ายลม พร้อมฉนวนใยแก้วและแจ็คเก็ตกันความร้อน',
    fullDesc: 'บริการประกอบและติดตั้งระบบท่อส่งลมเย็น (Supply Air Duct), ท่อลมกลับ (Return Air Duct), ท่อระบายอากาศเสีย (Exhaust Air) และท่อเติมอากาศบริสุทธิ์ (Fresh Air) สำหรับโรงงานอุตสาหกรรม คลีนรูม และอาคารสำนักงาน พร้อมบริการวัดปรับสมดุลปริมาณลม (Air Balancing)',
    iconName: 'air',
    highlights: [
      'Air Duct สำหรับ Cleanroom และไลน์ผลิต',
      'งานหุ้มฉนวน Jacket Aluminum / Stainless',
      'ปรับสมดุลลม Air Balancing ตามมาตรฐาน'
    ],
    deliverables: [
      'ท่อดักท์เหล็กเคลือบสังกะสี (GI) หรือสแตนเลส SUS304 ขึ้นรูปไร้รอยต่อ',
      'การติดตั้ง Damper, Volume Damper, Fire Damper',
      'หัวจ่ายลม Diffuser, Linear Slot, Jet Nozzle พร้อมรายงาน Flow Rate'
    ],
    equipmentBrands: ['Aeroflex', 'Microfiber', 'Jacket SUS304', 'GI Galvanized Grade A'],
    warranty: 'รับประกันรอยต่อและการรั่วซึมของท่อลม 1 ปี'
  },
  {
    id: 'chiller',
    code: 'SERVICE 04',
    title: 'ระบบ Chiller & ท่อน้ำเย็น',
    shortDesc: 'งานติดตั้ง ซ่อมบำรุงระบบ Chiller Water, Cooling Tower, งานเปลี่ยน Butterfly Valve, เช็ควาล์ว, ปั๊มน้ำหล่อเย็น และล้างทำความสะอาดแผงคอนเดนเซอร์',
    fullDesc: 'ผู้เชี่ยวชาญงานระบบท่อน้ำหล่อเย็นและน้ำเย็นปรับอากาศในโรงงานขนาดใหญ่ งานเชื่อมท่อเหล็กดำ SCH40 งานติดตั้งหน้าแปลน วาล์วควบคุมแรงดันสูง Butterfly Valve, Globe Valve, Check Valve รวมถึงการโอเวอร์ฮอลปั๊มน้ำและคูลลิ่งทาวเวอร์',
    iconName: 'water_damage',
    highlights: [
      'งานเปลี่ยนวาล์ว Butterfly Valve ท่อน้ำแรงดันสูง',
      'ซ่อมบำรุง Cooling Tower และระบบ Water Piping',
      'สัญญาบริการซ่อมบำรุงรายปี (PM Contract)'
    ],
    deliverables: [
      'Hydrostatic Pressure Test ทดสอบแรงดันน้ำก่อนเปิดระบบ',
      'รายงานการบำรุงรักษาเชิงป้องกัน ตรวจวัดค่าความสั่นสะเทือนปั๊มและกระแสไฟ',
      'การเคลือบสีอีพ็อกซี่กันสนิมระบบท่อน้ำ'
    ],
    equipmentBrands: ['KITZ Valves', 'Ebara Pumps', 'Grundfos', 'Liang Chi Cooling Tower', 'Trane / York Chiller'],
    warranty: 'รับประกันงานเปลี่ยนวาล์วและรอยเชื่อมท่อ 1 ปีเต็ม'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'kce-valve',
    title: 'KCE ลาดกระบัง - งานเปลี่ยน BUTTERFLY VALVE & ท่อน้ำเย็น',
    client: 'KCE ELECTRONICS',
    location: 'นิคมอุตสาหกรรมลาดกระบัง, กรุงเทพฯ',
    category: 'chiller',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpkkqrfBoU7O1WnHjuj1ppeKaH3L5jFnCK9AEuAroCZsZBqwQt9AYrdh2gQCNRtAAT9RMQ5n2dC8lJJ6YeKtJK1rZ7L5bwPf-bLRj_7kGtv8R5SYQfn1g1xq8340S08bD5Y-_H7l9MRZU81Djlm0EW_dFQwqW-hcwzYy-kkXK_7mXXD5M_tio6aocYlSLMGIIpmN6XPUwUDtf28LZYImw2njUdRH2PBS5AvWihnIxK-aX7KU0gi46uMiOuDJpoLF4RHQ',
    tag: 'CHILLER-VALVE-01',
    status: 'ส่งมอบ 100%',
    description: 'งานถอดเปลี่ยน Butterfly Valve ท่อเหล็กส่งน้ำหล่อเย็นขนาดใหญ่ พร้อมประกอบหน้าแปลนและทดสอบแรงดันระบบ',
    detailedScope: [
      'ระบายน้ำในระบบ Chiller Loop เพื่อเตรียมหน้างานโดยไม่กระทบสายการผลิตหลัก',
      'ถอดรื้อ Butterfly Valve ขนาด 8 นิ้วและ 10 นิ้วเดิมที่เสื่อมสภาพ',
      'ติดตั้ง Butterfly Valve เกรดอุตสาหกรรมทนแรงดันสูง 16 Bar',
      'ประกอบหน้าแปลน ขันน็อตตามค่าทอร์กมาตรฐาน และเปลี่ยนปะเก็น EPDM คุณภาพสูง',
      'ทดสอบแรงดันน้ำ Hydrostatic Test และตรวจสอบการรั่วซึม 100%'
    ],
    specs: {
      capacity: 'Chilled Water Loop 16 Bar',
      materials: 'Cast Steel Body / SUS316 Disc Butterfly Valve',
      duration: 'ดำเนินงานเสร็จสิ้นภายในช่วง Shutdown 48 ชม.'
    }
  },
  {
    id: 'cp-latlumkaeo',
    title: 'CP ลาดหลุมแก้ว - งานย้ายตู้ทำความเย็นอุตสาหกรรม',
    client: 'CP GROUP',
    location: 'อำเภอลาดหลุมแก้ว, จ.ปทุมธานี',
    category: 'coldroom',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrNHuUIvL4xGzLOIHomuCP30x_qTRAoDF74tS_PtLW8Cucdkk7IVm14N2uWfjGyn2kTfPYuopDDxJ6xlQV5uVM1GVlWw29FwxJR-9cgLAP0Ncnm6kCvYfNVAXNTqRs4yFomRIUKIs3ZBI43_Gbz4LouoqqsUpHH6iOFUBiSyGCHchHwqytSFHk8shyjJQfwYt2uvRByPZS35k1v_kouQDRMydCBqVHtDRm1GmrveNmdQDtX_USK_QEt3Mgmnx7S_4L8Q',
    tag: 'COLD-CP-02',
    status: 'ส่งมอบ 100%',
    description: 'ขนย้าย ประกอบติดตั้งระบบตู้ทำความเย็นสแตนเลสในคลีนรูมผลิตอาหาร ภายใต้มาตรฐานสุขอนามัยความปลอดภัยสูงสุด',
    detailedScope: [
      'ตรวจสอบและถอดแยกระบบท่อน้ำยาและไฟฟ้าอย่างปลอดภัย',
      'ยกย้ายตู้ทำความเย็นสแตนเลส SUS304 ขนาดใหญ่เข้าสู่ไลน์ผลิตใหม่',
      'เดินแนวท่อทองแดงชนิด Type L ใหม่ พร้อมหุ้มฉนวนกันการควบแน่น',
      'ต่อเชื่อมระบบควบคุมอุณหภูมิดิจิทัล และทำการเซ็ตค่า Calibration',
      'เดินเครื่องทดสอบอุณหภูมิตามข้อกำหนด GMP ของโรงงานอาหาร'
    ],
    specs: {
      temperature: 'ควบคุมที่ -2°C ถึง +4°C',
      materials: 'Stainless Steel SUS304 เกรดสัมผัสอาหาร',
      duration: 'ส่งมอบงานภายใน 3 วัน'
    }
  },
  {
    id: 'themall-bangkapi',
    title: 'ห้างเดอะมอลล์บางกะปิ - งานติดตั้งตู้แช่เย็น Sanden',
    client: 'THE MALL / SANDEN',
    location: 'เดอะมอลล์ไลฟ์สโตร์ บางกะปิ, กรุงเทพฯ',
    category: 'coldroom',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6CWmdNQOmjIIOOEk9gbS-GMMvXdY-qZVThFME8RiKqnbfc0iH8rSZvweO7Y36RbmSx6Lm4Cta_VIctzXvyJxCy-fQP1_SlFV6ZN2V7VOGpJHN04K3o5xfeXXAimK6uRSdLs6vgeC9f9RmL38_8KbNVNVd8bWzWll8Lsy1j58kTunwuHwYAtrog3FzxcMnzQr35MhWtll_5Ld7iAgKquDij0WF0Lm3wuWy6w-NKN4hTW1O5JUdiXAUpvZa7AjkS2oYWA',
    tag: 'RETAIL-FRIDGE-03',
    status: 'ส่งมอบ 100%',
    description: 'งานยกย้าย เดินระบบท่อน้ำยา ท่อน้ำทิ้ง และติดตั้งตู้แช่สำหรับห้างสรรพสินค้าด้วยแท่นโครงเหล็กโครงสร้างเฉพาะ',
    detailedScope: [
      'ติดตั้งแท่นวางโครงเหล็กรับน้ำหนักตู้แช่แบบ multi-deck',
      'เชื่อมต่อท่อน้ำยา R404A / R448A พร้อมงานฉนวนหนาพิเศษ',
      'เดินระบบระบายน้ำทิ้ง Condensate Drain ป้องกันน้ำหยดลงพื้นห้าง',
      'ติดตั้งไฟ LED สำหรับโชว์สินค้าที่ประหยัดพลังงานและไม่สร้างความร้อน',
      'ทดสอบ Pull-down Time และส่งมอบงานก่อนห้างเปิดบริการ'
    ],
    specs: {
      capacity: 'Multi-deck Commercial Fridge 12 Bays',
      temperature: '+1°C ถึง +4°C สม่ำเสมอ',
      duration: 'ปฏิบัติงานช่วงเวลากลางคืน (Night Shift) ปลอดภัย 100%'
    }
  },
  {
    id: 'donki-bangkapi',
    title: 'ร้านดองดองดองกิ - งานติดตั้งตู้แช่เย็นและโซนขายอาหาร',
    client: 'DON DON DONKI',
    location: 'DONKI สาขาเดอะมอลล์ บางกะปิ',
    category: 'coldroom',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3XxHwTw2oUnkr6sLXbQvvOMBKYS7iatBgrNt3pUtoa9jxjd2jIg9rIsa3KT-o2WwQxCKVV4RcK4GhotytlmarzjTrIojVjQkD3vWIYctfRolyrPKYLb5Y9clyECFdqQIl7kSNqkaUj0cIkoLgh5YLY4r97Ritq_SlgHQa9l8Z4NfEFrNTgLEo43xb4LUA-kae0ynAWd6nYSnAs3-LNZ2Mw_iqUgD3pJ5Uk9GQDnCkRmOy9IQrZ_lqL8aA_puwKzHqZw',
    tag: 'DONKI-CHILL-04',
    status: 'ส่งมอบ 100%',
    description: 'ติดตั้งตู้แช่โชว์สินค้าอาหารสด อาหารแช่แข็ง ระบบระบายความร้อน และงานเชื่อมต่อระบบควบคุมความเย็นอัตโนมัติ',
    detailedScope: [
      'จัดวางตำแหน่งตู้แช่ซาชิมิ เนื้อวากิว และอาหารปรุงสุกพร้อมรับประทาน',
      'ต่อท่อน้ำยาเข้ากับชุด Condensing Unit บนดาดฟ้าอาคาร',
      'เซ็ตอัพระบบ Real-time Temperature Monitoring ส่งแจ้งเตือนอัตโนมัติ',
      'งานเก็บสายไฟและงานท่อทองแดงอย่างประณีตเรียบร้อยตามมาตรฐานญี่ปุ่น'
    ],
    specs: {
      temperature: '-18°C ถึง -22°C (Frozen) และ 0°C ถึง +2°C (Fresh)',
      duration: 'โครงการปรับปรุงพื้นที่ 14 วัน'
    }
  },
  {
    id: 'donki-fashion',
    title: 'ดองดองดองกิ - งานติดตั้งระบบห้องเย็น Condensing Unit',
    client: 'DONKI FASHION ISLAND',
    location: 'ห้างแฟชั่นไอส์แลนด์, รามอินทรา',
    category: 'coldroom',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6CWmdNQOmjIIOOEk9gbS-GMMvXdY-qZVThFME8RiKqnbfc0iH8rSZvweO7Y36RbmSx6Lm4Cta_VIctzXvyJxCy-fQP1_SlFV6ZN2V7VOGpJHN04K3o5xfeXXAimK6uRSdLs6vgeC9f9RmL38_8KbNVNVd8bWzWll8Lsy1j58kTunwuHwYAtrog3FzxcMnzQr35MhWtll_5Ld7iAgKquDij0WF0Lm3wuWy6w-NKN4hTW1O5JUdiXAUpvZa7AjkS2oYWA',
    tag: 'CDU-FASHION-05',
    status: 'ส่งมอบ 100%',
    description: 'งานติดตั้งตู้แช่พร้อมชุดคอมเพรสเซอร์ Condensing Unit ภายนอกอาคารและวางระบบท่อส่งสารทำความเย็น',
    detailedScope: [
      'ยกชุด Condensing Unit ชนิดประหยัดพลังงานขึ้นติดตั้งบนโครงสร้างเหล็ก',
      'เดินท่อทองแดงทนแรงดันสูง ระยะทางยาวข้ามชั้นอาคาร',
      'ติดตั้ง Oil Separator และ Suction Accumulator เพื่อยืดอายุคอมเพรสเซอร์',
      'แวคคั่มระบบต่ำกว่า 500 ไมครอน และเติมสารทำความเย็นตามน้ำหนักมาตรฐาน'
    ],
    specs: {
      capacity: 'Condensing Unit 15 HP x 4 Units',
      materials: 'Copper Pipe Type L + Aeroflex Class 1 Insulation'
    }
  },
  {
    id: 'kce-duct',
    title: 'KCE ลาดกระบัง - งานติดตั้งท่อลมและระบบแอร์ด้ก',
    client: 'KCE ELECTRONICS',
    location: 'นิคมอุตสาหกรรมลาดกระบัง, กรุงเทพฯ',
    category: 'duct',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2cTSieS8Tp5w1Z1VXU4OeUpDJ6Vhxks4L0lVPJ84qQJmAq5h7-WA8rjK0iyqFWIcPfuClyajofKJSaNQbglMDX7XEbd82QjgbOGLnrScsavxCS9jz4G8GYNMSocSB01q-cxotlskKBJBkyHKtrskqJdPaDaLpA_d5RMQlytog1EkVpcgPs7Wl0CfAA0zOTLA_oztomaA3nuLbv5_Gt0EAC5Db1srHlEk8e7g9dfT_J9NL1RTrwZk3-I5pI0loDFgukA',
    tag: 'DUCT-CLEANROOM-06',
    status: 'ส่งมอบ 100%',
    description: 'ติดตั้งท่อส่งลม Air Ductwork และระบบระบายอากาศสำหรับห้องไลน์สายผลิตแผงวงจรอิเล็กทรอนิกส์ที่มีความละเอียดสูง',
    detailedScope: [
      'ตัดขึ้นรูปท่อลมสังกะสีความหนา 0.8 มม. และ 1.0 มม. ตามแบบ CAD',
      'ประกอบท่อลมหน้าแปลน TDC พร้อมซีลยางกันลมรั่วตามมาตรฐาน SMACNA',
      'หุ้มฉนวนใยแก้วติดฟอยล์หนา 2 นิ้ว ความหนาแน่น 48 kg/m³',
      'ติดตั้งแอร์ฟิลเตอร์ HEPA Filter และหัว Diffuser จ่ายลมทั่วถึงห้อง',
      'ปรับสมดุลปริมาณลม (Air Balancing) และออกรายงานค่าความดันบวก (Positive Pressure)'
    ],
    specs: {
      capacity: 'Supply Air Flow 18,000 CFM',
      materials: 'Galvanized Sheet Steel + Glasswool Foil 2"',
      duration: 'ส่งมอบงานตรงตามกำหนด 100%'
    }
  },
  {
    id: 'jacket-fashion',
    title: 'งานหุ้มฉนวนและ Jacket Aluminum ท่อส่งความเย็น',
    client: 'FASHION ISLAND',
    location: 'ห้างแฟชั่นไอส์แลนด์, รามอินทรา',
    category: 'jacket',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCARzaafYLKhQNbSKIWYtVMySw5eTW9u0Vub7o03LxHs1he-Y086te6M45mL1upLnTEXXm3iPybsx8fsw0bf29l_Y6MM39afSzbyKWGBgFeMfcAxXCD3LOaER1oVH9-jFi1SaMijzkuHDdLZgNr5ERtfx6CiyrQ2U_mmxFVxC82GEZDMU2IKvfU6HH7oBD8cl0H98KyGk5XVblH8aHUCC2O7oD8dLm2iiZHsoEJC6hForWZ46qST0QomCTraEAJw3xnqg',
    tag: 'JACKET-ALUM-07',
    status: 'ส่งมอบ 100%',
    description: 'งานหุ้มฉนวนกันความร้อน-ความเย็น พร้อมแผ่นอลูมิเนียมแจ็คเก็ต (Aluminum Jacket) ป้องกันการสูญเสียพลังงานและไอควบแน่น',
    detailedScope: [
      'ทำความสะอาดพื้นผิวท่อเหล็กและท่อทองแดงก่อนหุ้มฉนวน',
      'หุ้มฉนวนยางดำสังเคราะห์ EPDM ชนิดเซลล์ปิดกันความชื้น',
      'ตัดและขึ้นรูปแผ่นอลูมิเนียมเกรด 1100 ความหนา 0.5 มม.',
      'ยึดรัดด้วยสายรัดสแตนเลส (Stainless Band) และซีลซิลิโคนกันน้ำทุกรอยต่อ',
      'ลดการสูญเสียพลังงานความเย็นได้มากกว่า 30%'
    ],
    specs: {
      materials: 'Aluminum Sheet 0.5mm + Closed-cell Elastomeric Foam',
      duration: 'เสร็จสิ้น 7 วัน'
    }
  },
  {
    id: 'sanden-jacket',
    title: 'บริษัท ซันเด้น - งานหุ้มฉนวนและ Jacket Stainless',
    client: 'SANDEN INTERCOOL',
    location: 'โรงงานซันเด้น อินเตอร์คูล, ปทุมธานี',
    category: 'jacket',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3XxHwTw2oUnkr6sLXbQvvOMBKYS7iatBgrNt3pUtoa9jxjd2jIg9rIsa3KT-o2WwQxCKVV4RcK4GhotytlmarzjTrIojVjQkD3vWIYctfRolyrPKYLb5Y9clyECFdqQIl7kSNqkaUj0cIkoLgh5YLY4r97Ritq_SlgHQa9l8Z4NfEFrNTgLEo43xb4LUA-kae0ynAWd6nYSnAs3-LNZ2Mw_iqUgD3pJ5Uk9GQDnCkRmOy9IQrZ_lqL8aA_puwKzHqZw',
    tag: 'JACKET-SUS-08',
    status: 'ส่งมอบ 100%',
    description: 'งานหุ้มแจ็คเก็ตสแตนเลส (Stainless Steel Jacket) สำหรับท่อระบบทำความเย็นในสภาพแวดล้อมที่ต้องการความทนทานต่อสารเคมี',
    detailedScope: [
      'ออกแบบแจ็คเก็ตสแตนเลส SUS304 ผิว 2B สำหรับพื้นที่ทำความสะอาดด้วยสารเคมีบ่อยครั้ง',
      'ติดตั้งฉนวน Aeroflex ความหนาแน่นสูง ไม่ซึมน้ำ',
      'งานเข้ามุม ข้องอ และข้อแยกสแตนเลสแบบเข้ารูปไร้คม ปลอดภัยต่อพนักงาน',
      'เพิ่มความสวยงามและความคงทนของระบบท่อได้ยาวนานกว่า 15 ปี'
    ],
    specs: {
      materials: 'Stainless Steel Sheet SUS304 No.4 Finish',
      duration: 'ส่งมอบงานตรงเวลา 100%'
    }
  },
  {
    id: 'isuzu-drain',
    title: 'ISUZU ลาดกระบัง - งานติดตั้งถาดเดรนน้ำทิ้ง AHU',
    client: 'ISUZU MOTORS',
    location: 'โรงงานอีซูซุมอเตอร์ ลาดกระบัง',
    category: 'duct',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-qGUSm7ZEeBXF26YBXUY6jp0MMLjQUgNDA6se1bgmLLVVQBd_n4eqklj5zAoJuP6NYfKf0dFWR4K3QmBoCUp0e0GCEApUnBYBMhNLwFvWOQFudxJYW4zRRXBB03VqFyBRutE_FP5pMIBTpfWumP7TIXor4uxZERCcnXwfvxptB5qfKWn0oB3Xv_jalWtmzhDAY_V-S262YXZAr-Fn8_5-9xOaDCjMOhvnJ0wqz1oZvNahdrB7Wjuw4kgUD_0LCnkXpQ',
    tag: 'ISUZU-DRAIN-09',
    status: 'ส่งมอบ 100%',
    description: 'งานประกอบและติดตั้งถาดรองน้ำทิ้งสแตนเลสสำหรับชุด AHU โรงงานประกอบรถยนต์ ป้องกันปัญหาน้ำรั่วซึมกระทบสายการผลิต',
    detailedScope: [
      'สำรวจและวัดขนาดพื้นที่ใต้ชุด AHU ขนาดใหญ่ในสายการผลิตพ่นสี',
      'พับขึ้นรูปถาดรองน้ำสแตนเลส SUS304 แบบมีความลาดเอียงระบายน้ำไว',
      'เชื่อมต่อท่อน้ำทิ้ง PVC หุ้มฉนวนป้องกันการเกิด Condensation',
      'ติดตั้งขายึดโครงสร้างเหล็กกล่องพ่นสีกันสนิมแข็งแรงรับน้ำหนัก',
      'ทดสอบขังน้ำและตรวจการไหลของน้ำทิ้ง ไม่มีปัญหาการตกค้าง'
    ],
    specs: {
      materials: 'Stainless Steel SUS304 หนา 1.5 มม.',
      capacity: 'รองรับชุด AHU ขนาด 25,000 CFM'
    }
  },
  {
    id: 'isuzu-insulation',
    title: 'ISUZU ลาดกระบัง - งานเปลี่ยนฉนวนใยแก้วชุด AHU',
    client: 'ISUZU MOTORS',
    location: 'โรงงานอีซูซุมอเตอร์ ลาดกระบัง',
    category: 'duct',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL-Jb355pSg-k7cROZ-MC6GypLc3riF3EBUFwukxiI_mu1JPt_H4baQ4oa4jTvk8M-XvYAVN7A2Ky9Wr12mcFZVtVCpxglpGsy8VT3VD8nW28qZ_zzkRFAZnX6jXX2B8n2DIjwpnuc_h7wg77ki6SUq3FQ_EyOyGXzaADuFXvPCFVFenH50WWiPq_5BNQ3hfMOb9WSjbPQAL8ifooqHddpjSl2j62N6ntYTlb-j9rS8qYIsH9H9g93720v-HZ2N9Emxg',
    tag: 'ISUZU-INSUL-10',
    status: 'ส่งมอบ 100%',
    description: 'เปลี่ยนฉนวนใยแก้วและเคลือบสารป้องกันความชื้นภายในเครื่องส่งลมเย็น AHU เพิ่มประสิทธิภาพการทำความเย็นและประหยัดไฟ',
    detailedScope: [
      'รื้อถอนฉนวนเก่าที่เสื่อมสภาพและเกิดเชื้อราภายในตัวเครื่อง AHU',
      'ทำความสะอาดและพ่นน้ำยาฆ่าเชื้อแบคทีเรียตามมาตรฐานสุขอนามัยโรงงาน',
      'ติดตั้งฉนวนใยแก้วชนิดพิเศษเคลือบผิวกันการหลุดรอดของเส้นใย',
      'ซีลขอบและรอยต่อด้วยเทปอลูมิเนียมฟอยล์ทนความร้อนสูง',
      'ส่งผลให้อุณหภูมิลมจ่ายเย็นลง 2.5°C และลดการกินกระแสไฟฟ้าของพัดลม AHU'
    ],
    specs: {
      materials: 'High-density Glasswool with Antibacterial Coating',
      duration: 'ดำเนินการช่วงวันหยุดสัปดาห์ 2 วัน'
    }
  },
  {
    id: 'toshiba-diffuser',
    title: 'Toshiba Carrier บางกะดี - ภาพงานย้ายหัวลมจ่าย Air Diffuser',
    client: 'TOSHIBA CARRIER',
    location: 'สวนอุตสาหกรรมบางกะดี, ปทุมธานี',
    category: 'duct',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgJQDcQT9AZceJvmmdQbdvrTgyr3t98TDR_DHbOiu1WcV3DzVaSfkWYf0p2i2dcavU9XKy5fX5rxRdOwo7BH3a0WnCqq0FIqbyoEqr1dSrWRnviNfTRQEUotXvkYHhiGGgD_AN0kehMH7e6getPMySXrI6VjdYZXpzf60V4r7Zc7LPBi_ZcndXfQVZ8t0BuooyoqGUjsFSaQKD_4rDA88p20w0TN01V2zBnVWFBRoTUjlxiewwgoQCkuzJotrlPA-Z1Q',
    tag: 'TOSHIBA-DIFF-11',
    status: 'ส่งมอบ 100%',
    description: 'ปรับปรุงแนวท่อลม ปรับตำแหน่งหัวจ่ายลมเย็นตามการปรับผังเครื่องจักรไลน์ผลิตใหม่ ให้การไหลเวียนอากาศถูกต้องตามหลักพลศาสตร์',
    detailedScope: [
      'สำรวจแนวท่อเดิมและออกแบบแนวท่อลมแยกย่อยใหม่ให้เหมาะสมกับผังไลน์ผลิตใหม่',
      'ติดตั้งท่อลมยืดหยุ่น Flexible Duct ชนิดหุ้มฉนวนกันความร้อน',
      'ย้ายและติดตั้งหัวจ่ายลมทรงกลมและทรงสี่เหลี่ยม (Square Diffuser)',
      'วัดความเร็วลม (Air Velocity) และปรับแดมเปอร์ให้อากาศกระจายสม่ำเสมอทั่วทุกจุดทำงาน'
    ],
    specs: {
      capacity: 'ปรับตำแหน่งหัวลมจ่าย 24 จุด',
      duration: 'ส่งมอบงานภายใน 4 วัน'
    }
  },
  {
    id: 'food-evap',
    title: 'งานเปลี่ยนคอยล์ร้อน & คอยล์เย็น ห้องเก็บวัตถุดิบ',
    client: 'FOOD FACTORY',
    location: 'โรงงานแปรรูปอาหาร, กรุงเทพฯ',
    category: 'chiller',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrNHuUIvL4xGzLOIHomuCP30x_qTRAoDF74tS_PtLW8Cucdkk7IVm14N2uWfjGyn2kTfPYuopDDxJ6xlQV5uVM1GVlWw29FwxJR-9cgLAP0Ncnm6kCvYfNVAXNTqRs4yFomRIUKIs3ZBI43_Gbz4LouoqqsUpHH6iOFUBiSyGCHchHwqytSFHk8shyjJQfwYt2uvRByPZS35k1v_kouQDRMydCBqVHtDRm1GmrveNmdQDtX_USK_QEt3Mgmnx7S_4L8Q',
    tag: 'EVAP-COIL-12',
    status: 'ส่งมอบ 100%',
    description: 'ปรับปรุงระบบคอยล์เย็นสแตนเลสกันสนิมและ Condenser Unit สำหรับห้องควบคุมอุณหภูมิวัตถุดิบเพื่อรักษาความสดและยืดอายุสินค้า',
    detailedScope: [
      'รื้อถอนชุดคอยล์เย็นเดิมที่มีการผุกร่อนจากไอเกลือและสารเคมีทำความสะอาด',
      'ติดตั้งชุด Evaporator Unit ชนิดฟินอลูมิเนียมเคลือบ Blue Fin และโครงสแตนเลส',
      'เปลี่ยนชุดคอนเดนเซอร์ระบายความร้อนภายนอกประสิทธิภาพสูง',
      'ทดสอบระบบละลายน้ำแข็ง Defrost Cycle อัตโนมัติ ป้องกันน้ำแข็งเกาะฟินคอยล์'
    ],
    specs: {
      temperature: 'ควบคุมที่ -5°C ถึง 0°C',
      materials: 'Stainless Case + Blue Fin Anti-corrosion',
      duration: 'ดำเนินการแล้วเสร็จตามกำหนด 100%'
    }
  }
];

export const STANDARDS = [
  {
    icon: 'health_and_safety',
    title: 'Safety First Protocol',
    desc: 'ช่างทุกคนมีใบรับรองความปลอดภัย สวมใส่อุปกรณ์ PPE ครบชุด พร้อมระบบตรวจสอบ Hot Work Permit ก่อนปฏิบัติงานเชื่อมทุกครั้ง',
    color: 'secondary'
  },
  {
    icon: 'workspace_premium',
    title: 'SUS 304 & PIR Grade B1',
    desc: 'เลือกใช้วัสดุสแตนเลส SUS 304 และแผ่นฉนวน PIR ปลอดภัย ไม่ลามไฟ Food-grade ป้องกันแบคทีเรียตามมาตรฐาน GMP/HACCP',
    color: 'orange'
  },
  {
    icon: 'speed',
    title: 'Pressure & Vacuum Testing',
    desc: 'ทดสอบแรงดันระบบท่อน้ำยาด้วยก๊าซไนโตรเจนและดึงสุญญากาศ (Deep Vacuum Test) ก่อนจ่ายสารทำความเย็นเข้าระบบทุกไซต์งาน',
    color: 'secondary'
  },
  {
    icon: 'event_repeat',
    title: 'Annual PM Maintenance',
    desc: 'สัญญาบริการบำรุงรักษาเชิงป้องกัน ตรวจเช็คกระแสไฟ ล้างระบบ เปลี่ยนถ่ายน้ำมันคอมเพรสเซอร์ และออกใบรับรองระบบประจำปี',
    color: 'orange'
  }
];
