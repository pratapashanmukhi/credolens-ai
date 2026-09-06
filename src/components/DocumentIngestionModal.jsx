import React, { useState } from 'react';
import { X, UploadCloud, FileText, CheckCircle2, ShieldCheck, Loader2, Sparkles, ArrowRight } from 'lucide-react';

export default function DocumentIngestionModal({ isOpen, onClose }) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);

  if (!isOpen) return null;

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const startExtraction = () => {
    setIsScanning(true);
    setScanStep(1);
    setTimeout(() => setScanStep(2), 700);
    setTimeout(() => setScanStep(3), 1400);
    setTimeout(() => {
      setScanStep(4);
      setIsScanning(false);
    }, 2100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <UploadCloud className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-sm text-slate-900">Ingest & Audit Financial Dossier</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-xs">
          
          {/* Dropzone */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all ${
              dragActive ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200 hover:border-slate-300 bg-slate-50'
            }`}
          >
            <UploadCloud className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h4 className="text-sm font-bold text-slate-900">Drag & drop Bank Statement PDF, GSTR-3B, or Balance Sheet</h4>
            <p className="text-slate-500 mt-1 text-[11px]">Supports PDF, CSV, Excel files up to 50 MB with OCR watermark inspection</p>

            <div className="mt-4 flex justify-center">
              <label className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold cursor-pointer border border-slate-200 shadow-xs transition">
                <span>Browse Files</span>
                <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.csv,.xlsx" />
              </label>
            </div>

            {selectedFile && (
              <div className="mt-4 p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between max-w-sm mx-auto text-left shadow-xs">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span className="font-medium text-slate-800 truncate">{selectedFile.name}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">{(selectedFile.size / 1024).toFixed(0)} KB</span>
              </div>
            )}
          </div>

          {/* Real-Time Extraction Pipeline Status */}
          {isScanning && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between font-semibold text-slate-700">
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                  <span>Multi-Agent Parsing Pipeline...</span>
                </span>
                <span className="text-blue-600 font-mono text-[11px] font-bold">
                  {scanStep === 1 ? 'OCR LayoutLMv3' : scanStep === 2 ? 'Graph RAG Neo4j' : scanStep === 3 ? 'DSCR Engine' : 'CAM Formulation'}
                </span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div
                  style={{ width: `${(scanStep / 4) * 100}%` }}
                  className="bg-blue-600 h-full rounded-full transition-all duration-300"
                />
              </div>
            </div>
          )}

          {scanStep === 4 && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">Forensic Audit & CAM Compiled!</div>
                  <div className="text-slate-600 text-[11px]">All 4 agents have synthesized the risk profile and calculated DSCR.</div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Actions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 font-medium"
          >
            Cancel
          </button>

          {scanStep === 4 ? (
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition shadow-sm"
            >
              <span>View Audit in Studio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={startExtraction}
              disabled={isScanning}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold transition shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isScanning ? 'Extracting...' : 'Start Multi-Agent Audit'}</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}