import $ from "jquery";

function exercise17() {
  // Complete the code of the function
  $("button").click(function () {
    $(".img").animate(
      {
        width: "20em",
        height: "16em",
        left: "40px",
      },
      300
    );
  });
}

export default exercise17;
