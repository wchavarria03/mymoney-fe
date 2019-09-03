import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const CategoryTypeList = ({ categoryTypes = [] }) => (
  <Table responsive hover>
    <thead>
      <tr>
        <th>Category Type</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {categoryTypes.length > 0 ? (
        categoryTypes.map(categoryType => (
          <tr key={categoryType.id}>
            <td>{categoryType.name}</td>
            <td>
              <Button className="button btwmuted-button">Edit</Button>
              <Button className="button muted-button">Delete</Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Category Types</td>
        </tr>
      )}
    </tbody>
  </Table>
);

export default CategoryTypeList;
