import React from 'react'

import {Button, Card, Col, Container, Row } from 'react-bootstrap';

const List = ({ userList, showProfile }) => {
    // console.log(userList);
  return (
    <section>
        <Container>
          <Row> 
          {userList.map(user => {
            const {avatar_url, login, id} = user;
            return (
              <Col key={id} md={4} lg={3} sm={12}>
                <Card  className='p-5'>
                  <Card.Img varient="top" width={100} style={{borderRadius: '200px'}} src={avatar_url} />
                  <Card.Title><h3 className='text-center'>{login}</h3></Card.Title>
                  <Button className='btn btn-primary btn-large' onClick={() => showProfile(login)}>Go To Profile</Button>
                </Card>
              </Col>
            )
          })

          }
          </Row>
        </Container>
      </section>
  )
}

export default List