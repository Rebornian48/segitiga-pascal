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
  for (var i = 0; i < rows; i++) {
    var row = document.createElement("p");
    row.innerHTML = pascal[i].join(" ");
    triangle.appendChild(row);
  }
}
