import $ from "jquery";

import exercise18 from "../18-exercise/18-exercise";

describe("18-exercise", () => {
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

  test("use the $ animate() method to execute several animate methods", () => {
    exercise18();

    $("button").trigger("click");

    expect(animateSpy).toHaveBeenCalledTimes(3);

    expect(animateSpy).toBeCalledWith(
      expect.objectContaining({ width: "20em" }),
      500
    );
    expect(animateSpy).toBeCalledWith(
      expect.objectContaining({ height: "20em" }),
      300
    );
    expect(animateSpy).toBeCalledWith(
      expect.objectContaining({ left: "4em" }),
      100
    );
  });
});
