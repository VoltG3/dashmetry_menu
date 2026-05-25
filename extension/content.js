const DASHMETRY_URL = 'https://VoltG3.github.io/dashmetry_menu/';

// Overlay container
const overlay = document.createElement('div');
overlay.id = '__dashmetry_overlay__';
overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2147483647;
    pointer-events: none;
    border: none;
    margin: 0;
    padding: 0;
`;
document.body.appendChild(overlay);

// Transparent iframe with the app
const iframe = document.createElement('iframe');
iframe.src = DASHMETRY_URL;
iframe.style.cssText = `
    border: none;
    width: 100%;
    height: 100%;
    background: transparent;
`;
iframe.setAttribute('allowtransparency', 'true');
overlay.appendChild(iframe);

// Tab toggle
let menuVisible = false;

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        e.stopPropagation();
        menuVisible = !menuVisible;
        const pe = menuVisible ? 'all' : 'none';
        overlay.style.pointerEvents = pe;
        iframe.style.pointerEvents = pe;
        iframe.contentWindow.postMessage({ type: 'toggle-menu' }, '*');
        if (!menuVisible) {
            iframe.blur();
            document.body.focus();
        }
    }
}, true);
