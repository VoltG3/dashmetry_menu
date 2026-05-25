import styled from 'styled-components';

const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Modal = styled.div`
    background: #1a1a1a;
    border: 1px solid #444;
    border-radius: 12px;
    padding: 36px 40px;
    max-width: 520px;
    width: 90%;
    color: #e0e0e0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
`;

const Title = styled.h2`
    margin: 0 0 20px 0;
    font-size: 22px;
    color: #ffffff;
    font-weight: 600;
`;

const Step = styled.p`
    margin: 8px 0;
    font-size: 14px;
    line-height: 1.6;
    color: #c0c0c0 !important;
`;

const Code = styled.code`
    background: #2e2e2e;
    border: 1px solid #555;
    border-radius: 4px;
    padding: 1px 6px;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    color: #f0a500;
`;

const Divider = styled.hr`
    border: none;
    border-top: 1px solid #333;
    margin: 20px 0;
`;

const ButtonRow = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 24px;
`;

const DownloadBtn = styled.button`
    flex: 1;
    padding: 10px 16px;
    background: #f0a500;
    color: #000;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    &:hover { background: #ffbb33; }
`;

const CloseBtn = styled.button`
    padding: 10px 20px;
    background: #333;
    color: #e0e0e0;
    border: 1px solid #555;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    &:hover { background: #444; }
`;

const MANIFEST_CONTENT = `{
  "manifest_version": 3,
  "name": "Dashmetry Menu",
  "version": "1.0",
  "description": "Overlay menu for any webpage. Press Tab to toggle.",
  "permissions": [],
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"],
      "run_at": "document_end",
      "all_frames": false
    }
  ]
}`;

const CONTENT_JS = `const DASHMETRY_URL = 'https://VoltG3.github.io/dashmetry_menu/';

const overlay = document.createElement('div');
overlay.id = '__dashmetry_overlay__';
overlay.style.cssText = \`
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
\`;
document.body.appendChild(overlay);

const iframe = document.createElement('iframe');
iframe.src = DASHMETRY_URL;
iframe.style.cssText = \`
    border: none;
    width: 100%;
    height: 100%;
    background: transparent;
\`;
iframe.setAttribute('allowtransparency', 'true');
overlay.appendChild(iframe);

let menuVisible = false;

function setMenuVisible(visible) {
    menuVisible = visible;
    const pe = visible ? 'all' : 'none';
    overlay.style.pointerEvents = pe;
    iframe.style.pointerEvents = pe;
    if (!visible) {
        iframe.blur();
        document.body.focus();
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        e.stopPropagation();
        setMenuVisible(!menuVisible);
        iframe.contentWindow.postMessage({ type: 'toggle-menu' }, '*');
    }
}, true);

window.addEventListener('message', (e) => {
    if (e.data?.type === 'menu-state') {
        setMenuVisible(e.data.visible);
    }
});`;

function downloadFile(filename, content, type = 'text/plain') {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

export const DashmetryInstructions = ({ onClose }) => {
    console.log('[DashmetryInstructions] rendered, onClose =', typeof onClose);

    const handleDownload = () => {
        console.log('[DashmetryInstructions] download button clicked');
        downloadFile('manifest.json', MANIFEST_CONTENT, 'application/json');
        setTimeout(() => downloadFile('content.js', CONTENT_JS, 'application/javascript'), 200);
        console.log('[DashmetryInstructions] manifest.json download triggered');
    };

    const handleClose = () => {
        console.log('[DashmetryInstructions] close triggered');
        onClose();
    };

    return (
        <Backdrop onClick={() => { console.log('[DashmetryInstructions] backdrop clicked'); handleClose(); }}>
            <Modal onClick={(e) => { console.log('[DashmetryInstructions] modal inner click (stopPropagation)'); e.stopPropagation(); }}>
                <Title>Browser Extension Setup</Title>

                <Step><strong style={{ color: '#fff' }}>Step 1.</strong> Click <strong style={{ color: '#f0a500' }}>Download Files</strong> below — save both files into the same folder.</Step>
                <Step><strong style={{ color: '#fff' }}>Step 2.</strong> Open Chrome and go to <Code>chrome://extensions</Code></Step>
                <Step><strong style={{ color: '#fff' }}>Step 3.</strong> Enable <strong style={{ color: '#f0a500' }}>Developer mode</strong> (top right toggle).</Step>
                <Step><strong style={{ color: '#fff' }}>Step 4.</strong> Click <strong style={{ color: '#f0a500' }}>Load unpacked</strong> and select the folder with the two downloaded files.</Step>
                <Step><strong style={{ color: '#fff' }}>Step 5.</strong> Open any webpage and press <Code>Tab</Code> to toggle the menu.</Step>

                <Divider />

                <Step style={{ fontSize: '12px', color: '#888' }}>
                    Firefox: go to <Code>about:debugging</Code> → This Firefox → Load Temporary Add-on → select <Code>manifest.json</Code>
                </Step>

                <ButtonRow>
                    <DownloadBtn onClick={handleDownload}>⬇ Download Files</DownloadBtn>
                    <CloseBtn onClick={handleClose}>Close</CloseBtn>
                </ButtonRow>
            </Modal>
        </Backdrop>
    );
};
