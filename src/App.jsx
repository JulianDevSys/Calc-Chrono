import Principal from "./pages/Principal";
import Login from "./forms/login"
import Signup from "./forms/signup"
import Publications from "./post/Publications";
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
        path: "Post", element: <Publications />},
    ],
  },
])


function App() {
  return (<div>
{   <RouterProvider router={router} /> }
  </div>)

}

export default App
