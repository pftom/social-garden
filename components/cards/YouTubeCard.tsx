import React from 'react';
import { CardData } from '../../types';
import { MoreVertical } from 'lucide-react';

interface Props {
  data: CardData;
  id?: string;
}

export const YouTubeCard: React.FC<Props> = ({ data, id }) => {
  return (
    <div id={id} className="w-full max-w-md bg-[#0f0f0f] text-white font-sans overflow-hidden border border-[#272727] rounded-none">
      {/* Video Thumbnail Container */}
      <div className="relative w-full aspect-video bg-gray-800">
        <img 
            src={data.imageUrl} 
            alt="Thumbnail" 
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-1 rounded">
            12:34
        </div>
      </div>

      {/* Meta Data */}
      <div className="flex p-3 gap-3">
        {/* Channel Avatar */}
        <div className="flex-shrink-0">
             <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-700">
                <img 
                    src={data.authorImage || `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.siteName}`} 
                    alt="channel" 
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                />
             </div>
        </div>

        {/* Text Info */}
        <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-white leading-tight line-clamp-2 mb-1">
                {data.title}
            </h3>
            <div className="text-xs text-[#aaaaaa] flex items-center flex-wrap">
                <span>{data.siteName}</span>
                <span className="mx-1">•</span>
                <span>{data.likes}K views</span>
                <span className="mx-1">•</span>
                <span>2 hours ago</span>
            </div>
        </div>

        {/* Menu Icon */}
        <div className="flex-shrink-0">
            <MoreVertical size={20} className="text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};