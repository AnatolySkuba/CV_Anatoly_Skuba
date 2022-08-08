import styled from "styled-components";

export const Container = styled.div`
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
	padding: 5vw;
	text-align: center;
	color: var(--accent-color);
`;

export const Profession = styled.p`
	margin-bottom: 4.5vw;
	text-align: center;
`;

export const Img = styled.img`
	width: 100vw;
	object-fit: contain;
`;

export const Title = styled.h2`
	padding: 4.5vw 5.5vw 3vw;
	text-align: center;
	color: var(--accent-color);
`;

export const List = styled.ul`
	padding: 0 5.5vw;
`;

export const Item = styled.li`
	display: inline-block;
	font-size: 5.5vw;

	&: not(: last-child) {
		margin-right: 3vw;
		margin-bottom: 2vw;
	}
`;

export const Link = styled.a`
	@media screen and (min-width: 1300px) {
		font-size: 1.8vw;
	}
`;

export const TechSkill = styled.li`
	display: inline-block;
	padding: 2vw;
	font-size: 5vw;
	background: #fff;
	border-radius: 2vw;
	box-shadow: 0 2px 2px rgb(220 230 248 / 50%);

	&: not(: last-child) {
		margin-right: 3vw;
		margin-bottom: 3vw;
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
	text-indent: 5vw;
	font-size: 5vw;
`;

export const Section = styled.section`
	padding: 0 5.5vw;
`;

export const LinkProject = styled.a`
	font-size: 5.5vw;
	text-decoration: underline;
	color: var(--accent-color);
	font-weight: 600;
	text-indent: 5vw;
`;

export const SubTitle = styled.p`
	font-size: 5vw;
	color: var(--accent-color);
	font-weight: 500;
	text-indent: 5vw;
`;

export const WorkList = styled.ul``;

export const WorkItem = styled.li`
	margin-left: 5.5vw;
	text-indent: 0;
	list-style: disc;
`;
