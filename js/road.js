// !!!TÜM ÖLÇEKLENDİRMELER prop.js ÜSTÜNDEN YAPILMAKTADIR !!!

const objRoad = new Road(); // *Yol özelliklerinin belirtileceği obje oluşturulur
var lyrRoadBG = new Konva.Layer(); //* yol arka planın çizileceği katmanın oluşturulması

var roadBG = new Konva.Group({
  //* arkaplan grubunun oluşturulması
  x: objRoad.startPos.x,
  y: objRoad.startPos.y,
  rotation: 0,
});

//* arka planın çizilmesi
var background_Line_Pt1 = new Konva.Rect({
  x: 0,
  y: 0,
  width: objRoad.roadWidth,
  height: objRoad.roadHeight,
  fill: objRoad.backgroundColor,
});

var background_Intersection_Pt1 = new Konva.Arc({
  x: 0 + 1,
  y: objRoad.outerRadius,
  innerRadius: objRoad.outerRadius,
  outerRadius: objRoad.innerRadius,
  angle: 180,
  fill: objRoad.backgroundColor,
  rotation: 90,
});

var background_Line_Pt2 = new Konva.Rect({
  x: 0,
  y: objRoad.innerRadius + objRoad.roadHeight * 2,
  width: objRoad.roadWidth,
  height: objRoad.roadHeight,
  fill: objRoad.backgroundColor,
});

var background_Intersection_Pt2 = new Konva.Arc({
  x: objRoad.roadWidth - 1,
  y: objRoad.outerRadius,
  innerRadius: objRoad.outerRadius,
  outerRadius: objRoad.innerRadius,
  angle: 180,
  fill: objRoad.backgroundColor,
  rotation: -90,
});
//* çizim bitişi

const partsBG = [
  background_Line_Pt1,
  background_Intersection_Pt1,
  background_Intersection_Pt2,
  background_Line_Pt2,
];
partsBG.forEach((e) => roadBG.add(e)); //* arka plan parçalarının eklenmesi
lyrRoadBG.add(roadBG); //* grubun katmana eklenmesi
stage.add(lyrRoadBG); //* katmanın sahneye eklenmesi

var lyrRoadLines = new Konva.Layer();
var roadLine = new Konva.Group({
  //* renksiz arkaplan grubunun oluşturulması
  x: objRoad.startPos.x,
  y: objRoad.startPos.y,
  rotation: 0,
});

var roadLines_Line_Pt1 = new Konva.Line({
  points: [0, objRoad.scale, objRoad.roadWidth, objRoad.scale],
  stroke: objRoad.lineColor,
  strokeWidth: objRoad.strokeWidth,
});

var roadLines_Intersection_Pt1 = new Konva.Arc({
  x: 0 + 1,
  y: objRoad.outerRadius,
  innerRadius: objRoad.outerRadius - objRoad.scale,
  outerRadius: objRoad.outerRadius - objRoad.scale,
  angle: 180,
  stroke: objRoad.lineColor,
  strokeWidth: objRoad.strokeWidth,
  rotation: 90,
});

var roadLines_Line_Pt2 = new Konva.Line({
  points: [
    0,
    objRoad.roadHeight - objRoad.scale * 2,
    objRoad.roadWidth,
    objRoad.roadHeight - objRoad.scale * 2,
  ],
  x: 0,
  y: objRoad.innerRadius + objRoad.roadHeight * 2 + objRoad.scale,
  stroke: objRoad.lineColor,
  strokeWidth: objRoad.strokeWidth,
});

var roadLines_Intersection_Pt2 = new Konva.Arc({
  x: objRoad.roadWidth - 1,
  y: objRoad.outerRadius,
  innerRadius: objRoad.outerRadius - objRoad.scale,
  outerRadius: objRoad.outerRadius - objRoad.scale,
  angle: 180,
  stroke: objRoad.lineColor,
  strokeWidth: objRoad.strokeWidth,
  rotation: -90,
});

