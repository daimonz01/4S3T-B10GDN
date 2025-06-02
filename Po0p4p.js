(function () {
  var popupUrl = 'https://quintessentialreport.com/bj3/V/0eP.3hp/vDb/m_V/JcZkD/0_2/MCTgcww-O/TqE/0/LVTtYRxXN/zBAy5YM/TdUS';
  var excludedUrls = [
    'https://www.googleadservices.com/',
    'https://click.a-ads.com/',
    'http://d.adroll.com/',
    'https://adclick.g.doubleclick.net/',
    'https://googleads.g.doubleclick.net/',
    'https://cat.sg1.as.criteo.com/',
    'https://clck.adskeeper.com/'
  ];
  var popupDelay = 7 * 1000;
  var allowPopup = false;
  var onCooldown = false;
  var hasClicked = false;

  function isExcludedHref(href) {
    if (!href) return false;
    return excludedUrls.some(function (ex) {
      return href.indexOf(ex) === 0;
    });
  }
  if (!window.__popupHandlerAttached) {
    setTimeout(function () {
      allowPopup = true;
      document.addEventListener('click', function (e) {
        if (!allowPopup || onCooldown || hasClicked) return;
        var el = e.target;
        var link = el.closest && el.closest('a');
        if (el.closest('.AdsbyGoolge')) return;
        if (el.closest('div[data-type="_mgwidget"]')) return;
        if (link && isExcludedHref(link.href)) return;
        hasClicked = true;
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
        onCooldown = true;
        setTimeout(function () {
          onCooldown = false;
          hasClicked = false;
        }, popupDelay);
      }, false);
      window.__popupHandlerAttached = true;
    }, popupDelay);
  }
})();