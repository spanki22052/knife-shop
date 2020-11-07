import { Provider } from "react-redux";
import { useStore } from "../modules/store";
import ReduxDataLoader from "../components/reduxDataLoader";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ReduxDataLoader />
      <Component {...pageProps} />
    </Provider>
  );
}
