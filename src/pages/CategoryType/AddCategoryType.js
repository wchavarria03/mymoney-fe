import React, { useState } from 'react';
import Form, { Group, Label, Control } from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const AddCategoryType = props => {
  const initialFormState = { id: null, name: '' };
  const [categoryType, setCategoryType] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target

    setCategoryType({ ...categoryType, [name]: value })
  }

  const onSubmit = event => {
    event.preventDefault()
    if (!categoryType.name) return

    props.addCategoryType(categoryType)
    setCategoryType(initialFormState)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Group>
        <Label>Name</Label>
        <Control type="text" name="name" value={categoryType.name} onChange={handleInputChange} />
      </Group>
      <Button type="submit">Add new category</Button>
    </Form>
  );
}

export default AddCategoryType;
