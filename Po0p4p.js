(() => {
  const excludedUrls = [
    'https://www.googleadservices.com/',
    'https://click.a-ads.com/',
    'http://d.adroll.com/',
    'https://adclick.g.doubleclick.net/',
    'https://googleads.g.doubleclick.net/',
    'https://cat.sg1.as.criteo.com/',
    'https://trakteer.id/',
    'https://sociabuzz.com/',
    'https://saweria.co/',
    'https://clck.adskeeper.com/',
    'https://www.facebook.com/',
    'https://www.instagram.com/',
    'https://twitter.com/',
    'https://www.threads.net/',
    'https://www.whatsapp.com/',
    'https://bsky.app/',
    'https://pinterest.com/',
    'https://www.kuysocial.com/',
    '#showPopup',
    'page1',
    'page2',
    'page3'
    
  ];

  const popupUrl = 'https://tastyannual.com/bA3.Vp0DPg3/pavLbhmnVBJ/ZKDu0/2UMETlcTwFO/T_EL0cLpTZY/x/NYz/AP5bMdTcUt';
  const delay = 8000;

  function hasAncestorWithClass(el, className) {
    while (el) {
      if (el.classList && el.classList.contains(className)) {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  }

  function hasAncestorWithAttribute(el, attr, value) {
    while (el) {
      if (el.getAttribute && el.getAttribute(attr) === value) {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  }

  function openPopupOnce() {
    if (Math.random() < 0.5) {
      window.open(popupUrl, '_blank');
    } else {
      const width = 300;
      const height = 200;
      const left = (screen.width - width) / 1;
      const top = (screen.height - height) / 1;
      const features = `width=${width},height=${height},left=${left},top=${top},` +
        `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes`;
      window.open(popupUrl, '_blank', features);
    }
  }

  let canPopup = false;
  setTimeout(() => {
    canPopup = true;
  }, delay);

  document.addEventListener('click', function(evt) {
    const excludedClasses = ['AdsbyGoolge'];
    for (let cls of excludedClasses) {
      if (hasAncestorWithClass(evt.target, cls)) {
        return;
      }
    }

    if (hasAncestorWithAttribute(evt.target, 'data-type', '_mgwidget')) {
      return;
    }
    
    const anchor = evt.target.closest('a');
    if (anchor && anchor.href) {
      for (let url of excludedUrls) {
        if (anchor.href.includes(url)) {
          return;
        }
      }
    }

    if (!canPopup) return;

    openPopupOnce();
    canPopup = false;
    setTimeout(() => {
      canPopup = true;
    }, delay);
  }, false);
})();
