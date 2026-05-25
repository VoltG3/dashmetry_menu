import React, { useState, useEffect, useRef } from 'react';
import './temporary.css';
import SectionHeader from "./Sections/SectionHeader";
import SectionMenu from "./Sections/SectionMenu";
import SectionContent from "./Sections/SectionContent";
import styled from "styled-components";

const HeaderContainer = styled.div`
    position: fixed;
    z-index: 9999;
    width : 1000px;
    height : 900px;
    border-radius : 100px;
    //border: 1px solid red;
    background: linear-gradient(45deg,  orange, yellow, orange);
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    cursor: grab;
    user-select: none;
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 800px;
    //border: 1px solid orange;
    border-bottom-left-radius : 100px;
    border-bottom-right-radius : 100px;
`

const DashmetryPage = () => {
    const [showSecret, setShowSecret] = useState(false);
    const [activePage, setActivePage] = useState('home');
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
                <HeaderContainer
                    style={{ left: position.x, top: position.y }}
                    onMouseDown={handleMouseDown}
                >
                    <SectionHeader />

                    <BodyContainer>
                        <SectionMenu setActivePage={setActivePage} activePage={activePage} />
                        <SectionContent activePage={activePage} />
                    </BodyContainer>
                </HeaderContainer>
            )}
        </>
    );
}

export default DashmetryPage;