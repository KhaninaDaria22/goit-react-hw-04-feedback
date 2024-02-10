import { Component } from "react";
import {StatisticsList, StatisticItem, StatisticText} from './Statistics.styled'



class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage} =  this.props;
        return (
            <StatisticsList> 
                <StatisticItem>
                    <StatisticText>Good</StatisticText>
                    <StatisticText>${good}</StatisticText>
                </StatisticItem>
                <StatisticItem>
                    <StatisticText>Neutral</StatisticText>
                    <StatisticText>${neutral}</StatisticText>
                </StatisticItem>
                <StatisticItem>
                    <StatisticText>Bad</StatisticText>
                    <StatisticText>#{bad}</StatisticText>
                </StatisticItem>
                <StatisticItem>
                    <StatisticText>Total</StatisticText>
                    <StatisticText>#{total(good, neutral, bad)}</StatisticText>
                </StatisticItem>
                <StatisticItem>
                    <StatisticText>Positave</StatisticText>
                    <StatisticText>#{positivePercentage(good, neutral, bad)}%</StatisticText>
                </StatisticItem>
            </StatisticsList>           
        )
    }
}

export default Statistics;