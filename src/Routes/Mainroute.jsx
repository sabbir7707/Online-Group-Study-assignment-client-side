import { Outlet } from "react-router-dom";
import MainLayout from "../Componant/MainLayout/MainLayout";
import Footer from "../Page/Home_componant/Footer";


const Mainroute = () => {
    return (
        
            <MainLayout>
             <Outlet></Outlet>
            <Footer></Footer> 
            </MainLayout>
        
    );
};

export default Mainroute;