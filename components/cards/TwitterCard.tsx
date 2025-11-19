import React from 'react';
import { CardData } from '../../types';
import { MessageCircle, Repeat2, Heart, Share } from 'lucide-react';

interface Props {
  data: CardData;
  id?: string;
}

export const TwitterCard: React.FC<Props> = ({ data, id }) => {
  return (
    <div id={id} className="w-full max-w-md bg-black text-white p-4 rounded-none border border-gray-800 font-sans">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden">
             <img 
                src={data.authorImage || `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.authorHandle}`} 
                alt="avatar" 
                className="w-full h-full object-cover" 
                crossOrigin="anonymous"
             />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-1 truncate">
                <span className="font-bold text-white truncate">{data.authorName}</span>
                <span className="text-gray-500 truncate">@{data.authorHandle}</span>
                <span className="text-gray-500">·</span>
                <span className="text-gray-500">2h</span>
             </div>
             <div className="text-gray-500">•••</div>
          </div>
          
          <div className="mt-1 mb-3 text-[15px] leading-normal whitespace-pre-wrap">
            {data.description.length > 140 ? data.description.substring(0, 140) + '...' : data.description} <br/>
            <span className="text-[#1d9bf0]">{data.urlOrTopic || 'refly.ai/template'}</span>
          </div>

          {/* Card */}
          <div className="border border-gray-700 rounded-2xl overflow-hidden mt-2 mb-2 hover:bg-white/5 transition-colors cursor-pointer">
            <div className="relative pb-[52%] bg-gray-800">
                 <img 
                    src={data.imageUrl} 
                    alt="Card" 
                    className="absolute inset-0 w-full h-full object-cover"
                    crossOrigin="anonymous"
                 />
                 <div className="absolute bottom-2 left-2 bg-black/60 px-1.5 py-0.5 rounded text-xs font-medium text-white">
                    {data.domain}
                 </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between text-gray-500 mt-2 max-w-xs">
            <div className="flex items-center gap-1 group cursor-pointer hover:text-[#1d9bf0]">
                <div className="p-1.5 rounded-full group-hover:bg-[#1d9bf0]/10"><MessageCircle size={16} /></div>
                <span className="text-xs">{data.comments}</span>
            </div>
            <div className="flex items-center gap-1 group cursor-pointer hover:text-[#00ba7c]">
                <div className="p-1.5 rounded-full group-hover:bg-[#00ba7c]/10"><Repeat2 size={16} /></div>
                <span className="text-xs">42</span>
            </div>
             <div className="flex items-center gap-1 group cursor-pointer hover:text-[#f91880]">
                <div className="p-1.5 rounded-full group-hover:bg-[#f91880]/10"><Heart size={16} /></div>
                <span className="text-xs">{data.likes}</span>
            </div>
            <div className="flex items-center gap-1 group cursor-pointer hover:text-[#1d9bf0]">
                <div className="p-1.5 rounded-full group-hover:bg-[#1d9bf0]/10"><Share size={16} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};