import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <section className='py-5'>
    <Container className='d-flex flex-row align-items-center justify-content-center'>
      <FaGithubSquare fontSize={80} />
      <h1 className='text-center'>GitHub User Finder</h1>
    </Container>
  </section>
  )
}

export default Header