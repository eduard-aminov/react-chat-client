import React from 'react'
import './Preloader.scss'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Preloader = ({text}) => {
    return (
        <Spin tip={text} indicator={antIcon} className='preloader'/>
    )
}

export default Preloader