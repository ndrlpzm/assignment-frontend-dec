import { Routes, Route } from "react-router-dom";
import ItemList from "./pages/ItemList";
import ItemDetail from "./pages/ItemDetail";
export function RouteProvider() {
  return (
    <Routes>
      <Route path="/" element={<ItemList />}></Route>
      <Route path="/:id/item" element={<ItemDetail />}></Route>
    </Routes>
  );
}
