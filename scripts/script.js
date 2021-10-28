$(document).ready(function(){
      $('.slider').slick({
            dots:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                  {
                        breakpoint: 930,
                        settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                        }
                  },
                  {
                        breakpoint: 700,
                        settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                        }
                  }
            ]
            });
            // let n = $(".slider_item").length();
            // let array = [];
            // let four,bool;
            // if($(window).innerWidth<930){
            //       for (let i=0;i<=n;i++){
            //             four++;
            //             arr[i] = $(".slider_item").html();
            //             //element.remove()
            //             if (four==4){

            //             }
            //       }
            // }
    
});