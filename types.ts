export interface CardData {
  title: string;
  description: string;
  imageUrl: string;
  domain: string;
  siteName: string;
  authorName: string;
  authorHandle: string;
  authorImage?: string;
  tags: string[];
  date: string;
  likes: string;
  comments: string;
  urlOrTopic?: string;
}

export enum Platform {
  DISCORD = 'Discord',
  TWITTER = 'Twitter (X)',
  FACEBOOK = 'Facebook',
  INSTAGRAM = 'Instagram',
  YOUTUBE = 'YouTube',
  TIKTOK = 'TikTok',
  LINKEDIN = 'LinkedIn',
}

export interface AISuggestionRequest {
  urlOrTopic: string;
}