// $(document).on('page:change', function () { // Turbolinks
$(function () {
  $(".navbar li > a[href='" + this.location.pathname + "']").parent()
      .addClass('active');
});
