import React from 'react';
import './header.scss'

const Header = (props) => {
    return (
        <div className="head">
            <div className="head-main">
                <div className="head-menu">
                    <a href="https://job.alibaba.com/zhaopin/index.htm" className="logo" style={{ textAlign: 'right', width: '125px' }} >
                        <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" height="20" alt=""></img>
                    </a>
                    <i style={{
                        float: 'left',
                        color: 'white',
                        fontStyle: 'normal',
                        fontSize: '20px',
                        lineHeight: '52px',
                        margin: '0 10px',
                        opacity: 0.8
                    }}>|</i>
                    <i style={{
                        float: 'left',
                        color: 'white',
                        fontStyle: 'normal',
                        fontSize: '14px',
                        lineHeight: '54px',
                        opacity: 0.8
                    }}
                    >社招官网</i>
                    <ul className="" id="menu">
                        <li className="current current-cat" value="1">
                            <a href="https://job.alibaba.com/zhaopin/index.htm">首 &nbsp;&nbsp;页</a>
                        </li>

                        <li>
                            <a href="https://job.alibaba.com/zhaopin/positionList.htm">社会招聘</a>
                        </li>
                        <li>
                            <a href="https://campus.alibaba.com" target="blank">校园招聘</a>
                        </li>
                        <li><a href="https://job.alibaba.com/zhaopin/about.htm">了解阿里</a></li>
                        <li><a href="https://job.alibaba.com/zhaopin/apply.htm">个人中心</a></li>

                        <div className="login" style={{ opacity: 0.8 }}>
                            欢迎来到阿里巴巴集团招聘！
                                    <a
                                href={`https://passport.alibaba.com/login.htm?appName=hrjob&amp;params=https%3A%2F%2Fjob.alibaba.com%2F%2Fzhaopin%2Findex.htm`}
                                target="_top"
                            >
                                登录
                                    </a>
                            | <a href="http://member1.taobao.com/member/newbie.htm">注册</a>
                        </div>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Header;