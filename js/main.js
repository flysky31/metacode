$(document).ready(function () {
    let $header = $("#header"),
        $header_offset = $header.offset().top;

    $(window).scroll(function(){
        if( $(window).scrollTop() > 50){
            $header.addClass("on");
        } else {
            $header.removeClass("on");
        }
  
    });
        

    $(".gnb_m").click(function(){
        
         $("#aside").toggleClass("on");
         $(".aside_bg").toggleClass("on");
         $("body").addClass("on");
     
    })

    $("#aside .btn-close").click(function(){
        $("#aside").removeClass("on");
        $(".aside_bg").removeClass("on");
        $("body").removeClass("on");
    });

    $(".aside_bg").click(function(){
        $("#aside").removeClass("on");
        $(".aside_bg").removeClass("on");
        $("body").removeClass("on");
    });

    $(".nav-item").click(function(){
        $('.navbar').removeClass("on");
        $('#header').removeClass("bg_show")
    })

    $(".top_btn").click(function(){
        $("html,body").animate({
            scrollTop : '0'
        },100)
    
    })


   



    $("#aside .nav li > a").click(function(){
        $("#aside").removeClass("on");
        $(".aside_bg").removeClass("on");
        
        $("body").removeClass("on");


        $("body").css({"overflow":"","padding-top":"0","padding-bottom":"0","padding-left":"0"});
     
    });

    function checkWindowSize() {
        if (window.innerWidth >= 1024) {
          // 1024px 이상일 때 클래스를 삭제
          
          $("#aside").removeClass("on");
          $("body").removeClass("on");
          $(".aside_bg").removeClass("on");
        } else {
          // 1024px 미만일 때 클래스를 다시 추가
        
        }
      }
      
      // 페이지 로드 시와 화면 크기 변경 시에도 함수 실행
      window.addEventListener("load", checkWindowSize);
      window.addEventListener("resize", checkWindowSize);
});




// $(document).ready(function () {
//     var itemsToShow = 12; // 한 번에 보여줄 항목의 개수
//     var $hiddenItems = $(".none");
//     var totalItems = $hiddenItems.length;

//     $("#viewMoreBtn").click(function () {
//         // 남은 숨겨진 항목이 12개보다 작을 경우 모두 보이게 하기
//         if ($hiddenItems.length <= itemsToShow) {
//             $hiddenItems.slideDown();
//             $(this).hide();
//         } else {
//             // 숨겨진 항목 중 한 번에 설정한 개수만큼 보이게 하기
//             $hiddenItems.slice(0, itemsToShow).slideDown();
//             // 보이는 항목은 숨겨진 항목 리스트에서 제거
//             $hiddenItems = $hiddenItems.slice(itemsToShow);
//         }
//     });
// });

$(document).ready(function () {
    var itemsToShow = 12; // 한 번에 보여줄 항목의 개수
    var $hiddenItems = $(".none");
    var totalItems = $hiddenItems.length;

    // 초기 로드 시에 "더 보기" 버튼 생성
    if (totalItems > itemsToShow) {
        $("#viewMoreBtn").show();
    } 

    $("#viewMoreBtn").click(function () {
        // 남은 숨겨진 항목이 12개보다 작을 경우 모두 보이게 하기
        if ($hiddenItems.length <= itemsToShow) {
            $hiddenItems.slideDown();
            $(this).hide();
        } else {
            // 숨겨진 항목 중 한 번에 설정한 개수만큼 보이게 하기
            $hiddenItems.slice(0, itemsToShow).slideDown();
            // 보이는 항목은 숨겨진 항목 리스트에서 제거
            $hiddenItems = $hiddenItems.slice(itemsToShow);
        }
    });
});
