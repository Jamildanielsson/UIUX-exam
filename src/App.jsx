import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Start from './views/Start/Start';
import Book from './views/Book/Book';
import ToFly from './views/ToFly/ToFly';
import Confirmation from './views/Confirmation/Confirmation';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start />
    },
    {
      path: "/book",
      element: <Book />
    },
    {
      path: "/tofly",
      element: <ToFly />
    },
    {
      path: "/confirmation",
      element: <Confirmation />
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App