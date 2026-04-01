// Cargar navbar
fetch("../components/nav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    let currentPage = window.location.pathname.split("/").pop();

    if(currentPage === ""){
      currentPage = "index.html";
    }

    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
      const linkPage = link.getAttribute("href");

      if(linkPage === currentPage){
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

  });

// Cargar footer
fetch("../components/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
