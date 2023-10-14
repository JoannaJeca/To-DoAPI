import styled from 'styled-components'
import {AiOutlineClose} from "react-icons/ai"
import {useState, useEffect} from 'react'
import { getTask } from '../api/Api'
import moment from 'moment'


const Home = () => {
  const [state, setState] = useState<Array<{}>>([])

  useEffect(()=>{
    getTask().then((res)=>{
      setState(res)
    })
  },[])


  return (
    <div>
      <Container>
       <Wrap>
         {state?.map((props:any)=>(
           <Wrapper key={props.id}>
           <Head>
             <h2>{props.title}</h2>
             <AiOutlineClose size={21}/>
           </Head>
           <Body>{props.task}</Body>
           <Bottom>
             <p>{props.urgency}</p>
             <p>{moment(props.Time).fromNow()}</p>
         <Button>Edit</Button>
 
           </Bottom>
         </Wrapper>
         ))}
       </Wrap>
      </Container>
    </div>
  )
}

export default Home;
const Button = styled.div`
width:70px;
height:75%;
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

const Bottom = styled.div`
height:50px;
padding:7px;
display:flex;
align-items: center;
justify-content:space-between`

const Body = styled.div`
padding:7px;
margin-top:7px;`


const Head = styled.div`
height:30px;
/* width:96%; */
padding:7px;
display: flex;
justify-content: space-between;
align-items: center;`

const Wrapper =styled.div`
width:380px;
height:300px;
/* background-color:green; */
/* padding:5px 0px; */
border-radius:8px;
border:1px solid silver;
box-shadow:rgba(99, 99, 99, 0.4) 0px 2px 8px 0px;
margin:10px;`

const Wrap = styled.div`
  width:96%;
  height:100%;
  flex-wrap: wrap;
  display: flex;
`

const Container = styled.div`
height: 100%;
width:100%;
display: flex;
justify-content: center;
align-items:center;
`