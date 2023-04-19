import bg from './assets/img/startupMentor_bg.png';
import Header from './components/Header/Header';
import { Root } from './app-styled';
import WelcomeMsg from './components/WelcomeMsg/WelcomeMsg';
import Youtube from './components/Youtube/Youtube';

function App() {
  return (
    <Root bg={bg} className="App">
      <Header />
      <main>
        <WelcomeMsg />
        <Youtube YoutubeLink={'Ph7WoHnVDrM'} />
      </main>
      <footer>

      </footer>
    </Root>
  );
}

export default App;
