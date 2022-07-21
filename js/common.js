$(document).ready(function(){
    $(".notic>ul>li:first-child").click(function(){
        $(".modal-wrap").show();
    })
    $(".modal-close").click(function(){
        $(".modal-wrap").hide();
    });

    /* $(".m-open").click(function(){
        $(".m-content").slideDown();
    });
    $(".m-close").click(function(){
        $(".m-content").slideUp();
    }) */
    /* $(".m-open").click(function(){
        $(".m-content").show();
    });
    $(".m-close").click(function(){
        $(".m-content").hide();
    }) */
    $(".m-open").click(function(){
        $(".m-content").css({
            "left":0
        });
    });
    $(".m-close").click(function(){
        $(".m-content").css({
            "left":"-91%"
        })
    })
});