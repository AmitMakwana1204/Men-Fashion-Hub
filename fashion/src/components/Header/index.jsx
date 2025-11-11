import { Link } from 'react-router-dom';
import logo from './assets/images/logo.png';


const Header = () => {
    return(
        <>
           <div className="headerwrapper">
                <div className="top-strip bg-purple">
                <div className="container">
                <p className="mb-0 mt-0 text-center">Enjoy our great International Shipping Rates </p>
                </div>
                </div>
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logowrapper col-sm-3">
                                 <link to={"/"}><img src={logo} alt="logo" />
                                 </link>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    ) 
}

export default Header;