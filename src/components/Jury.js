import React from 'react';

import PersonJury from './Person';
import Headline from './Headline';
import Question from './Question';

import arthurPPhoto from '../assets/jury/Jury_Arthur_Pantelides.jpg';
import mihailMPhoto from '../assets/jury/Jury_Mihail_Mikov.png';
import mihailVPhoto from '../assets/jury/Jury_Mihail_Valkov.jpg';
import vladimirGPhoto from '../assets/jury/Jury_Vladimir_Georgiev.jpg';
import yavorKPhoto from '../assets/jury/Jury_Yavor_Kiryakov.jpg';

import samplePhoto from '../assets/sample.jpg';

class Jury extends React.Component {
	render() {
		return (
			<div className="container" id="jury">
				<div className="row">
					<div className="col-md-12">
						<Headline>Jury</Headline>
                    </div>
                </div>
				<div className="row">
					<div className="col-md-5ths">
						<PersonJury photo={arthurPPhoto} name="Arthur Pantelides" position="Business Administration Professor in AUBG" biography="Arthur Pantelides has over 23 years of experience in industry in the areas of international manufacturing operations and strategic management consulting. He has held senior level positions in Strategic Planning & Control, Operations, International Project Management,       and Engineering and R&D. He has worked on assignments in the US, Japan, Vietnam,        Italy, Brazil, Canada, and Mexico. He has taught graduate/Masters classes at The George Washington University in Washington DC and currently teaches strategic management, negotiations, leadership, and entrepreneurship at AUBG. He has established several corporate training programs in the US, Mexico, and Brazil and has published multiple academic papers and industry articles internationally."></PersonJury>
					</div>
					<div className="col-md-5ths">
						<PersonJury photo={mihailMPhoto} name="Mihail Mikov" position="AUBG Lecturer & Senior Software Engineer" biography="Graduated AUBG in 2009. Senior Software Engineer at Skyscanner. A typical nerd - brought up with Basic and Pascal, then a brief but painful PHP period, followed by the corporate bliss of C# and Java. Today writing and teaching about  JavaScript and other web-related technologies. Git enthusiast. Hobby juggler."></PersonJury>
					</div>
					<div className="col-md-5ths">
						<PersonJury photo={mihailVPhoto} name="Mihail Valkov" position="General Manager, Telerik Academy" biography="Mihail Valkov is General Manager of Telerik Academy Professional—a leading program that trains and grooms top tech talent for the entire IT industry. Together with Telerik Academy’s founders, Mihail is responsible for the Professional trainings strategy and the development of programs, tailored to all business demands. Mihail Valkov has over 17 years of experience in building and managing big engineering teams and developing software solutions, leveraged by Fortune 500 companies. Between 2004 and 2017, Mihail held various leadership positions at the global software company Telerik, acquired by Progress in 2014. Following the acquisition, Mihail was Vice President of Engineering at Progress, where he led a division of 250 software engineers and headed the award-winning product line – Telerik DevCraft. Mihail has a Master’s Degree in Business Informational Systems from the South-West University “Neofit Rilski”."></PersonJury>
					</div>
					<div className="col-md-5ths">
						<PersonJury photo={vladimirGPhoto} name="Vladimir Georgiev" position="Computer Science Professor in AUBG" biography="Vladimir Georgiev earned his Bachelors Degree from the American University in Bulgaria (class of 2003), Masters (2006) and PhD from the Bulgarian Academy of Sciences (2015). Since 2003 he has been working in the software development industry, leading the development of several enterprise projects."></PersonJury>
					</div>
					<div className="col-md-5ths">
						<PersonJury photo={yavorKPhoto} name="Yavor Kiryakov" position="Head Manager, University for Kids Foundation" biography="Social entrepreneur, founder and head manager of “University for Kids” Foundation (www.uni4kids.bg). Strong proponent of the idea for allocation of more financial, economic and social resources in the sector of Bulgarian science research and quality education. Ex-president of the “Better Community Club” at AUBG."></PersonJury>
					</div>
				</div>
			</div>
		);
	}
}

export default Jury;