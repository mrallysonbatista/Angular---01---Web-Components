class Cardnews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: "open"});
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const author = document.createElement("span");
    author.textContent = `By ${(this.getAttribute("author") || "Anonymous")}`;

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("href" || "google.com.br");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(author);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("src") || "assets/image-not-found.jpg";
    newsImage.alt = this.getAttribute("alt");

    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  style() {
    const style =document.createElement("style");
    style.textContent = `
      .card {
        width: 100%;
        box-shadow: 4px 4px 42px -16px rgba(0,0,0,0.75);
      -webkit-box-shadow: 4px 4px 42px -16px rgba(0,0,0,0.75);
      -moz-box-shadow: 4px 4px 42px -16px rgba(0,0,0,0.75);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 45px;
      }
      
      .card__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
      }
      
      .card__left > span {
        font-weight: 400;
      }
      
      .card__left > a {
        margin-top: 15px;
        font-size: 25px;
        color: black;
        text-decoration: none;
        font-weight: bold;
      }
      
      .card__left > p {
        color: rgb(70, 70, 70);
      }

      .card__right > img {
        width: 100%;
      }
    `;

    return style;
  }
}

customElements.define("card-news", Cardnews);