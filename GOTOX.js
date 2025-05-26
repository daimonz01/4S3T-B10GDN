function encodeLinks() {
  document.querySelectorAll('a[href^="/gotox="], a[href^="/gotox?url="]').forEach(a => {
    const rawUrl = a.href.includes('gotox=') 
      ? a.href.split('gotox=')[1] 
      : new URL(a.href).searchParams.get('url');
    if (rawUrl) {
      const encoded = btoa(rawUrl);
      a.href = '/gotox?url=' + encodeURIComponent(encoded);
    }
  });
}
document.addEventListener('click', e => {
  const a = e.target.closest('a[href*="/gotox?url="]');
  if (!a || a.target === '_blank') return;
  e.preventDefault();
  const urlParam = new URL(a.href).searchParams.get('url');
  if (urlParam) location.href = atob(urlParam);
});
if (location.pathname === '/gotox' && location.search.includes('url=')) {
  const params = new URLSearchParams(location.search);
  const encoded = params.get('url');
  if (encoded) {
    try {
      location.href = atob(encoded);
    } catch (err) {
      console.error("Base64 decoding error:", err);
    }
  }
}
if (document.readyState === 'complete') encodeLinks();
else document.addEventListener('DOMContentLoaded', encodeLinks);