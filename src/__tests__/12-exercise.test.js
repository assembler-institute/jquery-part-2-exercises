import $ from "jquery";

import exercise12 from "../12-exercise/12-exercise";

describe("12-exercise", () => {
  beforeAll(() => {
    $.fx.off = true;

    document.head.innerHTML = `<style>
      .box {
        font-size: 16px;
        border-radius: 4px;
        border: 2px solid lightgray;
        width: 120px;
        height: 24px;
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
        <button class="mb">Show dimensions</button>
        <div class="box">Card</div>
      </div>`;
  });

  afterAll(() => {
    $.fx.off = false;
  });

  test("set the widthxheight to be the text content of the .box using $", () => {
    exercise12();

    let height = parseInt($(".box").height());
    let width = parseInt($(".box").width());

    let height2 = height + 20;
    let width2 = width + 20;

    let height3 = height2 + 20;
    let width3 = width2 + 20;

    $("button").trigger("click");
    expect($(".box").text()).toBe(`${String(width)}x${String(height)}`);

    $("button").trigger("click");
    expect($(".box").text()).toBe(`${String(width2)}x${String(height2)}`);

    $("button").trigger("click");
    expect($(".box").text()).toBe(`${String(width3)}x${String(height3)}`);
  });
});
