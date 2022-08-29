import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountSettings from "./Pages/AccountSettings/AccountSettings";
import BusinessProfile from "./Pages/BusinessProfile/BusinessProfile";
import Cart from "./Pages/Cart/Cart";
import Chat from "./Pages/Chat/Chat";
import FilterServices from "./Pages/FilterServices/FilterServices";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Registration from "./Pages/Registration/Registration";
import EditRegistry from "./Pages/Registry/EditRegistry";
import Registry from "./Pages/Registry/Registry";
import Services from "./Pages/Services/Services";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/accountsettings" element={<AccountSettings />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/editregistry" element={<EditRegistry />} />
          <Route path="/services" element={<Services />} />
          <Route path="/filterservices" element={<FilterServices />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/businessProfile" element={<BusinessProfile />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
