---
title: My page
layout: default
---



  <body>
    <header class="header">
      <nav class="flex flex-jc-sb flex-ai-c container">
        <a href="#" >
          <img class="header__logo" src="{{'assets/images/logo.svg' | relative_url }}" alt="logo">
        </a>
        <a href="#" id="btnHamburger" class="header__button--mobile hide-for-desktop">
          <img src="{{'assets/images/icon-hamburger.svg' | relative_url }}" alt="hamburger" class="button__image open">
          <img src="{{'assets/images/icon-close.svg' | relative_url }}" alt="hamburger" class="button__image close">
        </a>
        <ul class="header__links  hide-for-mobile">
          <li class="header__links--item"><a href="#">HOW WE WORK</a></li>
          <li class="header__links--item"><a href="#">BLOG</a></li>
          <li class="header__links--item"><a href="#">ACCOUNT</a></li>
          <a class="header__button button hide-for-mobile">VIEW PLANS</a>
        </ul>
        <ul class="header__menu has-fade hide-for-desktop">
          <li class="header__menu--item"><a href="#">HOW WE WORK</a></li>
          <li class="header__menu--item"><a href="#">BLOG</a></li>
          <li class="header__menu--item"><a href="#">ACCOUNT</a></li>
          <li class="header__menu--item"><a href="#">VIEW PLANS</a></li>
        </ul>
      </nav>
    </header>
    <section class="hero">
        <img    src="{{'assets/images/image-intro-desktop.jpg ' | relative_url }}"
        class="hero__image2" >
      <div class="hero__intro ">
          <h1 class="hero__title">Hu22manizing your insurance.</h1>
          <p class="hero__text">Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.</p>
        <a href="#" class="hero__button button">VIEW PLANS</a>
      </div>
   </section>
    <section class="feature  ">
      <h1 class="feature__title">We’re different</h1>
      <div class="feature__grid">
      <div class="feature__article">
        <img
          src="{{'assets/images/icon-snappy-process.svg' | relative_url }}"
          alt=""
          class="feature__article--img"
        />
        <h2 class="feature__article--title">Snappy Process</h2>
        <p class="feature__article--text">
          Our application process can be completed in minutes, not hours.
          Don’t get stuck filling in tedious forms.
        </p>
      </div>
      <div class="feature__article">
        <img
          src= "{{'assets/images/icon-affordable-prices.svg' | relative_url }}"
          alt=""
          class="feature__article--img"
        />
        <h2 class="feature__article--title">Affordable Prices</h2>
        <p class="feature__article--text">
          We don’t want you worrying about high monthly costs. Our prices may
          be low, but we still offer the best coverage possible.
        </p>
      </div>
      <div class="feature__article">
        <img
          src= "{{'assets/images/icon-people-first.svg' | relative_url }}"
          alt=""
          class="feature__article--img"
        />
        <h2 class="feature__article--title">People First</h2>
        <p class="feature__article--text">
          Our plans aren’t full of conditions and clauses to prevent payouts.
          We make sure you’re covered when you need it.
        </p>
      </div>
    </div>
  </section>
  <section class="more ">
    <h1 class="more--title">
      Find out more about how we work
    </h1>
    <a class="more--cta button">HOW WE WORK</a>
</section>
    <footer class="footer">
      <div class="footer__flex ">
      <div class="footer__logo">
        <a href="#">      
          <img  src= "{{'assets/images/logo.svg' | relative_url }}" alt="">
        </a>
      </div>
        <div class="footer__social">
          <a href="#">
            <img   src= "{{'assets/images/icon-facebook.svg' | relative_url }}" alt="facebook">
          </a>
          <a href="#">
            <img  src= "{{'assets/images/icon-twitter.svg' | relative_url }}" alt="twitter">
          </a>
          <a href="#">
            <img  src= "{{'assets/images/icon-pinterest.svg' | relative_url }}" alt="pinterest">
          </a>
          <a href="#">
            <img  src= "{{'assets/images/icon-instagram.svg' | relative_url }}" alt="instagram">
          </a>
        </div>
      </div>
      <div class="footer__flex ">
        <div class="footer__link">
          <h5 class="footer__link--title">OUR COMPANY</h5>
          <a class="footer__link--item" href="#">HOW WE WORK</a>
          <a class="footer__link--item" href="#">WHY INSURE?</a>
          <a class="footer__link--item" href="#">CHECK PRICE</a>
          <a class="footer__link--item" href="#">REVIEWS</a>
        </div>
        <div class="footer__link">
          <h5 class="footer__link--title">HELP ME</h5>
          <a class="footer__link--item" href="#">FAQ</a>
          <a class="footer__link--item" href="#">TERMS OF USE</a>
          <a class="footer__link--item" href="#">PRIVACY POLICY</a>
          <a class="footer__link--item" href="#">COOKIES</a>
        </div>
        <div class="footer__link">
          <h5 class="footer__link--title">CONTACT</h5>
          <a class="footer__link--item" href="#">SALES</a>
          <a class="footer__link--item" href="#">SUPPORT</a>
          <a class="footer__link--item" href="#">LIVE CHAT</a>
        </div>
        <div class="footer__link">
          <h5 class="footer__link--title">OTHERS</h5>
          <a class="footer__link--item" href="#">CAREERS</a>
          <a class="footer__link--item" href="#">PRESS</a>
          <a class="footer__link--item" href="#">LICENSES</a>
        </div>
      </div>
    </footer>
    <div class="attribution" style="background-color:white;">
      Challenge by
      <a style="text-decoration: none;" href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a style="text-decoration: none; font-size:1.2rem; font-weight: bold; color:black"   href="#">Tomasz Abramowski</a>.
    </div>
  </body>