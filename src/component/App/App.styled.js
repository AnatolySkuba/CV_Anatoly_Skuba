import styled from "styled-components";

export const Container = styled.div`
	padding-left: 8px;
	padding-right: 8px;
	background-color: #e9f0f8;

	@media screen and (min-width: 1300px) {
		display: flex;
		flex-direction: column;
		width: 35%;
		height: 100%;
		background-color: #e9f0f8;
	}
`;

export const Name = styled.h1`
	padding: 18px;
	text-align: center;
	color: var(--accent-color);
`;

export const Profession = styled.p`
	margin-bottom: 16px;
	font-size: 20px;
	text-align: center;
`;

export const DivFlex = styled.div`
	@media screen and (min-width: 556px) {
		display: flex;
	}
`;

export const ImgMobile = styled.img`
	margin-left: -8px;
	width: 100vw;
	object-fit: contain;

	@media screen and (min-width: 350px) {
		display: flex;
		width: 350px;
		margin: 0 auto;
	}

	@media screen and (min-width: 556px) {
		display: none;
	}
`;

export const Img = styled.img`
	display: none;

	@media screen and (min-width: 556px) {
		display: inline-block;
		margin-left: -8px;
		margin-right: 8px;
		width: 45vw;
		object-fit: contain;
	}
`;

export const Title = styled.h2`
	padding: 16px;
	text-align: center;
	color: var(--accent-color);
`;

export const AddressItem = styled.li`
	&: not(: last-child) {
		margin-bottom: 6px;
	}
`;

export const TechItem = styled.li`
	display: inline-block;
	padding: 8px;
	background: #fff;
	border-radius: 8px;
	box-shadow: 0 2px 2px rgb(220 230 248 / 50%);

	&: not(: last-child) {
		margin-right: 10px;
		margin-bottom: 10px;
	}
`;

export const Icon = styled.img`
	vertical-align: top;
	margin-right: 2vw;
`;

export const Span = styled.span`
	line-height: 32px;
`;

export const Paragraph = styled.p`
	text-indent: 20px;
`;

export const Section = styled.section`
	padding-left: 8px;
	padding-right: 8px;
`;

export const LinkFirst = styled.a`
	margin-left: 20px;
	font-weight: 600;
	text-decoration: underline;
	color: var(--accent-color);
`;

export const Link = styled.a`
	font-weight: 600;
	text-decoration: underline;
	color: var(--accent-color);
`;

export const ParagraphSelected = styled.p`
	color: var(--accent-color);
	text-indent: 20px;
`;

export const WorkItem = styled.li`
	margin-left: 20px;
	text-indent: 0;
	list-style: disc;
`;
