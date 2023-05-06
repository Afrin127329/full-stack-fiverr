import React from 'react';
import ReactLoading from 'react-loading';
import './Loading.scss';

 
const Loading = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={90} width={90} className='loading'/>
);
 
export default Loading;

