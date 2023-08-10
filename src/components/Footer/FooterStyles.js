import styled from "styled-components"

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 0;
  background-color: #ffefef;
  margin: 1rem auto 0;
  box-sizing: content-box;
  margin-bottom: 0;
`

export const LinkItem = styled.div`
	font-size: 18px;
	line-height: 30px;
	color: #000000;
	margin-bottom: 0;
	transition: .3s ease;
	position: relative;
	left: 0;
	display: flex;
	align-items: right;

	&:hover {
		transform: scale(1.2);
    	cursor: pointer;
		color: #ff90c5;
		left: 6px;
	}
`

export const LinkList = styled.ul`
	border-top: 3px solid #000000;
  	display: grid;
	grid-template-columns: repeat(4, minmax(85px, 400px));
	gap-row-gap: 40px;
  	padding: 40px 0 0;
	margin-bottom: 0;
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 500px;
	width: 100%;
	height: 100%;
	margin-bottom: 0;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 15px;
	line-height: 24px;
	text-transform: uppercase;
	color: #000000;
	margin-bottom: 16px;

`

export const SocialContainer = styled.section`
	font-size: 3rem;
	margin-right: 5px;
`
export const MadeBy = styled.div`
	font-size: 14px;
	line-height: 30px;
	color: #000000;
	text-align: right;
	margin-bottom: 0;
`

export const Slogan = styled.span`
  display: inline;
  cursor: pointer;
  color: ${(props) => (props.highlighted ? '#ff90c5' : 'inherit')};
  vertical-align: bottom;

  &:hover {
    color: #ff90c5;
  }
`;

export const ImageFooter = styled.img`
	width: 200px;
	height: 120px;
	margin-bottom: 0;
`