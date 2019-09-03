import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const CategoryList = ({ categories = [] }) => (
  <Table responsive hover>
    <thead>
      <tr>
        <th>Category</th>
        <th>Type</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {categories.length > 0 ? (
        categories.map(category => (
          <tr key={category.id}>
            <td>{category.name}</td>
            <td>{category.type}</td>
            <td>
              <Button className="button btwmuted-button">Edit</Button>
              <Button className="button muted-button">Delete</Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Categories</td>
        </tr>
      )}
    </tbody>
  </Table>
);

export default CategoryList;