var roadLines_Line_Pt3 = new Konva.Line({
  points: [
    0,
    objRoad.roadHeight - objRoad.scale,
    objRoad.roadWidth,
    objRoad.roadHeight - objRoad.scale,
  ],
  stroke: objRoad.lineColor,
  strokeWidth: objRoad.strokeWidth,
});

var roadLines_Intersection_Pt3 = new Konva.Arc({
  x: 0 + 1,
  y: objRoad.outerRadius,
  innerRadius: objRoad.innerRadius + objRoad.scale,
  outerRadius: objRoad.innerRadius + objRoad.scale,
  angle: 180,
  stroke: objRoad.lineColor,
  strokeWidth: objRoad.strokeWidth,
  rotation: 90,
});

var roadLines_Line_Pt4 = new Konva.Line({
  points: [0, 0, objRoad.roadWidth, 0],
  x: 0,
  y: objRoad.innerRadius + objRoad.roadHeight * 2 + objRoad.scale,
  stroke: objRoad.lineColor,
  strokeWidth: objRoad.strokeWidth,
});

var roadLines_Intersection_Pt4 = new Konva.Arc({
  x: objRoad.roadWidth - 1,
  y: objRoad.outerRadius,
  innerRadius: objRoad.innerRadius + objRoad.scale,
  outerRadius: objRoad.innerRadius + objRoad.scale,
  angle: 180,
  stroke: objRoad.lineColor,
  strokeWidth: objRoad.strokeWidth,
  rotation: -90,
});

var roadLines_Line_Pt5 = new Konva.Line({
  points: [
    0,
    objRoad.roadHeight / 2,
    objRoad.roadWidth,
    objRoad.roadHeight / 2,
  ],
  stroke: objRoad.lineColor,
  strokeWidth: objRoad.strokeWidth,
  dash: [objRoad.dashWidth],
});

var roadLines_Intersection_Pt5 = new Konva.Arc({
  x: 0 + 1,
  y: objRoad.outerRadius,
  innerRadius: objRoad.innerRadius * 1.5,
  outerRadius: objRoad.innerRadius * 1.5,
  angle: 180,
  stroke: objRoad.lineColor,
  strokeWidth: objRoad.strokeWidth,
  dash: [objRoad.dashWidth],
  rotation: 90,
});

var roadLines_Line_Pt6 = new Konva.Line({
  points: [
    objRoad.dashWidth,
    objRoad.roadHeight / 2,
    objRoad.roadWidth,
    objRoad.roadHeight / 2,
  ],
  x: 0,
  y: objRoad.innerRadius + objRoad.roadHeight * 2,
  stroke: objRoad.lineColor,
  strokeWidth: objRoad.strokeWidth,
  dash: [objRoad.dashWidth],
});

var roadLines_Intersection_Pt6 = new Konva.Arc({
  x: objRoad.roadWidth - 1,
  y: objRoad.outerRadius,
  innerRadius: objRoad.innerRadius * 1.5,
  outerRadius: objRoad.innerRadius * 1.5,
  angle: 180,
  stroke: objRoad.lineColor,
  strokeWidth: objRoad.strokeWidth,
  dash: [objRoad.dashWidth],
  rotation: -90,
});

// çizim bitişi

const parts_roadLine = [
  roadLines_Line_Pt1,
  roadLines_Intersection_Pt1,
  roadLines_Line_Pt2,
  roadLines_Intersection_Pt2,
  roadLines_Line_Pt3,
  roadLines_Intersection_Pt3,
  roadLines_Line_Pt4,
  roadLines_Intersection_Pt4,
  roadLines_Line_Pt5,
  roadLines_Intersection_Pt5,
  roadLines_Line_Pt6,
  roadLines_Intersection_Pt6,
];
parts_roadLine.forEach((e) => roadLine.add(e)); //* Çizgilerin eklenmesi
lyrRoadLines.add(roadLine);
stage.add(lyrRoadLines);
