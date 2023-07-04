import Index from "./pages/Index/Index";
import { store } from "./redux/store";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Index></Index>
    </Provider>
  );
}

export default App;
