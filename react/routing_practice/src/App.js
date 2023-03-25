import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link, 
  useParams
} from 'react-router-dom';

const Home = () => {
  return (
    <h1>Welcome</h1>
  );
}

const Simple = (props) => {
  const { argument } = useParams();
  if (isNaN(argument)) {
    return (
      <h1>The word is: {argument}</h1>
    );
  } else {
    return (
      <h1>The number is: {argument}</h1>
    );
  }
  
}

const Complex = (props) => {
  const { word, color, background } = useParams();
  if (!validate(word, color, background)) {
    return (
      <h1>Sorry, that is not a valid input</h1>
    );
  } else {
    return (
      <h1 style={{color: color, backgroundColor: background}}>The word is: {word}</h1>
    );
  }
}

const validate = (word, color, background) => {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
  if (isNaN(word) && colors.includes(color) && colors.includes(background)) {
    return true;
  } else {
    return false;
  }
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route path='/:argument' element={<Simple />} />
        <Route path='/:word/:color/:background' element={<Complex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
