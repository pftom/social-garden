import React from 'react';
import { CardData } from '../../types';
import { Heart, MessageCircle, Bookmark, Share2, Disc, Music2, Plus } from 'lucide-react';

interface Props {
  data: CardData;
  id?: string;
}

export const TikTokCard: React.FC<Props> = ({ data, id }) => {
  return (
    <div id={id} className="w-full max-w-[350px] aspect-[9/16] bg-black text-white relative overflow-hidden rounded-lg font-sans border border-gray-800 mx-auto">
      {/* Background Image (Simulating Video) */}
      <img 
        src={data.imageUrl} 
        alt="TikTok Content" 
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        crossOrigin="anonymous"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none"></div>

      {/* Top UI */}
      <div className="absolute top-4 left-0 w-full flex justify-center text-shadow-sm font-bold text-lg text-white/90">
        Following <span className="mx-2 opacity-50">|</span> <span className="text-white">For You</span>
      </div>

      {/* Right Sidebar Actions */}
      <div className="absolute bottom-20 right-2 flex flex-col items-center gap-4 z-10">
         <div className="relative mb-2">
            <div className="w-11 h-11 rounded-full border border-white overflow-hidden bg-gray-700">
                 <img 
                    src={data.authorImage || `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.authorName}`} 
                    alt="avatar" 
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#FE2C55] rounded-full p-0.5">
                <Plus size={10} className="text-white" />
            </div>
         </div>

         <div className="flex flex-col items-center gap-1">
            <Heart size={32} fill="white" className="text-white drop-shadow-md" />
            <span className="text-xs font-semibold drop-shadow-md">{data.likes}</span>
         </div>

         <div className="flex flex-col items-center gap-1">
            <MessageCircle size={32} fill="white" className="text-white drop-shadow-md" />
            <span className="text-xs font-semibold drop-shadow-md">{data.comments}</span>
         </div>

         <div className="flex flex-col items-center gap-1">
            <Bookmark size={32} fill="white" className="text-white drop-shadow-md" />
            <span className="text-xs font-semibold drop-shadow-md">404</span>
         </div>

         <div className="flex flex-col items-center gap-1">
            <Share2 size={30} fill="white" className="text-white drop-shadow-md" />
            <span className="text-xs font-semibold drop-shadow-md">Share</span>
         </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-4 left-3 right-16 z-10 text-shadow-md">
         <div className="font-bold mb-2 text-[15px] shadow-black drop-shadow-lg">@{data.authorHandle}</div>
         <div className="text-sm leading-snug mb-2 line-clamp-3 drop-shadow-lg">
            {data.description} {data.tags.map(t => `#${t} `)}
         </div>
         <div className="flex items-center gap-2 text-sm font-medium marquee-container overflow-hidden whitespace-nowrap">
            <Music2 size={14} />
            <span className="animate-marquee">Original Sound - {data.authorName} • Original Sound</span>
         </div>
      </div>

      {/* Spinning Disc */}
      <div className="absolute bottom-4 right-3 z-10">
         <div className="w-10 h-10 bg-gradient-to-tr from-gray-800 to-gray-900 rounded-full border-[3px] border-gray-800 flex items-center justify-center animate-spin-slow overflow-hidden">
            <img 
                src={data.authorImage} 
                className="w-6 h-6 rounded-full" 
                crossOrigin="anonymous" 
            />
         </div>
      </div>
    </div>
  );
};