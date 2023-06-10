import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import AppRouter from "./AppRouter";
import NavBar from "./components/Navbar/NavBar";
import { store, persistor } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App font-sans">
          <NavBar />
          <main className="mt-16">
            <AppRouter />
          </main>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
