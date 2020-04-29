import $ from "jquery";

import exercise04 from "../04-exercise/04-exercise";

describe("04-exercise", () => {
  beforeAll(() => {
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
      <button class="mb">Toggle card</button>
      <div class="box">Card</div>
    </div>`;
  });

  test("use the toggle() method to toggle the visibility of the .box element", () => {
    exercise04();

    $("button").trigger("click");
    expect($(".box").css("display")).toBe("none");

    $("button").trigger("click");
    expect($(".box").css("display")).toBe("block");
  });
});
