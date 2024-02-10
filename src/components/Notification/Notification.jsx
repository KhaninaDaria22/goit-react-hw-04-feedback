import { Component } from 'react'; 
import { Placeholder } from './Notification.styled';

class Notification extends Component {
    render() {
        const {message} = this.props;
        return <Placeholder>{message}</Placeholder>
    }
}

export default Notification;
