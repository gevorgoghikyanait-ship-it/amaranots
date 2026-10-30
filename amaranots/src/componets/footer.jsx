
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer">

      {/* Announcement section */}
      <section className="announcement">
        <div className="announcement-box">

          <div className="announcement-title">
            <span></span>
            <h2>ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ</h2>
            <span></span>
          </div>

          <p>
            Մուտքագրեք Ձեր տվյալները նշված դաշտերում և
            մենք կկապվենք Ձեզ հետ
          </p>

          <form
            className="announcement-form"
            action="mailto:amaranoc.info@gmail.com"
            method="post"
            encType="text/plain"
          >
            <input
              type="text"
              name="name"
              placeholder="Անուն Ազգանուն"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Հեռախոսահամար"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Էլ. հասցե"
              required
            />

            <button type="submit">
              Ուղարկել
            </button>
          </form>

        </div>
      </section>

      {/* Contact section */}
      <section className="contact-section">

        <h2>ԿՈՆՏԱԿՏՆԵՐ</h2>

        <div className="contact-items">

          <a href="tel:041611611">
            <span>♧</span>
            041-611-611
          </a>

          <a href="mailto:amaranoc.info@gmail.com">
            <span>✉</span>
            AMARANOC.INFO@GMAIL.COM
          </a>

          <a href="https://www.instagram.com/amaranoc.am/">
            <span>◎</span>
            AMARANOC.AM
          </a>

          <a href="https://www.facebook.com/">
            <span>f</span>
            AMARANOC.AM
          </a>

          <span>
            <span>⌖</span>
            ԲՈՒԼՂԱՐԻԱ 5
          </span>

        </div>

        <a className="privacy-link" href="#">
          Գաղտնիության քաղաքականություն
        </a>

        <div className="company-name">
          Ամառանոց ՍՊԸ
          <span>|</span>
          Amaranoc LLC
          <span>|</span>
          Амараноц ООО
        </div>

        {/* Mountain decoration */}
        <div className="mountains">
          <svg
            viewBox="0 0 1600 180"
            preserveAspectRatio="none"
          >
            <path
              d="M0 150 L70 90 L110 120 L180 40 L240 120
              L300 80 L360 130 L440 35 L500 90 L570 65
              L650 130 L730 55 L800 115 L880 35 L950 110
              L1030 55 L1100 130 L1180 45 L1260 100
              L1340 30 L1410 105 L1490 55 L1600 145"
              fill="none"
              stroke="white"
              strokeWidth="4"
            />
            <path
              d="M0 160 L1600 160 L1600 180 L0 180 Z"
              fill="white"
              opacity="0.12"
            />
          </svg>
        </div>

      </section>

    </footer>
  );
}

export default Footer;
