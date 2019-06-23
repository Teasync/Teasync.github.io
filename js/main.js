$(document).ready(function() {
    $('body').fadeIn(1000).removeClass('hidden');

    // $('#skills').on('hide.bs.modal', function(e) {
    //     $('body').attr('class', 'blurOut')
    //     $('#skills').attr('class', 'modal blurOut')
    //     console.log("asdf")
    // })

    $('.modal').on('hide.bs.modal', function(e) {
        $('body').attr('class', 'blurOut');
        $(this).attr('class', 'modal shown fadeOut');
        setTimeout(function() {
            $('body').attr('class', '');
            $('.modal').attr('class', 'modal');
        }, 100)
    })

    $('.toSkills').click(function(){
        setTimeout(function() {
            $('#navSkills').click()
        }, 200)
    })

    $('.toAbout').click(function(){
        setTimeout(function() {
            $('#navAbout').click()
        }, 200)
    })

    $('.toProjects').click(function(){
        setTimeout(function() {
            $('#navProjects').click()
        }, 200)
    })

    $('.toWork').click(function(){
        setTimeout(function() {
            $('#navWork').click()
        }, 200)
    })

    // $('.modal').on('hidden.bs.modal', function(e) {
    //     $('body').attr('class', '')
    //     $(this).attr('class', 'modal')
    // })

    // $('#projects').on('hide.bs.modal', function(e) {
    //     $('#projects .modal-dialog').attr('class', 'modal-dialog blurOut')
    // })
    //
    // $('#work').on('hide.bs.modal', function(e) {
    //     $('#work .modal-dialog').attr('class', 'modal-dialog blurOut')
    // })
    //
    // $('#about').on('hide.bs.modal', function(e) {
    //     $('#about .modal-dialog').attr('class', 'modal-dialog blurOut')
    // })
});