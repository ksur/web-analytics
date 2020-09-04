# prevent browser redirect after clicking on testet element
# useful for Google Analytics debugging, because you can check what events or GTM tags are fired

window.addEventListener('beforeunload', function(e) {
  e.preventDefault();
  e.returnValue = '';
});
