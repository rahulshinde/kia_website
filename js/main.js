Site = {}

$(document).ready( function(){
  $(document).on('scroll', Site.toggleHeader);
  Site.modal_container = $('#modal_container');

  setTimeout(function(){
    Site.loadImages();
  }, 1000);

  $(window).on('resize', Site.loadImages);
  Site.modal_container.on('click', Site.closeModal);
  
})

Site.toggleHeader = function(){
  Site.scroll_position = $(document).scrollTop();

  if (Site.scroll_position > 0 && !$('#about').hasClass('scroll')){
    $('#about').addClass('scroll');
    $('#currently').addClass('scroll');
    $('nav').addClass('scroll');
    $('#projects').addClass('scroll');
  } else if (Site.scroll_position <= 0 && $('#about').hasClass('scroll')){
    $('#about').removeClass('scroll');
    $('#currently').removeClass('scroll');
    $('#projects').removeClass('scroll');
    $('nav').removeClass('scroll');
  }
}

Site.loadImages = function(){

  Site.window_width = $(window).width();
  if (Site.window_width <= 740){
    return;
  } else{
    $('.repeat').remove();
    Site.image_container= $("#original");
    Site.image_width = $('#original').outerWidth();
    Site.repeat = Site.image_width / Site.window_width;
    Site.repeat = Math.ceil(Site.repeat);

    for (var i = 1; i <= Site.repeat - 1; i++) {
      Site.new_line = "<div class='image_container repeat' style='transform: translateX(" + (i * 100 * -1) + "vw);'>" + Site.image_container.html() + "</div>"
      $('#projects').append(Site.new_line);

    };

    Site.setupModal();
  }

}

Site.setupModal = function(){
  $('.open_modal').off('click').on('click', Site.openModal);
}

Site.openModal = function(){
  Site.modal_container.toggle();
  console.log($(this).data('src'));
  $('#modal_container').css('background', 'url(' + $(this).data('src') + ')');
  $('#site').addClass('light_box');

}

Site.closeModal = function(){
  Site.modal_container.toggle();
  $('#site').removeClass('light_box');
}