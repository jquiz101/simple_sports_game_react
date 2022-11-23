import logo from './logo.svg';
import './App.css';
import Counter from './my_component/Counter';
import Team from './my_component/Team';
import Welcome from './my_component/welcome/Welcome';
import Clock from './my_component/clock/Clock';
import Contact from './my_component/contact/Contact';

//*** Import the Navigation component ***//
import Navigation from './my_component/navigation/Navigation';

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* Adding the Navigation component outside of the `<Routes>` compoinent so it shows for any URL */}
      <Navigation />

      <Routes>
        {/* Adding a route to the Welcome component at the "/" path of the URL. We are also passing the value "Eric" to the "name" prop */}
        <Route path="/" element={<Welcome name="Eric" />} />

        {/* Adding a route to the Clock component here. Clock doesn't require any props. It manages everything with it's internal state */}
        <Route path="clock" element={<Clock />} />

        {/* Adding a route to the Contact component here. */}
        <Route path="contact" element={<Contact />} />
      </Routes>

      {/* <Counter />
      <Team teamName="Eric's Awesome Sports Team" />
      <Team teamName="Chanda's Awesome Sports Team" />
      <br></br>
      <Welcome name="Eric"></Welcome>
      <Clock />
      <Contact /> */}
    </div>
  );
}

export default App;
