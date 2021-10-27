const shadowRoot = document.getElementById('example').attachShadow({ mode: 'open' });

shadowRoot.innerHTML = `<style>
button {
  background: tomato;
  color: white;
}
</style>
<button id="button"><slot></slot> Hot Dog</button>`;