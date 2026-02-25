import { Header } from  "../component/Header.tsx";
import { Footer } from  "../component/Footer.tsx";

export const Home = () => {
    return(

   <div>
     <Header />
        <h1>Home</h1>
        <p>
           Welcome to Home page.
        </p>
        <Footer/>
        <p>
         this is footer.
        </p>
   </div>
    );
}