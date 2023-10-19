class DropdownComponent extends HTMLElement { 
    connectedCallback() { 
        this.innerHTML = `<select><option>1</option><option>2</option></select>`; 
    }
} 

customElements.define('dropdown-component', DropdownComponent);