import React from 'react';
import { CardData } from '../../types';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

interface Props {
  data: CardData;
  id?: string;
}

export const InstagramCard: React.FC<Props> = ({ data, id }) => {
  return (
    <div id={id} className="w-full max-w-md bg-black text-white border border-gray-800 rounded-lg font-sans overflow-hidden">
       {/* Header */}
       <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                <div className="w-full h-full rounded-full bg-black border border-black overflow-hidden">
                     <img 
                        src={data.authorImage || `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.siteName}`} 
                        alt="avatar" 
                        className="w-full h-full object-cover bg-gray-800" 
                        crossOrigin="anonymous"
                    />
                </div>
             </div>
             <div className="text-sm font-semibold">{data.siteName.toLowerCase().replace(/\s/g, '')}</div>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-xs font-semibold bg-[#262626] px-3 py-1.5 rounded-lg">Follow</button>
            <MoreHorizontal size={20} />
          </div>
       </div>

       {/* Image */}
       <div className="w-full aspect-[4/5] bg-gray-900 relative overflow-hidden">
          <img 
            src={data.imageUrl} 
            alt="Post" 
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
          />
          {/* Overlay for Link hint */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
             <div className="bg-[#00DC82] text-black font-semibold text-center py-2 rounded-full cursor-pointer hover:bg-[#00DC82]/90 transition">
                Use this Template
             </div>
          </div>
       </div>

       {/* Actions */}
       <div className="p-3">
          <div className="flex justify-between mb-2">
            <div className="flex gap-4">
               <Heart size={24} className="cursor-pointer hover:text-gray-300" />
               <MessageCircle size={24} className="cursor-pointer hover:text-gray-300" />
               <Send size={24} className="cursor-pointer hover:text-gray-300 -rotate-45 mt-0.5" />
            </div>
            <Bookmark size={24} className="cursor-pointer hover:text-gray-300" />
          </div>
          
          <div className="font-semibold text-sm mb-1">{data.likes} likes</div>
          
          <div className="text-sm">
            <span className="font-semibold mr-2">{data.siteName.toLowerCase()}</span>
            {data.description}
          </div>
          <div className="text-[#00376b] text-sm mt-1 cursor-pointer">
            {data.tags.map(t => `#${t} `)}
          </div>
          <div className="text-gray-500 text-xs mt-2 uppercase">2 hours ago</div>
       </div>
    </div>
  );
};