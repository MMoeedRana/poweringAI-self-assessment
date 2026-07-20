"use client";

import { useState } from 'react';
import { 
  ChevronDown, 
  Download, 
  Mail,
  FileText,
  FileSpreadsheet,
  Presentation,
  FileCode
} from 'lucide-react';

interface ReportCard {
  id: string;
  type: 'pdf' | 'excel' | 'powerpoint' | 'csv';
  title: string;
  description: string;
  isAvailable: boolean;
  downloadExt: string;
}

interface LeadSubmission {
  id: string;
  initials: string;
  name: string;
  company: string;
  industry: string;
  language: string;
  score: number;
  status: 'Completed';
  date: string;
}

export default function SubmissionsReportsPage() {
  const [reports] = useState<ReportCard[]>([
    {
      id: 'rep-1',
      type: 'pdf',
      title: 'PDF report',
      description: 'Branded, spider chart + heatmap',
      isAvailable: true,
      downloadExt: '.pdf'
    },
    {
      id: 'rep-2',
      type: 'excel',
      title: 'Excel',
      description: 'Full response list + averages',
      isAvailable: false,
      downloadExt: '.xlsx'
    },
    {
      id: 'rep-3',
      type: 'powerpoint',
      title: 'PowerPoint',
      description: 'Slide-ready results deck',
      isAvailable: false,
      downloadExt: '.pptx'
    },
    {
      id: 'rep-4',
      type: 'csv',
      title: 'CSV',
      description: 'Raw data for analysis',
      isAvailable: false,
      downloadExt: '.csv'
    }
  ]);

  const [submissions] = useState<LeadSubmission[]>([
    { id: '1', initials: 'LH', name: 'Lena Hoffmann', company: 'Vaillant Group', industry: 'Building & construction', language: 'DE', score: 72, status: 'Completed', date: '16 Jun 2026' },
    { id: '2', initials: 'JS', name: 'Jonas Schmidt', company: 'Siemens', industry: 'Industrial Automation', language: 'FR', score: 85, status: 'Completed', date: '09 Sep 2025' },
    { id: '3', initials: 'CV', name: 'Clara Vogel', company: 'BASF', industry: 'Chemicals', language: 'DE', score: 65, status: 'Completed', date: '30 Apr 2027' },
    { id: '4', initials: 'AS', name: 'Andreas Schulz', company: 'Deutsche Telekom', industry: 'Telecommunications', language: 'EN', score: 78, status: 'Completed', date: '22 Jan 2026' },
    { id: '5', initials: 'MK', name: 'Maria Klein', company: 'BMW Group', industry: 'Automotive', language: 'ES', score: 90, status: 'Completed', date: '11 Nov 2026' },
    { id: '6', initials: 'AS', name: 'Andreas Schulz', company: 'Deutsche Telekom', industry: 'Telecommunications', language: 'EN', score: 78, status: 'Completed', date: '22 Jan 2026' },
    { id: '7', initials: 'CV', name: 'Clara Vogel', company: 'BASF', industry: 'Chemicals', language: 'DE', score: 65, status: 'Completed', date: '30 Apr 2027' },
    { id: '8', initials: 'FB', name: 'Felix Bauer', company: 'Adidas', industry: 'Sportswear', language: 'EN', score: 80, status: 'Completed', date: '18 Dec 2025' },
    { id: '9', initials: 'MK', name: 'Maria Klein', company: 'BMW Group', industry: 'Automotive', language: 'ES', score: 90, status: 'Completed', date: '11 Nov 2026' }
  ]);

  return (
    <div className="flex min-h-screen font-sans antialiased select-none">

      <main className="flex-1 p-10 overflow-y-auto">

        <div className="mb-10">
          <div className="mb-4">
            <h2 className="text-[11px] font-black text-[#FF6624] tracking-wider uppercase">Powering Reports</h2>
            <p className="text-[13px] text-gray-400 font-medium mt-0.5">Generate a report</p>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <button className="bg-white border border-gray-200 rounded-xl px-4 py-2 flex items-center gap-3 shadow-sm text-[12.5px] font-bold text-gray-700 hover:bg-gray-50">
              All industries <ChevronDown className="size-4 text-gray-400" />
            </button>
            <button className="bg-white border border-gray-200 rounded-xl px-4 py-2 flex items-center gap-3 shadow-sm text-[12.5px] font-bold text-gray-700 hover:bg-gray-50">
              All languages <ChevronDown className="size-4 text-gray-400" />
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {reports.map((report) => (
              <div 
                key={report.id}
                className={`bg-white border rounded-2xl p-5 relative flex flex-col justify-between min-h-[175px] transition-all ${
                  report.isAvailable 
                    ? 'border-[#FF6624] ring-1 ring-orange-100 shadow-md shadow-orange-600/[0.02]' 
                    : 'border-gray-200/80 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)]'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 rounded-xl shrink-0 ${report.isAvailable ? 'bg-orange-50 text-[#FF6624]' : 'bg-gray-50 text-gray-400'}`}>
                      {report.type === 'pdf' && <FileText className="size-5" />}
                      {report.type === 'excel' && <FileSpreadsheet className="size-5" />}
                      {report.type === 'powerpoint' && <Presentation className="size-5" />}
                      {report.type === 'csv' && <FileCode className="size-5" />}
                    </div>
                    
                    {!report.isAvailable && (
                      <span className="bg-[#FF6624] text-white font-black text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider scale-95 origin-top-right">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <h3 className="text-[14px] font-black text-gray-900 tracking-tight">{report.title}</h3>
                  <p className="text-[11.5px] text-gray-400 font-medium mt-1 leading-snug">{report.description}</p>
                </div>

                <div className="mt-5">
                  {report.isAvailable ? (
                    <button className="w-full bg-[#FF6624] hover:bg-orange-600 text-white font-bold text-[12px] py-2 rounded-md flex items-center justify-center gap-2 transition-colors shadow-sm shadow-orange-600/10">
                      <Download className="size-3.5" strokeWidth={2.5} />
                      Download {report.downloadExt}
                    </button>
                  ) : (
                    <button disabled className="w-full bg-white border border-orange-400/50 text-orange-400/50 font-bold text-[12px] py-2 rounded-md flex items-center justify-center gap-2 cursor-not-allowed">
                      <Download className="size-3.5" />
                      Download {report.downloadExt}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-4">
            <div>
              <h2 className="text-[11px] font-black text-[#FF6624] tracking-wider uppercase">Lead Capture</h2>
              <p className="text-[14px] font-semibold mt-0.5">Recent submissions</p>
            </div>
            <span className="text-[11px] text-gray-400 font-semibold bg-gray-100/60 px-2 py-1 rounded-md">
              12 of 12 shown
            </span>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-[0_2px_12px_-3px_rgba(0,0,0,0.02)]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FFF1E8] border-b border-orange-100/40 text-[13px] font-bold text-gray-500 tracking-wide">
                  <th className="py-3.5 px-5">Respondent</th>
                  <th className="py-3.5 px-4">Company</th>
                  <th className="py-3.5 px-4">Industry</th>
                  <th className="py-3.5 px-4 text-center">Language</th>
                  <th className="py-3.5 px-4 text-center">Score</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {submissions.map((lead) => (
                  <tr key={lead.id} className="hover:bg-[#FBF8F5] transition-colors">
                    
                    <td className="py-3.5 px-5">
                      <div className="flex items-center gap-2.5">
                        <div className="size-6 rounded-md bg-[#FFF5F0] text-[#FF6624] font-black text-[10px] flex items-center justify-center border border-orange-100/50 uppercase">
                          {lead.initials}
                        </div>
                        <span className="text-[12.5px] font-bold text-gray-900 tracking-tight">{lead.name}</span>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 text-[12.5px] font-medium text-gray-600">{lead.company}</td>
                    <td className="py-3.5 px-4 text-[12.5px] font-medium text-gray-500">{lead.industry}</td>
                    
                    <td className="py-3.5 px-4 text-center">
                      <span className="text-[11px] font-bold text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md">
                        {lead.language}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-center text-[12.5px] font-extrabold text-gray-800">{lead.score}</td>
                    
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100/40">
                        <span className="size-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        {lead.status}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-[12.5px] font-medium text-gray-400 whitespace-nowrap">{lead.date}</td>
                    
                    <td className="py-3.5 px-5 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <button className="border border-orange-200 text-[#FF6624] hover:bg-orange-50 font-bold text-[11px] px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors">
                          <Mail className="size-3" strokeWidth={2.5} />
                          Resend Email
                        </button>
                        <button className="bg-[#FF6624] hover:bg-orange-600 text-white font-bold text-[11px] px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm shadow-orange-600/5">
                          <Download className="size-3" strokeWidth={2.5} />
                          Download
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}