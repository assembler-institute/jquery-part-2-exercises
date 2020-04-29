import $ from "jquery";

import exercise02 from "../02-exercise/02-exercise";

describe("02-exercise", () => {
  beforeAll(() => {
    document.head.innerHTML = ` <style>
      .box {
        font-size: 16px;
        border-radius: 4px;
        border: 2px solid lightgray;
        max-width: 8em;
        background-color: hsl(0, 0%, 98%);
      }
    </style>`;

    document.body.innerHTML = `<div class="ex-wrapper">
      <div class="box">Card</div>
    </div>`;
  });

  test("change the styles of .box element using $", () => {
    exercise02();

    expect($(".box").css("border")).toBe("1px solid red");
    expect($(".box").css("font-size")).toBe("24px");
  });
});
