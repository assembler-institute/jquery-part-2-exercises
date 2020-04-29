import $ from "jquery";

import exercise14 from "../14-exercise/14-exercise";

describe("14-exercise", () => {
  beforeAll(() => {
    document.head.innerHTML = `<style>
      .box {
        font-size: 16px;
        border-radius: 4px;
        border: 2px solid lightgray;
        width: 120px;
        height: 40px;
        margin: 24px;
        display: block;
        padding: 16px;
        background-color: hsl(0, 0%, 98%);
        text-align: center;
      }

      .mb {
        margin-bottom: 16px;
      }
    </style>`;

    document.body.innerHTML = `<div class="ex-wrapper">
        <button class="mb">Change dimensions</button>
        <div class="box">Card</div>
      </div>`;
  });

  test("swap the outer width and height of the .box using $", () => {
    exercise14();

    let height = parseInt($(".box").outerHeight());
    let width = parseInt($(".box").outerWidth());

    $("button").trigger("click");

    let swappedHeight = parseInt($(".box").outerHeight());
    let swappedWidth = parseInt($(".box").outerWidth());

    expect(swappedWidth).toBe(height);
    expect(swappedHeight).toBe(width);
  });
});
