import { useLocation, useNavigate } from "react-router-dom";
import FacebookSVG from ".../assets/Facebook.svg";
import InstagramSVG from ".../assets/Instagram.svg";
import LinkedInSVG from ".../assets/LinkedIn.svg";
import MSVG from ".../assets/M.svg";
import TikTokSVG from ".../assets/TikTok.svg";
import TwitterSVG from ".../assets/Twitter.svg";
import youtubeSVG from ".../assets/youtube.svg";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {location.pathname !== "/" && (
          <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - Bridge CRM</h4>
        <h5>Contact Us</h5>
        <h5>Careers</h5>
        <h5>Disclosures</h5>
      </div>
      <div className="social-logos">
        <span>
          <a href="">{<img src={FacebookSVG} alt="" />}</a>
        </span>
        <span>
          <a href="">{<img src={InstagramSVG} alt="" />}</a>
        </span>
        <span>
          <a href="">{<img src={LinkedInSVG} alt="" />}</a>
        </span>
        <span>
          <a href="">{<img src={MSVG} alt="" />}</a>
        </span>
        <span>
          <a href="">{<img src={TikTokSVG} alt="" />}</a>
        </span>
        <span>
          <a href="">{<img src={TwitterSVG} alt="" />}</a>
        </span>
        <span>
          <a href="">{<img src={youtubeSVG} alt="" />}</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
