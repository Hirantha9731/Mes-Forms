// $(document).ready(function () {
//     $(".if_check").hide();
//
//     $('input[type="radio"]').click(function () {
//         if ($(this).is(':checked')) {
//             var parent = $(this).parents(".input_group,.input_group_inline");
//
//             if ($(this).val() == 1) {
//                 parent.find(".if_yes").css("display", "block");
//                 parent.find(".if_no").css("display", "none");
//             } else if ($(this).val() == 0) {
//                 parent.find(".if_yes").css("display", "none");
//                 parent.find(".if_no").css("display", "block");
//             }
//             parent.find(".explainArea").css("display", "block");
//         }
//     });
//
//     $('input[class="radioCheck"]').on('change', function() {
//
//         var content = $(this).parents(".checkbox_parent_input_group,.checkbox_parent_input_group_inline");
//         content.find(".if_check").css("display", "none");
//         var parent = $(this).parents(".checkbox_input_group,.checkbox_input_group_inline");
//
//
//          var parent = $(this).parents(".checkbox_input_group,.checkbox_input_group_inline");
//          if ($(this).is(":checked")) {
//              $('input[class="radioCheck"]').not(this).prop('checked', false);
//
//              parent.find(".if_check").css("display", "block");
//          }else{
//             content.find(".if_check").css("display", "none");
//          }
//      });
//
//
//     $(".btn-next").on("click",function (e){
//
//         var nextPage = $(this).parents(".form_page").next(".form_page");
//
//         $(this).parents(".form_page").addClass("section_hide");
//         $(this).parents(".form_page").removeClass("section_show");
//         $(nextPage).removeClass("section_hide");
//         $(nextPage).addClass("section_show");
//
//         e.preventDefault();
//     });
//
//     $(".btn-prev").on("click",function (e){
//
//         var prevPage = $(this).parents(".form_page").prev(".form_page");
//
//         $(this).parents(".form_page").addClass("section_hide");
//         $(this).parents(".form_page").removeClass("section_show");
//         $(prevPage).removeClass("section_hide");
//         $(prevPage).addClass("section_show");
//
//         e.preventDefault();
//     });
//
// });
//


$(document).ready(function () {
    $('input[type="radio"]').click(function () {
        if ($(this).is(':checked')) {
            var parent = $(this).parents(".input_group,.input_group_inline");

            if ($(this).val() == 1) {
                parent.find(".if_yes").css("display", "block");
                parent.find(".if_no").css("display", "none");
            } else if ($(this).val() == 0) {
                parent.find(".if_yes").css("display", "none");
                parent.find(".if_no").css("display", "block");
            } else if ($(this).val() == "Other") {
                parent.find(".if_other").css("display", "block");
            }
            else {
                parent.find(".if_other").css("display", "none");
            }

            parent.find(".explainArea").css("display", "block");
        }
    });


    // ------------ Repeate sections Js  -----------------

    // ------------ Add Record button -----------
    $(".addRecord").on("click", function(e){
        var parentWrp = $(this).closest(".oneToManySec");
        var repeatSec= $(parentWrp).find(".repeatSec");
        var dupElement = $(repeatSec[repeatSec.length - 1]).clone();

        $(dupElement).find(':text').each(function(){
            var elementId = $(this).attr('id');
            var idSplitArr = elementId.split('_');
            var dupNum = idSplitArr[idSplitArr.length - 1]

            if(isNaN(dupNum) || dupNum == undefined){
                elementId = elementId+"_"+ 1;
                $(this).attr({'id': elementId , 'name' : elementId });
            }else{

                var newID = "";
                idSplitArr[idSplitArr.length - 1] = "";
                idSplitArr.forEach(function (value, index, array) {
                    if(index < idSplitArr.length - 1){
                        newID = newID.concat(value , "_");
                    }
                });

                elementId = newID + repeatSec.length;
                $(this).attr({'id': elementId , 'name':elementId });
            }

            $(this).val('');
        });

        $(dupElement).find('select').each(function(){
            var elementId = $(this).attr('id');
            var idSplitArr = elementId.split('_');
            var dupNum = idSplitArr[idSplitArr.length - 1]

            if(isNaN(dupNum) || dupNum == undefined){
                elementId = elementId+"_"+ 1;
                $(this).attr({'id': elementId , 'name' : elementId });
            }else{
                var newID = "";
                idSplitArr[idSplitArr.length - 1] = "";
                idSplitArr.forEach(function (value, index, array) {
                    if(index < idSplitArr.length - 1){

                        newID = newID.concat(value , "_");
                    }
                });

                elementId = newID + repeatSec.length;
                $(this).attr({'id': elementId , 'name':elementId });
            }
        });

        $(repeatSec[repeatSec.length - 1]).after(dupElement);

        if($(parentWrp).find(".repeatSec").length > 1){
            $(parentWrp).find(".removeBtnWrp").css('display','block');
        }

        e.preventDefault();

    });

    // ------------ Remove Record button -----------

    $(".removeRecord").on("click", function(e){
        var parentWrp = $(this).closest(".oneToManySec");
        var repeatSec= $(parentWrp).find(".repeatSec");
        if(repeatSec.length > 1){
            $(repeatSec).last().remove();
        }

        if($(parentWrp).find(".repeatSec").length <= 1){
            $(parentWrp).find(".removeBtnWrp").css('display','none');
        }

        e.preventDefault();

    });


    // -------------- LIHTC JS ----------------
    $("#totalGrossEquity").val(ColumnCalc(".GrossEq", "" , 2));
    $("#totalFinalClosing").val(ColumnCalc(".FinalClosing" , "" , 2));
    $("#totalIrrForecasted").val(ColumnCalc(".IRRF" , "%" , 0));
    $("#totalIrrCurrent").val(ColumnCalc(".IRRC" , "%" , 0));
    $("#netTotalCreditForecast").val(ColumnCalc(".TCF", "$" , 0));
    $("#netTotalCreditCurrent").val(ColumnCalc(".TCT" , "$" , 0));

    $(document).on("focusout", ".GrossEq", function(e) {
        $("#totalGrossEquity").val(ColumnCalc(this, "" , 2));
    });

    $(document).on("focusout", ".FinalClosing", function(e) {
        $("#totalFinalClosing").val(ColumnCalc(this , "" , 2));
    });

    $(document).on("focusout", ".IRRF", function(e) {
        $("#totalIrrForecasted").val(ColumnCalc(this , "%" , 0));
    });

    $(document).on("focusout", ".IRRC", function(e) {
        $("#totalIrrCurrent").val(ColumnCalc(this , "%" , 0));
    });

    $(document).on("focusout", ".TCF", function(e) {
        $("#netTotalCreditForecast").val(ColumnCalc(this , "$" , 0));
    });

    $(document).on("focusout", ".TCT", function(e) {
        $("#netTotalCreditCurrent").val(ColumnCalc(this , "$" , 0));
    });


    function ColumnCalc(selector, format = '', decimalPlaces = 0){
        var ObName = $(selector).prop("className");
        var selectObject =  $(".FundPerf_table").find("."+ObName);
        var total = 0 ;
        selectObject.each(function(i,e){
            var value = parseFloat($(e).val());
            if(!isNaN(value) ){
                total = value + parseFloat(total);
            }
        });

        total = total.toFixed(decimalPlaces);

        switch (format) {
            case "$":
                total = "$"+total;
                break;
            case "%":
                total = total + "%";
                break;
            default:
                total = total + "";
        }

        return total;
    }

});