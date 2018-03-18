import React from 'react';

import Person from './Person';
import Headline from './Headline';
import Question from './Question';


import mobisystemsIliyanPhoto from '../assets/mentors/MobiSystems_Iliyan_Kafedzhiev.jpg';
import progressKamenPhoto from '../assets/mentors/Progress_Kamen_Velikov.jpg';
import skyscannerMihailPhoto from '../assets/jury/Jury_Mihail_Mikov.png';
import droxicIvanPhoto from '../assets/mentors/Droxic_Ivan_Kerin.jpg';

import scalefocusVasilPhoto from '../assets/mentors/ScaleFocus_Vasil_Georgiev.jpg';
import centroidaGavrilPhoto from '../assets/mentors/Centroida_Gavril_Tonev.jpg';
import centroidaStefanPhoto from '../assets/mentors/Centroida_Stefan_Lazov.jpg';
import kaloyanKolevPhoto from '../assets/mentors/Kaloyan_Kolev.jpg';

import codinggirlsAnnaPhoto from '../assets/mentors/Coding_Girls_Anna_Radulovski.jpg';
import ivoRadulovskiPhoto from '../assets/mentors/Ivo_Radulovski.jpg';
import stefanIvanovPhoto from '../assets/mentors/Stefan_Ivanov.jpg';

class Mentors extends React.Component {
	render() {
		return (
			<div className="container" id="mentors">
				<div className="row">
					<div className="col-md-12">
						<Headline>Mentors</Headline>
                    </div>
                </div>
				<div className="row">
					<Person photo={mobisystemsIliyanPhoto} name="Iliyan Kafedzhiev" position="Development Team Lead, MobiSystems" biography="My passion for developing software is driven by the huge impact that we, as developers, can achieve, improving the other people's life. I truly believe that a specific technology stack is just a tool to solve a problem, not the solution itself. I take great interest in developing any kind of applications. Studied a Bachelor Degree program in Informatics at Sofia University „Sv. Kliment Ohridski“. Also, I was part of Telerik Academy - Spring Season 2013/2014."></Person>
					<Person photo={progressKamenPhoto} name="Kamen Velikov" position="Manager Software Engineering, Progress" biography="Kamen has been part of the Telerik and afterwards Progress team for more than 6 years. He is a Manager and has extensive programming experience with various technologies. Kamen’s focus and obsession is customer experience."></Person>
					<Person photo={skyscannerMihailPhoto} name="Mihail Mikov" position="Senior Software Engineer, Skyscanner" biography="Graduated AUBG in 2009. Senior Software Engineer at Skyscanner. A typical nerd - brought up with Basic and Pascal, then a brief but painful PHP period, followed by the corporate bliss of C# and Java. Today writing and teaching about  JavaScript and other web-related technologies. Git enthusiast. Hobby juggler."></Person>
					<Person photo={droxicIvanPhoto} name="Ivan Kerin" position="Senior Software Engineer, Droxic" biography="I love programming and technology in general, try to keep myself current in the ever changing field of web tech, but also don't loose touch of the deep principles of our profession: clean code, testing, FP, OOP, etc.After some experience in leading a team of developers I've come to believe that its best to empower people, creating systems and processes to help them work together, as opposed to leading and managing what they do directly."></Person>
				</div>
				<div className="row">
					<Person photo={scalefocusVasilPhoto} name="Vasil Georgiev" position="Technical Lead, ScaleFocus" biography="Vasil Georgiev is one of the technical leads in ScaleFocus with 6+ years of professional experience. He has significant background in front-end development.  Throughout his career, he has been often in a customer-facing role and was responsible for managing teams of front-end developers. He always challenges his mentees and teaches them how to gain advanced analytical thinking and problem solving abilities throughout their career. Vasil’s ability to work autonomously as well as in teams gave him many opportunities for professional development and growth."></Person>
					<Person photo={centroidaGavrilPhoto} name="Gavril Tonev" position="Team Lead, Centroida" biography="Spearheaded the Mobile App team at Centroida and developed various native and cross-platform iOS & Android apps in the field of E-commerce, Banking, Body motion analytics, Healthcare and Property Management. Technologies used involved Xcode and Swift 4, Android Studio and Java/Kotlin, as well as Visual Studio and C# for cross-platform development. Created and managed the system operations and DevOps processes at Centroida. Deployed a private cloud architecture using OpenStack as an IaaS provider; maintained Kubernetes and Docker Swarm clusters used for the CI/CD processes of the company; created the user administration environment with Microsoft AD."></Person>
					<Person photo={centroidaStefanPhoto} name="Stefan Lazov" position="Deep Learning Engineer, Centroida" biography="Prior experience in the following technologies: ASP.NET WebAPI, ASP.NET Core Web API, SQL Server, RabbitMQ, MongoDB and PostgreSQL.Prior experience in Machine Learning and Artificial Intelligence. Participation in projects related to the following fields: Image Recognition, Adversarial Samples and Natural Language Processing (Sentiment Analysis). Prior Experience in using the following Machine Learning and Artificial Intelligence tools: Languages-Python, R, TensorFlow and Keras libraries."></Person>
					<Person photo={kaloyanKolevPhoto} name="Kaloyan Kolev" position="Full Stack Web Developer" biography="I am a web developer, who likes to look at questions on Stackoverflow regarding both the front-end and the back-end of web applications. Mostly I work with technologies related to PHP and Javascript."></Person>
				</div>
				{/* <div className="row">
					<Person photo={codinggirlsAnnaPhoto} name="Anna Radulovski" position="Founder and CEO, Coding Girls" biography="Anna is an activist, community engineer and public speaker. She is holding a Master in Philology and focusing on Technical Education for girls. Anna is passionate about making the world a better place and making a positive change with the help of code. She has an eye for design and is highly skilled in communications. In her daily work, she faces challenges with a smile, focusing on coming up with new ideas, while motivating and connecting the right people and teams, towards feasible solutions, presented in a fashionable way."></Person>
					<Person photo={ivoRadulovskiPhoto} name="Ivo Radulovski" position="Managing Partner, trio-group" biography="Ivo Radulovski is an expert in Digital Strategy. As entrepreneur he founded alongside several global digital agencies, the comparison platforms Versichern24.at, Eversport and several other companies. As Startup Evangelist and Growth Hacker at Segments Accelerator, he has started and supported many businesses in Central and Eastern Europe. Ivo is frequently speaking at events like the Global Webit Congress, DrupalCon and other major conferences around the world. His speeches cover topics from Entrepreneurship, Business Development and Digital Strategies to Open Source adoption in Government. His current focus is on “Enterprise IT Strategy and Organizational Changes”."></Person>
					<Person photo={stefanIvanovPhoto} name="Stefan Ivanov" position="Research and Development Engineer" biography="The valedictorian of class of 2017 in AUBG, with majors in mathematics and computer science and former president of the innovation club – the Hub.  Currently works at Chaos Group in the Engineering R&D team with a focus of introducing tools and practices for safer and more sustainable development process. A functional and generic programming enthusiast with special interest in their mathematical formalisms and their applications to applied areas such as computer graphics and artificial intelligence. Loves to go to the gym to take his mind off the hard-to-solve tech problems."></Person>
				</div> */}
			</div>
		);
	}
}

export default Mentors;