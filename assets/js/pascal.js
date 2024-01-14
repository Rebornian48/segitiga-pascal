/**
 * Description placeholder
 * @date 1/15/2024 - 6:28:23 AM
 */
function generatePascalTriangle() {
  var rows = document.getElementById("rows").value;
  var triangle = document.getElementById("triangle");
  triangle.innerHTML = "";

  // Membuat array kosong untuk menyimpan segitiga Pascal
  var pascal = [];

  // Mengisi array dengan nilai segitiga Pascal
  for (var i = 0; i < rows; i++) {
    pascal[i] = [];
    for (var j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        pascal[i][j] = 1;
      } else {
        pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
      }
    }
  }

  // Menampilkan segitiga Pascal ke dalam elemen HTML
  for (var k = 0; k < rows; k++) {
    var row = document.createElement("p");
    row.innerHTML = pascal[k].join(" ");
    triangle.appendChild(row);
  }
}
