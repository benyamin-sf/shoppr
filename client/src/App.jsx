import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// PAGES
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  LandingFallback,
  Login,
  Orders,
  Register,
} from './pages';

// FEATURES (and their related loaders and actions)
import {
  Products,
  ProductsFallback,
  featuredProductsLoader,
  productsLoader,
} from './features/Products';
import { Product, ProductFallback, productLoader } from './features/Product';

// COMPONENTS
import { ErrorElement } from './components';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // setting stale-time for queries to 15 mins
      staleTime: 15 * 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        hydrateFallbackElement: <LandingFallback />,
        loader: featuredProductsLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'products',
        element: <Products />,
        hydrateFallbackElement: <ProductsFallback />,
        loader: productsLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'products/:productId',
        element: <Product />,
        hydrateFallbackElement: <ProductFallback />,
        loader: productLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
