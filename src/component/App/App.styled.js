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

	@media screen and (min-width: 1300px) {
		display: flex;
		flex-direction: column;
		width: 35%;
		height: 100%;
		background-color: #e9f0f8;
	}
`;

export const Profession = styled.p`
	margin-bottom: 4.5vw;
	text-align: center;

	@media screen and (min-width: 1300px) {
		display: flex;
		flex-direction: column;
		width: 35%;
		height: 100%;
		background-color: #e9f0f8;
	}
`;

export const Img = styled.img`
	width: 100vw;
	object-fit: contain;

	@media screen and (min-width: 1300px) {
		margin-top: 30px;
		width: 80%;
		align-self: center;
		object-fit: contain;
	}
`;

export const Title = styled.h2`
	padding: 4.5vw 5.5vw 3vw;

	@media screen and (min-width: 1300px) {
		margin: 15% 0 5% 10%;
		font-size: 3vw;
		color: var(--accent-color);
	}
`;

export const List = styled.ul`
	padding: 0 5.5vw;

	@media screen and (min-width: 1300px) {
		margin-left: 10%;
	}
`;

export const Item = styled.li`
	&: not(: last-child) {
		margin-bottom: 2vw;
	}

	@media screen and (min-width: 1300px) {
		margin: 1vw 0;
	}
`;

export const Link = styled.a`
	font-size: 5.5vw;

	@media screen and (min-width: 1300px) {
		font-size: 1.8vw;
	}
`;

export const TechSkill = styled.li`
	&: not(: last-child) {
		margin-bottom: 2vw;
	}

	@media screen and (min-width: 1300px) {
		margin: 1vw 0;
	}
`;
