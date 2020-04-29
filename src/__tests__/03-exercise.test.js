import $ from "jquery";

import exercise03 from "../03-exercise/03-exercise";

describe("03-exercise", () => {
  beforeAll(() => {
    document.head.innerHTML = ` <style>
      .box {
        font-size: 16px;
        border-radius: 4px;
        border: 2px solid lightgray;
        max-width: 8em;
        padding: 24px;
        background-color: hsl(0, 0%, 98%);
      }
    </style>`;

    document.body.innerHTML = `<div class="ex-wrapper">
      <div class="box">Card</div>
    </div>`;
  });

  test("use the $ increment method to increment the font size by 10px", () => {
    exercise03();

    expect($(".box").css("font-size")).toBe("26px");
  });
});
