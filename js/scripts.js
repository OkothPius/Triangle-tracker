function triangleTracker(){
  var sideA=parseInt(document.getElementById('inputOne').value);
  var sideB=parseInt(document.getElementById('inputTwo').value);
  var sideC=parseInt(document.getElementById('inputThree').value);
  if (sideA ===sideB && sideB===sideC) {
    alert("equilateral");
  }
  else if (sideA === sideB || sideA === sideC || sideC === sideB) {
    alert("isosceles");
  }
  else if (sideA != sideB && sideB != sideC) {
      alert("scalene");
  }
  else {
      alert("Not a triangle!");
  }
};
