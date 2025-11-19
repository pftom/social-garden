import React, { useState } from 'react';
import { CardData } from '../types';
import { Wand2, RefreshCw, UploadCloud } from 'lucide-react';
import { generateMetadata } from '../services/geminiService';

interface Props {
  data: CardData;
  onChange: (data: CardData) => void;
}

export const InputSection: React.FC<Props> = ({ data, onChange }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState('');

  const handleChange = (field: keyof CardData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const handleAIAutoFill = async () => {
    if (!topic) return;
    setIsLoading(true);
    try {
      const generated = await generateMetadata(topic);
      // Preserve user uploaded avatar if AI doesn't provide one (which it won't)
      onChange({ ...data, ...generated, date: data.date || 'Today' });
    } catch (e) {
      alert('Failed to generate metadata. Ensure API Key is set in env or check console.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-700">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <div className="w-2 h-6 bg-green-500 rounded-full"></div>
        Configuration
      </h2>

      {/* AI Generator Section */}
      <div className="mb-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
        <label className="block text-xs font-semibold text-green-400 mb-2 uppercase tracking-wider">
            AI Magic Auto-Fill
        </label>
        <div className="flex gap-2">
            <input
                type="text"
                placeholder="Paste a URL or Topic (e.g. 'New iPhone 16 launch')"
                className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:ring-2 focus:ring-green-500 outline-none placeholder-slate-500"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
            />
            <button 
                onClick={handleAIAutoFill}
                disabled={isLoading || !topic}
                className="bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors"
            >
                {isLoading ? <RefreshCw className="animate-spin" size={16} /> : <Wand2 size={16} />}
                Generate
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Title</label>
            <input 
                className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                value={data.title} 
                onChange={(e) => handleChange('title', e.target.value)}
            />
        </div>
         <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Site Name</label>
            <input 
                className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                value={data.siteName} 
                onChange={(e) => handleChange('siteName', e.target.value)}
            />
        </div>
        <div className="md:col-span-2">
            <label className="block text-xs font-medium text-slate-400 mb-1">Description</label>
            <textarea 
                className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                rows={3}
                value={data.description} 
                onChange={(e) => handleChange('description', e.target.value)}
            />
        </div>
        <div className="md:col-span-2">
            <label className="block text-xs font-medium text-slate-400 mb-1">Image URL (or Upload)</label>
            <div className="flex gap-2">
                <input 
                    className="flex-1 bg-slate-700 border border-slate-600 rounded p-2 text-white text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                    value={data.imageUrl} 
                    onChange={(e) => handleChange('imageUrl', e.target.value)}
                    placeholder="https://..."
                />
                 <label className="cursor-pointer bg-slate-600 hover:bg-slate-500 text-white px-3 py-2 rounded flex items-center justify-center transition-colors" title="Upload Image">
                    <UploadCloud size={18} />
                    <input type="file" className="hidden" onChange={(e) => {
                        const file = e.target.files?.[0];
                        if(file) {
                            const url = URL.createObjectURL(file);
                            handleChange('imageUrl', url);
                        }
                    }} />
                </label>
            </div>
        </div>
        <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Domain (e.g. refly.ai)</label>
            <input 
                className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                value={data.domain} 
                onChange={(e) => handleChange('domain', e.target.value)}
            />
        </div>
         <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Display URL</label>
            <input 
                className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                value={data.urlOrTopic || ''} 
                onChange={(e) => handleChange('urlOrTopic', e.target.value)}
            />
        </div>
        <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Tags (comma separated)</label>
             <input 
                className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                value={data.tags.join(', ')} 
                onChange={(e) => handleChange('tags', e.target.value.split(',').map(s => s.trim()))}
            />
        </div>
         <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Author Name</label>
            <input 
                className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                value={data.authorName} 
                onChange={(e) => handleChange('authorName', e.target.value)}
            />
        </div>
         <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Author Handle</label>
            <input 
                className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                value={data.authorHandle} 
                onChange={(e) => handleChange('authorHandle', e.target.value)}
            />
        </div>
        <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Author Avatar</label>
            <div className="flex gap-2">
                <input 
                    className="flex-1 bg-slate-700 border border-slate-600 rounded p-2 text-white text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                    value={data.authorImage || ''} 
                    onChange={(e) => handleChange('authorImage', e.target.value)}
                    placeholder="https://..."
                />
                 <label className="cursor-pointer bg-slate-600 hover:bg-slate-500 text-white px-3 py-2 rounded flex items-center justify-center transition-colors" title="Upload Avatar">
                    <UploadCloud size={18} />
                    <input type="file" className="hidden" onChange={(e) => {
                        const file = e.target.files?.[0];
                        if(file) {
                            const url = URL.createObjectURL(file);
                            handleChange('authorImage', url);
                        }
                    }} />
                </label>
            </div>
        </div>
      </div>
    </div>
  );
};