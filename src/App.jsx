import { createHashRouter,createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes, HashRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import Registration from "./pages/Registration/Registration";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"/reg",
    element:<Registration/>
  }
]);
function App() {
  return <RouterProvider router={router}/>
}

export default App
