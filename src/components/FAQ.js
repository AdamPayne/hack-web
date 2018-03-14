import React from 'react';

import Headline from './Headline';
import Question from './Question';

class FAQ extends React.Component {
    render() {
        return (
            <div id="faq">
                <Headline>Frequently Asked Questions</Headline>
                <Question id="item01" question="Who can attend?" answer="Everyone is welcome! Students, developers, designers, entrepreneurs, enthusiasts, hobbyists, hackers, etc." />
                <Question id="item02" question="How many people can be on a team?" answer="Teams may contain between 2 and 5 people (inclusively). If you don't have a team prior to the hackathon, that's completely fine - we will be holding a team-matching session at the beginning of HackAUBG. As organizers we want to have equally balanced teams so we would not allow a team to have more than one senior developer." />
                <Question id="item03" question="How much is this going to cost me?" answer="Admission is free for all! Food and drinks are on us. Seats are limited though so be quick to register!" />
                <Question id="item04" question="What should I bring?" answer="Everyone should bring with him/her a laptop for the hackathon. If you want to work on a hardware project, don't forget to bring the devices you plan on working with." />
                <Question id="item05" question="What can my team build?" answer="We will announce the exact topic for the hackathon at the beginning of the event." />
                <Question id="item06" question="Where will the hackathon take place?" answer="The hackathon will take place in Blagoevgrad, on the campus of the American University in the Sports Hall of the ABF Student Center." />
                <Question id="item07" question="How will you use my CV?" answer="We will give the CVs to our platinum sponsors only, who will keep your personal data to themselves. It's not obligatory to upload your CV in order to take part in HackAUBG." />
                <Question id="item08" question="What if I have a question that wasn't answered here?" answer="We’re here for you! Send us an email at info@hackaubg.org or feel free to reach out to us on Facebook." />
            </div>
        );
    }
}

export default FAQ;