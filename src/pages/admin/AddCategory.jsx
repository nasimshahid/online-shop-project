import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';

export default function AddCategory() {
  const [categoryName, setCategoryName] = React.useState('');
const token =useSelector(state => state.auth.token);
console.log("Token in AddCategory:", token);
  const handleAddCategory = (e) => {
    e.preventDefault();
    // Logic to add category
    console.log("Adding category:", categoryName);
    axios.post('http://localhost:4000/api/v1/add-category', { name: categoryName },{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log("Category added:", response.data);
        // Clear the input field after successful submission
        setCategoryName('');
      })
      .catch(error => {
        console.error("Error adding category:", error);
      });
  }
  return (
    <div className="add-category-page">
      {/* Add category page content */}
      <h2>Add New Category</h2>
      <input type="text" placeholder="Category Name" class="form-control" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
      <button class="btn btn-primary mt-3" onClick={handleAddCategory}>Add Category</button>
    </div>
  )
}
