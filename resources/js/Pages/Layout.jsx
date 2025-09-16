import Footer from "@/Layouts/Footer";
import Navbar from "@/Layouts/NavBar";

export default function Layout({children}){
    return(
        <div className="w-full">
             <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}