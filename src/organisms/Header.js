const template = document.createElement("template");
template.innerHTML = `
<style>
</style>
<h3><slot></slot></h3>
`;

class AppHeader extends HTMLElement {

    /**
     * 
     */
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"})
        shadow.append(template.content.cloneNode(true));
        // this.title = shadow.querySelector("[data-title");
        // this.title.innerText = this.innerText;

    }
}

customElements.define("app-header", AppHeader)