import React, { useState, useEffect } from 'react';
import CategoryPage from '../pages/Category/Category';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [categoryTypes, setCategoryTypes] = useState([]);

  function handleCategories(status) {
    setCategories(status);
  }

  function handleCategoryTypes(status) {
    setCategoryTypes(status);
  }

  const addCategory = category => {
    category.id = categories.length + 1;
    // setCategories([...categories, category]);
    window.fetch('http://localhost:3000/api/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category: category }),
    });
  }

  useEffect(() => {
    window.fetch('http://localhost:3000/api/categories', handleCategories);
    window.fetch('http://localhost:3000/api/category_types', handleCategoryTypes);
  });

  return <CategoryPage categories={categories} addCategory={addCategory} categoryTypes={categoryTypes}/>;
};

export default Category;

