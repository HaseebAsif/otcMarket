import React from 'react';
import { Background, LoadingText } from './Styles';
import Spinner from '../assets/images/layout/spinner.gif';

export default () => {
    return (
        <Background>
            <LoadingText><h3>PLEASE WAIT A MOMENT</h3></LoadingText>
            <img src={Spinner} alt="로딩중" width="5%" />
        </Background >
    );
};