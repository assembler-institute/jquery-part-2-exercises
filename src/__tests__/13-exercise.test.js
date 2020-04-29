import $ from "jquery";

import exercise13 from "../13-exercise/13-exercise";

describe("13-exercise", () => {
  beforeAll(() => {
    document.head.innerHTML = `<style>
      .box {
        font-size: 16px;
        border-radius: 4px;
        border: 2px solid lightgray;
        width: 120px;
        display: block;
        height: 24px;
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

  test("set the innerWidth and innerHeight of the .box using $", () => {
    exercise13();

    $("button").trigger("click");

    let height = parseInt($(".box").innerHeight());
    let width = parseInt($(".box").innerWidth());

    expect(width).toBe(400);
    expect(height).toBe(200);
  });
});
