import "./styles/app/App.css";
import MainPage from "./home-page/MainPage";
import ReferencesSection from "./home-page/ReferencesSection/ReferencesSection";
import Footer from "./home-page/FooterSection/Footer";
import OurPhoto from "./home-page/OurPhotoSection/OurPhoto";
import { BrowserRouter as Router } from "react-router-dom";
import { OrderDetailsProvider } from "./context/OrderDetails";


function App() {

  return (
    <Router>
      <div className="App">
        <OrderDetailsProvider> 
          <MainPage />
        </OrderDetailsProvider>
        <ReferencesSection />
        <OurPhoto />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
