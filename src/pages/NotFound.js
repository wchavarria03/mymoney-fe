import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const  NotFound = () =>  {
    return <div text textAlign='center'>
      <h1>404: Not found</h1>
      <Button as={Link}>Back to home</Button>
    </div>
}

export default NotFound;
