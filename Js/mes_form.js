$(document).ready(function () {
    $('input[type="radio"]').click(function () {
        if ($(this).is(':checked')) {
            var parent = $(this).parents(".input_group,.input_group_inline");

            if ($(this).val() == 1) {
                parent.find(".if_yes").css("display", "block");
                parent.find(".if_no").css("display", "none");
                parent.find(".if_check").css("display", "none");
            } else if ($(this).val() == 0) {
                parent.find(".if_yes").css("display", "none");
                parent.find(".if_no").css("display", "block");
            }
            parent.find(".explainArea").css("display", "block");
        }
    });
    $('input[class="radioCheck"]').on('change', function() {
      var parent = $(this).parents(".input_group,.input_group_inline");
      $('input[class="radioCheck"]').not(this).prop('checked', false);
      parent.find(".if_yes").css("display", "block");
      parent.find(".if_check").css("display", "block");
      parent.find(".if_no").css("display", "none");
   });
   
});

