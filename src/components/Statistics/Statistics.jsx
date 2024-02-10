import {StatisticsList, StatisticItem, StatisticText} from './Statistics.styled'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
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

export default Statistics;