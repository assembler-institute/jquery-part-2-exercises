import $ from "jquery";

import exercise19 from "../19-exercise/19-exercise";

describe("19-exercise", () => {
  let animateSpy;

  beforeAll(() => {
    animateSpy = jest.spyOn($.fn, "animate");

    $.fx.off = true;

    document.head.innerHTML = `<style>
      .ex-wrapper {
        margin-bottom: 40px;
      }

      .img {
        display: block;
        border-radius: 8px;
        width: 200px;
        height: 200px;
        margin-bottom: 16px;
        border: 1px solid lightgrey;
        border-radius: 4px;
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

  test("use the $ animate() method to execute several animate methods and append a p element", () => {
    exercise19();

    $("button").trigger("click");

    expect(animateSpy).toHaveBeenCalledTimes(3);

    expect(animateSpy).toBeCalledWith(
      expect.objectContaining({ width: "24em" }),
      1200,
      expect.any(Function)
    );
    expect(animateSpy).toBeCalledWith(
      expect.objectContaining({ height: "16em" }),
      100,
      expect.any(Function)
    );
    expect(animateSpy).toBeCalledWith(
      expect.objectContaining({ padding: "2em" }),
      1000,
      expect.any(Function)
    );

    expect($(".img").next().text()).toMatch(/width/);
    expect($(".img").next().next().text()).toMatch(/height/);
    expect($(".img").next().next().next().text()).toMatch(/padding/);
  });
});
