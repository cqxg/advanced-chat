import React from 'react';
import { Message } from 'components';

import './Home.scss';


const Home = () => (
    <section className='home'>
        <Message avatar='https://i.pinimg.com/236x/af/bb/82/afbb828cb5350d267e6dbeba042e85eb--anonymous-mask-guy-fawkes.jpg'
            text='Просто любое рандомное хз то есть сообщение'
            date='21:31 sep 2019'
        />
        <Message avatar='https://i.pinimg.com/236x/af/bb/82/afbb828cb5350d267e6dbeba042e85eb--anonymous-mask-guy-fawkes.jpg'
            text='Hello world!'
            date='21:31 sep 2019'
            isMe={true}
            isReaded={true}
        />
    </section>
);

export default Home;