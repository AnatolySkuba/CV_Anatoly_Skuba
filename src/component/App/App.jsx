import { Container, Name, Profession, Img, Title, List, Item, TechSkill, Link } from "./App.styled";
import photo from "assets/myPhoto.JPG";

function App() {
	return (
		<Container>
			<Name>ANATOLII SKUBA</Name>
			<Profession>FRONT-END DEVELOPER</Profession>
			<Img src={photo} alt="my photo" />
			<Title>CONTACT INFORMATION</Title>
			<address>
				<List>
					<Item>
						<Link href="tel:+380661749466">+380661749466</Link>
					</Item>
					<Item>
						<Link href="mailto:skuba.anatolii@gmail.com">skuba.anatolii@gmail.com</Link>
					</Item>
					<Item>
						<Link href="https://www.linkedin.com/in/skuba/">https://www.linkedin.com/in/skuba/</Link>
					</Item>
					<Item>
						<Link href="https://github.com/AnatoliiSkuba">https://github.com/AnatoliiSkuba</Link>
					</Item>
					<Item>
						<Link href="https://goo.gl/maps/DPupraGfuRYHBRc19">Kyiv, Ukraine</Link>
					</Item>
				</List>
			</address>
			<Title>TECH SKILLS</Title>
			<List>
				<TechSkill>
					<img src="assets/typescript.png" alt="TypeScript" />
				</TechSkill>
				<TechSkill>CSS3</TechSkill>
				<TechSkill>SASS</TechSkill>
				<TechSkill>
					<Link href="https://github.com/AnatoliiSkuba">https://github.com/AnatoliiSkuba</Link>
				</TechSkill>
				<TechSkill>
					<Link href="https://goo.gl/maps/DPupraGfuRYHBRc19">Kyiv, Ukraine</Link>
				</TechSkill>
			</List>
		</Container>
	);
}

export default App;
