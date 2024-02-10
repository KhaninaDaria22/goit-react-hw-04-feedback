import { Component } from "react";
import { FeedbackSection, FeedbacTitle } from "./Section.styled";

class Section extends Component {
    render() {
        const { title, children } = this.props;
        return(
            <FeedbackSection>
                <FeedbacTitle>{title}</FeedbacTitle>
                {children}
            </FeedbackSection>
        );
    }
}

export default Section;