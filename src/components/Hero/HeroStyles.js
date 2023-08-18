import styled from 'styled-components';

export const LeftSection = styled.div`
  position: relative;
  background-image: url('/images/background.jpg');
  background-size: cover;
  background-position: center;
`;

export const HeroSection = styled.div`
display: ${(props) => (props.grid ? 'grid' : 'flex')};
flex-direction: ${(props) => (props.row ? 'row' : 'column')};
padding: ${(props) => (props.nopadding ? '0' : '32px 48px 0')};
margin: 0 auto 3rem;
max-width: 1040px;
box-sizing: content-box;
position: relative;
overflow: hidden;
grid-template-columns: 1fr 1fr;
align-items: ${(props) => (props.grid ? 'center' : 'flex-start')};
justify-items: center;

@media ${(props) => props.theme.breakpoints.md} {
  padding: 24px 48px 0;
  flex-direction: column;
}

@media ${(props) => props.theme.breakpoints.sm} {
  padding: ${(props) => (props.nopadding ? '0' : '16px 16px 0')};
  width: calc(100vw - 32px);
  flex-direction: column;
}
`