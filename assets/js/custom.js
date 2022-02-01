$(document).ready(function(){
    $(".language.en").on('click', function(){
        $('head').append('<link rel="stylesheet" href="' + this.getAttribute('data-src') + '" type="text/css" />');
    	$('body').css('direction','ltr');
    	//$('.language.en').hide();
    	//$('.language.ar').show();
    });
    $(".language.ar").on('click', function(){
        $('head').append('<link rel="stylesheet" href="' + this.getAttribute('data-src') + '" type="text/css" />');
    	$('body').css('direction','rtl');
    	//$('.language.ar').hide();
    	//$('.language.en').show();
    });
});


//---- wizard ----//
$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');
        allLastBtn = $('.lastBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            //navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        //$(".form-group").removeClass("has-error");
        //for (var i = 0; i < curInputs.length; i++) {
        //    if (!curInputs[i].validity.valid) {
        //        isValid = false;
        //        $(curInputs[i]).closest(".form-group").addClass("has-error");
        //    }
        //}

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });


    allLastBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            lastStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().last().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        if (isValid)
            //alert('jjjjj');
            lastStepWizard.setAttribute('disabled', 'disabled').trigger('click');

            
        
    });

    $('div.setup-panel div a.btn-primary').trigger('click');

   

});


//----- upload profile pic -------//
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function () {
    readURL(this);
});


//------ clip to artboard ----------//
// functionality to copy text from inviteCode to clipboard

// trigger copy event on click
$('#copy').on('click', function (event) {
    console.log(event);
    copyToClipboard(event);
});

// event handler
function copyToClipboard(e) {
    // alert('this function was triggered');
    // find target element
    var
        t = e.target,
        c = t.dataset.copytarget,
        inp = (c ? document.querySelector(c) : null);
    console.log(inp);
    // check if input element exist and if it's selectable
    if (inp && inp.select) {
        // select text
        inp.select();
        try {
            // copy text
            document.execCommand('copy');
            inp.blur();

            // copied animation
            t.classList.add('copied');
            setTimeout(function () {
                t.classList.remove('copied');
            }, 1500);
        } catch (err) {
            //fallback in case exexCommand doesnt work
            alert('please press Ctrl/Cmd+C to copy');
        }

    }

}

// li nav style
$("ul.dash_settings.nav.nav-tabs .nav-link:hover").parent().css("border-right", "3px solid #1FA7CD");


