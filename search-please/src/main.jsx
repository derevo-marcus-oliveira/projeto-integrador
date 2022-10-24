import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import './index.css'
import Index from './routers';
import Root from './routers/root';
import Catalogo from './routers/routes/catalogo';
import Produto from './routers/routes/componentsRouters/produto';
import Contato from './routers/routes/contato';
import Servico from './routers/routes/servico';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,   
    children: [
      { index: true, element: <Index /> },
      {
        path: "catalogo",
        element: <Catalogo/>,
        children: [
          {
            path: "processador",
            element: <Produto/>,
          },
          {
            path: "memoriaram",
            element: <Produto/>,
          },
        ]
      },
      {
        path: "servico",
        element: <Servico/>,
        children: [
          {
            path: "montagem",
            element:<div>Montagem</div>,
          },
          {
            path: "reparo",
            element:<div>Reparo</div>,
          },
        ]
      },
      {
        path: "contato",
        element: <Contato/>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
