import {
	Container,
	Name,
	Profession,
	Img,
	Title,
	List,
	Item,
	TechSkill,
	Link,
	Icon,
	Span,
	Section,
	Paragraph,
	LinkProject,
} from "./App.styled";
import photo from "assets/myPhoto.JPG";

function App() {
	return (
		<>
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
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/react.png"
							alt="React"
						/>
						<Span>React</Span>
					</TechSkill>
					<TechSkill>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/typescript.png"
							alt="TypeScript"
						/>
						<Span>TypeScript</Span>
					</TechSkill>

					<TechSkill>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/javascript.png"
							alt="JavaScript"
						/>
						<Span>JavaScript</Span>
					</TechSkill>
					<TechSkill>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/phaser-3.png"
							alt="Phaser-3"
						/>
						<Span>Phaser-3</Span>
					</TechSkill>
					<TechSkill>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/redux.png"
							alt="Redux"
						/>
						<Span>Redux</Span>
					</TechSkill>
					<TechSkill>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/apollo-client.png"
							alt="Apollo Client"
						/>
						<Span>Apollo Client</Span>
					</TechSkill>
					<TechSkill>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/graphql.png"
							alt="GraphQL"
						/>
						<Span>GraphQL</Span>
					</TechSkill>
					<TechSkill>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/sass.png"
							alt="Sass"
						/>
						<Span>Sass</Span>
					</TechSkill>
					<TechSkill>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/css-3.png"
							alt="CSS-3"
						/>
						<Span>CSS-3</Span>
					</TechSkill>
					<TechSkill>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/html-5.png"
							alt="HTML-5"
						/>
						<Span>HTML-5</Span>
					</TechSkill>
					<TechSkill>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/figma.png"
							alt="Figma"
						/>
						<Span>Figma</Span>
					</TechSkill>
					<TechSkill>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/photoshop.png"
							alt="Photoshop"
						/>
						<Span>Photoshop</Span>
					</TechSkill>
					<TechSkill>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/git.png"
							alt="Git"
						/>
						<Span>Git</Span>
					</TechSkill>
					<TechSkill>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/github.png"
							alt="GitHub"
						/>
						<Span>GitHub</Span>
					</TechSkill>
					<TechSkill>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/webpack.png"
							alt="Webpack"
						/>
						<Span>Webpack</Span>
					</TechSkill>
				</List>
				<Title>SOFT SKILLS</Title>
				<List>
					<Item>Punctual</Item>
					<Item>Reliable</Item>
					<Item>Teamwork</Item>
					<Item>Flexible</Item>
					<Item>Research</Item>
					<Item>Creativity</Item>
					<Item>Work ethic</Item>
				</List>
				<Title>Languages</Title>
				<List>
					<Item>English - Intermediate</Item>
					<Item>Ukrainian - Native</Item>
					<Item>Russian - Native</Item>
				</List>
			</Container>
			<Title>Summary</Title>
			<Section>
				<Paragraph>
					Dedicated and productive developer with a passion for creative solutions. I have knowledge in the field of
					development, user interface, testing and debugging of processes. Competent in React, TypeScript and
					JavaScript. I dedicate myself to improving additional Node.js technologies.
				</Paragraph>
				<Paragraph>
					I am looking for a job in a startup or a large project, and I also want to be part of a self-motivated and
					experienced team. I would like to engage in exciting tasks, with positively oriented people, to grow. My goal
					is always to create the best solution for the client.
				</Paragraph>
				<Paragraph>Here are reasons to hire me, I'll try to keep it short:</Paragraph>
				<ul>
					<li>
						<Paragraph>
							~ You’ll never hear “we can’t do it” or “this is impossible” from me. Together, we can accomplish
							anything.
						</Paragraph>
					</li>
					<li>
						<Paragraph>~ I have worked as a part of a team or independently.</Paragraph>
					</li>
					<li>
						<Paragraph>
							~ Self-motivated, self-managed developer with great passion for web techs. Always open to learning new
							things!
						</Paragraph>
					</li>
				</ul>
				<Paragraph>Generally speaking, I’m here to make your life easier!</Paragraph>
				<Title>PROJECT EXPERIENCE</Title>
				<ul>
					<li>
						<LinkProject href="https://anatoliiskuba.github.io/Scandiweb/">Scandiweb</LinkProject>,&nbsp;
						<LinkProject href="https://github.com/AnatoliiSkuba/Scandiweb">Link</LinkProject> (React, JavaScript, Redux,
						React Router Dom v6, Apollo Client, GraphQL). E-shop.
					</li>
					<li>
						<LinkProject href="https://anatoliiskuba.github.io/Phonebook/">Phonebook</LinkProject>,&nbsp;
						<LinkProject href="https://github.com/AnatoliiSkuba/Phonebook">Link</LinkProject> (React, JavaScript, Redux,
						RTK Query, React Router Dom v6, Material-UI). Application for storing phone numbers.
					</li>
				</ul>
			</Section>
		</>
	);
}

export default App;
