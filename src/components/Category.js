import React, { useState, useEffect } from 'react';
import CategoryPage from '../pages/Category/Category';

const Category = () => {
  const [categories, setCategories] = useState([]);

  function handleCategories(status) {
    setCategories(status);
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
  });

  return <CategoryPage categories={categories} addCategory={addCategory} />;
};

export default Category;

