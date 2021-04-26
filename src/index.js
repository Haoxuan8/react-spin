import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import Spin from './spin/index'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  margin: 20px 0;
  padding: 400px 50px;
  width: 400px;
  text-align: center;
  background: grey;
  border-radius: 4px;
`


const App = (props) => {
  const [spinning, setSpinning] = React.useState(true);

  return (
    <Container>
      <Spin spinning={spinning} tip="loading">
        <Content>content</Content>
      </Spin>
      <button onClick={() => {setSpinning(!spinning)}}>toggle</button>
    </Container>
  )
}


render(<App />,
  document.getElementById('root')
)
