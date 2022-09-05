import "./products.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ProductsTable from "../../components/productsTable/ProductsTable";

const Products = () => {
  return (
    <div className="products">
      <Sidebar />
      <div className="productsContainer">
        <Navbar />
        <ProductsTable />
      </div>
    </div>
  );
};

export default Products;
