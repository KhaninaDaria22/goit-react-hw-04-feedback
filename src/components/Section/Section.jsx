// import { Component } from "react";
import { FeedbackSection, FeedbacTitle } from "./Section.styled";

const Section = ({title, children}) => {
    return(
            <FeedbackSection>
                <FeedbacTitle>{title}</FeedbacTitle>
                {children}
            </FeedbackSection>
        );
    }

export default Section;