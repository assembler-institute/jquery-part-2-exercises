import $ from "jquery";

import exercise08 from "../08-exercise/08-exercise";

describe("08-exercise", () => {
  beforeAll(() => {
    $.fx.off = true;

    document.head.innerHTML = ` <style>
      .box {
        font-size: 16px;
        border-radius: 4px;
        border: 2px solid lightgray;
        max-width: 8em;
        padding: 24px;
        background-color: hsl(0, 0%, 98%);
      }
    </style>`;

    document.body.innerHTML = `<div class="ex-wrapper">
      <button class="mb">Hide card</button>
      <div class="box">Card</div>
    </div>`;
  });

  afterAll(() => {
    $.fx.off = false;
  });

  test("use the fadeOut() method to hide the .box element", () => {
    exercise08();

    $("button").trigger("click");

    expect($(".box").css("display")).toBe("none");
  });
});
