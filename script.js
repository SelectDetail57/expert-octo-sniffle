function setup() {
  createCanvas(400, 400);

  r = random(1, 255);
  g = random(1, 255);
  b = random(1, 255);

  rFill = random(1, 255);
  gFill = random(1, 255);
  bFill = random(1, 255);

  triangle1x1 = random(1, 400);
  triangle1y1 = random(1, 400);

  triangle1x2 = random(1, 400);
  triangle1y2 = random(1, 400);

  triangle1x3 = random(1, 400);
  triangle1y3 = random(1, 400);

  triangle2x1 = random(1, 400);
  triangle2y1 = random(1, 400);

  triangle2x2 = random(1, 400);
  triangle2y2 = random(1, 400);

  triangle2x3 = random(1, 400);
  triangle2y3 = random(1, 400);

  triangle3x1 = random(1, 400);
  triangle3y1 = random(1, 400);

  triangle3x2 = random(1, 400);
  triangle3y2 = random(1, 400);

  triangle3x3 = random(1, 400);
  triangle3y3 = random(1, 400);

  triangle4x1 = random(1, 400);
  triangle4y1 = random(1, 400);

  triangle4x2 = random(1, 400);
  triangle4y2 = random(1, 400);

  triangle4x3 = random(1, 400);
  triangle4y3 = random(1, 400);

  triangle5x1 = random(1, 400);
  triangle5y1 = random(1, 400);

  triangle5x2 = random(1, 400);
  triangle5y2 = random(1, 400);

  triangle5x3 = random(1, 400);
  triangle5y3 = random(1, 400);

  let triangle1Fill;
}

function draw() {
  background(r, g, b);
  fill(rFill, gFill, bFill);
  triangle1();
  triangle2();
  triangle3();
  triangle4();
  triangle5();
}

function triangle1() {
  triangle(
    triangle1x1,
    triangle1y1,
    triangle1x2,
    triangle1y2,
    triangle1x3,
    triangle1y3
  );
}

function triangle2() {
  triangle(
    triangle2x1,
    triangle2y1,
    triangle2x2,
    triangle2y2,
    triangle2x3,
    triangle2y3
  );
}

function triangle3() {
  triangle(
    triangle3x1,
    triangle3y1,
    triangle3x2,
    triangle3y2,
    triangle3x3,
    triangle3y3
  );
}

function triangle4() {
  triangle(
    triangle4x1,
    triangle4y1,
    triangle4x2,
    triangle4y2,
    triangle4x3,
    triangle4y3
  );
}

function triangle5() {
  triangle(
    triangle5x1,
    triangle5y1,
    triangle5x2,
    triangle5y2,
    triangle5x3,
    triangle5y3
  );
}

function theCanvasName() {
  let filename = "canvasNameSave";
}
