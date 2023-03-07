import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';


const Layout = lazy(() => import('./components/Layout'));
const Homepage = lazy(() => import('./pages/HomePage'));
const NftPage = lazy(() => import('./pages/NftPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));


import LoadingComponent from './components/LoadingComponent';


function App() {
  return (
    <Suspense fallback={<LoadingComponent/>}>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Homepage />} /> 
          <Route path="/nfts" element={<NftPage />} /> 
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
