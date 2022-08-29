import { BrowserRouter, Route, Routes } from "react-router-dom";
import BusinessProfile from "./Pages/BusinessProfile/BusinessProfile";
import Chat from "./Pages/Chat/Chat";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Registration from "./Pages/Registration/Registration";
import Registry from "./Pages/Registry/Registry";
import Services from "./Pages/Services/Services";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/services" element={<Services />} />
          <Route path="/businessProfile" element={<BusinessProfile />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
