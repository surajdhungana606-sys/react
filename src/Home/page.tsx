import { Header } from  "../components/Header";
import { Footer } from  "../components/Footer";

export const Home = () => {
    return(

   <div>
     <Header />
        <h1>Home</h1>
        <p>
           Welcome to Home page.
        </p>

        <Footer />
        <p>
         this is footer.
        </p>
   </div>
    );
}