$(document).ready(function(){
      $('.slider').slick({
            dots:true,
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                  {
                        breakpoint: 930,
                        settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                        }
                  },
                  {
                        breakpoint: 760,
                        settings: {
                        dots:false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                        }
                  }
            ]
      });
           

            if($(window).width()<930){
                  function slider(e){
                        let i,j,ii,four;
                        let title = '"Галичанин" 100 тонн - доступное решение для подъёма тяжёлых грузов';
                        $(".slider").slick("unslick");
                        $(".slider_item").remove();
                        while (i<2){           //набираем 2 слайда
                              e.preventDefault();
                              $('<div class="slider_item"></div>').appendTo('.slick-track'); //добавляем блок с слайдом
                              while (ii<4){                                         //набираем 4 блока в слайд
                                    $('<div class="block_news"></div>').appendTo('.slider_item');
                                    $('<div class="pic"></div>').appendTo('.block_news');

                                    if (j>3){                                       //проверка индекса для картинки
                                          j=1;
                                          $('<img>', {src: 'img/img'+j+'.jpg'}).appendTo('.pic');
                                    }
                                    else{
                                          $('<img>', {src: 'img/img'+j+'.jpg'}).appendTo('.pic');
                                    }

                                    $('<a>', {href: '#'}).appendTo('.pic');
                                    $('<h4>'+title+'</h4>').appendTo('.block_news');
                                    $('<div class="about_news"></div>').appendTo('.block_news');
                                    $('<span>13 апреля 2021</span>').appendTo('.about_news');
                                    $('<p>2344</p>').appendTo('.about_news');
                                    ii++;
                                    j++;
                              }
                              i++;
                        }
                        $(".slider").slick({
                              slidesToShow: 4,
                              slidesToScroll: 4,
                              responsive: [
                                    {
                                          breakpoint: 760,
                                          settings: {
                                          dots:false,
                                          slidesToShow: 1,
                                          slidesToScroll: 1
                                          }
                                    }
                              ]
                              });

                  }
            }
                  
    
});