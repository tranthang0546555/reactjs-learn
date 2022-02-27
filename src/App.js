import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './auth/Register';
import Clock from './components/Clock';
import CounterFeature from './components/Counter';
import Header from './components/Header';
import NotFound from './components/NotFound';
import ColorBox from './features/ColorBox';
import TodoFeature from './features/Todo';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route index element={<ColorBox />} />
          <Route path='/todos' element={<TodoFeature />} />
          <Route path='/clock' element={<Clock />} />
          <Route path='counter' element={<CounterFeature />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
