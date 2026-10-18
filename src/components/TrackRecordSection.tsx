import React, { useState, useMemo } from 'react';
import { PROJECTS, ProjectItem } from '../data/companyData';

interface TrackRecordSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  selectedClientFilter?: string;
  onClearClientFilter?: () => void;
}

export const TrackRecordSection: React.FC<TrackRecordSectionProps> = ({
  onSelectProject,
  selectedClientFilter,
  onClearClientFilter,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterButtons = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'coldroom', label: 'ห้องเย็น & ตู้แช่' },
    { id: 'duct', label: 'ระบบท่อลม & AHU' },
    { id: 'chiller', label: 'ระบบ Chiller & ท่อ' },
    { id: 'jacket', label: 'หุ้มฉนวน & Jacket' },
  ];

  const handleResetAllFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    if (onClearClientFilter) {
      onClearClientFilter();
    }
  };

  const isAnyFilterActive =
    activeCategory !== 'all' || searchQuery.trim() !== '' || Boolean(selectedClientFilter);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((item) => {
      // Category match
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;

      // Client match if client filter applied
      const matchClient =
        !selectedClientFilter ||
        item.client.toLowerCase().includes(selectedClientFilter.toLowerCase());

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.client.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);

      return matchCategory && matchClient && matchSearch;
    });
  }, [activeCategory, selectedClientFilter, searchQuery]);

  return (
    <section className="w-full py-20 bg-surface scroll-mt-20" id="track-record">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-5 bg-on-tertiary-container rounded-xs"></div>
              <span className="font-label-eyebrow text-secondary uppercase tracking-widest text-xs font-bold">
                ENGINEERING TRACK RECORD
              </span>
            </div>
            <h2 className="font-headline-lg text-2xl lg:text-3xl text-primary font-bold mt-2">
              ผลงานโครงการและความไว้วางใจ
            </h2>
            <p className="font-body-md text-on-surface-variant mt-1 text-sm">
              ภาพถ่ายผลงานการติดตั้งจริง ณ ไซต์งานลูกค้าองค์กรและโรงงานอุตสาหกรรม
            </p>
          </div>

          {/* Search bar & Category filters */}
          <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="ค้นหาโครงการ หรือ ลูกค้า..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded bg-surface-container text-xs font-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary w-full sm:w-56"
              />
              <span className="material-symbols-outlined text-sm text-on-surface-variant absolute left-2.5 top-2 pointer-events-none">
                search
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1.5 text-xs text-on-surface-variant hover:text-primary cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5" id="gallery-filter-buttons">
              {filterButtons.map((btn) => {
                const isActive = activeCategory === btn.id;
                return (
                  <button
                    key={btn.id}
                    onClick={() => {
                      if (btn.id === 'all') {
                        handleResetAllFilters();
                      } else {
                        setActiveCategory(btn.id);
                      }
                    }}
                    className={`px-3 py-1.5 rounded font-label-technical text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-primary text-white shadow-xs'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    {btn.label}
                  </button>
                );
              })}

              {/* Extra prominent reset button when filters are active */}
              {isAnyFilterActive && (
                <button
                  onClick={handleResetAllFilters}
                  className="px-2.5 py-1.5 rounded text-xs font-semibold bg-tertiary-container/10 text-on-tertiary-container hover:bg-tertiary-container/20 transition-colors flex items-center gap-1 cursor-pointer"
                  title="รีเซ็ตตัวกรองทั้งหมดเพื่อแสดงผลงานทั้งหมด"
                >
                  <span className="material-symbols-outlined text-sm">restart_alt</span>
                  <span>รีเซ็ต</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Selected client notice if active */}
        {selectedClientFilter && (
          <div className="mb-6 flex items-center justify-between p-3.5 bg-secondary/10 rounded-xl text-xs border border-secondary/20 shadow-xs">
            <div className="flex items-center gap-2 text-secondary font-medium">
              <span className="material-symbols-outlined text-base">filter_alt</span>
              <span>กำลังแสดงผลงานเฉพาะลูกค้า: <strong>{selectedClientFilter}</strong></span>
            </div>
            <button
              onClick={handleResetAllFilters}
              className="inline-flex items-center gap-1 px-3 py-1 rounded bg-surface text-primary font-bold hover:bg-primary hover:text-white transition-all shadow-xs cursor-pointer text-xs"
            >
              <span className="material-symbols-outlined text-sm">restart_alt</span>
              <span>รีเซ็ตตัวกรอง (ดูทั้งหมด)</span>
            </button>
          </div>
        )}

        {/* Gallery Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center bg-surface-container-low rounded-xl border border-dashed border-outline-variant/40">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">
              inventory_2
            </span>
            <p className="font-title-md text-sm text-primary font-semibold">
              ไม่พบรายการโครงการที่ตรงกับเงื่อนไขการค้นหา
            </p>
            <p className="font-body-sm text-xs text-on-surface-variant mt-1">
              ลองเปลี่ยนคำค้นหา หรือรีเซ็ตตัวกรอง
            </p>
            <button
              onClick={handleResetAllFilters}
              className="mt-4 px-5 py-2.5 bg-primary text-white text-xs font-semibold rounded cursor-pointer hover:bg-primary-container transition-colors inline-flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-base">refresh</span>
              <span>รีเซ็ตตัวกรองและแสดงผลงานทั้งหมด</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="project-gallery">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectProject(item)}
                className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all group cursor-pointer border border-outline-variant/20 hover:border-secondary/40 flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden h-60 bg-primary/20">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.imageUrl}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-primary/85 backdrop-blur-sm text-white px-2.5 py-1 rounded text-xs font-label-eyebrow">
                      {item.client}
                    </span>
                    <span className="absolute top-3 right-3 bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-xs font-label-eyebrow font-bold">
                      {item.status}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="font-label-eyebrow text-xs text-secondary font-bold">
                      {item.location}
                    </div>
                    <h3 className="font-title-md text-base text-primary font-bold group-hover:text-secondary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="font-body-sm text-on-surface-variant text-xs line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs border-t border-outline-variant/20 text-on-surface-variant">
                  <span className="font-label-technical text-[11px] text-secondary font-medium">
                    {item.tag}
                  </span>
                  <span className="font-label-technical font-semibold text-secondary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    คลิกดูรายละเอียด
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
