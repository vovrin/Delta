import { createHashRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Home from "./pages/Home/Home"

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home/>}/>
  </Route>
)
const router = createHashRouter(routeDefinitions);
function App() {
  return <RouterProvider router={router}/>
}

export default App
