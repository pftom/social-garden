import React, { useState } from 'react';
import { CardData, Platform } from './types';
import { InputSection } from './components/InputSection';
import { DiscordCard } from './components/cards/DiscordCard';
import { TwitterCard } from './components/cards/TwitterCard';
import { FacebookCard } from './components/cards/FacebookCard';
import { InstagramCard } from './components/cards/InstagramCard';
import { YouTubeCard } from './components/cards/YouTubeCard';
import { TikTokCard } from './components/cards/TikTokCard';
import { LinkedInCard } from './components/cards/LinkedInCard';
import { downloadCardAsSvg, batchDownload } from './utils/downloader';
import { Download, Layers, Share2 } from 'lucide-react';

const DEFAULT_DATA: CardData = {
  title: "Refly AI - Auto-Gen Video Template",
  description: "Automatically generate professional marketing videos from your images and text. No editing skills required.",
  imageUrl: "https://picsum.photos/seed/refly/800/500",
  domain: "refly.ai",
  siteName: "Refly.ai",
  authorName: "Refly AI",
  authorHandle: "refly_ai",
  authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Refly",
  tags: ["Alvideo", "VideoTemplate", "ReflyAI"],
  date: "Today at 10:30 AM",
  likes: "1.2K",
  comments: "345",
  urlOrTopic: "refly.ai/template",
};

