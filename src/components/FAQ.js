import React from 'react';

import Headline from './Headline';
import Question from './Question';

class FAQ extends React.Component {
    render() {
        return (
            <div id="faq">
                <Headline>Frequently Asked Questions</Headline>
                <Question id="item01" question="Aliquam erat augue, sollicitudin sit amet magna et, interdum semper est." answer="Etiam sagittis nulla tellus, nec lacinia nulla viverra" />
                <Question id="item02" question="Morbi condimentum vel felis vitae convallis." answer="Etiam sagittis nulla tellus, nec lacinia nulla viverra" />
                <Question id="item03" question="Nam nunc diam, consequat nec vehicula at, sollicitudin tristique ipsum." answer="Etiam sagittis nulla tellus, nec lacinia nulla viverra" />
                <Question id="item04" question="Aliquam erat augue, sollicitudin sit amet magna et, interdum semper est." answer="Etiam sagittis nulla tellus, nec lacinia nulla viverra vel. Mauris lacus nulla, efficitur non fringilla id, scelerisque in ante." />
            </div>
        );
    }
}

export default FAQ;