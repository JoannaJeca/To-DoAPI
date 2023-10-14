import styled from 'styled-components'
import logo from "../assets/blacklogo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Container>
      <Wrapper>
      <Wrap to="/"><Logo src={logo}/></Wrap>
        <Button to="/addTask" >Add Task</Button>
      </Wrapper>
      </Container>
    </div>
  )
}

export default Header;
const Wrap = styled(Link)`
  width:10%;
  height:59%;
`

const Button = styled(Link)`
width:120px;
height:60%;
font-size:15px;
text-decoration:none;
cursor:pointer;
display: flex;
justify-content: center;
align-items: center;
border-radius: 25px;
background-color: black;
color:white;
font-weight: bold;
`

const Logo = styled.img`
  object-fit: contain;
  object-position: center;
  height:40px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: pink; */
  width:96%;
  height:100%;
  flex-wrap:wrap;

`

const Container = styled.header`
  width:100%;
  height:70px;
  /* background-color: green; */
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
  /* position:fixed; */

`