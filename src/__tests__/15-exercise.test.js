import $ from "jquery";

import exercise15 from "../15-exercise/15-exercise";

describe("15-exercise", () => {
  let animateSpy;

  beforeAll(() => {
    animateSpy = jest.spyOn($.fn, "animate");

    $.fx.off = true;

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
        <button class="mb">Animate</button>
        <div class="box">Card</div>
      </div>`;
  });

  afterAll(() => {
    $.fx.off = false;

    animateSpy.mockRestore();
  });

  test("use the $ animate() method to animate the .box element", () => {
    exercise15();

    $("button").trigger("click");

    expect($(".box").css("height")).toBe("200px");

    expect(animateSpy).toHaveBeenCalledTimes(1);

    expect(animateSpy).toBeCalledWith(
      expect.objectContaining({
        height: "200px",
      }),
      300,
      "linear"
    );
  });
});
