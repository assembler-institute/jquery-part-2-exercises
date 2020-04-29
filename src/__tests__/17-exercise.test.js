import $ from "jquery";

import exercise17 from "../17-exercise/17-exercise";

describe("17-exercise", () => {
  let animateSpy;

  beforeAll(() => {
    animateSpy = jest.spyOn($.fn, "animate");

    $.fx.off = true;

    document.head.innerHTML = `<style>
      .ex-wrapper {
        position: relative;
      }

      .img {
        display: block;
        border-radius: 8px;
        width: 200px;
        height: 200px;
        position: absolute;
        left: 0px;
      }

      .mb {
        margin-bottom: 16px;
      }
    </style>`;

    document.body.innerHTML = `<div class="ex-wrapper">
        <button class="mb">Animate image</button>
        <img src="../img/img.jpeg" class="img" />
      </div>`;
  });

  afterAll(() => {
    $.fx.off = false;

    animateSpy.mockRestore();
  });

  test("use the $ animate() method to animate the styles of the .img element", () => {
    exercise17();

    $("button").trigger("click");

    expect(animateSpy).toBeCalledWith(
      expect.objectContaining({
        width: "20em",
        height: "16em",
        left: "40px",
      }),
      300
    );
  });
});
