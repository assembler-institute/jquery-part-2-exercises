import $ from "jquery";

import exercise16 from "../16-exercise/16-exercise";

describe("16-exercise", () => {
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
        height: 200px;
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
        <button class="mb">Toggle animate</button>
        <div class="box">Card</div>
      </div>`;
  });

  afterAll(() => {
    $.fx.off = false;

    animateSpy.mockRestore();
  });

  test("use the $ animate() method to toggle the height of the .box element", () => {
    exercise16();

    $("button").trigger("click");
    expect($(".box").css("display")).toBe("none");
    expect(animateSpy).toBeCalledWith(
      expect.objectContaining({
        height: "toggle",
      }),
      1000,
      "swing"
    );

    $("button").trigger("click");
    expect($(".box").css("display")).toBe("block");
    expect(animateSpy).toBeCalledWith(
      expect.objectContaining({
        height: "toggle",
      }),
      1000,
      "swing"
    );
  });
});
