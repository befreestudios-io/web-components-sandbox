class HelloWorldComponent extends HTMLElement { 
    connectedCallback() { 
        this.innerHTML = `<h1>Hello world</h1>`; 
    }
} 

customElements.define('hello-world-component', HelloWorldComponent);