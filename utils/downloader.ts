import { toSvg } from 'html-to-image';

// Helper to fetch the font CSS manually to avoid CORS issues with html-to-image automatic processing
const getFontEmbedCSS = async () => {
  try {
    const response = await fetch('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    return await response.text();
  } catch (e) {
    console.warn('Could not fetch font CSS for embedding', e);
    return '';
  }
};

export const downloadCardAsSvg = async (elementId: string, fileName: string) => {
  const node = document.getElementById(elementId);
  if (!node) {
    console.error(`Element with id ${elementId} not found`);
    return;
  }

  try {
    // Fetch fonts manually to ensure they are embedded correctly in the SVG
    const fontEmbedCSS = await getFontEmbedCSS();

    const dataUrl = await toSvg(node, {
      cacheBust: true,
      backgroundColor: 'transparent', // Preserve transparency or set background
      fontEmbedCSS,
    });
    
    const link = document.createElement('a');
    link.download = `${fileName}.svg`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Oops, something went wrong!', error);
  }
};

export const batchDownload = async (ids: string[]) => {
    for (const id of ids) {
        await downloadCardAsSvg(id, id);
        // Small delay to prevent browser throttling
        await new Promise(r => setTimeout(r, 500));
    }
};