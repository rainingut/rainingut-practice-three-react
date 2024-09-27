import Layout from './components/Layout/Layout';
import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import ThreePage from './pages/Three/Three';
import TestPage from './pages/Test/Test';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="three" element={<ThreePage />} />
      <Route path="test" element={<TestPage />} />
    </Route>
  )
)
// https://medium.com/@johnnyfang_11536/vite-build-react-38fb56a1fa4e
// https://medium.com/@galohernandez/312ee887197e

function App({routes}) {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
