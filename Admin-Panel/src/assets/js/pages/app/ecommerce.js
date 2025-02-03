'use strict';

let toggleButton = document.querySelector('.ul-ecommerce-toggle-button');
let ecommerceSidebar = document.querySelector('.ul-ecommerce-sidebar');
var ecommerceSidebarOverlay = document.querySelector(
  '.ul-ecommerce-sidebar-ecommerceSidebarOverlay'
);

toggleButton.addEventListener('click', function () {
  ULUtil.hasClass(ecommerceSidebar, 'open')
    ? ULUtil.removeClass(ecommerceSidebar, 'open')
    : ULUtil.addClass(ecommerceSidebar, 'open');
  ULUtil.hasClass(ecommerceSidebarOverlay, 'open')
    ? ULUtil.removeClass(ecommerceSidebarOverlay, 'open')
    : ULUtil.addClass(ecommerceSidebarOverlay, 'open');
});

ecommerceSidebarOverlay.addEventListener('click', function () {
  ULUtil.removeClass(ecommerceSidebarOverlay, 'open');
  ULUtil.removeClass(ecommerceSidebar, 'open');
});
