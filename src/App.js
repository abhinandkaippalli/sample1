import './App.css';
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Leaderboard from "./Components/Leaderboard/Leaderboard";
import Form1 from './Components/Form1';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}/>
        <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="Form1" element={<Form1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
