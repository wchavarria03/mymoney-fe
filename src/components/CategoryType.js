import React, { useState, useEffect } from 'react';
import CategoryTypePage from '../pages/CategoryType/CategoryType';

const Category = () => {
  const [categoryTypes, setCategoryTypes] = useState([]);

  function handleCategories(status) {
    setCategoryTypes(status);
  }

  const addCategoryType = categoryType => {
    categoryType.id = categoryTypes.length + 1;
    // setCategories([...categories, category]);
    window.fetch('http://localhost:3000/api/categorytypes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ categoryType: categoryType }),
    });
  }

  useEffect(() => {
    window.fetch('http://localhost:3000/api/categories', handleCategories);
  });

  return <CategoryTypePage categoryTypes={categoryTypes} addCategoryType={addCategoryType} />;
};

export default Category;

