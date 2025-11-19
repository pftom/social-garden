import React from 'react';
import { CardData } from '../../types';

interface Props {
  data: CardData;
  id?: string;
}

export const DiscordCard: React.FC<Props> = ({ data, id }) => {
  return (
    <div id={id} className="w-full max-w-md bg-[#313338] p-4 rounded-lg font-sans text-gray-100 overflow-hidden border border-[#2b2d31]">
      {/* Message Header (Mock) */}
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-600 flex-shrink-0 overflow-hidden mr-3">
            {data.authorImage ? (
                 <img 
                    src={data.authorImage} 
                    alt={data.authorName} 
                    className="w-full h-full object-cover" 
                    crossOrigin="anonymous" 
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-indigo-500 text-sm font-bold">
                    {data.authorName.charAt(0)}
                </div>
            )}
        </div>
        <div>
            <div className="flex items-center gap-1">
                <span className="font-medium text-white hover:underline cursor-pointer">{data.authorName}</span>
                <span className="bg-[#5865F2] text-[10px] px-1 rounded text-white flex items-center h-4">BOT</span>
                <span className="text-xs text-gray-400 ml-1">Today at {data.date}</span>
            </div>
            <div className="text-sm text-gray-300">
                Check out this new template!
            </div>
        </div>
      </div>

      {/* Embed Card */}
      <div className="flex border-l-4 border-[#5865F2] bg-[#2b2d31] rounded p-3 ml-12 max-w-[400px]">
        <div className="flex-1 pr-4">
          <div className="text-xs text-gray-400 font-medium mb-1">{data.siteName}</div>
          <div className="text-[#00A8FC] font-semibold hover:underline cursor-pointer mb-1 line-clamp-2">
            {data.title}
          </div>
          <div className="text-xs text-gray-300 mb-2 line-clamp-3">
            {data.description}
          </div>
          {data.imageUrl && (
            <div className="mt-2 rounded-lg overflow-hidden max-w-full h-auto">
                <img 
                    src={data.imageUrl} 
                    alt="Preview" 
                    className="w-full h-auto object-cover max-h-[200px] rounded-lg"
                    crossOrigin="anonymous" 
                />
            </div>
          )}
          <div className="mt-2 flex items-center gap-2">
             {data.tags.slice(0,3).map(tag => (
                 <span key={tag} className="text-[10px] bg-[#1e1f22] px-1.5 py-0.5 rounded text-gray-400">#{tag}</span>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};