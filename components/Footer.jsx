import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer2">
      <ul className="footer-ul">
        <li>Contact Us</li>
        <li>&copy; All Rights Reserved Better THEN Blog</li>
        <li>Privacy Policy</li>
        <li>Buy me a Coffee</li>
      </ul>

      {/* <div>Contact us</div>
        <div>&copy; All Rights Reserved Blog Name</div>
        <div className="policy">Privacy Policy</div> */}
    </div>
  );
}

export default Footer;
