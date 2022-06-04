import { Routes, Route } from "react-router-dom";
import MenuHome from "./Page/MenuHome";
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/MenuMinuman";
import Kontak from "./Page/Kontak";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MenuHome />} />
                <Route path="/menu_makanan" element={<MenuMakanan />} />
                <Route path="/menu_minuman" element={<MenuMinuman />} />
                <Route path="/kontak" element={<Kontak />} />
            </Routes>
        </div>
    );
}

export default App;