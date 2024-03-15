let mobCont = document.querySelector(".mobileContainer");
let caro = document.querySelector(".carousel-inner");

let ballImg = document.querySelector(".ballImg");
let ballName = document.querySelector(".ballName");
let coverstock = document.querySelector(".coverstock");
let RG = document.querySelector(".RG");
let diff = document.querySelector(".diff");

let button = document.querySelector(".submit");
let del = document.querySelector(".del");

let ballList = [];

let sampleItem = {
  ballImg: "https://www.stormbowling.com/medias/PHAZE%20II_00000.png",
  ballName: "Phaze II",
  coverstock: "TX-16 Solid",
  RG: 2.48,
  diff: 0.051,
};

ballList.push(sampleItem);

button.onclick = function() {
    caro.innerHTML = "";
    let entryItem = {
        ballImg: ballImg.value,
        ballName: ballName.value,
        coverstock: coverstock.value,
        RG: RG.value,
        diff: diff.value
    }

    ballList.push(entryItem);
  for (let i = 0; i < ballList.length; i++) {
    // let img = document.createElement("img");
    // let name = document.createElement("p");
    // let covStock = document.createElement("p");
    // let radiusG = document.createElement("p");
    // let differential = document.createElement("p");

    let img = ballList[i].ballImg;
    let name = ballList[i].ballName;
    let covStock = ballList[i].coverstock;
    let radiusG = ballList[i].RG;
    let differential = ballList[i].diff;

    let divType = "";

    if (i == ballList.length - 1) {
      divType = "carousel-item active";
    } else {
      divType = "carousel-item";
    }


    caro.insertAdjacentHTML(
      "beforeend",
      `
      <div class="${divType}">
      <p class="id">${i}</p>
      <div class="entry">
      <h2>${name}</h2>
      </div>
      <div class="entry">
      <p>${covStock}</p>
      </div>
      <div class="entry">
      <img src=${img}>
      </div>
      <div class="entry">
      <p>RG:${radiusG}</p>
      <p>CG:${differential}</p>
      </div>
      </div>
      `
    );
  }
  console.log(ballList.length);
};

