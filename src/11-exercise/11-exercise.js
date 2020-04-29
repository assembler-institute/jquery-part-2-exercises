import $ from "jquery";

function exercise11() {
  // Complete the code of the function
  $("button").click(function () {
    let height = parseInt($(".box").height());

    $(".box").height(height + 20);

    if ($(".box").prev("p").length) {
      $(".box").prev("p").text(height);
    } else {
      $(".box").before(`<p>${height}</p>`);
    }
  });
}

export default exercise11;
