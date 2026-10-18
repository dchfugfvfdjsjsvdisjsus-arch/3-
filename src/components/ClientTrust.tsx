import React, { useState } from 'react';
import { CLIENTS } from '../data/companyData';

interface ClientTrustProps {
  onFilterByClient?: (clientName: string) => void;
}

export const ClientTrust: React.FC<ClientTrustProps> = ({ onFilterByClient }) => {
  const [selectedClient, setSelectedClient] = useState<typeof CLIENTS[0] | null>(null);

  const handleClientClick = (client: typeof CLIENTS[0]) => {
    setSelectedClient(client);
    if (onFilterByClient) {
      onFilterByClient(client.name);
    }
  };

  return (
    <section className="w-full bg-surface-container py-8 shadow-inner border-y border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="font-label-eyebrow text-secondary uppercase tracking-widest text-xs mb-6">
          ได้รับความไว้วางใจจากเครือโรงงานอุตสาหกรรมและห้างค้าปลีกชั้นนำทั่วประเทศ
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-8 opacity-90">
          {CLIENTS.map((client) => {
            const isSelected = selectedClient?.name === client.name;
            return (
              <button
                key={client.name}
                onClick={() => handleClientClick(client)}
                className={`px-5 py-2.5 rounded shadow-xs font-headline-md text-xs sm:text-sm tracking-wider font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-primary text-white scale-105 shadow-md ring-2 ring-secondary'
                    : 'bg-surface text-primary hover:bg-surface-container-high hover:scale-102'
                }`}
                title={`คลิกดูผลงานโครงการกับ ${client.name}`}
              >
                {client.name}
              </button>
            );
          })}
        </div>

        {selectedClient && (
          <div className="mt-4 p-3 bg-surface rounded-lg max-w-xl mx-auto shadow-xs border border-secondary/20 flex items-center justify-between gap-3 text-left animate-fadeIn">
            <div className="text-xs">
              <span className="font-bold text-primary">{selectedClient.name}:</span>{' '}
              <span className="text-on-surface-variant">{selectedClient.sector}</span> •{' '}
              <span className="text-secondary font-medium">{selectedClient.projectType}</span>
            </div>
            <button
              onClick={() => setSelectedClient(null)}
              className="text-on-surface-variant hover:text-primary text-xs font-bold px-2 py-0.5 rounded cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
