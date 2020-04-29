import $ from "jquery";

import exercise06 from "../06-exercise/06-exercise";

describe("06-exercise", () => {
  beforeAll(() => {
    document.head.innerHTML = `<style>
      .box {
        font-size: 16px;
        border-radius: 4px;
        border: 2px solid lightgray;
        max-width: 8em;
        padding: 24px;
        display: none;
        background-color: hsl(0, 0%, 98%);
      }
    </style>`;

    document.body.innerHTML = `<div class="ex-wrapper">
      <button class="mb">Toggle card</button>
      <div class="box">Card</div>
    </div>`;
  });

  test("use the show() method to show the .box element", () => {
    exercise06();

    $("button").trigger("click");
    expect($(".box").css("display")).toBe("block");
  });
});
