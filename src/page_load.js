let pageLoad = (function () {
  const body = document.querySelector("body");

  function header() {
    const header = document.createElement("section");
    header.classList.add("header");

    const headerTitle = document.createElement("div");
    headerTitle.classList.add("header-title");
    headerTitle.textContent = "Crimson Wheat";
    body.append(header);
    header.append(headerTitle);
  }

  function home() {
    const home = document.createElement("section");
    home.classList.add("home");

    const chef = document.createElement("article");
    chef.classList.add("chef");

    const chefImg = document.createElement("img");
    chefImg.classList.add("chef-img");
    chefImg.src = "./images/italian-chef-720.jpg";

    const chefText = document.createElement("div");
    chefText.classList.add("chef-text");
    chefText.textContent = "Only the finest crimson wheat est. 1912!";

    body.append(home);
    home.append(chef);
    chef.append(chefImg);
    chef.append(chefText);
  }

  function footer() {
    const footer = document.createElement("section");
    footer.classList.add("footer");

    const author = document.createElement("div");
    author.classList.add("author");
    author.textContent = "Project by PaperOrb";

    body.append(footer);
    footer.append(author);
  }

  return { header, home, footer };
})();

export { pageLoad };
