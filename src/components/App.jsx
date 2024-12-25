import { Toaster } from 'react-hot-toast';
import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { refreshUser } from "../redux/auth/operations";
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { selectIsRefreshing } from "../redux/auth/selectors";


const HomePage = lazy(() => import("../pages/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const isRefreshing = useSelector(selectIsRefreshing);


  useEffect(() => {if (token) {
      dispatch(refreshUser());
    }}, [dispatch, token]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Layout>
        <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} 
          />
          <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />}
          />
          <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
          />
          <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
          />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
          <Toaster />
          </Suspense>
       </Layout>
      
  )
}

export default App
  
