import $ from "jquery";

function exercise15() {
  // Complete the code of the function
  $("button").click(function () {
    $(".box").animate(
      {
        height: "200px",
      },
      300,
      "linear"
    );
  });
}

export default exercise15;
