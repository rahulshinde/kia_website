Site = {}

$(document).ready( function(){
  $(document).on('scroll', Site.toggleHeader);
  Site.modal_container = $('#modal_container');
  Site.video_modal_container = $('#video_modal_container');

  setTimeout(function(){
    Site.loadImages();
  }, 1000);

  $(window).on('resize', Site.loadImages);
  Site.modal_container.on('click', Site.closeModal);
  Site.video_modal_container.on('click', Site.closeVideoModal);
  
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
  $('.open_video_modal').off('click').on('click', Site.openVideoModal);
}

Site.openModal = function(){
  Site.modal_container.toggle();
  console.log($(this).data('src'));
  $('#modal_container').css('background', 'url(' + $(this).data('src') + ')');
  $('#site').addClass('light_box');

}

Site.openVideoModal = function(){
  Site.video_modal_container.toggle();
  $('#video_modal_container source').attr('src', $(this).data('src'));
  $("video")[0].load();
  $('#site').addClass('light_box');

}

Site.closeModal = function(){
  Site.modal_container.toggle();
  $('#site').removeClass('light_box');
}

Site.closeVideoModal = function(){
  Site.video_modal_container.toggle();
  $("video")[0].pause();
  $('#site').removeClass('light_box');
}