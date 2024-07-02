import styled from 'styled-components'

export const ResumeView = styled.div`
  width: 100%;
  height: 100%;
  max-width: 150%;
  max-height: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const PageContainer = styled.img`
  border-style: double;
  border-color: #000000;
  width: 50%;
  height: auto;
  max-width: 150%;
  max-height: 150%;
  cursor: zoom-in;
  align-items: center;
  justify-content: center;
`;

export const BigPageContainer = styled.img`
  border-style: double;
  border-color: #000000;
  width: 80%;
  height: auto;
  max-width: 150%;
  max-height: 150%;
  cursor: zoom-out;
  align-items: center;
  justify-content: center;
  overflow: auto;
  display: flex;
  margin: auto;
  z-index: 999;
`;


export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 50;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  align-items: center;
  justify-content: center;
`;


export const ResumeLink = styled.a`
  color: #000000;
  font-size: 2rem;
  padding: 1rem 2rem;
  background: #ffefef;
  border-radius: 15px;
  border: solid;
  transition: 0.3s ease;
  width: fit-content;
  margin-bottom: 8rem;


  &:hover{
    transform: scale(1.2);
    background: #4a86e8;
    cursor: pointer;
}
`;