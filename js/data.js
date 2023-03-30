var product = [
  {
    id: 1,
    name: "ÁO SƠ MI - AS221196D6",
    img: "img/s11.jpg",
    price: 588000,
    male: 0,
  },
  {
    id: 2,
    name: "ÁO SƠ MI - AS220789D",
    img: "img/s12.jpg",
    price: 588000,
    male: 0,
  },
  {
    id: 3,
    name: "ÁO SƠ MI - AR221194DT6",
    img: "img/s13.jpg",
    price: 548000,
    male: 0,
  },
  {
    id: 4,
    name: "ÁO SƠ MI - AS220834D",
    img: "img/s14.jpg",
    price: 588000,
    male: 0,
  },
  {
    id: 5,
    name: "BLAZER - BL220705",
    img: "img/s9.jpg",
    price: 1950000,
    male: 0,
  },
  {
    id: 6,
    name: "ÁO JACKET - JK220717",
    img: "img/s6.jpg",
    price: 1200000,
    male: 0,
  },
  {
    id: 7,
    name: "ÁO JACKET - JK220723",
    img: "img/s7.jpg",
    price: 1100000,
    male: 0,
  },
  {
    id: 8,
    name: "ÁO BLAZER - BL220696",
    img: "img/s10.jpg",
    price: 1950000,
    male: 0,
  },
  {
    id: 9,
    name: "",
    img: "",
    price: 899000,
    male: 1,
  },
  {
    id: 10,
    name: "",
    img: "",
    price: 199000,
    male: 1,
  },
  {
    id: 11,
    name: "",
    img: "",
    price: 499000,
    male: 1,
  },
  {
    id: 12,
    name: "",
    img: "",
    price: 299000,
    male: 1,
  },
  {
    id: 13,
    name: "",
    img: "",
    price: 350000,
    male: 1,
  },
  {
    id: 14,
    name: "",
    img: "",
    price: 1499000,
    male: 1,
  },
  {
    id: 15,
    name: "",
    img: "",
    price: 1299000,
    male: 1,
  },
  {
    id: 16,
    name: "",
    img: "",
    price: 490000,
    male: 1,
  },
];

function displayProduct() {
  for (let i = 0; i <= product.length - 1; i++) {
    if (product[i].male == 1) {
      var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6">';
      listproduct += '<div class="card product" styte="width:auto">';
      listproduct +=
        '<img class="card-img-top" src="' + product[i].img + '" alt="...">';
      listproduct +=
        '<div class="card-title product-title text-center h5" >' +
        product[i].name +
        "</div>";
      listproduct +=
        '<span class="price text-center h6">' + product[i].price + "₫</span>";
      listproduct +=
        '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' +
        product[i].id +
        '" data-name="' +
        product[i].name +
        '" data-img="' +
        product[i].img +
        '" data-price="' +
        product[i].price +
        '" onclick="tks()">';
      // listproduct +=  '<a class=" add-to-cart btn" data-name="'+product[i].name+'" data-price="'+product[i].price+'" onclick="tks()">';
      listproduct += "<a>";
      listproduct += '<i class="fas fa-cart-plus"></i>';
      listproduct += "</a>";
      listproduct += "</span>";
      listproduct += "</div>";
      listproduct += "</div>";

      document.getElementById("man").innerHTML += listproduct;
    } else {
      var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6">';
      listproduct += '<div class="card product" styte="width:auto">';
      listproduct +=
        '<img class="card-img-top" src="' + product[i].img + '" alt="...">';
      listproduct +=
        '<div class="card-title product-title text-center h5" >' +
        product[i].name +
        "</div>";
      listproduct +=
        '<span class="price text-center h6">' + product[i].price + "₫</span>";
      listproduct +=
        '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' +
        product[i].id +
        '" data-name="' +
        product[i].name +
        '" data-img="' +
        product[i].img +
        '" data-price="' +
        product[i].price +
        '" onclick="tks()">';
      // listproduct +=  '<a class=" add-to-cart btn" data-name="'+product[i].name+'" data-price="'+product[i].price+'" onclick="tks()">';
      listproduct += "<a>";
      listproduct += '<i class="fas fa-cart-plus"></i>';
      listproduct += "</a>";
      listproduct += "</span>";
      listproduct += "</div>";
      listproduct += "</div>";

      document.getElementById("women").innerHTML += listproduct;
    }
  }
}
displayProduct();
