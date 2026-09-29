import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import './App.css'
import Layout from './Layout';
import Home from './Pages/Home';
import MoviesList from './Pages/MoviesList';






const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
      {
        index: true,
        Component:Home
      },
       
        {
          path: "/movie-list",
          Component: MoviesList
        }
    ]
  },
]);






function App() {
  return (
    <>
     <RouterProvider router={router} />,
    </>
  )
}

export default App
