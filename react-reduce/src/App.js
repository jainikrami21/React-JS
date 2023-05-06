import { BrowserRouter,Routes,Route } from "react-router-dom";
import Index from "./Pages/Index";
import Add_data from "./pages/Add_data";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" index element={<Index/>}></Route>
            <Route path="/add_data" element={<Add_data/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;