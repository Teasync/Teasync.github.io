$(document).ready(function () {
    body = $('body');
    body.fadeIn(1000).removeAttr('class').removeAttr('style');

    $(document).on('click', '.modal.show', function (e) {
        if ($(e.target).hasClass('show')) {
            handleClose(e);
        }
    });

    $('.nav-it').on('click', function(e) {
        window.setTimeout(function() {
            $('.modal').off();
            console.log('shown');
        }, 300);
    });

    $("[data-dismiss-custom='modal']").on('click', handleClose);

    $('.toSkills').click(function () {
        handleClose()
        setTimeout(function () {
            $('#navSkills').click()
        }, 200)
    });

    $('.toAbout').click(function () {
        handleClose()
        setTimeout(function () {
            $('#navAbout').click()
        }, 200)
    });

    $('.toProjects').click(function () {
        handleClose()
        setTimeout(function () {
            $('#navProjects').click()
        }, 200)
    });

    $('.toWork').click(function () {
        handleClose()
        setTimeout(function () {
            $('#navWork').click()
        }, 200)
    })
});

function handleClose(e) {
    //e.preventDefault();
    console.log('dismissed');
    modal = $('.modal.show');
    modal.removeClass('show');
    $('.modal-open').removeAttr('class');

    modal.on('transitionend webkitTransitionEnd oTransitionEnd', function (e) {
        $('.modal').modal('hide');
        console.log('hidden');
        $('.modal').off();
    });
}