import React from 'react';
import { CardData } from '../../types';
import { ThumbsUp, MessageSquare, Repeat, Send, MoreHorizontal, Globe, Plus } from 'lucide-react';

interface Props {
  data: CardData;
  id?: string;
}

export const LinkedInCard: React.FC<Props> = ({ data, id }) => {
  return (
    <div id={id} className="w-full max-w-md bg-white text-gray-900 rounded-lg border border-gray-300 font-sans overflow-hidden shadow-sm">
       {/* Header */}
       <div className="p-3 flex gap-3 mb-1">
           <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                 <img 
                    src={data.authorImage || `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.authorName}`} 
                    alt="avatar" 
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                />
           </div>
           <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                    <div className="font-semibold text-sm text-gray-900 truncate">{data.authorName}</div>
                    <div className="flex items-center gap-2">
                        <div className="text-[#0a66c2] font-semibold text-sm flex items-center cursor-pointer hover:bg-blue-50 p-1 rounded">
                            <Plus size={14} className="mr-1" /> Follow
                        </div>
                         <MoreHorizontal size={18} className="text-gray-500" />
                    </div>
                </div>
                <div className="text-xs text-gray-500 truncate">{data.siteName} • Marketing Director</div>
                <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                    2h • <Globe size={10} />
                </div>
           </div>
       </div>

       {/* Text Content */}
       <div className="px-3 pb-2 text-sm text-gray-900 whitespace-pre-line">
            {data.description} <br/>
            <span className="text-[#0a66c2] cursor-pointer font-medium">
                {data.tags.map(t => `#${t} `)}
            </span>
       </div>

       {/* Image/Link Content */}
       <div className="w-full bg-[#eef3f8] border-y border-gray-100">
            {/* If it's just an image, we show it full. If it looks like a link share (with domain), linkedin adds a grey strip below */}
            <div className="w-full aspect-[1.91/1] relative overflow-hidden">
                 <img 
                    src={data.imageUrl} 
                    alt="Content" 
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                />
            </div>
            <div className="px-4 py-3 bg-[#f9fafb]">
                <div className="text-sm font-semibold text-gray-900 line-clamp-2 mb-0.5">{data.title}</div>
                <div className="text-xs text-gray-500">{data.domain}</div>
            </div>
       </div>

       {/* Stats */}
       <div className="px-3 py-2 flex justify-between items-center text-xs text-gray-500 border-b border-gray-100">
            <div className="flex items-center gap-1">
                <div className="flex -space-x-1">
                    <div className="w-4 h-4 rounded-full bg-[#1485bd] flex items-center justify-center">
                         <ThumbsUp size={8} className="text-white" fill="white" />
                    </div>
                    <div className="w-4 h-4 rounded-full bg-[#df704d] flex items-center justify-center">
                         <span className="text-[8px] text-white">👏</span>
                    </div>
                </div>
                <span className="ml-1 hover:text-[#0a66c2] hover:underline cursor-pointer">{data.likes}</span>
            </div>
            <div className="hover:text-[#0a66c2] hover:underline cursor-pointer">
                {data.comments} comments • 12 reposts
            </div>
       </div>

       {/* Action Bar */}
       <div className="px-2 py-1 flex justify-between items-center">
           <button className="flex flex-col sm:flex-row items-center gap-1.5 px-3 py-2.5 rounded hover:bg-gray-100 flex-1 justify-center text-gray-600">
                <ThumbsUp size={18} className="transform -scale-x-100" />
                <span className="text-xs font-semibold">Like</span>
           </button>
            <button className="flex flex-col sm:flex-row items-center gap-1.5 px-3 py-2.5 rounded hover:bg-gray-100 flex-1 justify-center text-gray-600">
                <MessageSquare size={18} />
                <span className="text-xs font-semibold">Comment</span>
           </button>
            <button className="flex flex-col sm:flex-row items-center gap-1.5 px-3 py-2.5 rounded hover:bg-gray-100 flex-1 justify-center text-gray-600">
                <Repeat size={18} />
                <span className="text-xs font-semibold">Repost</span>
           </button>
            <button className="flex flex-col sm:flex-row items-center gap-1.5 px-3 py-2.5 rounded hover:bg-gray-100 flex-1 justify-center text-gray-600">
                <Send size={18} className="-rotate-45 translate-y-[-2px] translate-x-[2px]" />
                <span className="text-xs font-semibold">Send</span>
           </button>
       </div>
    </div>
  );
};