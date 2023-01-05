import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/pages/Rockets';
import MyProfile from './components/pages/MyProfile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Rockets />}
        />
        <Route
          path="/missions"
          element={<Missions />}
        />
        <Route
          path="/myprofile"
          element={<MyProfile />}
        />
      </Routes>
    </div>
  );
}

export default App;
