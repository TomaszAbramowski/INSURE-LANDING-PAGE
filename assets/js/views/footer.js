const list = document.querySelectorAll(".footer__link > .footer__link--item");

class footer {
  footerTest() {
    console.log(list[2].textContent);

    window.addEventListener("resize", function () {
      if (this.window.innerWidth >= 900) {
        list[2].textContent = `VIEW PLANS`;
      } else if (this.window.innerWidth < 900) {
        list[2].textContent = `CHECK PRICE`;
      }
    });
  }
}

export default new footer();
