function triangletracker(){
  sideA=parseInt(document.getElementById(input1).value);
  sideB=parseInt(document.getElementById(input2).value);
  sideC=parseInt(document.getElementById(input3).value);
  if (sideA ===sideB && sideB ===sideC) {
    alert("equilateral");
  }
  if (sideA === sideB && != sideC) {
    alert("isosceles");
  }
}
