import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemList from "./pages/ItemList";
import ItemDetail from "./pages/ItemDetail";
export function RouteProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList />}></Route>
        <Route path="/:id/:key" element={<ItemDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
