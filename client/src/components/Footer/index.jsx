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
        <div className="social-logos" aria-label="social links">
          <span className="logo">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><img src={FacebookSVG} alt="Facebook" /></a>
          </span>
          <span className="logo">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><img src={InstagramSVG} alt="Instagram" /></a>
          </span>
          <span className="logo">
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={LinkedInSVG} alt="LinkedIn" /></a>
          </span>
          <span className="logo">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><img src={MSVG} alt="M" /></a>
          </span>
          <span className="logo">
            <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer"><img src={TikTokSVG} alt="TikTok" /></a>
          </span>
          <span className="logo">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src={TwitterSVG} alt="Twitter" /></a>
          </span>
          <span className="logo">
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><img src={youtubeSVG} alt="YouTube" /></a>
          </span>
        </div>

        <div className="footer-links" role="navigation" aria-label="footer links">
          <div className="flex-item"><a href="/contact">Contact Us</a></div>
          <div className="flex-item"><a href="/careers">Careers</a></div>
          <div className="flex-item"><a href="/disclosures">Disclosures</a></div>
        </div>

        <div>
          <h4 className="copyright">&copy; {new Date().getFullYear()} - Bridge CRM</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;