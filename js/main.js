$(document).ready( function(){
  // root size
  root_size = $(window).width() / 65;
  $('html').css({ 'font-size': root_size });
  $(window).resize(changeRootFontSize);

  $('#toggle_about').on('click', function(){
    $('.about').fadeToggle();
    $('#site').toggleClass('fix');
  })
})

changeRootFontSize = function() {
  root_size = $(window).width() / 65;
  $('html').css({ 'font-size': root_size });
}