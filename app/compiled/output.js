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
  'use strict';
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
var oauth = {
	//console.log('hey');
};

exports['default'] = oauth;
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF4a25lZTEvZGV2L3BvbHltZXItc3RyYXZhL2FwcC9zY3JpcHRzL2FwcC5qcyIsIi9Vc2Vycy9tYXhrbmVlMS9kZXYvcG9seW1lci1zdHJhdmEvYXBwL3NjcmlwdHMvbW9kdWxlcy9vYXV0aC1mbG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztrQ0NDa0IseUJBQXlCOzs7Ozs7Ozs7Ozs7O0FBVTNDLENBQUMsVUFBUyxRQUFRLEVBQUU7QUFDbEIsY0FBWSxDQUFDOzs7O0FBSWIsTUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFekMsS0FBRyxDQUFDLHFCQUFxQixHQUFHLFlBQVc7QUFDckMsWUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0dBQ3BELENBQUM7Ozs7QUFJRixLQUFHLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQVc7QUFDNUMsV0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0dBQzFDLENBQUMsQ0FBQzs7O0FBR0gsUUFBTSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFLFlBQVc7O0dBRXhELENBQUMsQ0FBQzs7Ozs7O0FBTUgsa0JBQWdCLENBQUMsd0JBQXdCLEVBQUUsVUFBUyxDQUFDLEVBQUU7QUFDckQsUUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNsRCxRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDbEUsUUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ2xFLFFBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDdEIsUUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO0FBQ3hELFFBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUM7QUFDaEQsUUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQzFCLFFBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUEsSUFBSyxVQUFVLElBQUksQ0FBQyxHQUFDLGNBQWMsQ0FBQSxDQUFDLEFBQUMsR0FBSSxjQUFjLENBQUMsQ0FBQztBQUMxSCxRQUFJLFdBQVcsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDOzs7QUFHN0IsV0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7OztBQUdsRixXQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsV0FBVyxHQUFHLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDOzs7QUFHcEYsV0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFdBQVcsR0FBRyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztHQUM3RSxDQUFDLENBQUM7OztBQUdILEtBQUcsQ0FBQyxZQUFZLEdBQUcsWUFBVztBQUM1QixRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDOUQsUUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ3RCLGlCQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDM0I7R0FDRixDQUFDO0NBRUgsQ0FBQSxDQUFFLFFBQVEsQ0FBQyxDQUFDOzs7QUNsRWIsWUFBWSxDQUFDOzs7OztBQUdiLElBQUksS0FBSyxHQUFHOztDQUVYLENBQUM7O3FCQUVhLEtBQUsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5pbXBvcnQgb3VhdGggZnJvbSAnLi9tb2R1bGVzL29hdXRoLWZsb3cuanMnO1xuLypcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5cbihmdW5jdGlvbihkb2N1bWVudCkge1xuICAndXNlIHN0cmljdCc7XG4gIC8vIEdyYWIgYSByZWZlcmVuY2UgdG8gb3VyIGF1dG8tYmluZGluZyB0ZW1wbGF0ZVxuICAvLyBhbmQgZ2l2ZSBpdCBzb21lIGluaXRpYWwgYmluZGluZyB2YWx1ZXNcbiAgLy8gTGVhcm4gbW9yZSBhYm91dCBhdXRvLWJpbmRpbmcgdGVtcGxhdGVzIGF0IGh0dHA6Ly9nb28uZ2wvRHgxdTJnXG4gIHZhciBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJyk7XG5cbiAgYXBwLmRpc3BsYXlJbnN0YWxsZWRUb2FzdCA9IGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYWNoaW5nLWNvbXBsZXRlJykuc2hvdygpO1xuICB9O1xuXG4gIC8vIExpc3RlbiBmb3IgdGVtcGxhdGUgYm91bmQgZXZlbnQgdG8ga25vdyB3aGVuIGJpbmRpbmdzXG4gIC8vIGhhdmUgcmVzb2x2ZWQgYW5kIGNvbnRlbnQgaGFzIGJlZW4gc3RhbXBlZCB0byB0aGUgcGFnZVxuICBhcHAuYWRkRXZlbnRMaXN0ZW5lcignZG9tLWNoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdPdXIgYXBwIGlzIHJlYWR5IHRvIHJvY2shJyk7XG4gIH0pO1xuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lci9wb2x5bWVyL2lzc3Vlcy8xMzgxXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdXZWJDb21wb25lbnRzUmVhZHknLCBmdW5jdGlvbigpIHtcbiAgICAvLyBpbXBvcnRzIGFyZSBsb2FkZWQgYW5kIGVsZW1lbnRzIGhhdmUgYmVlbiByZWdpc3RlcmVkXG4gIH0pO1xuXG4gIC8vIE1haW4gYXJlYSdzIHBhcGVyLXNjcm9sbC1oZWFkZXItcGFuZWwgY3VzdG9tIGNvbmRlbnNpbmcgdHJhbnNmb3JtYXRpb24gb2ZcbiAgLy8gdGhlIGFwcE5hbWUgaW4gdGhlIG1pZGRsZS1jb250YWluZXIgYW5kIHRoZSBib3R0b20gdGl0bGUgaW4gdGhlIGJvdHRvbS1jb250YWluZXIuXG4gIC8vIFRoZSBhcHBOYW1lIGlzIG1vdmVkIHRvIHRvcCBhbmQgc2hydW5rIG9uIGNvbmRlbnNpbmcuIFRoZSBib3R0b20gc3ViIHRpdGxlXG4gIC8vIGlzIHNocnVuayB0byBub3RoaW5nIG9uIGNvbmRlbnNpbmcuXG4gIGFkZEV2ZW50TGlzdGVuZXIoJ3BhcGVyLWhlYWRlci10cmFuc2Zvcm0nLCBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGFwcE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLW5hbWUnKTtcbiAgICB2YXIgbWlkZGxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZGRsZS1jb250YWluZXInKTtcbiAgICB2YXIgYm90dG9tQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvdHRvbS1jb250YWluZXInKTtcbiAgICB2YXIgZGV0YWlsID0gZS5kZXRhaWw7XG4gICAgdmFyIGhlaWdodERpZmYgPSBkZXRhaWwuaGVpZ2h0IC0gZGV0YWlsLmNvbmRlbnNlZEhlaWdodDtcbiAgICB2YXIgeVJhdGlvID0gTWF0aC5taW4oMSwgZGV0YWlsLnkgLyBoZWlnaHREaWZmKTtcbiAgICB2YXIgbWF4TWlkZGxlU2NhbGUgPSAwLjUwOyAgLy8gYXBwTmFtZSBtYXggc2l6ZSB3aGVuIGNvbmRlbnNlZC4gVGhlIHNtYWxsZXIgdGhlIG51bWJlciB0aGUgc21hbGxlciB0aGUgY29uZGVuc2VkIHNpemUuXG4gICAgdmFyIHNjYWxlTWlkZGxlID0gTWF0aC5tYXgobWF4TWlkZGxlU2NhbGUsIChoZWlnaHREaWZmIC0gZGV0YWlsLnkpIC8gKGhlaWdodERpZmYgLyAoMS1tYXhNaWRkbGVTY2FsZSkpICArIG1heE1pZGRsZVNjYWxlKTtcbiAgICB2YXIgc2NhbGVCb3R0b20gPSAxIC0geVJhdGlvO1xuXG4gICAgLy8gTW92ZS90cmFuc2xhdGUgbWlkZGxlQ29udGFpbmVyXG4gICAgUG9seW1lci5CYXNlLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwnICsgeVJhdGlvICogMTAwICsgJyUsMCknLCBtaWRkbGVDb250YWluZXIpO1xuXG4gICAgLy8gU2NhbGUgYm90dG9tQ29udGFpbmVyIGFuZCBib3R0b20gc3ViIHRpdGxlIHRvIG5vdGhpbmcgYW5kIGJhY2tcbiAgICBQb2x5bWVyLkJhc2UudHJhbnNmb3JtKCdzY2FsZSgnICsgc2NhbGVCb3R0b20gKyAnKSB0cmFuc2xhdGVaKDApJywgYm90dG9tQ29udGFpbmVyKTtcblxuICAgIC8vIFNjYWxlIG1pZGRsZUNvbnRhaW5lciBhcHBOYW1lXG4gICAgUG9seW1lci5CYXNlLnRyYW5zZm9ybSgnc2NhbGUoJyArIHNjYWxlTWlkZGxlICsgJykgdHJhbnNsYXRlWigwKScsIGFwcE5hbWUpO1xuICB9KTtcblxuICAvLyBDbG9zZSBkcmF3ZXIgYWZ0ZXIgbWVudSBpdGVtIGlzIHNlbGVjdGVkIGlmIGRyYXdlclBhbmVsIGlzIG5hcnJvd1xuICBhcHAub25NZW51U2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRyYXdlclBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhcGVyRHJhd2VyUGFuZWwnKTtcbiAgICBpZiAoZHJhd2VyUGFuZWwubmFycm93KSB7XG4gICAgICBkcmF3ZXJQYW5lbC5jbG9zZURyYXdlcigpO1xuICAgIH1cbiAgfTtcblxufSkoZG9jdW1lbnQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBvYXV0aCA9IHtcblx0Ly9jb25zb2xlLmxvZygnaGV5Jyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvYXV0aDsiXX0=
