import React, { useState } from 'react';
import Form, { Group, Label, Control } from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const AddCategory = props => {
  const initialFormState = { id: null, name: '', type: '' };
  const [category, setCategory] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target

    setCategory({ ...category, [name]: value })
  }

  const onSubmit = event => {
    event.preventDefault()
    if (!category.name || !category.type) return

    props.addCategory(category)
    setCategory(initialFormState)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Group>
        <Label>Name</Label>
        <Control type="text" name="name" value={category.name} onChange={handleInputChange} />
      </Group>
      <Group>
        <Label>Type</Label>
        <Control as="select" name="type" value={category.type} onChange={handleInputChange} >
          {
            props.categoryTypes.map((categoryType) => {
              return (<option>categoryType.name</option>);
            })
          }
        </Control>
      </Group>
      <Button type="submit">Add new category</Button>
    </Form>
  );
}

export default AddCategory;
