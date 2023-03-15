import React from "react"
import '../App.css'
import GreyBackground from '../assets/images/Products/Grey_Background.png'



export function ScrollToTop() {

    const [showButton, setShowButton] = useState(false);
      
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
  
    // This function will scroll the window to the top 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };

    return (
        <>
           <div className="Picture-row">
                <div className="Picture-column">
                </div>
                <div className="Picture-column">
                </div>
                <div className="Picture-column">
                {showButton && (
        <button onClick={scrollToTop}>
          <p style={{ fontFamily: 'Rubik' }}>
            back to top
            </p>
        </button>  
      )}
                 </div>
            </div>
            </>
      );
    }