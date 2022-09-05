export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
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

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Duong Hung Long",
    img: "http://127.0.0.1:8887/public/images/avatar.jpg",
    status: "active",
    email: "1snow@gmail.com",
    age: 22,
  },
  {
    id: 2,
    username: "Le Thanh Huy",
    img: "http://127.0.0.1:8887/public/images/LTH.jpg",
    email: "2snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 3,
    username: "Nguyen Tran Trung Kien ",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 21,
  },
  {
    id: 4,
    username: "Do Duc Thanh",
    img: "http://127.0.0.1:8887/public/images/DDT.jpg",
    email: "4snow@gmail.com",
    status: "active",
    age: 21,
  },
  {
    id: 5,
    username: "Nguyen Quoc Tuan",
    img: "http://127.0.0.1:8887/public/images/NQT.jpg",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Tran Minh Anh",
    img: "http://127.0.0.1:8887/public/images/TMA.jpg",
    email: "6snow@gmail.com",
    status: "active",
    age: 21,
  },
  {
    id: 7,
    username: "Phung Tan Phuong",
    img: "http://127.0.0.1:8887/public/images/PTP.jpg",
    email: "7snow@gmail.com",
    status: "passive",
    age: 21,
  },
  {
    id: 8,
    username: "Do Ba Kien",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 21,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 18,
  },
  {
    id: 10,
    username: "Alex",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 20,
  },
];
