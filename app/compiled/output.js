(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modulesOauthFlowJs = require('./modules/oauth-flow.js');

var _modulesOauthFlowJs2 = _interopRequireDefault(_modulesOauthFlowJs);

/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function (document) {

  //new Oauth();
  console.log('hey');

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.displayInstalledToast = function () {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function () {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function () {
    // imports are loaded and elements have been registered
  });

  // Main area's paper-scroll-header-panel custom condensing transformation of
  // the appName in the middle-container and the bottom title in the bottom-container.
  // The appName is moved to top and shrunk on condensing. The bottom sub title
  // is shrunk to nothing on condensing.
  addEventListener('paper-header-transform', function (e) {
    var appName = document.querySelector('.app-name');
    var middleContainer = document.querySelector('.middle-container');
    var bottomContainer = document.querySelector('.bottom-container');
    var detail = e.detail;
    var heightDiff = detail.height - detail.condensedHeight;
    var yRatio = Math.min(1, detail.y / heightDiff);
    var maxMiddleScale = 0.50; // appName max size when condensed. The smaller the number the smaller the condensed size.
    var scaleMiddle = Math.max(maxMiddleScale, (heightDiff - detail.y) / (heightDiff / (1 - maxMiddleScale)) + maxMiddleScale);
    var scaleBottom = 1 - yRatio;

    // Move/translate middleContainer
    Polymer.Base.transform('translate3d(0,' + yRatio * 100 + '%,0)', middleContainer);

    // Scale bottomContainer and bottom sub title to nothing and back
    Polymer.Base.transform('scale(' + scaleBottom + ') translateZ(0)', bottomContainer);

    // Scale middleContainer appName
    Polymer.Base.transform('scale(' + scaleMiddle + ') translateZ(0)', appName);
  });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function () {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };
})(document);

},{"./modules/oauth-flow.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.Oauth = Oauth;
var cred = {
	host: 'strava.com',
	clientId: 239,
	redirectUrl: 'http://localhost',
	responseType: 'code'
};

function Oauth() {
	return console.log(cred);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF4a25lZTEvZGV2L3BvbHltZXItc3RyYXZhL2FwcC9zY3JpcHRzL2FwcC5qcyIsIi9Vc2Vycy9tYXhrbmVlMS9kZXYvcG9seW1lci1zdHJhdmEvYXBwL3NjcmlwdHMvbW9kdWxlcy9vYXV0aC1mbG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUUsWUFBWSxDQUFDOzs7O2tDQUdHLHlCQUF5Qjs7Ozs7Ozs7Ozs7OztBQVUzQyxDQUFDLFVBQVMsUUFBUSxFQUFFOzs7QUFHbEIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7QUFLbkIsTUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFekMsS0FBRyxDQUFDLHFCQUFxQixHQUFHLFlBQVc7QUFDckMsWUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0dBQ3BELENBQUM7Ozs7QUFJRixLQUFHLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQVc7QUFDNUMsV0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0dBQzFDLENBQUMsQ0FBQzs7O0FBR0gsUUFBTSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFLFlBQVc7O0dBRXhELENBQUMsQ0FBQzs7Ozs7O0FBTUgsa0JBQWdCLENBQUMsd0JBQXdCLEVBQUUsVUFBUyxDQUFDLEVBQUU7QUFDckQsUUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNsRCxRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDbEUsUUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ2xFLFFBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDdEIsUUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO0FBQ3hELFFBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUM7QUFDaEQsUUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQzFCLFFBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUEsSUFBSyxVQUFVLElBQUksQ0FBQyxHQUFDLGNBQWMsQ0FBQSxDQUFDLEFBQUMsR0FBSSxjQUFjLENBQUMsQ0FBQztBQUMxSCxRQUFJLFdBQVcsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDOzs7QUFHN0IsV0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7OztBQUdsRixXQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsV0FBVyxHQUFHLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDOzs7QUFHcEYsV0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFdBQVcsR0FBRyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztHQUM3RSxDQUFDLENBQUM7OztBQUdILEtBQUcsQ0FBQyxZQUFZLEdBQUcsWUFBVztBQUM1QixRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDOUQsUUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ3RCLGlCQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDM0I7R0FDRixDQUFDO0NBRUgsQ0FBQSxDQUFFLFFBQVEsQ0FBQyxDQUFDOzs7QUN2RWIsWUFBWSxDQUFDOzs7Ozs7QUFFYixJQUFJLElBQUksR0FBRztBQUNWLEtBQUksRUFBRSxZQUFZO0FBQ2xCLFNBQVEsRUFBRSxHQUFHO0FBQ2IsWUFBVyxFQUFFLGtCQUFrQjtBQUMvQixhQUFZLEVBQUUsTUFBTTtDQUNwQixDQUFDOztBQUVLLFNBQVMsS0FBSyxHQUFHO0FBQ3ZCLFFBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUN6QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIgICd1c2Ugc3RyaWN0JztcblxuXG5pbXBvcnQgT2F1dGggZnJvbSAnLi9tb2R1bGVzL29hdXRoLWZsb3cuanMnO1xuLypcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5cbihmdW5jdGlvbihkb2N1bWVudCkge1xuXG4gIC8vbmV3IE9hdXRoKCk7XG4gIGNvbnNvbGUubG9nKCdoZXknKTtcblxuICAvLyBHcmFiIGEgcmVmZXJlbmNlIHRvIG91ciBhdXRvLWJpbmRpbmcgdGVtcGxhdGVcbiAgLy8gYW5kIGdpdmUgaXQgc29tZSBpbml0aWFsIGJpbmRpbmcgdmFsdWVzXG4gIC8vIExlYXJuIG1vcmUgYWJvdXQgYXV0by1iaW5kaW5nIHRlbXBsYXRlcyBhdCBodHRwOi8vZ29vLmdsL0R4MXUyZ1xuICB2YXIgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpO1xuXG4gIGFwcC5kaXNwbGF5SW5zdGFsbGVkVG9hc3QgPSBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FjaGluZy1jb21wbGV0ZScpLnNob3coKTtcbiAgfTtcblxuICAvLyBMaXN0ZW4gZm9yIHRlbXBsYXRlIGJvdW5kIGV2ZW50IHRvIGtub3cgd2hlbiBiaW5kaW5nc1xuICAvLyBoYXZlIHJlc29sdmVkIGFuZCBjb250ZW50IGhhcyBiZWVuIHN0YW1wZWQgdG8gdGhlIHBhZ2VcbiAgYXBwLmFkZEV2ZW50TGlzdGVuZXIoJ2RvbS1jaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnT3VyIGFwcCBpcyByZWFkeSB0byByb2NrIScpO1xuICB9KTtcblxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXIvcG9seW1lci9pc3N1ZXMvMTM4MVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignV2ViQ29tcG9uZW50c1JlYWR5JywgZnVuY3Rpb24oKSB7XG4gICAgLy8gaW1wb3J0cyBhcmUgbG9hZGVkIGFuZCBlbGVtZW50cyBoYXZlIGJlZW4gcmVnaXN0ZXJlZFxuICB9KTtcblxuICAvLyBNYWluIGFyZWEncyBwYXBlci1zY3JvbGwtaGVhZGVyLXBhbmVsIGN1c3RvbSBjb25kZW5zaW5nIHRyYW5zZm9ybWF0aW9uIG9mXG4gIC8vIHRoZSBhcHBOYW1lIGluIHRoZSBtaWRkbGUtY29udGFpbmVyIGFuZCB0aGUgYm90dG9tIHRpdGxlIGluIHRoZSBib3R0b20tY29udGFpbmVyLlxuICAvLyBUaGUgYXBwTmFtZSBpcyBtb3ZlZCB0byB0b3AgYW5kIHNocnVuayBvbiBjb25kZW5zaW5nLiBUaGUgYm90dG9tIHN1YiB0aXRsZVxuICAvLyBpcyBzaHJ1bmsgdG8gbm90aGluZyBvbiBjb25kZW5zaW5nLlxuICBhZGRFdmVudExpc3RlbmVyKCdwYXBlci1oZWFkZXItdHJhbnNmb3JtJywgZnVuY3Rpb24oZSkge1xuICAgIHZhciBhcHBOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1uYW1lJyk7XG4gICAgdmFyIG1pZGRsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taWRkbGUtY29udGFpbmVyJyk7XG4gICAgdmFyIGJvdHRvbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20tY29udGFpbmVyJyk7XG4gICAgdmFyIGRldGFpbCA9IGUuZGV0YWlsO1xuICAgIHZhciBoZWlnaHREaWZmID0gZGV0YWlsLmhlaWdodCAtIGRldGFpbC5jb25kZW5zZWRIZWlnaHQ7XG4gICAgdmFyIHlSYXRpbyA9IE1hdGgubWluKDEsIGRldGFpbC55IC8gaGVpZ2h0RGlmZik7XG4gICAgdmFyIG1heE1pZGRsZVNjYWxlID0gMC41MDsgIC8vIGFwcE5hbWUgbWF4IHNpemUgd2hlbiBjb25kZW5zZWQuIFRoZSBzbWFsbGVyIHRoZSBudW1iZXIgdGhlIHNtYWxsZXIgdGhlIGNvbmRlbnNlZCBzaXplLlxuICAgIHZhciBzY2FsZU1pZGRsZSA9IE1hdGgubWF4KG1heE1pZGRsZVNjYWxlLCAoaGVpZ2h0RGlmZiAtIGRldGFpbC55KSAvIChoZWlnaHREaWZmIC8gKDEtbWF4TWlkZGxlU2NhbGUpKSAgKyBtYXhNaWRkbGVTY2FsZSk7XG4gICAgdmFyIHNjYWxlQm90dG9tID0gMSAtIHlSYXRpbztcblxuICAgIC8vIE1vdmUvdHJhbnNsYXRlIG1pZGRsZUNvbnRhaW5lclxuICAgIFBvbHltZXIuQmFzZS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsJyArIHlSYXRpbyAqIDEwMCArICclLDApJywgbWlkZGxlQ29udGFpbmVyKTtcblxuICAgIC8vIFNjYWxlIGJvdHRvbUNvbnRhaW5lciBhbmQgYm90dG9tIHN1YiB0aXRsZSB0byBub3RoaW5nIGFuZCBiYWNrXG4gICAgUG9seW1lci5CYXNlLnRyYW5zZm9ybSgnc2NhbGUoJyArIHNjYWxlQm90dG9tICsgJykgdHJhbnNsYXRlWigwKScsIGJvdHRvbUNvbnRhaW5lcik7XG5cbiAgICAvLyBTY2FsZSBtaWRkbGVDb250YWluZXIgYXBwTmFtZVxuICAgIFBvbHltZXIuQmFzZS50cmFuc2Zvcm0oJ3NjYWxlKCcgKyBzY2FsZU1pZGRsZSArICcpIHRyYW5zbGF0ZVooMCknLCBhcHBOYW1lKTtcbiAgfSk7XG5cbiAgLy8gQ2xvc2UgZHJhd2VyIGFmdGVyIG1lbnUgaXRlbSBpcyBzZWxlY3RlZCBpZiBkcmF3ZXJQYW5lbCBpcyBuYXJyb3dcbiAgYXBwLm9uTWVudVNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkcmF3ZXJQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXBlckRyYXdlclBhbmVsJyk7XG4gICAgaWYgKGRyYXdlclBhbmVsLm5hcnJvdykge1xuICAgICAgZHJhd2VyUGFuZWwuY2xvc2VEcmF3ZXIoKTtcbiAgICB9XG4gIH07XG5cbn0pKGRvY3VtZW50KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWQgPSB7XG5cdGhvc3Q6ICdzdHJhdmEuY29tJyxcblx0Y2xpZW50SWQ6IDIzOSxcblx0cmVkaXJlY3RVcmw6ICdodHRwOi8vbG9jYWxob3N0Jyxcblx0cmVzcG9uc2VUeXBlOiAnY29kZSdcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBPYXV0aCgpIHtcblx0cmV0dXJuIGNvbnNvbGUubG9nKGNyZWQpO1xufSJdfQ==
