import React, { useState, useEffect, useRef } from 'react';
import './temporary.css';
import SectionHeader from "./Sections/SectionHeader";
import SectionMenu from "./Sections/SectionMenu";
import SectionContent from "./Sections/SectionContent";
import { DashmetryInstructions } from "./DashmetryInstructions";
import styled from "styled-components";

const isElectron = typeof window !== 'undefined' && window.process?.type === 'renderer';
const ipcRenderer = isElectron ? window.require('electron').ipcRenderer : null;

const HeaderContainer = styled.div`
    position: fixed;
    z-index: 9999;
    width : 1000px;
    height : 900px;
    border-radius : ${({ $br }) => $br}px;
    //border: 1px solid red;
    background: ${({ $bgColor1, $bgColor2, $gradientEnabled }) =>
        $gradientEnabled
            ? `linear-gradient(45deg, ${$bgColor1}, ${$bgColor2}, ${$bgColor1})`
            : $bgColor1
    };
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    cursor: grab;
    user-select: none;
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 800px;
    //border: 1px solid orange;
    border-bottom-left-radius : ${({ $br }) => $br}px;
    border-bottom-right-radius : ${({ $br }) => $br}px;
`

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    //background: rgba(0, 0, 0, 0.55);
    z-index: 9998;
`

const FpsCounter = styled.div`
    position: fixed;
    top: 8px;
    left: 8px;
    z-index: 10001;
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    color: #00ff00;
    background: rgba(0, 0, 0, 0.6);
    padding: 2px 8px;
    border-radius: 4px;
    pointer-events: none;
`

const DashmetryPage = () => {
    const [showSecret, setShowSecret] = useState(false);
    const [activePage, setActivePage] = useState('home');
    const [bgColor1, setBgColor1] = useState('#ffa500');
    const [bgColor2, setBgColor2] = useState('#ffff00');
    const [gradientEnabled, setGradientEnabled] = useState(true);
    const [pColor, setPColor] = useState('#cd830f');
    const [h1Color, setH1Color] = useState('#ff9a00');
    const [contentPColor, setContentPColor] = useState('#ff9a00');
    const [contentH1Color, setContentH1Color] = useState('#ff9a00');
    const [borderRadius, setBorderRadius] = useState(100);
    const [borderColor, setBorderColor] = useState('#888888');
    const [borderHeight, setBorderHeight] = useState(1);
    const [menuFontSize, setMenuFontSize] = useState(35);
    const [headerFontSize, setHeaderFontSize] = useState(60);
    const [contentFontSize, setContentFontSize] = useState(16);
    const [showFps, setShowFps] = useState(false);
    const [fps, setFps] = useState(0);
    const [showInstructions, setShowInstructions] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const isDragging = useRef(false);
    const dragOffset = useRef({ x: 0, y: 0 });
    const frameCount = useRef(0);
    const lastTime = useRef(performance.now());

    const toggleMenu = () => {
        setShowSecret(prev => {
            console.log(`[DashmetryPage] toggleMenu: showSecret ${prev} → ${!prev}`);
            if (!prev) {
                setPosition({
                    x: window.innerWidth / 2 - 500,
                    y: window.innerHeight / 2 - 450,
                });
            } else {
                setShowInstructions(false);
            }
            return !prev;
        });
    };

    useEffect(() => {
        if (ipcRenderer) {
            ipcRenderer.on('toggle-menu', toggleMenu);
            return () => ipcRenderer.removeListener('toggle-menu', toggleMenu);
        } else {
            const handleKeyDown = (event) => {
                if (event.key === 'Tab') {
                    event.preventDefault();
                    toggleMenu();
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    // Browser extension mode — saņem postMessage no content.js
    useEffect(() => {
        const handleMessage = (e) => {
            if (e.data?.type === 'toggle-menu') {
                toggleMenu();
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    useEffect(() => {
        if (ipcRenderer) {
            ipcRenderer.send('set-ignore-mouse', !showSecret);
        }
    }, [showSecret]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging.current) {
                setPosition({
                    x: e.clientX - dragOffset.current.x,
                    y: e.clientY - dragOffset.current.y,
                });
            }
        };
        const handleMouseUp = () => {
            isDragging.current = false;
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        if (!showFps) return;
        let animId;
        const loop = (now) => {
            frameCount.current++;
            const elapsed = now - lastTime.current;
            if (elapsed >= 1000) {
                setFps(Math.round(frameCount.current * 1000 / elapsed));
                frameCount.current = 0;
                lastTime.current = now;
            }
            animId = requestAnimationFrame(loop);
        };
        animId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animId);
    }, [showFps]);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        dragOffset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
    };

    console.log(`[DashmetryPage] render — showSecret=${showSecret}, showInstructions=${showInstructions}`);

    return (
        <>
            {showFps && <FpsCounter>{fps} FPS</FpsCounter>}
            {showSecret && <Overlay />}
            {showSecret && (
                <>
                    {showInstructions && <DashmetryInstructions onClose={() => { console.log('[DashmetryPage] onClose called → setShowInstructions(false)'); setShowInstructions(false); }} />}
                    <HeaderContainer
                        $bgColor1={bgColor1}
                        $bgColor2={bgColor2}
                        $gradientEnabled={gradientEnabled}
                        $br={borderRadius}
                        style={{ left: position.x, top: position.y }}
                        onMouseDown={handleMouseDown}
                    >
                        <SectionHeader h1Color={h1Color} br={borderRadius} borderColor={borderColor} borderHeight={borderHeight} headerFontSize={headerFontSize} />

                        <BodyContainer $br={borderRadius} onMouseDown={(e) => e.stopPropagation()}>
                            <SectionMenu setActivePage={setActivePage} activePage={activePage} pColor={pColor} br={borderRadius} menuFontSize={menuFontSize} setShowInstructions={setShowInstructions} />
                            <SectionContent activePage={activePage} setBgColor1={setBgColor1} bgColor1={bgColor1} setBgColor2={setBgColor2} bgColor2={bgColor2} gradientEnabled={gradientEnabled} setGradientEnabled={setGradientEnabled} pColor={pColor} setPColor={setPColor} h1Color={h1Color} setH1Color={setH1Color} borderRadius={borderRadius} setBorderRadius={setBorderRadius} borderColor={borderColor} setBorderColor={setBorderColor} borderHeight={borderHeight} setBorderHeight={setBorderHeight} contentFontSize={contentFontSize} menuFontSize={menuFontSize} setMenuFontSize={setMenuFontSize} headerFontSize={headerFontSize} setHeaderFontSize={setHeaderFontSize} setContentFontSize={setContentFontSize} contentPColor={contentPColor} setContentPColor={setContentPColor} contentH1Color={contentH1Color} setContentH1Color={setContentH1Color} showFps={showFps} setShowFps={setShowFps} />
                        </BodyContainer>
                    </HeaderContainer>
                </>
            )}
        </>
    );
}

export default DashmetryPage;