import PropTypes from "prop-types";
import { Message } from "../Notification/notification.styled";
export const Notification = ({message}) => {
    return (
        <Message>{message}</Message>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}