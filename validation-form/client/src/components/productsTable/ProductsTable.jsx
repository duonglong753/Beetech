import "./productsTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { productsColumns, productsRows } from "../../productsData";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductsTable = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(productsRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/products/list" style={{ textDecoration: "none" }}>
              <div className="viewButton">{t("View")}</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              {t("Delete")}
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="productsTable">
      <div className="productsTableTitle">
        {t("Products List")}
        <Link to="/products/new" className="link">
          {t("Add New")}
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={productsColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductsTable;
