import { Provider, defaultTheme } from '@adobe/react-spectrum';
import Caroausol from '../src/components/caroausol.component';
import Body from '../src/components/body.component';
import HeaderCom from '../src/components/header.component';
import Banner from '../src/components/banner.component';

function App() {
  return (<Provider theme={defaultTheme}>
    <HeaderCom />
    <Banner />
    <Caroausol />
    <Body />
  </Provider>
  );
}

export default App;
