import {
	Container,
	Name,
	Profession,
	DivFlex,
	ImgMobile,
	Img,
	Title,
	AddressItem,
	TechItem,
	Icon,
	Span,
	Section,
	Paragraph,
	LinkFirst,
	Link,
	ParagraphSelected,
	WorkItem,
} from "./App.styled";
import photo from "assets/myPhoto.JPG";

function App() {
	return (
		<>
			<Container>
				<DivFlex>
					<Img src={photo} alt="my photo" />
					<div>
						<Name>ANATOLII SKUBA</Name>
						<Profession>FRONT-END DEVELOPER</Profession>

						<ImgMobile src={photo} alt="my photo" />

						<Title>CONTACT INFORMATION</Title>
						<address>
							<ul>
								<AddressItem>
									<a href="tel:+380661749466">+380661749466</a>
								</AddressItem>
								<AddressItem>
									<a href="mailto:skuba.anatolii@gmail.com">skuba.anatolii@gmail.com</a>
								</AddressItem>
								<AddressItem>
									<a href="https://www.linkedin.com/in/skuba/">https://www.linkedin.com/in/skuba/</a>
								</AddressItem>
								<AddressItem>
									<a href="https://github.com/AnatoliiSkuba">https://github.com/AnatoliiSkuba</a>
								</AddressItem>
								<AddressItem>
									<a href="https://goo.gl/maps/DPupraGfuRYHBRc19">Kyiv, Ukraine</a>
								</AddressItem>
							</ul>
						</address>
					</div>
				</DivFlex>
				<Title>TECH SKILLS</Title>
				<ul>
					<TechItem>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/react.png"
							alt="React"
						/>
						<Span>React</Span>
					</TechItem>
					<TechItem>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/typescript.png"
							alt="TypeScript"
						/>
						<Span>TypeScript</Span>
					</TechItem>

					<TechItem>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/javascript.png"
							alt="JavaScript"
						/>
						<Span>JavaScript</Span>
					</TechItem>
					<TechItem>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/phaser-3.png"
							alt="Phaser-3"
						/>
						<Span>Phaser-3</Span>
					</TechItem>
					<TechItem>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/redux.png"
							alt="Redux"
						/>
						<Span>Redux</Span>
					</TechItem>
					<TechItem>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/apollo-client.png"
							alt="Apollo Client"
						/>
						<Span>Apollo Client</Span>
					</TechItem>
					<TechItem>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/graphql.png"
							alt="GraphQL"
						/>
						<Span>GraphQL</Span>
					</TechItem>
					<TechItem>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/sass.png"
							alt="Sass"
						/>
						<Span>Sass</Span>
					</TechItem>
					<TechItem>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/css-3.png"
							alt="CSS-3"
						/>
						<Span>CSS-3</Span>
					</TechItem>
					<TechItem>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/html-5.png"
							alt="HTML-5"
						/>
						<Span>HTML-5</Span>
					</TechItem>
					<TechItem>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/figma.png"
							alt="Figma"
						/>
						<Span>Figma</Span>
					</TechItem>
					<TechItem>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/photoshop.png"
							alt="Photoshop"
						/>
						<Span>Photoshop</Span>
					</TechItem>
					<TechItem>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/git.png"
							alt="Git"
						/>
						<Span>Git</Span>
					</TechItem>
					<TechItem>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/github.png"
							alt="GitHub"
						/>
						<Span>GitHub</Span>
					</TechItem>
					<TechItem>
						<Icon
							src="https://raw.githubusercontent.com/AnatoliiSkuba/CV_Anatolii_Skuba/main/src/assets/webpack.png"
							alt="Webpack"
						/>
						<Span>Webpack</Span>
					</TechItem>
				</ul>
				<Title>SOFT SKILLS</Title>
				<Paragraph>Punctual, Reliable, Teamwork, Flexible, Research, Creativity, Work ethic.</Paragraph>
				{/* <ul>
					<Item>Punctual,</Item>
					<Item>Reliable,</Item>
					<Item>Teamwork,</Item>
					<Item>Flexible,</Item>
					<Item>Research,</Item>
					<Item>Creativity,</Item>
					<Item>Work ethic</Item>
				</ul> */}
				<Title>Languages</Title>
				<Paragraph>English - Intermediate, Ukrainian - Native, Russian - Native</Paragraph>
				{/* <ul>
					<Item>English - Intermediate,</Item>
					<Item>Ukrainian - Native,</Item>
					<Item>Russian - Native</Item>
				</ul> */}
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
						<LinkFirst href="https://anatoliiskuba.github.io/Scandiweb/">Scandiweb</LinkFirst>,&nbsp;
						<Link href="https://github.com/AnatoliiSkuba/Scandiweb">Link</Link> (React, JavaScript, Redux, React Router
						Dom v6, Apollo Client, GraphQL). E-shop.
					</li>
					<li>
						<LinkFirst href="https://anatoliiskuba.github.io/Phonebook/">Phonebook</LinkFirst>,&nbsp;
						<Link href="https://github.com/AnatoliiSkuba/Phonebook">Link</Link> (React, JavaScript, Redux, RTK Query,
						React Router Dom v6, Material-UI). Application for storing phone numbers.
					</li>
					<li>
						<LinkFirst href="https://anatoliiskuba.github.io/MyFantasy/">My Fantasy</LinkFirst>,&nbsp;
						<Link href="https://github.com/AnatoliiSkuba/MyFantasy">Link</Link> (TypeScript, Phaser 3, Webpack). HTML5
						game adapted for mobile devices.
					</li>
					<li>
						<LinkFirst href="https://anatoliiskuba.github.io/Filmoteka/">Filmoteka</LinkFirst>,&nbsp;
						<Link href="https://github.com/AnatoliiSkuba/Filmoteka">Link</Link> (JavaScript, HTML, SASS). Short-term
						team project. A web application that uses the Movie Database REST API.
					</li>
				</ul>
				<Title>WORK EXPERIENCE</Title>
				<ParagraphSelected>
					Founder of the network for the provision of photo services and the manufacture of duplicate keys.
					Photomir.in.ua | 2009-2022
				</ParagraphSelected>
				<ul>
					<WorkItem>site development: HTML, CSS</WorkItem>
					<WorkItem>photoshop design</WorkItem>
					<WorkItem>interview and hiring of employees</WorkItem>
				</ul>
				<ParagraphSelected>Achievement: I created a self-employed business, created a website</ParagraphSelected>
				<Title>EDUCATION</Title>
				<ParagraphSelected>National State Tax Service University of Ukraine</ParagraphSelected>
				<Title>ADDITIONAL EDUCATION</Title>
				<ParagraphSelected>IT School GoIT (Kyiv) | 2021-2022</ParagraphSelected>
				<Paragraph>Full Stack Developer (React + Node)</Paragraph>
				<ParagraphSelected>American English Center | 2021-2022</ParagraphSelected>
			</Section>
		</>
	);
}

export default App;
