import $ from "jquery";

function exercise14() {
  // Complete the code of the function
  $("button").click(function () {
    let width = parseInt($(".box").outerWidth());
    let height = parseInt($(".box").outerHeight());

    $(".box").outerWidth(height);
    $(".box").outerHeight(width);
  });
}

export default exercise14;
