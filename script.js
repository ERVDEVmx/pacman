const pacMen = [];
const pacArray = [
  "./images/Pacman1.png",
  "./images/Pacman2.png",
  "./images/Pacman3.png",
  "./images/Pacman4.png",
];

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

function makePac() {
  const velocity = setToRandom(10);
  const position = setToRandom(200);

  const game = document.getElementById("game");
  const newimg = document.createElement("img");
  newimg.style.position = "absolute";
  newimg.src = pacArray[0];  // Start with the 1st image
  newimg.width = 100;
  newimg.style.left = `${position.x}px`;
  newimg.style.top = `${position.y}px`;
  game.appendChild(newimg);

  return {
    position,
    velocity,
    newimg,
    imageIndex: 0  // trakc the current image being used
  };
}

function checkCollisions(item) {
  if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
      item.position.x + item.velocity.x < 0) {
    item.velocity.x = -item.velocity.x;
    togglePacImage(item);
  }

  if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
      item.position.y + item.velocity.y < 0) {
    item.velocity.y = -item.velocity.y;
    togglePacImage(item);
  }
}

function togglePacImage(item) {
  item.imageIndex = (item.imageIndex + 1) % pacArray.length;  // Cycle the images
  item.newimg.src = pacArray[item.imageIndex];
}

function update() {
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = `${item.position.x}px`;
    item.newimg.style.top = `${item.position.y}px`;
  });

  setTimeout(update, 20);
}

function makeOne() {
  pacMen.push(makePac());
}
