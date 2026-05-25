import styled from "styled-components";

export const StyledPageContent = styled.div`
    display: block;
    
   width: 100%;
    height: 100%;
    
    //border: 1px solid #ae1313;
    border-bottom-right-radius : ${({ $br }) => $br ?? 100}px;
`