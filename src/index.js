import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import TypesPage from './pages/TypesPage';
import Exhibitslayout from './layout/Exhibitslayout';
import ExhibitsPage from './pages/ExhibitsPage';
import ExhibitInfoPage from './pages/ExhibitInfoPage';
import InfoLayout from './layout/InfoLayout';
import MainLayout from './layout/MainLayout';
import AdminPage from './pages/AdminPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<TypesPage />} />
        </Route>
        <Route path="/exhibit" element={<Exhibitslayout />}>
          <Route path=':id' element={<ExhibitsPage />} />
        </Route>
        <Route path="/exhibit-info" element={<InfoLayout />}>
          <Route path=':typeId/:id' element={<ExhibitInfoPage />} />
        </Route>

      </Route>

      <Route path="/admin">
        <Route index element={<AdminPage />} />
      </Route>
      
    </Route>


  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ChakraProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </ChakraProvider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
