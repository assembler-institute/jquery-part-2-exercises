import $ from "jquery";

function exercise12() {
  // Complete the code of the function
  $("button").click(function () {
    let height = parseInt($(".box").height());
    let width = parseInt($(".box").width());

    $(".box").height(height + 20);
    $(".box").width(width + 20);

    $(".box").text(`${width}x${height}`);
  });
}

export default exercise12;
