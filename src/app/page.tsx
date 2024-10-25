import Aboutpage from "./about/page";
import Contact from "./contact/page";
import Services from "./services/page";
export default function Home() {
  return (
    <div>
        <h1>This is home page</h1>  
    <Aboutpage/>
    <Contact />
    <Services/>
    
    </div>
);
}
