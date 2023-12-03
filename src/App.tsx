import "./App.css";
import { RouteProvider } from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <RouteProvider></RouteProvider>
      </main>
    </div>
  );
}

export default App;
