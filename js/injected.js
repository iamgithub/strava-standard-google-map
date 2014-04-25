(function() {
  var poll = function() {
    var elem = jQuery('a.map-type-selector[data-map-type-id=standard]').click();

    if (elem.length > 0) {
      elem.parents('.drop-down-menu').click();
    } else {
      setTimeout(poll, 1000);
    }
  };

  if (jQuery('#map-canvas').length > 0) {
    poll();
  }
})();
