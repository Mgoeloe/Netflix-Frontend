import {useState} from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';


function Footer () {

const [buttonText, setButtonText] = useState("Servicecode"); 

const changeText = (text) => setButtonText(text);

    

  return (
    <footer>
      <div className="footer-wrapper">
        <div className="social-links">
          <li>
            <a href="" target="_blank" rel="noreferrer">
             <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noreferrer">
              <InstagramIcon/>
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noreferrer">
              <TwitterIcon/>
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noreferrer">
              <YouTubeIcon/>
            </a>
          </li>
        </div>
        <div className="top-level">
          <div className="one">
            <ul>
              <li>
                <a>Audio en ondertiteling</a>
              </li>
              <li>
                <a href="https://media.netflix.com/en/" target="_blank" rel='noreferrer'>Media Center</a>
              </li>
              <li>
                <a href="https://help.netflix.com/legal/privacy" target="_blank" rel='noreferrer'>Privacy</a>
              </li>
              <li>
                <a href="https://help.netflix.com/nl/contactus" target="_blank" rel='noreferrer'>Contact opnemen</a>
              </li>
            </ul>
          </div>
          <div className="two">
            <ul>
              <li>
                <a  href="" target="_blank" rel='noreferrer'>Audiodescriptie</a>
              </li>
              <li>
                <a  href="https://ir.netflix.net/ir-overview/profile/default.aspx" target="_blank" rel='noreferrer'>Relaties met investeerder</a>
              </li>
              <li>
                <a  href="https://help.netflix.com/legal/notices" target="_blank" rel='noreferrer'>Wettelijke bepalingen</a>
              </li>
            </ul>
          </div>
          <div className="three">
            <ul>
              <li>
                <a  href="https://help.netflix.com/nl/" target="_blank" rel='noreferrer'>Helpcentrum</a>
              </li>
              <li>
                <a  href="https://jobs.netflix.com/" target="_blank" rel='noreferrer'>Vacatures</a>
              </li>
              <li>
                <a  href="https://help.netflix.com/legal/privacy#cookies" target="_blank" rel='noreferrer'>Cookievoorkeuren</a>
              </li>
            </ul>
          </div>

          <div className="four">
            <ul>
              <li>
                <a  href="https://www.netflix.com/nl/redeem" target="_blank" rel='noreferrer'>Cadeaubonnen</a>
              </li>
              <li>
                <a  href="https://help.netflix.com/legal/termsofuse" target="_blank" rel='noreferrer'>Gebruikersvoorwaarden</a>
              </li>
              <li>
                <a href="https://help.netflix.com/legal/corpinfo" target="_blank" rel='noreferrer'>Bedrijfsgegevens</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-level">
        <button onClick={() => changeText("020-070")}>{buttonText}</button>

          <p>© 1997-2021 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;