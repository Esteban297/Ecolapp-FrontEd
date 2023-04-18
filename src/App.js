import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Search from "./components/Search";
import Search2 from "./components/Search2";
import Help from "./components/Help";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<Search/>} />
                <Route path="/search2" element={<Search2/>} />
                <Route path="/help" element={<Help/>} />
            </Routes>
        </Router>
    );
}

export default App;
