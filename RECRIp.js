(function handleGoto() {
  const params = new URLSearchParams(window.location.search);
  const base64str = params.get("goto");
  if (base64str) {
    try {
      const target = atob(base64str);
      window.location.replace(target);
    } catch (e) {
      console.error("Gagal decode base64:", e);
    }
  }
})();
function extractDomain(url) {
  var hostname;
  if (url.indexOf("://") > -1) {
    hostname = url.split('/')[2];
  } else {
    hostname = url.split('/')[0];
  }
  return hostname.split(':')[0].split('?')[0];
}
function exception() {
  return setting.exceptionurl.split(",");
}
function convertstr(str) {
  return str.replace(/^\s+/, '').replace(/\s+$/, '');
}
var aesCrypto = {};
!function(t) {
  "use strict";
  t.formatter = {
    prefix: "",
    stringify: function(t) {
      var r = this.prefix;
      return r += t.salt.toString(), r += t.ciphertext.toString();
    },
    parse: function(t) {
      var r = CryptoJS.lib.CipherParams.create({}),
          e = this.prefix.length;
      return 0 !== t.indexOf(this.prefix) ? r :
        (r.ciphertext = CryptoJS.enc.Hex.parse(t.substring(16 + e)),
         r.salt = CryptoJS.enc.Hex.parse(t.substring(e, 16 + e)), r);
    }
  };
  t.encrypt = function(r, e) {
    try {
      return CryptoJS.AES.encrypt(r, e, { format: t.formatter }).toString();
    } catch (n) {
      return "";
    }
  };
  t.decrypt = function(r, e) {
    try {
      var n = CryptoJS.AES.decrypt(r, e, { format: t.formatter });
      return n.toString(CryptoJS.enc.Utf8);
    } catch (i) {
      return "";
    }
  };
}(aesCrypto);
if (!setting.exceptionurl) {
  setting.exceptionurl = window.location.href;
} else {
  setting.exceptionurl += "," + window.location.href;
}
function showurl(datajson) {
  var check = false;
  var no = 0;
  var exceptionlength = exception().length;
  var linktag = document.getElementsByTagName("a");
  var links = [];
  var usedLinks = new Set();
  var semuaartikel = datajson.feed.openSearch$totalResults.$t;
  for (var i = 0; i < semuaartikel; i++) {
    var urlartikel;
    for (var s = 0; s < datajson.feed.entry[i].link.length; s++) {
      if (datajson.feed.entry[i].link[s].rel == 'alternate') {
        urlartikel = datajson.feed.entry[i].link[s].href;
        break;
      }
    }
    links.push(urlartikel);
  }
  links = links.sort(() => Math.random() - 0.5);
  for (var i = 0; i < linktag.length; i++) {
    check = false;
    no = 0;
    while (check == false && no < exceptionlength) {
      if (extractDomain(linktag[i].href).match(extractDomain(exception()[no]))) {
        check = true;
      }
      no++;
    }
    if (check == false) {
      var linkReplaced = false;
      for (var j = 0; j < links.length; j++) {
        if (!usedLinks.has(links[j])) {
          var feedLink = links[j];
          var finalUrl = feedLink + setting.path + aesCrypto.encrypt(convertstr(linktag[i].href), convertstr('root'));
          var base64Url = btoa(finalUrl);
          linktag[i].href = "https://search.blog-dnz.com/?goto=" + base64Url;
          linktag[i].rel = "noopener noreferrer nofollow";
          linktag[i].target = "_blank";
          usedLinks.add(feedLink);
          linkReplaced = true;
          break;
        }
      }
      if (!linkReplaced) {
        console.warn("Tidak ada feed post tersedia untuk mengganti link: ", linktag[i].href);
      }
    }
  }
}
var CryptoJS=CryptoJS||function(t,e){var r={},n=r.lib={},i=n.Base=function(){function t(){}return{extend:function(e){t.prototype=this;var r=new t;return e&&r.mixIn(e),r.hasOwnProperty("init")||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),o=n.WordArray=i.extend({init:function(t,r){t=this.words=t||[],this.sigBytes=r!=e?r:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,r=t.words,n=this.sigBytes,i=t.sigBytes;if(this.clamp(),n%4)for(var o=0;i>o;o++){var s=r[o>>>2]>>>24-o%4*8&255;e[n+o>>>2]|=s<<24-(n+o)%4*8}else if(r.length>65535)for(var o=0;i>o;o+=4)e[n+o>>>2]=r[o>>>2];else e.push.apply(e,r);return this.sigBytes+=i,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r=[],n=0;e>n;n+=4)r.push(4294967296*t.random()|0);return new o.init(r,e)}}),s=r.enc={},a=s.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;r>i;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;e>n;n+=2)r[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new o.init(r,e/2)}},c=s.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;r>i;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;e>n;n++)r[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new o.init(r,e)}},f=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(c.stringify(t)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(t){return c.parse(unescape(encodeURIComponent(t)))}},u=n.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,n=r.words,i=r.sigBytes,s=this.blockSize,a=4*s,c=i/a;c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0);var f=c*s,u=t.min(4*f,i);if(f){for(var h=0;f>h;h+=s)this._doProcessBlock(n,h);var p=n.splice(0,f);r.sigBytes-=u}return new o.init(p,u)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),h=(n.Hasher=u.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new h.HMAC.init(t,r).finalize(e)}}}),r.algo={});return r}(Math);!function(){{var t=CryptoJS,e=t.lib,r=e.WordArray,n=t.enc;n.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,n=this._map;t.clamp();for(var i=[],o=0;r>o;o+=3)for(var s=e[o>>>2]>>>24-o%4*8&255,a=e[o+1>>>2]>>>24-(o+1)%4*8&255,c=e[o+2>>>2]>>>24-(o+2)%4*8&255,f=s<<16|a<<8|c,u=0;4>u&&r>o+.75*u;u++)i.push(n.charAt(f>>>6*(3-u)&63));var h=n.charAt(64);if(h)for(;i.length%4;)i.push(h);return i.join("")},parse:function(t){var e=t.length,n=this._map,i=n.charAt(64);if(i){var o=t.indexOf(i);-1!=o&&(e=o)}for(var s=[],a=0,c=0;e>c;c++)if(c%4){var f=n.indexOf(t.charAt(c-1))<<c%4*2,u=n.indexOf(t.charAt(c))>>>6-c%4*2;s[a>>>2]|=(f|u)<<24-a%4*8,a++}return r.create(s,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}}(),function(t){function e(t,e,r,n,i,o,s){var a=t+(e&r|~e&n)+i+s;return(a<<o|a>>>32-o)+e}function r(t,e,r,n,i,o,s){var a=t+(e&n|r&~n)+i+s;return(a<<o|a>>>32-o)+e}function n(t,e,r,n,i,o,s){var a=t+(e^r^n)+i+s;return(a<<o|a>>>32-o)+e}function i(t,e,r,n,i,o,s){var a=t+(r^(e|~n))+i+s;return(a<<o|a>>>32-o)+e}var o=CryptoJS,s=o.lib,a=s.WordArray,c=s.Hasher,f=o.algo,u=[];!function(){for(var e=0;64>e;e++)u[e]=4294967296*t.abs(t.sin(e+1))|0}();var h=f.MD5=c.extend({_doReset:function(){this._hash=new a.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,o){for(var s=0;16>s;s++){var a=o+s,c=t[a];t[a]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}var f=this._hash.words,h=t[o+0],p=t[o+1],l=t[o+2],d=t[o+3],v=t[o+4],y=t[o+5],g=t[o+6],_=t[o+7],m=t[o+8],S=t[o+9],B=t[o+10],x=t[o+11],k=t[o+12],C=t[o+13],z=t[o+14],w=t[o+15],E=f[0],D=f[1],M=f[2],b=f[3];E=e(E,D,M,b,h,7,u[0]),b=e(b,E,D,M,p,12,u[1]),M=e(M,b,E,D,l,17,u[2]),D=e(D,M,b,E,d,22,u[3]),E=e(E,D,M,b,v,7,u[4]),b=e(b,E,D,M,y,12,u[5]),M=e(M,b,E,D,g,17,u[6]),D=e(D,M,b,E,_,22,u[7]),E=e(E,D,M,b,m,7,u[8]),b=e(b,E,D,M,S,12,u[9]),M=e(M,b,E,D,B,17,u[10]),D=e(D,M,b,E,x,22,u[11]),E=e(E,D,M,b,k,7,u[12]),b=e(b,E,D,M,C,12,u[13]),M=e(M,b,E,D,z,17,u[14]),D=e(D,M,b,E,w,22,u[15]),E=r(E,D,M,b,p,5,u[16]),b=r(b,E,D,M,g,9,u[17]),M=r(M,b,E,D,x,14,u[18]),D=r(D,M,b,E,h,20,u[19]),E=r(E,D,M,b,y,5,u[20]),b=r(b,E,D,M,B,9,u[21]),M=r(M,b,E,D,w,14,u[22]),D=r(D,M,b,E,v,20,u[23]),E=r(E,D,M,b,S,5,u[24]),b=r(b,E,D,M,z,9,u[25]),M=r(M,b,E,D,d,14,u[26]),D=r(D,M,b,E,m,20,u[27]),E=r(E,D,M,b,C,5,u[28]),b=r(b,E,D,M,l,9,u[29]),M=r(M,b,E,D,_,14,u[30]),D=r(D,M,b,E,k,20,u[31]),E=n(E,D,M,b,y,4,u[32]),b=n(b,E,D,M,m,11,u[33]),M=n(M,b,E,D,x,16,u[34]),D=n(D,M,b,E,z,23,u[35]),E=n(E,D,M,b,p,4,u[36]),b=n(b,E,D,M,v,11,u[37]),M=n(M,b,E,D,_,16,u[38]),D=n(D,M,b,E,B,23,u[39]),E=n(E,D,M,b,C,4,u[40]),b=n(b,E,D,M,h,11,u[41]),M=n(M,b,E,D,d,16,u[42]),D=n(D,M,b,E,g,23,u[43]),E=n(E,D,M,b,S,4,u[44]),b=n(b,E,D,M,k,11,u[45]),M=n(M,b,E,D,w,16,u[46]),D=n(D,M,b,E,l,23,u[47]),E=i(E,D,M,b,h,6,u[48]),b=i(b,E,D,M,_,10,u[49]),M=i(M,b,E,D,z,15,u[50]),D=i(D,M,b,E,y,21,u[51]),E=i(E,D,M,b,k,6,u[52]),b=i(b,E,D,M,d,10,u[53]),M=i(M,b,E,D,B,15,u[54]),D=i(D,M,b,E,p,21,u[55]),E=i(E,D,M,b,m,6,u[56]),b=i(b,E,D,M,w,10,u[57]),M=i(M,b,E,D,g,15,u[58]),D=i(D,M,b,E,C,21,u[59]),E=i(E,D,M,b,v,6,u[60]),b=i(b,E,D,M,x,10,u[61]),M=i(M,b,E,D,l,15,u[62]),D=i(D,M,b,E,S,21,u[63]),f[0]=f[0]+E|0,f[1]=f[1]+D|0,f[2]=f[2]+M|0,f[3]=f[3]+b|0},_doFinalize:function(){var e=this._data,r=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;r[i>>>5]|=128<<24-i%32;var o=t.floor(n/4294967296),s=n;r[(i+64>>>9<<4)+15]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[(i+64>>>9<<4)+14]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),e.sigBytes=4*(r.length+1),this._process();for(var a=this._hash,c=a.words,f=0;4>f;f++){var u=c[f];c[f]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}return a},clone:function(){var t=c.clone.call(this);return t._hash=this._hash.clone(),t}});o.MD5=c._createHelper(h),o.HmacMD5=c._createHmacHelper(h)}(Math),function(){var t=CryptoJS,e=t.lib,r=e.Base,n=e.WordArray,i=t.algo,o=i.MD5,s=i.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:o,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=this.cfg,i=r.hasher.create(),o=n.create(),s=o.words,a=r.keySize,c=r.iterations;s.length<a;){f&&i.update(f);var f=i.update(t).finalize(e);i.reset();for(var u=1;c>u;u++)f=i.finalize(f),i.reset();o.concat(f)}return o.sigBytes=4*a,o}});t.EvpKDF=function(t,e,r){return s.create(r).compute(t,e)}}(),CryptoJS.lib.Cipher||function(t){var e=CryptoJS,r=e.lib,n=r.Base,i=r.WordArray,o=r.BufferedBlockAlgorithm,s=e.enc,a=(s.Utf8,s.Base64),c=e.algo,f=c.EvpKDF,u=r.Cipher=o.extend({cfg:n.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?x:m}return function(e){return{encrypt:function(r,n,i){return t(n).encrypt(e,r,n,i)},decrypt:function(r,n,i){return t(n).decrypt(e,r,n,i)}}}}()}),h=(r.StreamCipher=u.extend({_doFinalize:function(){var t=this._process(!0);return t},blockSize:1}),e.mode={}),p=r.BlockCipherMode=n.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),l=h.CBC=function(){function e(e,r,n){var i=this._iv;if(i){var o=i;this._iv=t}else var o=this._prevBlock;for(var s=0;n>s;s++)e[r+s]^=o[s]}var r=p.extend();return r.Encryptor=r.extend({processBlock:function(t,r){var n=this._cipher,i=n.blockSize;e.call(this,t,r,i),n.encryptBlock(t,r),this._prevBlock=t.slice(r,r+i)}}),r.Decryptor=r.extend({processBlock:function(t,r){var n=this._cipher,i=n.blockSize,o=t.slice(r,r+i);n.decryptBlock(t,r),e.call(this,t,r,i),this._prevBlock=o}}),r}(),d=e.pad={},v=d.Pkcs7={pad:function(t,e){for(var r=4*e,n=r-t.sigBytes%r,o=n<<24|n<<16|n<<8|n,s=[],a=0;n>a;a+=4)s.push(o);var c=i.create(s,n);t.concat(c)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},y=(r.BlockCipher=u.extend({cfg:u.cfg.extend({mode:l,padding:v}),reset:function(){u.reset.call(this);var t=this.cfg,e=t.iv,r=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=r.createEncryptor;else{var n=r.createDecryptor;this._minBufferSize=1}this._mode=n.call(r,this,e&&e.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else{var e=this._process(!0);t.unpad(e)}return e},blockSize:4}),r.CipherParams=n.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),g=e.format={},_=g.OpenSSL={stringify:function(t){var e=t.ciphertext,r=t.salt;if(r)var n=i.create([1398893684,1701076831]).concat(r).concat(e);else var n=e;return n.toString(a)},parse:function(t){var e=a.parse(t),r=e.words;if(1398893684==r[0]&&1701076831==r[1]){var n=i.create(r.slice(2,4));r.splice(0,4),e.sigBytes-=16}return y.create({ciphertext:e,salt:n})}},m=r.SerializableCipher=n.extend({cfg:n.extend({format:_}),encrypt:function(t,e,r,n){n=this.cfg.extend(n);var i=t.createEncryptor(r,n),o=i.finalize(e),s=i.cfg;return y.create({ciphertext:o,key:r,iv:s.iv,algorithm:t,mode:s.mode,padding:s.padding,blockSize:t.blockSize,formatter:n.format})},decrypt:function(t,e,r,n){n=this.cfg.extend(n),e=this._parse(e,n.format);var i=t.createDecryptor(r,n).finalize(e.ciphertext);return i},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),S=e.kdf={},B=S.OpenSSL={execute:function(t,e,r,n){n||(n=i.random(8));var o=f.create({keySize:e+r}).compute(t,n),s=i.create(o.words.slice(e),4*r);return o.sigBytes=4*e,y.create({key:o,iv:s,salt:n})}},x=r.PasswordBasedCipher=m.extend({cfg:m.cfg.extend({kdf:B}),encrypt:function(t,e,r,n){n=this.cfg.extend(n);var i=n.kdf.execute(r,t.keySize,t.ivSize);n.iv=i.iv;var o=m.encrypt.call(this,t,e,i.key,n);return o.mixIn(i),o},decrypt:function(t,e,r,n){n=this.cfg.extend(n),e=this._parse(e,n.format);var i=n.kdf.execute(r,t.keySize,t.ivSize,e.salt);n.iv=i.iv;var o=m.decrypt.call(this,t,e,i.key,n);return o}})}(),function(){var t=CryptoJS,e=t.lib,r=e.BlockCipher,n=t.algo,i=[],o=[],s=[],a=[],c=[],f=[],u=[],h=[],p=[],l=[];!function(){for(var t=[],e=0;256>e;e++)t[e]=128>e?e<<1:e<<1^283;for(var r=0,n=0,e=0;256>e;e++){var d=n^n<<1^n<<2^n<<3^n<<4;d=d>>>8^255&d^99,i[r]=d,o[d]=r;var v=t[r],y=t[v],g=t[y],_=257*t[d]^16843008*d;s[r]=_<<24|_>>>8,a[r]=_<<16|_>>>16,c[r]=_<<8|_>>>24,f[r]=_;var _=16843009*g^65537*y^257*v^16843008*r;u[d]=_<<24|_>>>8,h[d]=_<<16|_>>>16,p[d]=_<<8|_>>>24,l[d]=_,r?(r=v^t[t[t[g^v]]],n^=t[t[n]]):r=n=1}}();var d=[0,1,2,4,8,16,32,64,128,27,54],v=n.AES=r.extend({_doReset:function(){for(var t=this._key,e=t.words,r=t.sigBytes/4,n=this._nRounds=r+6,o=4*(n+1),s=this._keySchedule=[],a=0;o>a;a++)if(r>a)s[a]=e[a];else{var c=s[a-1];a%r?r>6&&a%r==4&&(c=i[c>>>24]<<24|i[c>>>16&255]<<16|i[c>>>8&255]<<8|i[255&c]):(c=c<<8|c>>>24,c=i[c>>>24]<<24|i[c>>>16&255]<<16|i[c>>>8&255]<<8|i[255&c],c^=d[a/r|0]<<24),s[a]=s[a-r]^c}for(var f=this._invKeySchedule=[],v=0;o>v;v++){var a=o-v;if(v%4)var c=s[a];else var c=s[a-4];f[v]=4>v||4>=a?c:u[i[c>>>24]]^h[i[c>>>16&255]]^p[i[c>>>8&255]]^l[i[255&c]]}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,s,a,c,f,i)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,u,h,p,l,o);var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,n,i,o,s,a){for(var c=this._nRounds,f=t[e]^r[0],u=t[e+1]^r[1],h=t[e+2]^r[2],p=t[e+3]^r[3],l=4,d=1;c>d;d++){var v=n[f>>>24]^i[u>>>16&255]^o[h>>>8&255]^s[255&p]^r[l++],y=n[u>>>24]^i[h>>>16&255]^o[p>>>8&255]^s[255&f]^r[l++],g=n[h>>>24]^i[p>>>16&255]^o[f>>>8&255]^s[255&u]^r[l++],_=n[p>>>24]^i[f>>>16&255]^o[u>>>8&255]^s[255&h]^r[l++];f=v,u=y,h=g,p=_}var v=(a[f>>>24]<<24|a[u>>>16&255]<<16|a[h>>>8&255]<<8|a[255&p])^r[l++],y=(a[u>>>24]<<24|a[h>>>16&255]<<16|a[p>>>8&255]<<8|a[255&f])^r[l++],g=(a[h>>>24]<<24|a[p>>>16&255]<<16|a[f>>>8&255]<<8|a[255&u])^r[l++],_=(a[p>>>24]<<24|a[f>>>16&255]<<16|a[u>>>8&255]<<8|a[255&h])^r[l++];t[e]=v,t[e+1]=y,t[e+2]=g,t[e+3]=_},keySize:8});t.AES=r._createHelper(v)}();
