'use strict';

$(document).on('click', '.login', function(){
    $(this).prop('disabled', true);
    $('.spinner').removeClass('d-none');
    $('#admin_login').trigger('submit');

})

$(document).on('click', '#reset_btn', function(){
    $(this).prop('disabled', true);
    $('.back-arrow').addClass('d-none');
    $('.spinner').removeClass('d-none');
    $('#btn_next_text').text('Sending...');
    $('#forgot_password_form').trigger('submit');

})

$(document).on('click', '#new_pass_reset', function(){
    $(this).prop('disabled', true);
    $('.spinner').removeClass('d-none');
    $('#btn_next_text').text('Reseting...');
    $('#password-form').trigger('submit');

})