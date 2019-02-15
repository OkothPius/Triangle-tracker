function triangletracker(){
  var sideA=parseInt(document.getElementById('input1').value);
  var sideB=parseInt(document.getElementById(input2).value);
  var sideC=parseInt(document.getElementById(input3).value);
  if (sideA ===sideB && sideB ===sideC) {
    alert("equilateral");
  }
  if (sideA === sideB && != sideC) {
    alert("isosceles");
  }
  if (sideA != sideB != sideC) {
    alert("scalene");
  }
  else {
    alert("Not A Triangle!");
  }
}
