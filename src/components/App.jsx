import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home.js'));
const Catalog = lazy(() => import('pages/Catalog/Catalog.js'));
const Favorites = lazy(() => import('pages/Favorites/Favorites.js'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path={`/favorites`} element={<Favorites />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};
