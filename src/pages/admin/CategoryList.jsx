import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./user.css";

function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);
  const token = useSelector((state) => state.auth.token);

  const handleCategoryList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/categories",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCategoryList(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    handleCategoryList();
  }, []);

  return (
    <div className="category-container">

      <div className="category-header">
        <h1>📂 Category List</h1>

        <button className="add-btn">
          + Add Category
        </button>
      </div>

      <div className="category-grid">
        {categoryList.map((category) => (
          <div key={category._id} className="category-card">

            <h3>{category.name}</h3>

            <div className="btn-group">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default CategoryList;