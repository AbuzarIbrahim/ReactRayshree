import "./app.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes.tsx";
import { AppSidebar } from "./components/app-sidebar.tsx";
import { SidebarProvider } from "@/components/ui/sidebar";

const App = () => (
  <BrowserRouter>
    <SidebarProvider>
      <AppSidebar />
      <AppRoutes />
    </SidebarProvider>
  </BrowserRouter>
);

export default App;
