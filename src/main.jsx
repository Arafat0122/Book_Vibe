import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';
import PagesToRead from './components/PagesToRead/PagesToRead';
import ListedBooks from './components/ListedBooks/ListedBooks';
import About from './components/About/About';
import Read from './components/Read/Read';
import Wishlist from './components/Wishlist/Wishlist';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json')
      },
      {
        path: '/pages',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('../books.json')
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
        children:[
          {
            index: true,
            element: <Read></Read>, 
            loader:() => fetch('/books.json')
          },
          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>,
            loader: () => fetch('/books.json')
          }
        ]
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
