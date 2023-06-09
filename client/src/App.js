import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./AppRouter";
import NavBar from "./components/Navbar/NavBar";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App font-sans">
        <NavBar />
        <main className="mt-16">
          <AppRouter />
        </main>
      </div>
    </Provider>
  );
}

export default App;
