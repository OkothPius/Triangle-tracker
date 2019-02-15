function triangleTracker(){
  var sideA=parseInt(document.getElementById('inputOne').value);
  var sideB=parseInt(document.getElementById('inputTwo').value);
  var sideC=parseInt(document.getElementById('inputThree').value);
  if((sideA + sideB >sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA)){
if (sideA === sideB && sideB === sideC) {
  alert("This is an equilateral triangle");
}
else if (sideA === sideB || sideA === sideC || sideC === sideB) {
  alert("This is an isosceles triangle");
}
  else {
    alert("This is a scalene triangle");
  }
}
  else {
    alert("A triangle cannot be formed!");
}
};
