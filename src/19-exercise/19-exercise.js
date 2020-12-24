import $ from "jquery";

function exercise19() {
  // Complete the code of the function
  $("button").click(function () {
    $(".img")
      .animate({ width: "24em" }, 1200, function () {
        $(".ex-wrapper").append("<p>Finished animating: width</p>");
      })
      .animate({ height: "16em" }, 100, function () {
        $(".ex-wrapper").append("<p>Finished animating: height</p>");
      })
      .animate({ padding: "2em" }, 1000, function () {
        $(".ex-wrapper").append("<p>Finished animating: padding</p>");
      });
  });
}

export default exercise19;
