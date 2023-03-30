var product = [
  {
    id: "SP1",
    name: "ÁO SƠ MI - AS221196D6",
    img: "s11.jpg",
    price: 588000,
  },
  {
    id: "SP2",
    name: "ÁO SƠ MI - AS220789D",
    img: "s12.jpg",
    price: 588000,
  },
  {
    id: "SP3",
    name: "ÁO SƠ MI - AR221194DT6",
    img: "s13.jpg",
    price: 548000,
  },
  {
    id: "SP4",
    name: "ÁO SƠ MI - AS220834D",
    img: "s14.jpg",
    price: 588000,
  },
  {
    id: "SP5",
    name: "BLAZER - BL220705",
    img: "s9.jpg",
    price: 1950000,
  },
  {
    id: "SP6",
    name: "ÁO JACKET - JK220717",
    img: "s6.jpg",
    price: 1200000,
  },
  {
    id: "SP7",
    name: "ÁO JACKET - JK220723",
    img: "s7.jpg",
    price: 1100000,
  },
  {
    id: "SP8",
    name: "ÁO BLAZER - BL220696",
    img: "s10.jpg",
    price: 1950000,
  },
];
var pro = [];

function saveproduct() {
  sessionStorage.setItem("shopping", JSON.stringify(pro));
}
// đẩy mảng product vào local
function Save() {
  localStorage.setItem("listProduct", JSON.stringify(product));
}

//lấy sản phẩm
function load() {
  product = JSON.parse(localStorage.getItem("listProduct"));
}
//xuất sản phẩm ra html
if (localStorage.getItem("listProduct") != null) {
  load();
}
if (localStorage.getItem("listProduct") == null) {
  Save();
}
var listLocal = function () {
  var listproduct = "";
  for (var i in product) {
    var data = JSON.parse(JSON.stringify(product[i]));
    var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
    listproduct += '<div class="card product p-2" styte="width:auto">';
    listproduct +=
      '<a ><img  class="proo card-img-top" data-id="' +
      data.id +
      '" data-name="' +
      data.name +
      '" data-img="' +
      data.img +
      '" data-price="' +
      data.price +
      '" src="img/' +
      data.img +
      '" alt="..."></a>';
    listproduct +=
      '<div class="card-title product-title text-center h5" ><a href="#"  class="proo" data-id="' +
      data.id +
      '" data-name="' +
      data.name +
      '" data-img="' +
      data.img +
      '" data-price="' +
      data.price +
      '">' +
      data.name +
      "</a></div>";
    listproduct +=
      '<div class="price text-center h6">' + data.price + "₫</div>";
    listproduct +=
      '<span class="text-center add-to-cart add-cart btn btn-outline-warning" data-id="' +
      data.id +
      '" data-name="' +
      data.name +
      '" data-img="' +
      data.img +
      '" data-price="' +
      data.price +
      '" onclick="tks()">';
    listproduct += "<a>";
    listproduct += '<i class="fas fa-cart-plus"></i>';
    listproduct += "</a>";
    listproduct += "</span>";
    listproduct += "</div>";
    listproduct += "</div>";
    document.getElementById("banchay").innerHTML += listproduct;
  }
  Save();
};

listLocal();
