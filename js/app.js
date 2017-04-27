$(function() {
  $(document).tooltip();
  $("#tabs").tabs();
  $("#accordion").accordion();
  $('#welcome li').css('background', 'url(\'images/icon_checker.gif\') no-repeat left top')
    .css('line-height', '15px')
    .css('padding-left', '15px');
  $("#sticky").sticky({
    topSpacing: 30
  });
  $('#welcome input').checkboxradio();
  $("#hearaboutus").selectmenu();
  $('input[type=submit]').on('click', function(e) {
    e.preventDefault();
    alert('you clicked me')
  });
});
