import './App.css';
import HomePage from './components/HomePage/HomePage';
import HomePageWithoutAuth from './components/HomePageWithoutAuth/HomePageWithoutAuth';
import { Redirect } from 'react-router-dom';
import { isLoaded } from 'react-redux-firebase'
import { useSelector } from 'react-redux';
import Preloader from './components/Preloader/Preloader';


const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return (<Preloader />)
  return children
}

const App = () => {
  const { isEmpty } = useSelector(state => state.firebase.auth)
  return (
    <AuthIsLoaded>
      <div className="app">
        {!isEmpty ? <HomePage /> : <HomePageWithoutAuth />}
        {!isEmpty && <Redirect to='/' />}
      </div>
    </AuthIsLoaded>
  );
}

export default App;
