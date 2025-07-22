const daftarLinkEksternal = [
  "https://drive.google.com",
  "https://aman-dn.blogspot.com"
];

const daftarPengecualian = [
  "/2024/12/rise-of-eros-desire-data-game.html",
  "/2024/01/guardian-tales-data-game-android.html",
  "/2024/04/pubg-mobile-data-game-android.html",
  "/2024/01/the-seven-deadly-sins-grand-cross.html",  
  "/2024/01/eversoul-data-game-android.html",  
  "/2024/01/the-legend-of-neverland-data.html",    
  "/2024/01/blue-archive-data-game-android.html",  
  "/2024/01/slime-isekai-memories-data-game.html",
  "/2024/01/goddess-of-victory-nikke.html", 
  "/2024/01/tower-of-god-new-world-data-game.html",
  "/2024/01/garena-free-fire-data-game-android.html",
  "/2024/02/garena-free-fire-max-data-game.html",
  "/2024/01/genshin-impact-data-game-android.html",
  "/2024/01/honkai-star-rail-data-game-android.html",
  "/2024/01/hatsune-miku-colorful-stage-data.html",
  "/2024/05/solo-leveling-arise-data-game-android.html",
  "/2024/01/mobile-legends-bang-bang-data.html",  
  "/2024/01/download-honkai-star-rail-pc.html",
  "/2024/01/punishing-gray-raven-data-game.html", 
  "/2024/01/arknights-data-game-android.html",  
  "/2024/12/girls-frontline-2-exilium-data-game.html",
  "/2024/01/pokemon-unite-data-game-android.html",
  "/2024/01/garena-arena-of-valor-data-game.html",
  "/2024/01/counter-side-data-game-android.html",
  "/2024/01/aether-gazer-data-game-android.html",
  "/2024/01/azur-lane-data-game-android.html",
  "/2024/01/identity-v-data-game-android.html",
  "/2024/01/onmyoji-arena-3-data-game-android.html",
  "/2024/12/infinity-nikki-data-game-android.html",
  "/2024/01/snowbreak-containment-zone-data.html",
  "/2024/01/pubg-new-state-data-game-android.html",
  "/2024/01/reverse-1999-data-game-android.html",
  "/2024/12/starseed-asnia-trigger-data-game.html",
  "/2025/02/astra-knights-of-veda-data-game.html",  
  "/2024/07/zenless-zone-zero-data-game-android.html",  
  "/2024/01/pokemon-unite-data-game-android.html",  
  "/2024/07/download-zenless-zone-zero-pc.html",  
  "/2024/01/devil-may-cry-peak-of-combat-data.html",  
  "/2024/01/download-goddess-of-victory-nikke-pc.html",  
  "/2024/05/wuthering-waves-data-game-android.html",  
  "/2024/06/download-wuthering-waves-pc.html",  
  "/2024/01/carx-street-data-game-android.html",  
  "/2024/12/infinity-nikki-data-game-android.html",
  "/2025/06/project-net-data-game-android.html",
  "/2024/01/download-genshin-impact-pc.html",
  "/2024/01/epic-seven-data-game-android.html",
  "/2024/01/garena-call-of-duty-mobile-data.html",
  "/2024/01/diablo-immortal-data-game-android.html",
  "/2024/01/download-punishing-gray-raven-pc.html",
  "/2024/01/honkai-impact-3-data-game-android.html",
  "/2024/01/download-honkai-impact-3-pc.html",
  "/2024/01/download-valorant-pc.html",
  "/2024/01/arena-of-valor-data-game-android.html",
  "/2024/01/the-eminence-in-shadow-rpg-data.html",
  "/2024/01/download-lost-saga-origin.html",
  "/2024/01/download-point-blank-beyond-limits.html",
  "/2024/01/download-point-blank-sea.html",
  "/2024/01/league-of-legends-wild-rift.html",
  "/2024/12/infinity-nikki-data-game-android.html",
  
  "/jangan-redirect.html"
];

const halamanTujuan = "https://www.blog-dnz.com/p/redirect.html";

document.addEventListener("DOMContentLoaded", function () {
  const isHalamanDikecualikan = daftarPengecualian.some(path =>
    window.location.pathname.endsWith(path)
  );
  if (!isHalamanDikecualikan) {
    const semuaLink = document.querySelectorAll("a[href]");
    semuaLink.forEach(link => {
      const href = link.getAttribute("href");
      const cocokEksternal = daftarLinkEksternal.some(item => href.startsWith(item));
      const isLinkScriptPertama = href.startsWith("https://www.blog-dnz.com/?goto=");
      if (cocokEksternal || href.includes("/gotox=https://") || isLinkScriptPertama) {
        link.setAttribute("href", halamanTujuan);
        link.setAttribute("target", "_blank");
      }
    });
  }
});
