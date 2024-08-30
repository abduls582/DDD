import "./App.css";
import CustomCursor from "./components/CustomCursor";
import FeedbackForm from "./components/FeedbackForm";
import Header from "./components/header";
import ScrollAnimationComponent from "./components/ScrollAnimationComponent";
import SecondPart from "./components/secondPart";
import SocialMedia from "./components/SocialMedia";
import ThankYouPage from "./components/ThankYouPage";

function App() {
  return (
    <>
      <div>
        <ScrollAnimationComponent />
      </div>
      <SecondPart />
      <SocialMedia />
      <FeedbackForm />
      <ThankYouPage />
    </>
  );
}

export default App;
