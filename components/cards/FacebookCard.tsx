import React from 'react';
import { CardData } from '../../types';
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal, Globe } from 'lucide-react';

interface Props {
  data: CardData;
  id?: string;
}

export const FacebookCard: React.FC<Props> = ({ data, id }) => {
  return (
    <div id={id} className="w-full max-w-md bg-white text-gray-900 rounded-lg shadow-sm border border-gray-200 font-sans overflow-hidden">
      {/* Header */}
      <div className="p-3 flex items-start justify-between">
        <div className="flex gap-2">
             <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
                <img 
                    src={data.authorImage || `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.authorName}`} 
                    alt="avatar" 
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                />
             </div>
             <div>
                 <div className="font-semibold text-sm leading-snug text-gray-900 hover:underline cursor-pointer">{data.authorName}</div>
                 <div className="text-xs text-gray-500 flex items-center gap-1">
                    Just now · <Globe size={10} />
                 </div>
             </div>
        </div>
        <MoreHorizontal size={20} className="text-gray-500 cursor-pointer" />
      </div>

      {/* Post Text */}
      <div className="px-3 pb-2 text-[15px] leading-normal text-gray-900">
        {data.description}
      </div>

      {/* Link Preview */}
      <div className="bg-gray-100 cursor-pointer hover:bg-gray-200/50 transition-colors">
         <div className="w-full h-[220px] overflow-hidden bg-gray-300 relative">
            <img 
                src={data.imageUrl} 
                alt="Link Preview" 
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
            />
         </div>
         <div className="p-3 bg-[#F0F2F5]">
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-0.5 truncate">{data.domain}</div>
            <div className="font-bold text-[16px] leading-5 text-gray-900 mb-1 line-clamp-2">{data.title}</div>
            <div className="text-sm text-gray-600 line-clamp-1">{data.description}</div>
         </div>
      </div>

      {/* Action Bar */}
      <div className="px-3 py-2 flex items-center justify-between border-t border-gray-200 mx-3 mt-2">
         <button className="flex items-center gap-2 px-4 py-1.5 rounded hover:bg-gray-100 text-gray-600 font-medium text-sm">
            <ThumbsUp size={18} /> Like
         </button>
         <button className="flex items-center gap-2 px-4 py-1.5 rounded hover:bg-gray-100 text-gray-600 font-medium text-sm">
            <MessageSquare size={18} /> Comment
         </button>
         <button className="flex items-center gap-2 px-4 py-1.5 rounded hover:bg-gray-100 text-gray-600 font-medium text-sm">
            <Share2 size={18} /> Share
         </button>
      </div>
    </div>
  );
};