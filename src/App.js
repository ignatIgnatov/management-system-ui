import { Routes, Route } from "react-router-dom";

import useLocalStorage from "./hooks/useLocalStorage";

import { AuthContext } from "./contexts/AuthContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import DropdownSecond from "./components/DropdownSecond";
import Logout from "./components/Logout";
import UsersList from "./components/UsersList/UsersList";
import StudentPage from "./components/UserDetails/EditProfile";
import MyPage from "./components/UserDetails/MyProfile";
import Verification from "./components/Verification";
import SuccessfulRegistration from "./components/SuccessfulRegistration";
import ChoisePicture from "./components/UserPicture/ChoicePicture";
import AllMessages from "./components/ContactMessages/AllMessages";

const initialAuthState = {
  id: "",
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  city: "",
  address: "",
  education: "",
  workspace: "",
  facebook: "",
  github: "",
  username: "",
  email: "",
  token: "",
};

function App() {
  const [user, setUser] = useLocalStorage("user", initialAuthState);

  const login = (authData) => {
    setUser(authData);
  };

  const logout = (data) => {
    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/logout" element={<Logout />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/admin/usersList" element={<UsersList />} />
            <Route path="/user/edit-profile" element={<StudentPage />} />
            <Route path="/user/my-profile" element={<MyPage />} />
            <Route path="/dpd-2" element={<DropdownSecond />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/verify" element={<SuccessfulRegistration />} />
            <Route path="/user/picture" element={<ChoisePicture />} />
            <Route path="/message/all" element={<AllMessages />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
