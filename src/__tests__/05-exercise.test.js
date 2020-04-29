import $ from "jquery";

import exercise05 from "../05-exercise/05-exercise";

describe("05-exercise", () => {
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
      <button class="mb">Toggle card</button>
      <div class="box">Card</div>
    </div>`;
  });

  test("use the hide() method to hide the .box element", () => {
    exercise05();

    $("button").trigger("click");
    expect($(".box").css("display")).toBe("none");
  });
});
