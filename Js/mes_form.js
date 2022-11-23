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
   
});

