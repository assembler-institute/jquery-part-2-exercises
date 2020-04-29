import $ from "jquery";

import exercise10 from "../10-exercise/10-exercise";

describe("10-exercise", () => {
  beforeAll(() => {
    $.fx.off = true;

    document.head.innerHTML = `<style>
    .box {
      font-size: 16px;
      border-radius: 4px;
      border: 2px solid lightgray;
      max-width: 8em;
      padding: 24px;
      background-color: hsl(0, 0%, 98%);
    }

    .mb {
      margin-bottom: 16px;
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

  test("use the fadeOut(ms) method to hide the .box element", () => {
    exercise10();

    $("button").trigger("click");

    expect($(".box").css("display")).toBe("none");
  });
});
