import $ from "jquery";

function exercise18() {
  // Complete the code of the function
  $("button").click(function () {
    $(".img")
      .animate({ width: "20em" }, 500)
      .animate({ height: "20em" }, 300)
      .animate({ left: "4em" }, 100);
  });
}

export default exercise18;
