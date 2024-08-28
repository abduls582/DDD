// App.js
import './App.css';
import FeedbackForm from './components/FeedbackForm';
import Header from './components/header';
import SecondPart from './components/secondPart';
import SocialMedia from './components/SocialMedia';
import ThankYouPage from './components/ThankYouPage';

function App() {
  return (
    <>
      <Header />  
      <SecondPart />
      <SocialMedia />
      <FeedbackForm/>
      <ThankYouPage />
    </>
  );
}

export default App;
