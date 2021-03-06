import React, { useEffect } from "react";
import NavbarComponent from "./NavbarComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterComponent from "./Footer";
import "../style/Team.css";
export default function Guide() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 1000);
  });

  return (
    <div>
      <NavbarComponent />
      <h3 data-aos="fade-up" data-aos-delay="300" id="projectIntroduceTitle">
        DomeVio 신고 가이드
      </h3>
      <br />
      <iframe
        src="https://onedrive.live.com/embed?cid=A581D305D3D85C3C&resid=A581D305D3D85C3C%21237&authkey=ACTYwi6ZvoHHxyg&em=2"
        width="80%"
        height="600"
        frameborder="0"
        scrolling="no"
        data-aos="fade-up"
        data-aos-delay="500"
      ></iframe>

      <br />
      <br />
      <br />
      <hr />
      <br />
      <FooterComponent />
    </div>
  );
}
