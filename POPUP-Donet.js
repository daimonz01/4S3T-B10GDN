document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.PopupButtonDonet');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var url = this.getAttribute('data-url');
            var width = 520;
            var height = 768;
            var left = (screen.width - width) / 2;
            var top = (screen.height - height) / 2;
            var options = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top;
            var newWindow = window.open(url, "_blank", options);
            if (newWindow) {
                newWindow.focus();
            } else {
                alert("Pembukaan jendela baru diblokir oleh browser. Pastikan popup diizinkan untuk situs ini.");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.PopupButtonDonet-2');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var url = this.getAttribute('data-url');
            var width = 520;
            var height = 768;
            var left = (screen.width - width) / 2;
            var top = (screen.height - height) / 2;
            var options = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top;
            var newWindow = window.open(url, "_blank", options);
            if (newWindow) {
                newWindow.focus();
            } else {
                alert("Pembukaan jendela baru diblokir oleh browser. Pastikan popup diizinkan untuk situs ini.");
            }
        });
    });
});