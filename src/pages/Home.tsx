import Hero from "@/components/Hero";
import ChatProgress from "@/components/LandingComponponents/ChatProgress";
import Checkout from "@/components/LandingComponponents/Checkout";
import ChoosePlan from "@/components/LandingComponponents/ChoosePlan";
import Contact from "@/components/LandingComponponents/Contact";
import Document from "@/components/LandingComponponents/Document";
import FAQ from "@/components/LandingComponponents/FAQ";
import FeedBack from "@/components/LandingComponponents/FeedBack";
import Parter from "@/components/LandingComponponents/Parter";
import Footer from "@/Layout/Footer";
import Navbar from "@/Layout/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* Hero section */}
       <Hero/>
       {/* parters-(sponsers) */}
       <Parter/>
       {/* document */}
       <Document/>
       {/* ai chat-progress */}
       <ChatProgress/>
       {/* feedback section */}
       <FeedBack/>
       {/* checkout section */}
       <Checkout/>
       {/* chooose your plan */}
       <ChoosePlan/>
       {/* FAQ section */}
       <FAQ/>
       {/* Contact section */}
       <section className="contact">
        <Contact/>
       </section>
       <Footer/>
    </div>
  )
}
