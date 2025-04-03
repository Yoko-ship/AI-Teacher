import { createBrowserRouter,RouterProvider} from "react-router-dom"
import Root from "./pages/Root"
import Home  from "./pages/Home"
import Themes from "./pages/Themes"
import "./App.css"
import Learning from "./pages/Learning"
import Faq from "./pages/Faq"
import DetailedLearning from "./components/DetailedLearning"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const router = createBrowserRouter([
  {path: "/",element:<Root/>,children:[
    {index:true,element:<Home/>},
    {path:"/themes",element:<Themes/>},
    {path:"/learning",element:<Learning/>},
    {path:"/learning/:id",element:<DetailedLearning/>},
    {path:"FAQ",element:<Faq/>}
  ]}
])

function App() {
  const queryProvider = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryProvider}>
      <RouterProvider router={router}/>
      </QueryClientProvider>
    </>
  )
}

export default App
