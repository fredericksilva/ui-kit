[].forEach.call(document.querySelectorAll('.page-cell a'), function(elem) {
  elem.addEventListener('click', function(e) {
    e.preventDefault();
  });
});

new ui.Affix({
  element: '#docs-sidebar',
  offsetTop: 64
});

new ui.Scrollspy({
  element: '#docs-sidebar',
  activeClass: 'sidebar-link-selected'
});
