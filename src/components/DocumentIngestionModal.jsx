import React, { useState } from 'react';
import { X, UploadCloud, FileText, CheckCircle2, ShieldCheck, Loader2, Sparkles, ArrowRight } from 'lucide-react';

export default function DocumentIngestionModal({ isOpen, onClose, onApplyCustomCase }) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2">
            <UploadCloud className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-sm text-white">Upload & Audit New Financial Dossier</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
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
              dragActive ? 'border-emerald-500 bg-emerald-950/20' : 'border-slate-800 hover:border-slate-700 bg-slate-950/60'
            }`}
          >
            <UploadCloud className="w-10 h-10 text-emerald-400 mx-auto mb-3 animate-bounce" />
            <h4 className="text-sm font-bold text-white">Drag & drop Bank Statement PDF, GSTR-3B, or Balance Sheet</h4>
            <p className="text-slate-400 mt-1 text-[11px]">Supports PDF, CSV, Excel up to 50 MB with cryptographic watermark parsing</p>

            <div className="mt-4 flex justify-center">
              <label className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold cursor-pointer border border-slate-700 transition">
                <span>Browse Local Files</span>
                <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.csv,.xlsx" />
              </label>
            </div>

            {selectedFile && (
              <div className="mt-4 p-2.5 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between max-w-sm mx-auto text-left">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span className="font-medium text-slate-200 truncate">{selectedFile.name}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">{(selectedFile.size / 1024).toFixed(0)} KB</span>
              </div>
            )}
          </div>

          {/* Real-Time Extraction Pipeline Status */}
          {isScanning && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between font-semibold text-slate-300">
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-emerald-400 animate-spin" />
                  <span>Multi-Agent Parsing Pipeline...</span>
                </span>
                <span className="text-emerald-400 font-mono text-[11px]">
                  {scanStep === 1 ? 'OCR LayoutLMv3' : scanStep === 2 ? 'Graph RAG Neo4j' : scanStep === 3 ? 'DSCR Engine' : 'CAM Formulation'}
                </span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                <div
                  style={{ width: `${(scanStep / 4) * 100}%` }}
                  className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                />
              </div>
            </div>
          )}

          {scanStep === 4 && (
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-bold text-white text-sm">Forensic Audit & CAM Compiled!</div>
                  <div className="text-slate-300 text-[11px]">All 4 agents have synthesized the risk profile and calculated DSCR.</div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Actions */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-slate-400 hover:text-white font-medium"
          >
            Cancel
          </button>

          {scanStep === 4 ? (
            <button
              onClick={() => {
                onClose();
              }}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition shadow-md shadow-emerald-500/20"
            >
              <span>View Audit in Studio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={startExtraction}
              disabled={isScanning}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold transition shadow-md shadow-emerald-500/20"
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