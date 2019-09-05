import React, { useState, useEffect } from 'react';
import CategoryTypePage from '../pages/CategoryType/CategoryType';
import { API_URI } from '../constants';

const Category = () => {
  const [categoryTypes, setCategoryTypes] = useState([]);

  function handleCategoryTypes(status) {
    setCategoryTypes(status);
  }

  const addCategoryType = categoryType => {
    // setCategories([...categories, category]);
    window.fetch(`${API_URI}/v1/category_types`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ categoryType: categoryType }),
    });
  }

  useEffect(() => {
    window.fetch(`${API_URI}/v1/category_types`).then(response => response.json()).then(handleCategoryTypes);
  });

  return <CategoryTypePage categoryTypes={categoryTypes} addCategoryType={addCategoryType} />;
};

export default Category;

