import $ from "jquery";

import exercise07 from "../07-exercise/07-exercise";

describe("07-exercise", () => {
  beforeAll(() => {
    $.fx.off = true;

    document.head.innerHTML = ` <style>
      .box {
        font-size: 16px;
        border-radius: 4px;
        border: 2px solid lightgray;
        max-width: 8em;
        padding: 24px;
        display: none;
        background-color: hsl(0, 0%, 98%);
      }
    </style>`;

    document.body.innerHTML = `<div class="ex-wrapper">
      <button class="mb">Show card</button>
      <div class="box">Card</div>
    </div>`;
  });

  afterAll(() => {
    $.fx.off = false;
  });

  test("use the fadeIn() method to show the .box element", () => {
    exercise07();

    $("button").trigger("click");

    expect($(".box").css("display")).toBe("block");
  });
});
