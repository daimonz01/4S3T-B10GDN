(function () {
    const FIXED_DOMAIN = "https://search.blog-dnz.com/gotox=";
    const XOR_KEY = "mySecretKey";
    function xorEncode(text) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            let value =
                text.charCodeAt(i) ^
                XOR_KEY.charCodeAt(i % XOR_KEY.length);
            result += value
                .toString(16)
                .padStart(2, "0");
        }
        return result;
    }
    function xorDecode(hex) {
        let result = "";
        for (let i = 0; i < hex.length; i += 2) {
            let value = parseInt(
                hex.substr(i, 2),
                16
            );
            result += String.fromCharCode(
                value ^
                XOR_KEY.charCodeAt((i / 2) % XOR_KEY.length)
            );
        }
        return result;
    }
    function encodeLinks() {
        document
        .querySelectorAll('a[href^="/gotox="]')
        .forEach(function (a) {
            const original =
                a.getAttribute("href");
            const url =
                original.replace("/gotox=", "");
            if (url) {
                const key =
                    xorEncode(url);
                a.setAttribute(
                    "href",
                    FIXED_DOMAIN + key
                );
            }
        });
    }
    function decodeLink() {
        const path = window.location.pathname;
    if (path.startsWith("/gotox=")) {
        const key = path
            .substring(7);
        if (key) {
            const url = xorDecode(key);
            if (url) {
                if (
                    !url.startsWith("http://") &&
                    !url.startsWith("https://")
                ) {
                    window.location.href =
                        "https://" + url;
                }
                else {
                    window.location.href = url;
                }
            }
        }
    }
}
    if (
        document.readyState === "complete"
    ) {
        encodeLinks();
    }
    else {
        document.addEventListener(
            "DOMContentLoaded",
            encodeLinks
        );
    }
    decodeLink();
})();
