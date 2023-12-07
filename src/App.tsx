import "./App.css";
import { RouteProvider } from "./Routes";
import ToastContainer from "./components/toast/ToastContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <RouteProvider></RouteProvider>
        <ToastContainer></ToastContainer>
      </main>
    </div>
  );
}

export default App;
