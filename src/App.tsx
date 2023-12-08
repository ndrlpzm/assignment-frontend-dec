import "./App.css";
import { RouteProvider } from "./Routes";
import ToastContainer from "./components/toast/ToastContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header"></header>
        <main>
          <RouteProvider></RouteProvider>
          <ToastContainer></ToastContainer>
        </main>
      </div>
    </Provider>
  );
}

export default App;
