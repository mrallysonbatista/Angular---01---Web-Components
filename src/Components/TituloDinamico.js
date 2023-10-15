class TituloDinamico extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open"});

    // Component base
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = this.getAttribute("title");

    // Component Style
    const style = document.createElement("style");
    style.textContent = `
      h1 {
        color: red;
      }
    `;

    // Apend to Shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);

  }
}

customElements.define("titulo-dinamico", TituloDinamico);