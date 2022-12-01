window.addEventListener("resize", function () {
  windowsize();
});

window.addEventListener("load", function () {
  windowsize();
});

function windowsize() {
  let w = document.querySelector(".container").clientWidth;
  let h = document.querySelector(".container").clientHeight;
  document.getElementById("windowSize").textContent = "W:" + w + "- h:" + h;
  console.log(`W:${w} - h:${h}`);
}

const container = document.querySelector(".container");
for (let i = 0; i < 20; i++) {
  container.innerHTML += `
      <div class='user_wrap'>
      <div class='upper'>
        <img src="https://source.unsplash.com/random/500x500
  /" width="60" height="60">
        <div class='center'>center</div>
        <div class='right'>right</div>
      </div>
      <div class='lower'>
        <div class='lower_child'>
          ブロック
        </div>
        <div class='lower_child'>
          削除
        </div>
      </div>
    </div>
    `;
}

//
const upper = document.querySelectorAll(".upper");
for (let i = 0; i < upper.length; i++) {
  let st_x = 0;
  let st_y = 0;
  let ed_x = 0;
  let ed_y = 0;
  let mv_x = 0;
  let mv_x_bf = 0;
  let move_x = 0;
  let translate_x = 0;

  upper[i].addEventListener("mousedown", function (e) {
    st_x = e.clientX;
    st_y = e.clientY;
    console.log("mousedown x-y --", ";" + st_x + "-" + st_y);
  });

  upper[i].addEventListener("mouseup", function (e) {
    ed_x = e.clientX;
    ed_y = e.clientY;
    move_x = ed_x - st_x;
    mv_x_bf = mv_x;

    console.log("mouseup   x-y --", ed_x + "-" + ed_x);
    console.log("move ", ";" + move_x);

    switch (true) {
      case move_x < -10:
        translate_x = -159;
        break;
      case move_x > 5:
        translate_x = 0;
        break;
      // default:
      //   translate_x = 0;
      //   break;
    }

    for (let j = 0; j < upper.length; j++) {
      upper[j].style.transform = "translateX(0px)";
    }

    upper[i].style.transform = "translateX(" + translate_x + "px)";
  });
}
