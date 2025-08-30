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

 
    const sectionHeaderObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("_animated");
                // observer.unobserve(entry.target);
            }
        })
     },
        { threshold:1}
    );
    const sectionHeaders = document.querySelectorAll(".section-header");
    if (sectionHeaders.length > 0) {
        sectionHeaders.forEach(sectionHeader=>sectionHeaderObserver.observe(sectionHeader))
    }


    const footerObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("_animated");
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5}
    );
    footerObserver.observe(document.querySelector(".footer"));

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("_observed");
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    const sections = document.querySelectorAll("section");
    if (sections.length > 0) {
        sections.forEach(section=> sectionObserver.observe(section))
    }

});


 