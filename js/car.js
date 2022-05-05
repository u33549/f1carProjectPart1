const objCar = new Car();
var lyrCar = new Konva.Layer(); //* araban katmanı
stage.add(lyrCar);

var cv = document.querySelectorAll("canvas")[2];
var ctx = cv.getContext("2d");

var carPic = new Image();
carPic.onload = function () {
  carDraw(0);
  ctx.restore();
};
carPic.src = "img/car.png";

setInterval(function () {
  if (objCar.isMove) {
    ctx.clearRect(0, 0, cv.width, cv.height);
    if (objCar.slow != 0) {
      if (objCar.speed >= objCar.maxSpeed) {
        objCar.speed -= objCar.acceleration;
        objCar.setSpinSpeed();
      }
    }
    else{
        if (objCar.speed < 0) {
            objCar.speed += objCar.acceleration;
            objCar.setSpinSpeed();
          }
          else{
            objCar.speed=0;
            objCar.isMove=0;
          }
    }
    if (objCar.mode == 1) {
      if (objCar.rotationV < 165) {
        objCar.rotationV -= objCar.spinSpeed;
        ctx.save();
        ctx.translate(
          objRoad.startPos.x + objRoad.roadWidth,
          objRoad.startPos.y + objRoad.innerRadius + objRoad.roadHeight
        );

        ctx.rotate((objCar.rotationV * Math.PI) / 180);
        carDraw(1);
        ctx.restore();
      } else {
        objCar.rotationV = 90;
        objCar.currentPosition.x = -objCar.speed * 2;
        objCar.currentPosition.y = 0;
        objCar.rotation = 0;
        objCar.mode = 2;
        carDraw(2);
      }
    }
    if (objCar.mode == 2) {
      if (objCar.currentPosition.x < objRoad.roadWidth) {
        objCar.currentPosition.x -= objCar.speed;
        carDraw(2);
      } else {
        objCar.mode = 3;
      }
    }
    if (objCar.mode == 3) {
      console.log("3", objCar.rotationV);
      if (objCar.rotationV < 260) {
        console.log(objCar.rotationV);
        objCar.rotationV -= objCar.spinSpeed;
        ctx.save();
        ctx.translate(
          objRoad.startPos.x,
          objRoad.startPos.y + objRoad.innerRadius + objRoad.roadHeight
        );

        ctx.rotate((objCar.rotationV * Math.PI) / 180);
        carDraw(3);
        ctx.restore();
      } else {
        objCar.rotationV = 0;
        objCar.currentPosition.x = -objCar.speed * 2;
        objCar.currentPosition.y = -objCar.height / 2;
        objCar.rotation = 180;
        objCar.mode = 0;
        carDraw(0);
      }
    }
    if (objCar.mode == 0) {
      if (objCar.currentPosition.x < -objRoad.roadWidth) {
        objCar.mode = 1;
      }
      objCar.currentPosition.x += objCar.speed;
      carDraw(0);
    }
  }
}, 1000 / 20);

function carDraw(mode) {
  ctx.save();
  switch (mode) {
    case 0:
      ctx.translate(
        objRoad.startPos.x + objCar.width / 2,
        objRoad.startPos.y + objCar.height
      );
      ctx.rotate((objCar.rotation * Math.PI) / 180);
      ctx.drawImage(
        carPic,
        0,
        0,
        carPic.width,
        carPic.height,
        objCar.currentPosition.x,
        objCar.currentPosition.y,
        objCar.width,
        objCar.height
      );
      break;
    case 1:
      ctx.translate(0, -objRoad.innerRadius + objRoad.roadHeight / 2);
      ctx.rotate((objCar.rotation * Math.PI) / 180);
      ctx.drawImage(
        carPic,
        0,
        0,
        carPic.width,
        carPic.height,
        -objCar.width / 2,
        +objCar.height * 2,
        objCar.width,
        objCar.height
      );
      break;
    case 2:
      ctx.translate(
        objRoad.startPos.x + objRoad.roadWidth,
        objRoad.roadHeight + objRoad.outerRadius
      );
      ctx.rotate((objCar.rotation * Math.PI) / 180);
      ctx.drawImage(
        carPic,
        0,
        0,
        carPic.width,
        carPic.height,
        -objCar.currentPosition.x,
        +objCar.height * 2,
        objCar.width,
        objCar.height
      );
      break;
    case 3:
      ctx.translate(objCar.width, objCar.height / 2);
      ctx.rotate((-100 * Math.PI) / 180);
      ctx.drawImage(
        carPic,
        0,
        0,
        carPic.width,
        carPic.height,
        0,
        objCar.height,
        objCar.width,
        objCar.height
      );
  }

  ctx.restore();
}
