import { Route, Routes} from "react-router-dom";
import { ROUTES } from "./enums/routes/Routes.js";
import Inicio from './pages/private/inicio/index.jsx';
import Nav from "./components/ui/navbar/nav.jsx";
import Proyecto from "./pages/private/proyecto/index.jsx";
import Materia from "./pages/private/materia/index.jsx";
import Notificacion from "./pages/private/notificacion/index.jsx";
import TareaPendiente from "./pages/private/tareaPendiente/index.jsx";
import Colaboracion from "./pages/private/colaboracion/index.jsx";
import Pizarra from "./pages/private/pizarra/index.jsx";
import Login from "./pages/public/login/index.jsx";
import ExcalidrawComponente from "./components/ui/excalidraw.jsx";

const AppRoutes = () => {

  return (
    <Routes>      
      <Route path={ROUTES.LOGIN} element={<Login/>} />
      <Route path="/" element={<Nav/>}>
        <Route path={ROUTES.DASHBOARD} element={<Inicio />} />
        <Route path={ROUTES.MATERIA} element={<Materia />} />
        <Route path={ROUTES.PROYECTO} element={<Proyecto />} />
        <Route path={ROUTES.COLABORACION} element={<Colaboracion />} />
        <Route path={ROUTES.NOTIFICACION} element={<Notificacion />} />
        <Route path={ROUTES.TAREAPENDIENTE} element={<TareaPendiente />} />
        <Route path={ROUTES.PIZARRA} element={<Pizarra />} />
        <Route path={ROUTES.EXCALIDRAW} element={<ExcalidrawComponente/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;