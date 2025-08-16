import "/src/scss/style.scss";

window.addEventListener("load", () => {

    const burgerButton = document.querySelector(".burger-button");
    const navigation = document.querySelector(".navigation");
  
    burgerButton?.addEventListener("click", (e) => {
        navigation?.classList.toggle("_open");
        e.target.classList.toggle("_active");
    })

    navigation?.addEventListener("click", (e) => {
        if (e.target.closest(".navigation__link")) {
            burgerButton?.classList.toggle("_active");
            e.currentTarget.classList.toggle("_open");
        }
    })

});


