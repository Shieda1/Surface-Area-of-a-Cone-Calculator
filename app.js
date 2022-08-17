// https://calculator.swiftutors.com/surface-area-of-a-cone-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const surfaceAreaoftheConeRadio = document.getElementById('surfaceAreaoftheConeRadio');
const radiusoftheConeRadio = document.getElementById('radiusoftheConeRadio');
const heightoftheConeRadio = document.getElementById('heightoftheConeRadio');

let surfaceAreaoftheCone;
const PI = Math.PI;
let radiusoftheCone = v1;
let heightoftheCone = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

surfaceAreaoftheConeRadio.addEventListener('click', function() {
  variable1.textContent = 'Radius of the Cone';
  variable2.textContent = 'Height of the Cone';
  radiusoftheCone = v1;
  heightoftheCone = v2;
  result.textContent = '';
});

radiusoftheConeRadio.addEventListener('click', function() {
  variable1.textContent = 'Surface Area of the Cone';
  variable2.textContent = 'Height of the Cone';
  surfaceAreaoftheCone = v1;
  heightoftheCone = v2;
  result.textContent = '';
});

heightoftheConeRadio.addEventListener('click', function() {
  variable1.textContent = 'Surface Area of the Cone';
  variable2.textContent = 'Radius of the Cone';
  surfaceAreaoftheCone = v1;
  radiusoftheCone = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(surfaceAreaoftheConeRadio.checked)
    result.textContent = `Surface Area of the Cone = ${computeSurfaceAreaoftheCone().toFixed(2)}`;

  else if(radiusoftheConeRadio.checked)
    result.textContent = `Radius of the Cone = ${computeRadiusoftheCone().toFixed(2)}`;

  else if(heightoftheConeRadio.checked)
    result.textContent = `Height of the Cone = ${computeHeightoftheCone().toFixed(2)}`;
})

// calculation

function computeSurfaceAreaoftheCone() {
  return (PI * Math.pow(Number(radiusoftheCone.value), 2)) + (PI * Number(radiusoftheCone.value) * Math.sqrt(Math.pow(Number(radiusoftheCone.value), 2) + Math.pow(Number(heightoftheCone.value), 2)));
}

function computeRadiusoftheCone() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeHeightoftheCone() {
  return Math.sqrt(((Math.pow(Number(surfaceAreaoftheCone.value), 2) - (Math.pow(PI, 2) * Math.pow(Number(radiusoftheCone.value),4))) / (Math.pow(PI, 2) * Math.pow(Number(radiusoftheCone.value), 2))) - Math.pow(Number(radiusoftheCone.value), 2));
}