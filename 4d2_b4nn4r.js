const dataGambar = [
  {
    type: &quot;adsense&quot;,
    overlay: &quot;~ ADVERTISEMENT ~&quot;
  },
  {
    type: &quot;gambar&quot;,
    src: &quot;https://down-id.img.susercontent.com/file/id-11134207-7rbk5-maa4hlm7dz2l4c.webp&quot;,
    text: &quot;Gemini AI PRO Veo 3 Gemini, Bonus Tutorial dan Prompt&quot;,
    link: &quot;https://s.shopee.co.id/9fB1NK9w9U&quot;,
    overlay: &quot;~ ORDER SEKARANG ~&quot;
  },
  {
    type: &quot;gambar&quot;,
    src: &quot;https://down-id.img.susercontent.com/file/id-11134207-7rbka-m7atwm1ev5t3d3.webp&quot;,
    text: &quot;Mісrоsоft Ӡ65 - 𝖮𝖿𝖿𝗂𝖼𝖾 Word,Excel,PPT Lifetime Account License Resmi&quot;,
    link: &quot;https://s.shopee.co.id/6fXPqsErjM&quot;,
    overlay: &quot;~ BELI PRODUK ~&quot;
  },
  {
    type: &quot;adsense&quot;,
    overlay: &quot;~ ADVERTISEMENT ~&quot;
  },
  {
    type: &quot;gambar&quot;,
    src: &quot;https://down-id.img.susercontent.com/file/id-11134207-7rbk7-m8kc8area9zh46.webp&quot;,
    text: &quot;PREMLY Extension Browser PC, Unlock Semua Aplikasi Premium&quot;,
    link: &quot;https://s.shopee.co.id/802nTjylNf&quot;,
    overlay: &quot;~ BELI SEKARANG ~&quot;
  },
  {
    type: &quot;gambar&quot;,
    src: &quot;https://down-id.img.susercontent.com/file/id-11134207-7r991-lzynyvubn2o588.webp&quot;,
    text: &quot;YIBAO LENTIVEN Headset Bluetooth Tahan Air Touch HiFi Stereo Wireless&quot;,
    link: &quot;https://s.shopee.co.id/6fXVnNC9el&quot;,
    overlay: &quot;~ ORDER SEKARANG ~&quot;
  },
  {
    type: &quot;adsense&quot;,
    overlay: &quot;~ ADVERTISEMENT ~&quot;
  },
  {
    type: &quot;gambar&quot;,
    src: &quot;https://down-id.img.susercontent.com/file/id-11134207-7rbke-mamh19s9zy4y9e.webp&quot;,
    text: &quot;YLV Controller Joystick X3 Gamepad Bluetooth X3 for IOS, Windows, Android&quot;,
    link: &quot;https://s.shopee.co.id/1g8pqIbZcA&quot;,
    overlay: &quot;~ BELI PRODUK ~&quot;
  },
  {
    type: &quot;gambar&quot;,
    src: &quot;https://down-id.img.susercontent.com/file/id-11134207-7rbkd-m8lsp14v2cbx2c.webp&quot;,
    text: &quot;LENTIVEN Flashdisk USB  3IN 1 Type-c Storage Disk Data Drive Android&quot;,
    link: &quot;https://s.shopee.co.id/1qSG2dMaXA&quot;,
    overlay: &quot;~ BELI SEKARANG ~&quot;
  },
  {
    type: &quot;adsense&quot;,
    overlay: &quot;~ ADVERTISEMENT ~&quot;
  },
  {
    type: &quot;gambar&quot;,
    src: &quot;https://down-id.img.susercontent.com/file/id-11134207-7qul4-ljp6s2om9d9jcf.webp&quot;,
    text: &quot;Lenovo Thinkpad X1 Carbon Ci7 Generasi 4TH Generasi 8 (RAM 8GB SSD128/256GB)&quot;,
    link: &quot;https://s.shopee.co.id/8Uz9ywHik7&quot;,
    overlay: &quot;~ ORDER SEKARANG ~&quot;
  },
  {
    type: &quot;gambar&quot;,
    src: &quot;https://down-id.img.susercontent.com/file/id-11134207-7r98w-lzhh9qfpw10o69.webp&quot;,
    text: &quot;GAMEN Mouse Gaming Kabel 7200 DPI 6 Level DPI 16.8 Juta Warna RGB&quot;,
    link: &quot;https://s.shopee.co.id/70AMCLb3jJ&quot;,
    overlay: &quot;~ BELI PRODUK ~&quot;
  },
  {
    type: &quot;adsense&quot;,
    overlay: &quot;~ ADVERTISEMENT ~&quot;
  }
];
function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i &gt; 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function acakTampilan(wrapper, item) {
  if (item.type === &quot;gambar&quot;) {
    wrapper.innerHTML = `
      <a href='${item.link}' target='_blank'>
        <div class='overlay'>${item.overlay}</div>
        <img alt='Gambar' loading='lazy' src='${item.src}'/>
        <span class='keterangan'>${item.text}</span>
      </a>
    `;
  } else if (item.type === &quot;adsense&quot;) {
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
const wrappers = document.querySelectorAll(&quot;.gambar-wrapper&quot;);
let urutan = shuffle(dataGambar);
wrappers.forEach((wrapper, i) =&gt; {
  acakTampilan(wrapper, urutan[i]);
});