// Função para inicializar e desenhar em cada contêiner
function createTwoInstance(containerId, params) {
  const elem = document.getElementById(containerId);
  const two = new Two(params).appendTo(elem);
  return two;
}

// Exemplo 1: Linha
const lineParams = { width: 500, height: 500 };
const twoLine = createTwoInstance("line-example", lineParams);
const line = twoLine.makeLine(50, 50, 450, 450);
line.stroke = "blue";
line.linewidth = 3;
twoLine.update();

// Exemplo 2: Retângulo
const rectangleParams = { width: 500, height: 500 };
const twoRectangle = createTwoInstance("rectangle-example", rectangleParams);
const rectangle = twoRectangle.makeRectangle(250, 250, 200, 100);
rectangle.fill = "red";
rectangle.stroke = "black";
rectangle.linewidth = 2;
twoRectangle.update();

// Exemplo 3: Círculo
const circleParams = { width: 500, height: 500 };
const twoCircle = createTwoInstance("circle-example", circleParams);
const circle = twoCircle.makeCircle(250, 250, 100);
circle.fill = "green";
circle.stroke = "black";
circle.linewidth = 2;
twoCircle.update();

// Exemplo 4: Polígono Regular
const polygonParams = { width: 500, height: 500 };
const twoPolygon = createTwoInstance("polygon-example", polygonParams);
const polygon = twoPolygon.makePolygon(250, 250, 100, 6); // Hexágono
polygon.fill = "orange";
polygon.stroke = "black";
polygon.linewidth = 2;
twoPolygon.update();

// Exemplo 5: Animação de Movimento
const animationParams = { width: 500, height: 500 };
const twoAnimation = createTwoInstance("animation-example", animationParams);
const animatedCircle = twoAnimation.makeCircle(50, 250, 50);
animatedCircle.fill = "blue";

twoAnimation.bind('update', function () {
  animatedCircle.translation.x += 2;
  if (animatedCircle.translation.x > 500) animatedCircle.translation.x = 0;
});

twoAnimation.play();

// Exemplo 6: Manipulação de Grupo
const groupParams = { width: 500, height: 500 };
const twoGroup = createTwoInstance("group-example", groupParams);

// Criando dois quadrados para o grupo
const square1 = twoGroup.makeRectangle(100, 250, 50, 50);
const square2 = twoGroup.makeRectangle(180, 250, 50, 50);

// Criando o grupo com os quadrados
const group = twoGroup.makeGroup(square1, square2);

// Aplicando transformação (rotação) aos quadrados individualmente
square1.rotation = Math.PI / 4; // Rotacionando o quadrado 1
square2.rotation = Math.PI / 4; // Rotacionando o quadrado 2

group.fill = "blue"; // Aplicando cor a todos os quadrados do grupo
twoGroup.update();



