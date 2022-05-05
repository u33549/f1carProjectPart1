const canvas = document.getElementById("canvas"); //tüvalin getirilmesi

//sayfanın yükseklik ve genişliğinin getirilmesi
let width = window.innerWidth;
let height = window.innerHeight;

// let width = canvas.clientWidth;
// let height = canvas.clientHeight;

class Road {
  // Yolun özelliklerinin tutulacağı class
  constructor() {
    this.startPos = {//yolun konuşlanacağı yer
      x: width / 3,
      y: 50,
    };
    this.scale = 10; //yolun oranı
    this.backgroundColor = "black";//yol rengi
    this.lineColor = "white";//şerit rengi
    this.outerRadius = height / (this.scale / (4 / 2));//kavşakların yarı çapı
    this.roadWidth = this.outerRadius * 3;//yol uzunluğu
    this.roadHeight = this.outerRadius / 2;//yol yüksekliği
    this.innerRadius = this.outerRadius / 2;//kavşakların iç yarı çapı
    this.dashWidth = this.scale * 3.5;//noktalı şeridin nokta uzunluğu
    this.strokeWidth = this.scale / 2;//şerit kalınlığı
  }
}

class Car {
  constructor() {
    this.startPos = {//aracın başlama noktası
      x: objRoad.startPos.x,
      y: objRoad.startPos.y +objRoad.roadHeight/4,
    };
    this.rotation=180;//aracın yönü
    this.scale = 0.05;//araç boyut oranı
    this.maxSpeed=-15;//aracın maximum hızı kodda yapılan bir karışıklık sebebiyle istenilen  değerin negatifi alınıyor
    this.acceleration=2;//ivme
    this.speed=0;//hız
    this.height=786*this.scale;//aracın yüksekliği
    this.width=1833*this.scale;//aracın genişliği
    this.currentPosition = {//aracın anlık pozisyonu
      x:-this.width/2,
      y:-this.height/2,
    };
    this.rotationV=0;//aracın kavşaklarda hangi açıda bulunduğu
    this.isMove=0;//hareket kontrol
    this.mode=0;//aracın hangi bölgeden döndüğünü belirtir
    this.spinSpeed=0;//dönüş hızı
    this.slow=0;//aracın yavaşlamada olup olmadığını kontrol eder
  }
  setSpinSpeed(){//dönüş hızını ayarlar
    this.spinSpeed=this.speed*0.2;
  }
}

var stage = new Konva.Stage({
  //konva.js kullanımı için gereken sahnenin oluşturulması
  container: "canvas", //id ile hangi elementin sahne olacağı seçilir
  width: width,
  height: height,
});

document.querySelector("#btn1").addEventListener("click", function(){
  objCar.isMove=1;
  objCar.slow=0;

})
document.querySelector("#btn2").addEventListener("click", function(){
  objCar.slow=1;
})