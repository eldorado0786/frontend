import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Suspense, lazy } from "react";
import { ROUTES } from "./utils/constant.js";
import HomeLayout from "./layouts/HomeLayout.jsx";

// Lazy load components
// const SignIn = lazy(() => import("./pages/SignIn"));
// const SignUp = lazy(() => import("./pages/SignUp"));
// const Transfer = lazy(() => import("./pages/Transfer"));
// const Dashboard = lazy(() => import("./pages/Home"));
// const BankPage = lazy(() => import("./pages/BankPage"));
// const P2P = lazy(() => import("./pages/PearToPearTransfer"));
// const Profile = lazy(() => import("./pages/UserProfile"));
// const Transaction = lazy(() => import("./pages/TransactionPage"));
const Testing = lazy(()=> import("./testing/Testing"));

function App() {
  
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Public routes */}
            {/* <Route path={ROUTES.LOGIN} element={<SignIn />} />
            <Route path={ROUTES.SIGNUP} element={<SignUp />} />
            <Route path={ROUTES.BANK} element={<BankPage />} /> */}

            {/* Protected routes */}
            <Route element={<HomeLayout />}>
              {/* <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
              <Route path={ROUTES.TRANSFER} element={<Transfer />} />
              <Route path={ROUTES.P2P} element={<P2P />} />
              <Route path={ROUTES.PROFILE} element={<Profile />} />
              <Route path={ROUTES.TRANSACTIONS} element={<Transaction />} /> */}
              {/* Redirect root to dashboard */}
              <Route path="/" element={<Testing />} />
              {/* <Route
                path="/"
                element={<Navigate to={ROUTES.DASHBOARD} replace />}
              /> */}
            </Route>

            {/* Catch all route */}
            {/* <Route
              path="*"
              element={<Navigate to={ROUTES.DASHBOARD} replace />}
            /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

