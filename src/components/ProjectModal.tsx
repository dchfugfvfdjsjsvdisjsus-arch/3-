import React from 'react';
import { ProjectItem } from '../data/companyData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestQuoteForProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestQuoteForProject,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 sm:p-6 animate-fadeIn">
      <div className="bg-surface rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-outline-variant/30">
        {/* Top Image banner with tags */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-primary">
          <img
            alt={project.title}
            src={project.imageUrl}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
            aria-label="Close modal"
          >
            ✕
          </button>

          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="bg-primary/90 text-white px-3 py-1 rounded text-xs font-label-eyebrow tracking-wider">
              {project.client}
            </span>
            <span className="bg-secondary-container text-on-secondary-container px-2.5 py-1 rounded text-xs font-label-eyebrow font-bold">
              {project.status}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="font-label-eyebrow text-secondary-fixed text-xs tracking-wider">
              PROJECT TAG: {project.tag}
            </div>
            <h3 className="font-headline-md text-lg sm:text-xl font-bold mt-1 leading-snug">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 text-xs sm:text-sm">
            <div>
              <div className="font-label-eyebrow text-on-surface-variant text-[11px] uppercase">สถานที่ติดตั้ง</div>
              <div className="font-semibold text-primary mt-0.5">{project.location}</div>
            </div>
            <div>
              <div className="font-label-eyebrow text-on-surface-variant text-[11px] uppercase">ลูกค้าองค์กร</div>
              <div className="font-semibold text-primary mt-0.5">{project.client}</div>
            </div>
            <div>
              <div className="font-label-eyebrow text-on-surface-variant text-[11px] uppercase">สถานะงาน</div>
              <div className="font-semibold text-secondary mt-0.5">{project.status}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-title-md text-primary font-bold text-base mb-2">สรุปภาพรวมโครงการ</h4>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Detailed Engineering Scope */}
          <div>
            <h4 className="font-title-md text-primary font-bold text-base mb-2">
              ขอบเขตงานและขั้นตอนวิศวกรรม (Scope of Work)
            </h4>
            <ul className="space-y-2">
              {project.detailedScope.map((scope, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-on-surface">
                  <span className="material-symbols-outlined text-sm text-secondary shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{scope}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specs if available */}
          {project.specs && Object.keys(project.specs).length > 0 && (
            <div className="p-4 bg-surface-container rounded-lg space-y-2 border border-outline-variant/20">
              <h4 className="font-label-technical text-xs font-bold text-primary uppercase">
                Technical Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {project.specs.capacity && (
                  <div>
                    <span className="text-on-surface-variant">Capacity / Load:</span>{' '}
                    <span className="font-semibold text-primary">{project.specs.capacity}</span>
                  </div>
                )}
                {project.specs.temperature && (
                  <div>
                    <span className="text-on-surface-variant">Temperature Control:</span>{' '}
                    <span className="font-semibold text-primary">{project.specs.temperature}</span>
                  </div>
                )}
                {project.specs.materials && (
                  <div>
                    <span className="text-on-surface-variant">Materials / Standard:</span>{' '}
                    <span className="font-semibold text-primary">{project.specs.materials}</span>
                  </div>
                )}
                {project.specs.duration && (
                  <div>
                    <span className="text-on-surface-variant">Timeline:</span>{' '}
                    <span className="font-semibold text-primary">{project.specs.duration}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded font-label-technical text-xs font-semibold text-on-surface-variant hover:bg-surface-container cursor-pointer"
            >
              ← กลับสู่หน้ารายการ
            </button>

            <button
              onClick={() => {
                const title = project.title;
                onClose();
                onRequestQuoteForProject(title);
              }}
              className="inline-flex items-center gap-2 bg-on-tertiary-container hover:bg-tertiary text-white px-5 py-2.5 rounded font-title-md text-xs sm:text-sm font-semibold shadow-sm cursor-pointer transition-colors"
            >
              <span className="material-symbols-outlined text-base">request_quote</span>
              <span>ขอใบเสนอราคางานลักษณะนี้</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
