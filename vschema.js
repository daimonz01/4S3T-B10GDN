(function() {
  const iframe = document.querySelector('article iframe[src*="youtube.com/embed/"]');
  if (!iframe) return;
  const src = iframe.getAttribute("src");
  const match = src.match(/embed\/([^?&]+)/);
  if (!match) return;
  const videoId = match[1];
  const title = document.querySelector('meta[property="og:title"]')?.content 
             || document.title;
  const description = document.querySelector('meta[name="description"]')?.content 
             || "";
  const uploadDate = document.querySelector('meta[property="article:published_time"]')?.content 
             || new Date().toISOString();
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": description,
    "thumbnailUrl": [`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`],
    "uploadDate": new Date(uploadDate).toISOString(),
    "contentUrl": `https://www.youtube.com/watch?v=${videoId}`,
    "embedUrl": `https://www.youtube.com/embed/${videoId}`
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema, null, 2);
  document.head.appendChild(script);

  console.log("Vschema:", schema);
})();
