export const productsColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "productname",
    headerName: "Product name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="productImg" />
          {params.row.productname}
        </div>
      );
    },
  },
  {
    field: "productcate",
    headerName: "Product Category",
    width: 230,
  },

  {
    field: "amount",
    headerName: "Amount",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const productsRows = [
  {
    id: 1143155,
    productname: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    productcate: "Laptop",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "In stock",
  },
  {
    id: 2235235,
    productname: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    productcate: "Playstation",
    date: "1 March",
    amount: 900,
    method: "Online Payment",
    status: "In stock",
  },
  {
    id: 2342353,
    productname: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    productcate: "Keyboard",
    date: "1 March",
    amount: 35,
    method: "Cash on Delivery",
    status: "In stock",
  },
  {
    id: 2357741,
    productname: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    productcate: "Laptop",
    date: "1 March",
    amount: 920,
    method: "Online",
    status: "In stock",
  },
  {
    id: 2342355,
    productname: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    productcate: "Laptop",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "In stock",
  },
];
