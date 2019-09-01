import React from 'react';
import PropTypes from 'prop-types';
import { distanceInWordsToNow } from 'date-fns/distance_in_words_to_now';

import './Message.scss'

const Message = ({ avatar, user, text, date }) => (
    <div className='message'>
        <div className='message__avatar'>
            <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className='message__content'>
            <div className='message__bubble'>
                <p className='message__text'>{text}</p>
            </div>
            <span className='message__date'>{distanceInWordsToNow(date)}</span>
        </div>
    </div>
);

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string,
    user: PropTypes.object,
};

export default Message;