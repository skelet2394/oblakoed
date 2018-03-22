// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require bootstrap
//= require jquery
//= require select2
//= require icheck
//= require rails-ujs
//= require_tree .


$(document).ready(function() {
  $("#create-box-1").on("shown.bs.modal", function() {
    $("#save_form").on("click", function() {
      event.preventDefault();
      $("#create_form").submit();
    });
  });
  $('input').iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue',
    increaseArea: '20%' // optional
  });
  $(".select2-search input").prop("readonly", true);

  $('.dropdown').select2();
  $('input').on('ifToggled', function(event) {

    id = event.target.id
    $.ajax({
      url: "/todo/update",
      type: 'PUT',
      data: {
        domid: id
      },
      success:    function(response, status) {
                    console.log(status);
        }
    });

  });
});

function icheck() {
  if ($(".icheck-me").length > 0) {
    $(".icheck-me").each(function() {
      var $el = $(this);
      var skin = ($el.attr('data-skin') !== undefined) ? "_" + $el.attr('data-skin') : "",
        color = ($el.attr('data-color') !== undefined) ? "-" + $el.attr('data-color') : "";
      var opt = {
        checkboxClass: 'icheckbox' + skin + color,
        radioClass: 'iradio' + skin + color,
      }
      $el.iCheck(opt);
    });
  }
}

// $(function() {
//   icheck();
// })
