import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from 'react';
import  LoadingPage  from "./components/LoadingPage";

const Login = lazy(() => import('./pages/Login'));
const UserList = lazy(() => import('./pages/UserList'));
const EditUser = lazy(() => import('./pages/EditUser'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<UserList />} />
          <Route path="/update-profile" element={<EditUser />} />
        </Routes>
      </Suspense>
      <Toaster position="bottom-right" />
    </Router>
  );
};

export default App;
