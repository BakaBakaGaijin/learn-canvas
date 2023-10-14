function draw() {
  console.log("draw");
  const canvas = document.querySelector("#tutorial");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();

    /* for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        let x = 25 + j * 50;
        let y = 25 + i * 50;
        let radius = 20;
        let startAngle = 0;
        let endAngle = Math.PI + (Math.PI * j) / 2;
        let anticlockwise = i % 2 !== 0;
        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    } */

    /* ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke(); */

    /* ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
    ctx.stroke(); */

    /* ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill(); */

    /* ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50); */

    /* ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 55, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 55, 50); */
  } else {
    // для браузеров, не поддерживающих канвас
  }
}
