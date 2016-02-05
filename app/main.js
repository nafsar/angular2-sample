(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
      var start = document.getElementById('start');
      start.addEventListener('click', function () {
         ng.platform.browser.bootstrap(app.AppComponent);
      }, false);
    });
})(window.app || (window.app = {}));
