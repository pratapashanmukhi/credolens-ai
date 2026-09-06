import React, { useState } from 'react';
import { X, UploadCloud, FileText, CheckCircle2, Loader2, Sparkles, ArrowRight } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-[#0e1422] border border-[#1a2233] rounded-xl w-full max-w-xl shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-3.5 border-b border-[#1a2233] flex items-center justify-between bg-[#090d16]">
          <div className="flex items-center gap-2">
            <UploadCloud className="w-4 h-4 text-blue-400" />
            <span className="font-bold text-xs text-slate-100">Ingest Financial Statement Dossier</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-[#161f30] transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 text-xs">
          
          {/* Dropzone */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border border-dashed rounded-xl p-6 text-center transition-all ${
              dragActive ? 'border-blue-500 bg-blue-950/20' : 'border-[#1e293b] hover:border-slate-600 bg-[#090d16]'
            }`}
          >
            <UploadCloud className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <h4 className="text-xs font-bold text-slate-200">Drag & drop Bank Statement PDF, GSTR-3B, or Balance Sheet</h4>
            <p className="text-slate-500 mt-1 text-[10px]">Supports PDF, CSV, Excel files up to 50 MB with OCR layer inspection</p>

            <div className="mt-3 flex justify-center">
              <label className="px-3 py-1.5 rounded-lg bg-[#111622] hover:bg-[#161f30] text-slate-200 font-medium cursor-pointer border border-[#1a2233] transition text-xs">
                <span>Browse Local Files</span>
                <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.csv,.xlsx" />
              </label>
            </div>

            {selectedFile && (
              <div className="mt-3 p-2 rounded-lg bg-[#111622] border border-[#1a2233] flex items-center justify-between max-w-sm mx-auto text-left">
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-blue-400" />
                  <span className="font-medium text-slate-200 truncate text-[11px]">{selectedFile.name}</span>
                </div>
                <span className="text-[9px] text-slate-400 font-mono">{(selectedFile.size / 1024).toFixed(0)} KB</span>
              </div>
            )}
          </div>

          {/* Pipeline progress */}
          {isScanning && (
            <div className="p-3 rounded-lg bg-[#090d16] border border-[#1a2233] space-y-1.5">
              <div className="flex items-center justify-between font-semibold text-slate-300 text-xs">
                <span className="flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 text-blue-400 animate-spin" />
                  <span>Multi-Agent Parsing Pipeline...</span>
                </span>
                <span className="text-blue-400 font-mono text-[10px]">
                  {scanStep === 1 ? 'OCR LayoutLMv3' : scanStep === 2 ? 'Graph RAG Neo4j' : scanStep === 3 ? 'DSCR Engine' : 'CAM Formulation'}
                </span>
              </div>
              <div className="w-full bg-[#111622] h-1.5 rounded-full overflow-hidden">
                <div
                  style={{ width: `${(scanStep / 4) * 100}%` }}
                  className="bg-blue-500 h-full rounded-full transition-all duration-300"
                />
              </div>
            </div>
          )}

          {scanStep === 4 && (
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-900/60 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-bold text-slate-100">Forensic Audit & CAM Compiled!</div>
                  <div className="text-slate-400 text-[10px]">All 4 agents have synthesized the risk profile and calculated DSCR.</div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Actions */}
        <div className="p-3 border-t border-[#1a2233] bg-[#090d16] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-xs font-medium"
          >
            Cancel
          </button>

          {scanStep === 4 ? (
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition text-xs"
            >
              <span>View Audit in Studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={startExtraction}
              disabled={isScanning}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold transition text-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isScanning ? 'Extracting...' : 'Start Multi-Agent Audit'}</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}