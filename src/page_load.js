let pageLoad = (function () {
  const body = document.querySelector("body");

  function header() {
    const header = document.createElement("section");
    header.classList.add("header");

    const headerTitle = document.createElement("div");
    headerTitle.classList.add("header-title");
    headerTitle.textContent = "Krusty Krab";
    body.append(header);
    header.append(headerTitle);
  }

  function nav() {
    const nav = document.createElement("nav");
    nav.classList.add("tabs");

    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");

    button1.classList.add("home-tab", "nav-item");
    button2.classList.add("menu-tab", "nav-item");
    button3.classList.add("contact-tab", "nav-item");

    button1.textContent = "Home";
    button2.textContent = "Menu";
    button3.textContent = "Contact";

    body.append(nav);
    nav.append(button1, button2, button3);
  }

  function home() {
    const home = document.createElement("section");
    home.classList.add("home");

    const chef = document.createElement("article");
    chef.classList.add("chef");

    const chefImg = document.createElement("img");
    chefImg.classList.add("chef-img");
    chefImg.src = "./images/Mr._krabs_spongebob_squarepants.png";

    const chefText = document.createElement("div");
    chefText.classList.add("chef-text");
    chefText.textContent =
      "Only the finest krabby patties with real sea cheese! Come on down and see why The Krusty Krab is the most popular restaurant in Bikini Bottom!";

    body.append(home);
    home.append(chef);
    chef.append(chefImg);
    chef.append(chefText);
    document.querySelector('.home-tab').classList.add("highlight-nav-item");
  }

  function menu() {
    const menu = document.createElement("section");
    menu.classList.add("menu");

    body.append(menu);
    document.querySelector('.menu-tab').classList.add("highlight-nav-item");
  }

  function contact() {
    const contact = document.createElement("section");
    contact.classList.add("contact");

    const phone = document.createElement("div");
    phone.classList.add("phone");

    const phoneH1 = document.createElement("h1");
    phoneH1.innerText = "By phone:";

    const phoneNum = document.createElement("div");
    phoneNum.innerText = "+00 00000 00000";

    const mail = document.createElement("div");
    mail.classList.add("mail");

    const mailH1 = document.createElement("h1");
    mailH1.innerText = "By mail:";

    const mailAddress = document.createElement("div");
    mailAddress.innerText = "Bikini Bottom, Pacific Ocean, 831 Bottom Feeder Lane";

    const email = document.createElement("div");
    email.classList.add("email");

    const emailH1 = document.createElement("h1");
    emailH1.innerText = "By email:";

    const emailAddress = document.createElement("div");
    emailAddress.innerText = "krustykrab@mail.com";

    body.append(contact);
    contact.append(phone);
    phone.append(phoneH1);
    phone.append(phoneNum);
    contact.append(mail);
    mail.append(mailH1);
    mail.append(mailAddress);
    contact.append(email);
    email.append(emailH1);
    email.append(emailAddress);
    document.querySelector('.contact-tab').classList.add("highlight-nav-item");
  }

  function addMenuItem(imagePath, nameStr, priceStr, descriptionStr) {
    const menu = document.querySelector(".menu");

    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const menuItemImg = document.createElement("img");
    menuItemImg.classList.add("menu-item-img");
    menuItemImg.src = imagePath;

    const menuItemContainer = document.createElement("div");
    menuItemContainer.classList.add("menu-item-container");

    const menuItemHeader = document.createElement("div");
    menuItemHeader.classList.add("menu-item-header");

    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = nameStr;

    const price = document.createElement("div");
    price.classList.add("price");
    price.textContent = priceStr;

    const menuItemDescription = document.createElement("div");
    menuItemDescription.classList.add("menu-item-description");
    menuItemDescription.textContent = descriptionStr;

    menu.append(menuItem);
    menuItem.append(menuItemImg);
    menuItem.append(menuItemContainer);
    menuItemContainer.append(menuItemHeader);
    menuItemHeader.append(name);
    menuItemHeader.append(price);
    menuItemContainer.append(menuItemDescription);
    // menuItemDescription.append();
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

  return { header, home, nav, menu, addMenuItem, contact, footer };
})();

export { pageLoad };
