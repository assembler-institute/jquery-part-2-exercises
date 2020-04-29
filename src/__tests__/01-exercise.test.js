import $ from "jquery";

import exercise01 from "../01-exercise/01-exercise";

describe("01-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<div class="ex-wrapper">
    <div style="padding: 24px;" class="box">Card</div>
  </div>`;
  });

  test("read the padding value and create a new p element", () => {
    exercise01();

    expect($(".box").next().text()).toBe("24px");
  });
});
