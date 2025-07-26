import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppProvider from "./context/AppProvider";
import PrivateRoutes from "./shared/components/private-routes/PrivateRoutes";
import Login from "./features/auth/pages/Login";
import Auth from "./features/auth/pages/Auth";
import Dashboard from "./features/dashboard/pages/Dashboard";
import Signup from "./features/auth/pages/Signup";
import DashboardLayout from "./features/dashboard/component/DashboardLayout";
import Projects from "./features/projects/pages/Projects";

function App() {

  const queruClint = new QueryClient();
  return (
    <AppProvider>
      <QueryClientProvider client={queruClint}>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<PrivateRoutes />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </AppProvider>
  );
}

export default App;
