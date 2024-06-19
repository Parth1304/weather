
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Weather from "./pages/Weather";
import Page1 from "./pages/Page1";
export default function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />}/>
        <Route path="weather" element={<Weather />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}