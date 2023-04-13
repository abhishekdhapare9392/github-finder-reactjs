import React from 'react'
import { Container } from 'react-bootstrap';
import {FaSpinner} from 'react-icons/fa';

const Loading = () => {
  return (
    <main>
        <section>
            <Container className='d-flex flex-row justify-content-center align-items-center'>
                <h2><FaSpinner className='spinner' />  Loading...</h2>
            </Container>
        </section>
    </main>
  )
}

export default Loading

