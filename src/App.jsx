import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataProvider";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import Rankings from "./pages/Rankings";
import Atletas from "./pages/Atletas";
import ContenidoDestacado from "./pages/ContenidoDestacado";
import Videoteca from "./pages/Videoteca";
import RedesSociales from "./pages/RedesSociales";
import Ver from "./pages/Ver";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="events" element={<Eventos />} />
            <Route path="rankings" element={<Rankings />} />
            <Route path="athletes" element={<Atletas />} />
            <Route path="trending/all" element={<ContenidoDestacado />} />
            <Route path="watch/library" element={<Videoteca />} />
            <Route path="newsletter" element={<RedesSociales />} />
            <Route path="latam/donde-ver" element={<Ver />} />
          </Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
