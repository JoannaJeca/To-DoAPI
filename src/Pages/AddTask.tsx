import Header from '../Static/Header'
import styled from 'styled-components';
import {useState} from 'react'
import { createTask } from '../api/Api';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const [task, setTask] = useState<string>("")
  const [urgency, setUrgency] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  let navigate= useNavigate()


  return (
    <div id="addTask">
        <Header/>
        <Container>
          <Wrapper>
            <AddTitle placeholder="Enter title" value={title} onChange={(e:any)=>{
              setTitle(e.target.value)
            }}/>
            <Input placeholder='Enter your choice task here' value={task} onChange={(e:any)=>{
              setTask(e.target.value)
            }}/>
            <Select value={urgency} onChange={(e:any)=>{
              setUrgency(e.target.value)
            }}>
              <Option value={"Important"}>Important</Option>
              <Option value={"Causual"}>Causual</Option>
              <Option value={"Fair"}>Fair</Option>
            </Select>
            <Button onClick={()=>{
              console.log(urgency, task)
              const id = Math.floor(Math.random() * new Date().getTime())
              const data={
                id,
                title,
                time:new Date().getTime(),
                urgency,
                task
              }
              createTask(data).then(()=>{
                navigate("/")
              })
            }}>Add Task</Button>
          </Wrapper>
        </Container>
    </div>
  )
}

export default AddTask;

const AddTitle =  styled.input`
  width:90%;
height:35px;
border:1px solid black;
font-family:Poppins;
font-size:15px;
border-radius:5px;
outline:none;
font-size:16px;
padding:10px 7px;
&::placeholder{
  font-family:Poppins;
  font-size:15px;
  padding:10px 10px;
}
`

const Button = styled.button`
width:93%;
height:46px;
font-size:15px;
text-decoration:none;
cursor:pointer;
display: flex;
justify-content: center;
align-items: center;
border-radius: 12px;
background-color: black;
color:white;
font-weight: bold;
transition: all ease-in 350ms;

&:hover{
  transform:scale(1.1);
  transition: all ease-in 350ms;
}
`

const Option = styled.option`
 
`

const Select = styled.select`
width:92%;
height:40px;
border:1px solid black;
font-family:Poppins;
font-size:15px;
border-radius:5px;

`

const Input = styled.textarea`
width:90%;
height:270px;
border:1px solid black;
font-size:16px;
padding:10px 7px;
border-radius: 5px;
outline:none;
&::placeholder{
  font-family:Poppins;
  font-size:15px;
  padding:10px 10px;
}`

const Wrapper = styled.section`
width:50%;
min-height:490px;
height:510px;
border-radius:10px;
border:1px solid black;
flex-direction: column;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap:wrap
`

const Container = styled.section`
width:100%;
height:(100vh - 70px);
display: flex;
justify-content: center;
align-items: center;
flex-wrap:wrap`