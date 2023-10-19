const shadowRoot = document.getElementById('example').attachShadow({ mode: 'open' });

shadowRoot.innerHTML = `<style>
button {
  background: tomato;
  color: white;
}
</style>
<select id="select"><slot></slot></select>`;