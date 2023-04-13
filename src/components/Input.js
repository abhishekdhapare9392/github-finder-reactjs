import React from 'react'

import { Button, Card, Container, Form } from 'react-bootstrap';

const Input = ({setQuery, fetchUsers}) => {
  return (
    <section className='py-5'>
        <Container>
          <Card>
            <Card.Body>
              <Form className='d-flex flex-row align-items-center justify-content-center'>
                <Form.Control type='text' placeholder='Enter github username' onChange={(e) => setQuery(e.target.value)} />
                <Button variant='success' style={{ marginLeft: '5px' }} onClick={fetchUsers}>Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </section>
  )
}

export default Input