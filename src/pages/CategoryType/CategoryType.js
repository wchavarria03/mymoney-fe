import React from 'react';
import Card, { Header, Title, Body } from 'react-bootstrap/Card'
import AddCategoryType from './AddCategoryType';
import CategoryTypeList from './CategoryTypeList';

const Category = ({
  categoryTypes = [],
  addCategoryType,
}) =>  (
  <div>
    <Card>
      <Header>
        <Title as="h5">Category Types</Title>
        <span className="d-block m-t-5">All category types available for categories</span>
      </Header>
      <Body>
        <CategoryTypeList categoryTypes={categoryTypes} />
      </Body>
    </Card>
    <Card>
      <Header>
        <Title as="h5">Add Category Type</Title>
        <span className="d-block m-t-5">Add new category Type</span>
      </Header>
      <Body>
        <AddCategoryType addCategoryType={addCategoryType} />
      </Body>
    </Card>
  </div>
)

export default Category;
