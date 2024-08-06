$(document).ready(function () {
    let $header = $("#header"),
        $header_offset = $header.offset().top;

    $(window).scroll(function(){
        let laytype = $("#subType").val();
        
        if (laytype =="") {
            if( $(window).scrollTop() > 50){
                $header.addClass("on");
            } else {
                $header.removeClass("on");
            }
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




$(document).ready(function () {
    // var itemsToShow = 12; // 한 번에 보여줄 항목의 개수
    // var $hiddenItems = $(".none");
    // var totalItems = $hiddenItems.length;

    // $("#viewMoreBtn").click(function () {
    //     // 남은 숨겨진 항목이 12개보다 작을 경우 모두 보이게 하기
    //     if ($hiddenItems.length <= itemsToShow) {
    //         $hiddenItems.slideDown();
    //         $(this).hide();
    //     } else {
    //         // 숨겨진 항목 중 한 번에 설정한 개수만큼 보이게 하기
    //         $hiddenItems.slice(0, itemsToShow).slideDown();
    //         // 보이는 항목은 숨겨진 항목 리스트에서 제거
    //         $hiddenItems = $hiddenItems.slice(itemsToShow);
    //     }
    // });

    var itemsToShow = 12; // 한 번에 표시할 항목 수
    var itemsIncrement = 12; // 더보기 클릭마다 추가로 표시할 항목 수
    var totalItems = $('.list > .black').length;
    var currentIndex = 0;

    if (totalItems > itemsToShow) {
        createLoadButton();
    } else {
        $('#viewMoreBtn').hide(); // 12개 미만의 항목이면 더보기 버튼을 숨깁니다.
    }

    function createLoadButton() {
        $('.list > .black:gt(' + (itemsToShow - 1) + ')').hide();
        $('#viewMoreBtn').click(function (e) {
            e.preventDefault();
            currentIndex += itemsIncrement;
            $(".list > .black:lt(" + currentIndex + ")").fadeIn(200);
            if (currentIndex >= totalItems) {
                $('#viewMoreBtn').fadeOut(100);
            }
        });
    }

    $(window).scroll(function() {
        // 스크롤 위치를 가져옵니다.
        var scrollPosition = $(this).scrollTop();

        // 스크롤 위치가 200 픽셀 이상일 때 "To Top" 버튼을 표시
        if (scrollPosition > 200) {
            $("#toTopButton").fadeIn();
        } else {
            $("#toTopButton").fadeOut();
        }
    });

    // "To Top" 버튼 클릭 이벤트 처리
    $("#toTopButton").click(function() {
        // 페이지 상단으로 부드럽게 스크롤
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false; // 기본 동작 방지
    });
    
});




function aniCtrl(){
    var _st = $(window).scrollTop();
   
    var _wH = $(window).height();

    $('.ani-item').each(function(){
        var _this = $(this);
        if( _this.offset().top <= (_st + _wH) && !_this.hasClass('done') ){
            _this.addClass('done');
        }
    });
}


$(document).ready(function(){

    aniCtrl();

    $(window).scroll(function(){
        aniCtrl();
    });
});



