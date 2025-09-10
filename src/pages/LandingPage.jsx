import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SecondHero from "../components/SecondHero";
import HowItWorks from "../components/HowItWorks";
import EducatorTrust from "../components/EducatorTrust";
import TransparentPricing from "../components/TransparentPricing";
import Testimonial from "../components/Testimonial";
import TransferAssesment from "../components/TransferAssesment";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="max-w-[1600px] mx-auto min-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
      <SecondHero />
      <HowItWorks />
      <EducatorTrust />
      <TransparentPricing />
      <Testimonial />
      <TransferAssesment />
      <Footer />
    </div>
  );
};

export default LandingPage;
