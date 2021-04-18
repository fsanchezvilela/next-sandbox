import '../common/styles/globals.css';
import Header from '../common/view/containers/header/header';

function App({ Component, pageProps }) {
  
  return <>
    <Header />
    <Component {...pageProps} />
    </>
  
}

export default App;
