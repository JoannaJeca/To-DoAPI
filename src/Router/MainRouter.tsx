import { createBrowserRouter } from 'react-router-dom'
// import Home from "../Pages/Home"
import Home from '../Pages/Home'
import Layout from '../Static/Layout'
import AddTask from '../Pages/AddTask'

export const MainRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            }
        ]
    },
    {
        path:"/addTask",
        element:<AddTask/>
    }
])

