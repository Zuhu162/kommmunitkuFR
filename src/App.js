import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import LoginForm from "./components/loginForm";
import LoginSide from "./components/loginSide";
import LoginPage from "./components/loginPage";
import ComplaintBox from "./components/complaintBox";
import ResponsiveDrawer from "./components/sidebar";
import { Box } from "@mui/system";

function App() {
  return (
    <div>
      <ResponsiveDrawer></ResponsiveDrawer>
    </div>
  );
}

export default App;
