import { useLocation, useNavigate } from "react-router-dom";
import FacebookSVG from "../../assets/Facebook.svg";
import InstagramSVG from "../../assets/Instagram.svg";
import LinkedInSVG from "../../assets/LinkedIn.svg";
import MSVG from "../../assets/M.svg";
import TikTokSVG from "../../assets/TikTok.svg";
import TwitterSVG from "../../assets/Twitter.svg";
import youtubeSVG from "../../assets/youtube.svg";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer>
      <div className="flex-container">
      <br />
        <div className="social-logos">
          <span className="logo">
            <a href="https://facebook.com/">{<img src={FacebookSVG} alt="" />}</a>
          </span>
          <span className="logo">
            <a href="https://instagram.com/">{<img src={InstagramSVG} alt="" />}</a>
          </span>
          <span className="logo">
            <a href="https://linkedin.com/">{<img src={LinkedInSVG} alt="" />}</a>
          </span>
          <span className="logo">
            <a href="https://facebook.com/">{<img src={MSVG} alt="" />}</a>
          </span>
          <span className="logo">
            <a href="https://tiktok.com/">{<img src={TikTokSVG} alt="" />}</a>
          </span>
          <span className="logo">
            <a href="https://twitter.com/">{<img src={TwitterSVG} alt="" />}</a>
          </span>
          <span className="logo">
            <a href="https://youtube.com/">{<img src={youtubeSVG} alt="" />}</a>
          </span>
        <div className="footer-links">
          <div className="flex-item"><span>Contact Us</span></div>
          <div className="flex-item"><span>Careers</span></div>
          <div className="flex-item"><span>Disclosures</span></div>
        </div>
        </div>
          <div>
        <h4 className="copyright">&copy; {new Date().getFullYear()} - Bridge CRM</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
