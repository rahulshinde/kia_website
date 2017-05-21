Site = {}

$(document).ready( function(){
  $(document).on('scroll', Site.toggleHeader);

  setTimeout(function(){
    Site.loadImages();
  }, 1000);

  $(window).on('resize', Site.loadImages);
  
})

Site.toggleHeader = function(){
  Site.scroll_position = $(document).scrollTop();

  if (Site.scroll_position > 0 && !$('#about').hasClass('scroll')){
    $('#about').addClass('scroll');
    $('#currently').addClass('scroll');
  } else if (Site.scroll_position <= 0 && $('#about').hasClass('scroll')){
    $('#about').removeClass('scroll');
    $('#currently').removeClass('scroll');
  }
}

Site.loadImages = function(){
  $('#image_fallback').removeClass('js');
  $('#image_container').empty();
  Site.window_width = $(window).width();
  Site.total_width = 0;
  Site.storage = [];
  Site.image_list = $('#image_fallback img')
  Site.image_list_length = Site.image_list.length;
  Site.div_number = 1;
  Site.margin_left = 0;

  Site.image_list.each(function(index, element){
    Site.image_width = $(this).width();
    Site.total_width = Site.total_width + Site.image_width;

    if (Site.total_width >= Site.window_width || index == Site.image_list_length - 1){
      Site.storage.push($(this));
      var array_length = Site.storage.length;
      $('#image_container').append('<div class="image_row_general image_row' + Site.div_number + '" style="width: ' + Site.total_width + 1 + 'px; margin-left: ' + Site.margin_left +'px;"></div>')
      for (var i = 0; i < array_length; i++) {
        console.log(Site.storage[i]);
        $('.image_row' + Site.div_number).append($(Site.storage[i]).clone()).html();
      };
      Site.margin_left = Site.window_width - Site.total_width;
      Site.storage = [];
      Site.storage.push($(this));
      Site.total_width = 0;
      Site.div_number = Site.div_number + 1;
    } else{
      Site.storage.push($(this));
    }
  });

  $('#image_fallback').addClass('js');


}