const host = document.getElementById('shadowHost');
const shadowRoot = host.attachShadow({mode: 'open'});
shadowRoot.innerHTML = '<h4>Hello Shadow DOM</h4>';
