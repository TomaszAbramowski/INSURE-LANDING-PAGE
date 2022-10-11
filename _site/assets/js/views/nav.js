
const button = document.querySelector("#btnHamburger");
const mobileNav = document.querySelector(".header__menu");
const body = document.getElementsByTagName("body")[0];
const buttonCloseOpen = document.querySelectorAll(".button__image");

class nav {

    constructor() {
  
    }

    closeOpenButton() {



        buttonCloseOpen.forEach(img => {
            img.addEventListener('click', () => {

                buttonCloseOpen.forEach(img => {
                    if (img.classList.contains("close")) {
                        img.classList.remove("close");
                        img.classList.add("open");
                    } else {
                        img.classList.remove("open");
                        img.classList.add("close");
                    }
                })



            });
        })
    }



    test() {

        button.addEventListener('click', function () {
            if (mobileNav.classList.contains('fade-in')) {
                mobileNav.classList.remove("fade-in");
                mobileNav.classList.add("fade-out");

                body.classList.remove("stop-scroll");

            } else {
                mobileNav.classList.add("fade-in");
                mobileNav.classList.remove("fade-out");
                body.classList.add("stop-scroll");

            }




        });
    }


};



export default new nav();

