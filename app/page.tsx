import CookingSection from "@/Components/Cooking/CookingSection";
import FaqSection from "@/Components/Faq/FaqSection";
import FinalCtaSection from "@/Components/FinalCta/FinalCtaSection";
import Footer from "@/Components/Footer/Footer";
import GallerySection from "@/Components/Gallery/GallerySection";
import Header from "@/Components/Header/Header";
import HeroSection from "@/Components/Hero/HeroSection";
import MobileOrderBar from "@/Components/MobileBar/MobileOrderBar";
import MotionLoader from "@/Components/Motion/MotionLoader";
import OrderProvider from "@/Components/Order/OrderProvider";
import OrderSection from "@/Components/Order/OrderSection";
import ProductJsonLd from "@/Components/Seo/ProductJsonLd";
import SizeSection from "@/Components/Size/SizeSection";
import StorySection from "@/Components/Story/StorySection";
import VideoSection from "@/Components/Video/VideoSection";
import WhySection from "@/Components/Why/WhySection";

const HomePage = () => (
  <OrderProvider>
    <ProductJsonLd />
    <Header />
    <main id="main">
      <HeroSection />
      <SizeSection />
      <WhySection />
      <GallerySection />
      <StorySection />
      <VideoSection />
      <CookingSection />
      <OrderSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
    <Footer />
    <MobileOrderBar />
    <MotionLoader />
  </OrderProvider>
);

export default HomePage;
