
import './Footer.css';
import React from "react";
import ca_logo from "../image/store_image/ca_logo1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
      <footer>
        <div className="footer-container flex-sa">
            <div className="footer-info flex-c">
                <div className="footer-img">
                    <img src={ca_logo} alt="ca_logo"/>
                </div>
                <div>
                    <p>©Pop-Con Korea Corporation All Rights Reserved.</p>
                    <p>㈜팝콘코리아 대표이사 : 김기윤 부산광역시 해운대구 APEC로 17 연락처 : 1588-7701</p>
                    <p>E-mail: contact-us@popcon.co.kr 사업자등록번호 : 220-87-17483</p>
                </div>
            </div>
            <div className="footer-links flex-sa">
              <a href="#">이용약관</a>
              <span>|</span>
              <a href="#">개인정보 처리방침</a>
              <span>|</span>
              <a href="#">공지사항</a>
              <span>|</span>
              <a href="#">고객센터</a>
              <span>|</span>
              <a href="#">사이트맵</a>
            </div>
          <div className="footer-social-icons flex-sa">
            <FontAwesomeIcon icon={faFacebookSquare}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faLinkedin}/>
            <FontAwesomeIcon icon={faYoutube}/>
          </div>
        </div>
    </footer>
  
  );
}

export default Footer;