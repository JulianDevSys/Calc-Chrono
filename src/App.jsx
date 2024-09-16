import Principal from "./pages/Principal";
import Login from "./forms/login"
import Signup from "./forms/signup"
import Calculator from "./post/Calculator";
import Timer from "./pages/Timer";
import Clock from "./post/Clock";
import Chronometer from "./post/Chronometer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal />,
    children: [
      {
        path: "/", element: <Signup/>},
      {
        path: "login", element: <Login />},
      {
        path: "Calculator", element: <Calculator />},
        
        
      
    ],
  },
  {
    path: "/",
    element: <Timer />,
    children:[
      {
        path: "clock", element: <Clock/>},
      {
        path: "clock/cronometro", element: <Chronometer/>},

    ]
  }
])


function App() {
  return (<div>
{   <RouterProvider router={router} /> }
  </div>)

}

export default App
