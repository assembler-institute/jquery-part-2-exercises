import $ from "jquery";

function exercise16() {
  // Complete the code of the function
  $("button").click(function () {
    $(".box").animate(
      {
        height: "toggle",
      },
      1000,
      "swing"
    );
  });
}

export default exercise16;
