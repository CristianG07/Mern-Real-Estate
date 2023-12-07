import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import { About, Home, Profile, SignIn, SignUp } from "./pages";
import { Header } from "./components/Header";
import { PriveteRoute } from "./components/PriveteRoute";

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route element={<PriveteRoute/>}>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
