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
    'https://clck.adskeeper.com/'
  ];

  const popupUrl = 'https://quintessentialreport.com/bj3/V/0eP.3hp/vDb/m_V/JcZkD/0_2/MCTgcww-O/TqE/0/LVTtYRxXN/zBAy5YM/TdUS';
  const delay = 15000;

  const href = window.location.href;
  for (let frag of excludedUrls) {
    if (href.includes(frag)) {
      return;
    }
  }
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
    if (!canPopup) {
      return;
    }
    openPopupOnce();
    canPopup = false;
    setTimeout(() => {
      canPopup = true;
    }, delay);
  }, false);
})();
