import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppProvider from "./context/AppProvider";
import PrivateRoutes from "./shared/components/private-routes/PrivateRoutes";
import Login from "./features/auth/pages/Login";
import Auth from "./features/auth/pages/Auth";
import Dashboard from "./features/dashboard/pages/Dashboard";
import Signup from "./features/auth/pages/Signup";
import DashboardLayout from "./features/dashboard/component/DashboardLayout";
import Profile from './features/profile/pages/Profile';
import Users from './features/users/pages/Users';
import Puser from './features/portfolioUser/pages/Puser';
import Projects from "./features/projects/pages/Projects";
import Resumes from './features/resumes/pages/Resumes';
import Contact from './features/contact/pages/Contact';
import Themes from './features/themes/pages/Themes';
import AddModal from "./features/projects/component/AddModal";
import UsersCRUDModal from "./features/users/component/UsersCRUDModal";

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
              <Route path="/profile" element={<Profile />} />
              <Route path="/users" element={<Users />} >
                <Route path="update" element={<UsersCRUDModal key={'user' + 'update'}/>}/>
                <Route path="add" element={<UsersCRUDModal key={'user' + 'add'}/>}/>
              </Route>
              <Route path="/portfolio-user" element={<Puser />} />
              <Route path="/projects" element={<Projects />}>
                <Route path="add" element={<AddModal />} />
              </Route>
              <Route path="/resumes" element={<Resumes />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/themes" element={<Themes />} />
            </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </AppProvider>
  );
}

export default App;
