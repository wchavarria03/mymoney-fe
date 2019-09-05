import React from 'react';
import Card, { Header, Title, Body } from 'react-bootstrap/Card'
import AddCategory from './AddCategory';
import CategoryList from './CategoryList';

const Category = ({
  categories = [],
  addCategory,
  categoryTypes = [],
}) =>  (
  <div>
    <Card>
      <Header>
        <Title as="h5">Categories</Title>
        <span className="d-block m-t-5">All categories available for transactions</span>
      </Header>
      <Body>
        <CategoryList categories={categories} />
      </Body>
    </Card>
    <Card>
      <Header>
        <Title as="h5">Add Category</Title>
        <span className="d-block m-t-5">Add new category</span>
      </Header>
      <Body>
        <AddCategory addCategory={addCategory} categoryTypes={categoryTypes} />
      </Body>
    </Card>
  </div>
)

export default Category;