const App: React.FC = () => {
  const [data, setData] = useState<CardData>(DEFAULT_DATA);
  const [activePlatform, setActivePlatform] = useState<Platform | 'All'>('All');

  const platforms = Object.values(Platform);

  const handleDownload = (platform: string) => {
      downloadCardAsSvg(`card-${platform}`, `refly-${platform.toLowerCase()}`);
  };

  const handleBatchDownload = () => {
      const ids = platforms.map(p => `card-${p}`);
      batchDownload(ids);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-4 md:p-8 font-sans selection:bg-green-500/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-10 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                    <Share2 className="text-white" size={24} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-white tracking-tight">Social Previewer</h1>
                    <p className="text-sm text-slate-400">Generate & Download cross-platform link previews</p>
                </div>
            </div>
            <div className="flex gap-3">
                <button 
                    onClick={handleBatchDownload}
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg border border-slate-700 transition-all text-sm font-medium"
                >
                    <Layers size={16} /> Batch SVG
                </button>
                 <button 
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg shadow-lg shadow-green-900/20 transition-all text-sm font-medium"
                    onClick={() => window.open('https://github.com', '_blank')}
                >
                    Get Started
                </button>
            </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Left Column: Controls */}
            <div className="lg:col-span-4 space-y-6">
                <InputSection data={data} onChange={setData} />
            </div>

            {/* Right Column: Previews */}
            <div className="lg:col-span-8">
                {/* Filter Tabs */}
                <div className="flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-hide mask-gradient">
                    <button 
                        onClick={() => setActivePlatform('All')}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activePlatform === 'All' ? 'bg-white text-black' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                    >
                        All Platforms
                    </button>
                    {platforms.map(p => (
                         <button 
                            key={p}
                            onClick={() => setActivePlatform(p)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activePlatform === p ? 'bg-white text-black' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                        >
                            {p}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className={`grid gap-6 ${activePlatform === 'All' ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1 max-w-lg mx-auto'}`}>
                    
                    {(activePlatform === 'All' || activePlatform === Platform.DISCORD) && (
                        <div className="space-y-3">
                            <div className="flex justify-between items-center px-1">
                                <span className="text-sm font-medium text-slate-400 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#5865F2]"></span>Discord</span>
                                <button onClick={() => handleDownload(Platform.DISCORD)} className="text-slate-500 hover:text-white p-1"><Download size={16} /></button>
                            </div>
                            <div className="bg-[#2f3136] p-6 rounded-xl border border-slate-800 shadow-xl flex justify-center">
                                <DiscordCard data={data} id={`card-${Platform.DISCORD}`} />
                            </div>
                        </div>
                    )}

                    {(activePlatform === 'All' || activePlatform === Platform.TWITTER) && (
                        <div className="space-y-3">
                             <div className="flex justify-between items-center px-1">
                                <span className="text-sm font-medium text-slate-400 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white"></span>Twitter / X</span>
                                <button onClick={() => handleDownload(Platform.TWITTER)} className="text-slate-500 hover:text-white p-1"><Download size={16} /></button>
                            </div>
                            <div className="bg-black p-6 rounded-xl border border-slate-800 shadow-xl flex justify-center">
                                <TwitterCard data={data} id={`card-${Platform.TWITTER}`} />
                            </div>
                        </div>
                    )}

                    {(activePlatform === 'All' || activePlatform === Platform.FACEBOOK) && (
                         <div className="space-y-3">
                             <div className="flex justify-between items-center px-1">
                                <span className="text-sm font-medium text-slate-400 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#1877F2]"></span>Facebook</span>
                                <button onClick={() => handleDownload(Platform.FACEBOOK)} className="text-slate-500 hover:text-white p-1"><Download size={16} /></button>
                            </div>
                            <div className="bg-[#F0F2F5] p-6 rounded-xl border border-slate-800 shadow-xl flex justify-center">
                                <FacebookCard data={data} id={`card-${Platform.FACEBOOK}`} />
                            </div>
                        </div>
                    )}

                    {(activePlatform === 'All' || activePlatform === Platform.INSTAGRAM) && (
                        <div className="space-y-3">
                             <div className="flex justify-between items-center px-1">
                                <span className="text-sm font-medium text-slate-400 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#E1306C]"></span>Instagram</span>
                                <button onClick={() => handleDownload(Platform.INSTAGRAM)} className="text-slate-500 hover:text-white p-1"><Download size={16} /></button>
                            </div>
                            <div className="bg-black p-6 rounded-xl border border-slate-800 shadow-xl flex justify-center">
                                <InstagramCard data={data} id={`card-${Platform.INSTAGRAM}`} />
                            </div>
                        </div>
                    )}

                    {(activePlatform === 'All' || activePlatform === Platform.YOUTUBE) && (
                        <div className="space-y-3">
                             <div className="flex justify-between items-center px-1">
                                <span className="text-sm font-medium text-slate-400 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FF0000]"></span>YouTube</span>
                                <button onClick={() => handleDownload(Platform.YOUTUBE)} className="text-slate-500 hover:text-white p-1"><Download size={16} /></button>
                            </div>
                            <div className="bg-[#0f0f0f] p-6 rounded-xl border border-slate-800 shadow-xl flex justify-center">
                                <YouTubeCard data={data} id={`card-${Platform.YOUTUBE}`} />
                            </div>
                        </div>
                    )}

                    {(activePlatform === 'All' || activePlatform === Platform.TIKTOK) && (
                        <div className="space-y-3">
                             <div className="flex justify-between items-center px-1">
                                <span className="text-sm font-medium text-slate-400 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#000000]"></span>TikTok</span>
                                <button onClick={() => handleDownload(Platform.TIKTOK)} className="text-slate-500 hover:text-white p-1"><Download size={16} /></button>
                            </div>
                            <div className="bg-[#121212] p-6 rounded-xl border border-slate-800 shadow-xl flex justify-center">
                                <TikTokCard data={data} id={`card-${Platform.TIKTOK}`} />
                            </div>
                        </div>
                    )}

                     {(activePlatform === 'All' || activePlatform === Platform.LINKEDIN) && (
                        <div className="space-y-3">
                             <div className="flex justify-between items-center px-1">
                                <span className="text-sm font-medium text-slate-400 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#0a66c2]"></span>LinkedIn</span>
                                <button onClick={() => handleDownload(Platform.LINKEDIN)} className="text-slate-500 hover:text-white p-1"><Download size={16} /></button>
                            </div>
                            <div className="bg-[#f3f2ef] p-6 rounded-xl border border-slate-800 shadow-xl flex justify-center">
                                <LinkedInCard data={data} id={`card-${Platform.LINKEDIN}`} />
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;