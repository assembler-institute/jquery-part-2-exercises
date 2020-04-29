import $ from "jquery";

import exercise11 from "../11-exercise/11-exercise";

describe("11-exercise", () => {
  beforeAll(() => {
    $.fx.off = true;

    document.head.innerHTML = `<style>
    .box {
        font-size: 16px;
        border-radius: 4px;
        border: 2px solid lightgray;
        max-width: 8em;
        padding: 24px;
        height: 24px;
        background-color: hsl(0, 0%, 98%);
      }

      .mb {
        margin-bottom: 16px;
      }
    </style>`;

    document.body.innerHTML = `<div class="ex-wrapper">
        <button class="mb">Show height</button>
        <div class="box">Card</div>
      </div>`;
  });

  afterAll(() => {
    $.fx.off = false;
  });

  test("create a p element with the height of the .box using $", () => {
    exercise11();

    let height = String(parseInt($(".box").height()));

    $("button").trigger("click");
    expect($(".box").prev().text()).toEqual(expect.stringContaining(height));

    $("button").trigger("click");
    $("button").trigger("click");
    expect($(".box").prev().text()).toEqual(
      expect.stringContaining(String(parseInt(height) + 40))
    );

    expect($(".box").prevUntil("button").length).toBe(1);
  });
});
