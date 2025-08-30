const dataGambar = [
  {
    type: "adsense",
    overlay: "~ ADVERTISEMENT ~"
  },
  {
    type: "gambar",
    src: "https://down-id.img.susercontent.com/file/id-11134207-7rbk5-maa4hlm7dz2l4c.webp",
    text: "Gemini AI PRO Veo 3 Gemini, Bonus Tutorial dan Prompt",
    link: "https://s.shopee.co.id/9fB1NK9w9U",
    overlay: "~ ORDER SEKARANG ~"
  },
  {
    type: "gambar",
    src: "https://down-id.img.susercontent.com/file/id-11134207-7rbka-m7atwm1ev5t3d3.webp",
    text: "Mісrоsоft Ӡ65 - 𝖮𝖿𝖿𝗂𝖼𝖾 Word,Excel,PPT Lifetime Account License Resmi",
    link: "https://s.shopee.co.id/6fXPqsErjM",
    overlay: "~ BELI PRODUK ~"
  },
  {
    type: "adsense",
    overlay: "~ ADVERTISEMENT ~"
  },
  {
    type: "gambar",
    src: "https://down-id.img.susercontent.com/file/id-11134207-7rbk7-m8kc8area9zh46.webp",
    text: "PREMLY Extension Browser PC, Unlock Semua Aplikasi Premium",
    link: "https://s.shopee.co.id/802nTjylNf",
    overlay: "~ BELI SEKARANG ~"
  },
  {
    type: "gambar",
    src: "https://down-id.img.susercontent.com/file/id-11134207-7r991-lzynyvubn2o588.webp",
    text: "YIBAO LENTIVEN Headset Bluetooth Tahan Air Touch HiFi Stereo Wireless",
    link: "https://s.shopee.co.id/6fXVnNC9el",
    overlay: "~ ORDER SEKARANG ~"
  },
  {
    type: "adsense",
    overlay: "~ ADVERTISEMENT ~"
  },
  {
    type: "gambar",
    src: "https://down-id.img.susercontent.com/file/id-11134207-7rbke-mamh19s9zy4y9e.webp",
    text: "YLV Controller Joystick X3 Gamepad Bluetooth X3 for IOS, Windows, Android",
    link: "https://s.shopee.co.id/1g8pqIbZcA",
    overlay: "~ BELI PRODUK ~"
  },
  {
    type: "gambar",
    src: "https://down-id.img.susercontent.com/file/id-11134207-7rbkd-m8lsp14v2cbx2c.webp",
    text: "LENTIVEN Flashdisk USB  3IN 1 Type-c Storage Disk Data Drive Android",
    link: "https://s.shopee.co.id/1qSG2dMaXA",
    overlay: "~ BELI SEKARANG ~"
  },
  {
    type: "adsense",
    overlay: "~ ADVERTISEMENT ~"
  },
  {
    type: "gambar",
    src: "https://down-id.img.susercontent.com/file/id-11134207-7qul4-ljp6s2om9d9jcf.webp",
    text: "Lenovo Thinkpad X1 Carbon Ci7 Generasi 4TH Generasi 8 (RAM 8GB SSD128/256GB)",
    link: "https://s.shopee.co.id/8Uz9ywHik7",
    overlay: "~ ORDER SEKARANG ~"
  },
  {
    type: "gambar",
    src: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lzhh9qfpw10o69.webp",
    text: "GAMEN Mouse Gaming Kabel 7200 DPI 6 Level DPI 16.8 Juta Warna RGB",
    link: "https://s.shopee.co.id/70AMCLb3jJ",
    overlay: "~ BELI PRODUK ~"
  },
  {
    type: "adsense",
    overlay: "~ ADVERTISEMENT ~"
  }
];
function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function acakTampilan(wrapper, item) {
  if (item.type === "gambar") {
    wrapper.innerHTML = `
      <a href='${item.link}' target='_blank'>
        <div class='overlay'>${item.overlay}</div>
        <img alt='Gambar' loading='lazy' src='${item.src}'/>
        <span class='keterangan'>${item.text}</span>
      </a>
    `;
  } else if (item.type === "adsense") {
    wrapper.innerHTML = `
      <a href='javascript:void(0)'>
        <div class='overlay'>${item.overlay}</div>
        <ins class='adsbygoogle iklan-gambar' data-ad-client='ca-pub-4857332948547557' data-ad-slot='1786815618' style='display:block;width:336px;height:280px;'/>
        <span class='keterangan'>Iklan</span>
      </a>
    `;
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
}
const wrappers = document.querySelectorAll(".gambar-wrapper");
let urutan = shuffle(dataGambar);
wrappers.forEach((wrapper, i) => {
  acakTampilan(wrapper, urutan[i]);
});
