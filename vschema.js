  (function() {
    const videoEl = document.querySelector("[data-video-id]");
    if (!videoEl) return;
    const videoId = videoEl.getAttribute("data-video-id");

    const schema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": document.title,
      "description": document.querySelector('meta[name="description"]')?.content || "",
      "thumbnailUrl": [`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`],
      "uploadDate": new Date(document.querySelector('meta[property="article:published_time"]')?.content || Date.now()).toISOString(),
      "contentUrl": `https://www.youtube.com/watch?v=${videoId}`,
      "embedUrl": `https://www.youtube.com/embed/${videoId}`
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);

    console.log("Vschema", schema);
  })();