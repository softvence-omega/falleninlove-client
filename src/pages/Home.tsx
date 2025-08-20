import Hero from "@/components/Hero";
import ChatProgress from "@/components/LandingComponponents/ChatProgress";
import Checkout from "@/components/LandingComponponents/Checkout";
import Document from "@/components/LandingComponponents/Document";
import FeedBack from "@/components/LandingComponponents/FeedBack";
import Parter from "@/components/LandingComponponents/Parter";


export default function Home() {
  return (
    <div>
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
    </div>
  )
}
