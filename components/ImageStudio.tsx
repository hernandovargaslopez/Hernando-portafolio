
import React, { useState, useRef } from 'react';
import { editImage } from '../services/geminiService';

const ImageStudio: React.FC = () => {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSourceImage(reader.result as string);
        setProcessedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcess = async () => {
    if (!sourceImage || !prompt.trim()) return;

    setIsProcessing(true);
    setError(null);

    try {
      const base64Data = sourceImage.split(',')[1];
      const mimeType = sourceImage.split(';')[0].split(':')[1];
      const result = await editImage(base64Data, prompt, mimeType);
      if (result) {
        setProcessedImage(result);
      } else {
        setError("Failed to generate edited image.");
      }
    } catch (err) {
      setError("An error occurred during image processing.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-700 pb-8">
      <header className="mb-4">
        <h2 className="text-2xl font-bold text-white mb-1">AI Design Studio</h2>
        <p className="text-slate-400 text-sm">Upload mockups and use AI to iterate on designs instantly.</p>
      </header>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className={`relative h-[320px] border-2 border-dashed rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden transition-all ${
              sourceImage ? 'border-slate-700' : 'border-slate-800 hover:border-indigo-500/50 bg-slate-900/50'
            }`}
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange} 
            />
            {sourceImage ? (
              <img src={sourceImage} alt="Source" className="w-full h-full object-contain" />
            ) : (
              <div className="text-center p-6">
                <div className="text-4xl mb-3 opacity-50">🖼️</div>
                <p className="text-slate-300 font-semibold text-sm">Upload Mockup</p>
                <p className="text-slate-500 text-[10px] mt-1 uppercase tracking-wider font-bold">PNG, JPG, WEBP</p>
              </div>
            )}
            {sourceImage && (
              <div className="absolute top-3 right-3 bg-slate-900/80 px-2 py-1 rounded-lg text-[10px] text-white font-bold uppercase">
                Original
              </div>
            )}
          </div>

          <div className="glass p-5 rounded-2xl border border-slate-700/50 space-y-3">
            <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest">Instruction</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., 'Change button to rounded indigo'..."
              className="w-full h-24 bg-slate-900/50 border border-slate-700 rounded-full p-3 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 resize-none transition-all"
            />
            <button
              onClick={handleProcess}
              disabled={isProcessing || !sourceImage || !prompt.trim()}
              className={`w-full py-3.5 rounded-full font-bold flex items-center justify-center space-x-2 transition-all ${
                isProcessing || !sourceImage || !prompt.trim()
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-primary-gradient text-white shadow-lg shadow-indigo-600/20 active:scale-[0.98]'
              }`}
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span className="text-sm">Processing...</span>
                </>
              ) : (
                <>
                  <span className="text-sm">✨ Transform with Gemini</span>
                </>
              )}
            </button>
            {error && <p className="text-red-400 text-[10px] text-center font-bold">{error}</p>}
          </div>
        </div>

        <div className="h-[320px] lg:h-full border border-slate-800 rounded-2xl bg-slate-950/50 flex items-center justify-center relative overflow-hidden">
          {processedImage ? (
            <img src={processedImage} alt="Result" className="w-full h-full object-contain animate-in zoom-in-95 duration-500" />
          ) : (
            <div className="text-center text-slate-600">
              <div className="text-5xl mb-3">✨</div>
              <p className="text-sm font-medium">Transformed mockup results</p>
            </div>
          )}
          {processedImage && (
            <div className="absolute top-3 right-3 bg-primary-gradient px-2 py-1 rounded-lg text-[10px] text-white font-bold shadow-lg uppercase">
              AI Powered
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageStudio;