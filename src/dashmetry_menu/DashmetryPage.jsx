import React, { useState, useEffect, useRef } from 'react';
import './temporary.css';

const DashmetryPage = () => {
    const [showSecret, setShowSecret] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const isDragging = useRef(false);
    const dragOffset = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Tab') {
                event.preventDefault();
                setShowSecret(prev => {
                    if (!prev) {
                        setPosition({
                            x: window.innerWidth / 2 - 500,
                            y: window.innerHeight / 2 - 450,
                        });
                    }
                    return !prev;
                });
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

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

    const handleMouseDown = (e) => {
        isDragging.current = true;
        dragOffset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
    };

    return (
        <>
            {showSecret && (
                <div
                    className="menu_container"
                    style={{ left: position.x, top: position.y }}
                    onMouseDown={handleMouseDown}
                >
                    <div className="menu_section_header">
                        <h1 className="menu_h1">Dasmetry Menu PAID</h1>
                    </div>

                    <div className="mods_container">
                        <div className="mods_options">
                            <p className="paragraph_mod_options">Player</p>
                            <p className="paragraph_mod_options">Movement</p>
                            <p className="paragraph_mod_options">Visuals</p>
                            <p className="paragraph_mod_options">Gameplay</p>
                            <p className="paragraph_mod_options">Settings</p>
                            <p className="paragraph_mod_options">Credits</p>
                        </div>

                        <div className="mods_settings">
                            <p>mods_settings</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default DashmetryPage;