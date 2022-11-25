import { createWrapper } from "next-redux-wrapper";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../assets/css/main.scss";
import { persistor, store } from "../store/store";
function App({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(App);
