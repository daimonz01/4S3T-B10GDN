<script>
(function(){
    const targetHost = "https://www.article-dnz.xyz/"; // domain link eksternal yang mau diganti
    const feedUrl = "https://aman-dn.blogspot.com/feeds/posts/default?alt=json-in-script&max-results=500&callback=__cb";
    window.__cb = function(data) {
        const entries = data.feed && data.feed.entry ? data.feed.entry : [];
        if (!entries.length) return;
        document.querySelectorAll("a[href]").forEach(link => {
            let href = link.getAttribute("href");
            if (href.includes("/gotox=")) {
                const realUrl = decodeURIComponent(href.split("/gotox=")[1]);
                if (realUrl.includes(targetHost)) {
                    href = realUrl;
                } else {
                    link.href = realUrl;
                    return;
                }
            }
            if (href.includes(targetHost)) {
                let hashParam = "";
                if (href.includes("#?o=")) {
                    hashParam = href.substring(href.indexOf("#?o="));
                }
                const randomIndex = Math.floor(Math.random() * entries.length);
                const postB = entries[randomIndex].link.find(l => l.rel === "alternate").href;
                link.href = postB + hashParam;
            }
        });
    };
    const s = document.createElement('script');
    s.src = feedUrl;
    document.body.appendChild(s);
})();