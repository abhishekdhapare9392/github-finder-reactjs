import React from 'react'
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaTwitter } from 'react-icons/fa'
import {BsArrowLeftCircleFill} from 'react-icons/bs'

const Profile = ({user, setIsProfile}) => {
  return (
    <section>
          <Container>
            <Row>
              <Col sm={12} md={12} lg={12}>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col sm={1} md={1} lg={1}>
                        <Card.Img varient="top" style={{borderRadius: '200px', width: '100%'}} src={user.avatar_url} />
                      </Col>
                      <Col sm={11} md={11} lg={11}>
                        <h2>{user.name} <BsArrowLeftCircleFill style={{cursor: 'pointer'}} onClick={() => setIsProfile(false)} /></h2>
                        <p>
                          <strong>Bio: </strong>
                          {user.bio}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        <Badge bg='secondary' className='me-3'>Followers: {user.followers}</Badge>
                        <Badge bg='primary' className='me-3'>Following: {user.following}</Badge>
                        <Badge bg='secondary' className='me-3'>Public Repo's: {user.public_repos}</Badge>
                      </Col>
                      <Col sm={12} md={12} lg={12}>
                        <h4>Social Media</h4>
                        <ul className='list-group'>
                            <li className='list-group-item'><Button target='_blank' className='btn bg-transparent text-dark' style={{
                              textDecoration: 'none'
                            }} href={`https://www.twitter.com/${user.twitter_username}`}><FaTwitter color='#1B98F5' /> @{user.twitter_username}</Button></li>
                        </ul>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
  )
}

export default Profile