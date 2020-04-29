import $ from "jquery";

import exercise09 from "../09-exercise/09-exercise";

describe("09-exercise", () => {
  beforeAll(() => {
    $.fx.off = true;

    document.head.innerHTML = `<style>
    .box {
      font-size: 16px;
      border-radius: 4px;
      border: 2px solid lightgray;
      max-width: 8em;
      padding: 24px;
      display: none;
      background-color: hsl(0, 0%, 98%);
    }

    .mb {
      margin-bottom: 16px;
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

  test("use the fadeIn(ms) method to show the .box element", () => {
    exercise09();

    $("button").trigger("click");

    expect($(".box").css("display")).toBe("block");
    expect($(".box").css("opacity")).toBe("1");
  });
});
