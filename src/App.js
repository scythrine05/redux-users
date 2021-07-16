import UserData from "./components/UserData";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Redux Users</h1>
      <Provider store={store}>
        <UserData />
      </Provider>
    </div>
  );
}

export default App;
