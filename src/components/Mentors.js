import React from 'react';

import Person from './Person';
import Headline from './Headline';
import Question from './Question';

import droxicIvanPhoto from '../assets/mentors/Droxic_Ivan_Kerin.jpg';
import mobisystemsIliyanPhoto from '../assets/mentors/MobiSystems_Iliyan_Kafedzhiev.jpg';
import progressKamenPhoto from '../assets/mentors/Progress_Kamen_Velikov.jpg';
import skyscannerMihailPhoto from '../assets/jury/Jury_Mihail_Mikov.png';

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
					<Person photo={droxicIvanPhoto} name="Ivan Kerin" position="Senior Software Engineer, Droxic" biography="I love programming and technology in general, try to keep myself current in the ever changing field of web tech, but also don't loose touch of the deep principles of our profession: clean code, testing, FP, OOP, etc.After some experience in leading a team of developers I've come to believe that its best to empower people, creating systems and processes to help them work together, as opposed to leading and managing what they do directly."></Person>
					<Person photo={mobisystemsIliyanPhoto} name="Iliyan Kafedzhiev" position="Development Team Lead, MobiSystems" biography="My passion for developing software is driven by the huge impact that we, as developers, can achieve, improving the other people's life. I truly believe that a specific technology stack is just a tool to solve a problem, not the solution itself. I take great interest in developing any kind of applications. Studied a Bachelor Degree program in Informatics at Sofia University „Sv. Kliment Ohridski“. Also, I was part of Telerik Academy - Spring Season 2013/2014."></Person>
					<Person photo={progressKamenPhoto} name="Kamen Velikov" position="Manager Software Engineering, Progress" biography="A long-term competitor in school and university competitions in informatics. He was accepted without an entry exam at Sofia University. Studied atSofia University and New Bulgarian University. 10 years of working experience. Worked as a full-stack developer in a small company for 4 years, 6 years in Telerik and then in Progress. Manager for 1 year now. Programs in everything possible. Obsessed with customer experience."></Person>
					<Person photo={skyscannerMihailPhoto} name="Mihail Mikov" position="Senior Software Engineer, Skyscanner" biography="Graduated AUBG in 2009. Senior Software Engineer at Skyscanner. A typical nerd - brought up with Basic and Pascal, then a brief but painful PHP period, followed by the corporate bliss of C# and Java. Today writing and teaching about  JavaScript and other web-related technologies. Git enthusiast. Hobby juggler."></Person>
				</div>
			</div>
		);
	}
}

export default Mentors;