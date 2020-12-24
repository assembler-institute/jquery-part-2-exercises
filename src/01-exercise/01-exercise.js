import $ from "jquery";

function exercise01() {
  // Complete the code of the function
  let padding = $(".box").css("padding");
  let p = $("<p></p>");

  p.text(padding);

  $(".box").after(p);
}

export default exercise01;
