import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppProvider from "./context/AppProvider";
import PrivateRoutes from "./shared/components/private-routes/PrivateRoutes";
import Login from "./features/auth/pages/Login";
import Auth from "./features/auth/pages/Auth";
import DashboardLayout from "./features/dashboard/DashboardLayout";

function App() {

  const queruClint = new QueryClient();
  return (
    <AppProvider>
      <QueryClientProvider client={queruClint}>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<DashboardLayout />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </AppProvider>
  );
}

export default App;
