$(document).ready(function () {
    $(".if_check").hide();

    $('input[type="radio"]').click(function () {
        if ($(this).is(':checked')) {
            var parent = $(this).parents(".input_group,.input_group_inline");

            if ($(this).val() == 1) {
                parent.find(".if_yes").css("display", "block");
                parent.find(".if_no").css("display", "none");
            } else if ($(this).val() == 0) {
                parent.find(".if_yes").css("display", "none");
                parent.find(".if_no").css("display", "block");
            }
            parent.find(".explainArea").css("display", "block");
        }
    });
    
    $('input[class="radioCheck"]').on('change', function() {
        
       $(".if_check").hide();
        var parent = $(this).parents(".checkbox_input_group,.checkbox_input_group_inline");
        if ($(this).is(":checked")) { 
            $('input[class="radioCheck"]').not(this).prop('checked', false);
            
            parent.find(".if_check").css("display", "block"); 
        }else{
            $(".if_check").hide();
        }
    });

    $(".btn-next").on("click",function (e){

        var nextPage = $(this).parents(".form_page").next(".form_page");

        $(this).parents(".form_page").addClass("section_hide");
        $(this).parents(".form_page").removeClass("section_show");
        $(nextPage).removeClass("section_hide");
        $(nextPage).addClass("section_show");

        e.preventDefault();
    });

    $(".btn-prev").on("click",function (e){

        var prevPage = $(this).parents(".form_page").prev(".form_page");

        $(this).parents(".form_page").addClass("section_hide");
        $(this).parents(".form_page").removeClass("section_show");
        $(prevPage).removeClass("section_hide");
        $(prevPage).addClass("section_show");

        e.preventDefault();
    });

});

