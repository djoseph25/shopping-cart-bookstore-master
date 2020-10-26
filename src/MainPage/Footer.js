import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div >
        <footer class="footer-distributed">
          <div class="footer-left">
            <img
              id="logos"
              src="https://i1.wp.com/bookshopbd.com/wp-content/uploads/2018/02/book-shop-bd-logo-2018.png?fit=1055%2C305&ssl=1"
              alt="logos"
            />

            <p class="footer-links">
              <a href="/Home" class="link-1">
                Home
              </a>

              <a href="/About">About</a>

              <a href="/Contact">Contact</a>
            </p>

            
          </div>

          <div class="footer-center">
            <div>
              <i class="fa fa-map-marker"></i>
              <p>
                <div>12334 Miami</div> South Beach
              </p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>509.637.7387</p>
            </div>

            <div>
              <i class="fa fa-envelope"></i>
              <p>
                <a href="mailto:support@company.com">Findyourfavorite@me.com</a>
              </p>
            </div>
          </div>

          <div class="footer-right">
            <p class="footer-company-about">
              <div>About the company</div>
              Finding your favorite book can be a daunting task, Now finding
              your favorite book has never been easier
            </p>

            <div class="footer-icons">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
