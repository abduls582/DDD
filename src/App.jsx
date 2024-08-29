import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import Header from "./components/header";
import SecondPart from "./components/secondPart";
import SocialMedia from "./components/SocialMedia";
import Test from "./components/test";
import ThankYouPage from "./components/ThankYouPage";

function App() {
  return (
    <>
      <Header />
      <SecondPart /> {/* Cursor animation will only apply here */}
      <SocialMedia />
      <FeedbackForm />
      <ThankYouPage />
      {/* <Test /> */}
    </>
  );
}

export default App;
