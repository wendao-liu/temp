import React from 'react';
import { Input } from 'antd';
import './banner.scss';
import $ from 'jquery';
import { api } from '../utils/server.js';


const images = {
    bg: 'https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png'
}


class Banner extends React.Component {

    static defaultProps = {
        historyData: ['JAVA', 'ios', '数据', '安全', '搜索', '算法', '运营', '视觉', '交互', '前端']
    }

    constructor(props) {
        super(props);
        const { historyData } = props;
        this.state = {
            inputValue: '',
            historyData
        }
    }

    onKeyup = (e) => {
        if (e.keyCode === 13) {
            this.handleBtnClick()
        }
    }

    onChange = () => {
        let search = window.document.getElementById("search");
        this.setState({
            inputValue: search.value
        })
    }

    handleBtnClick = () => {
        const { inputValue } = this.state;

        api({url: '/users/login', method: 'POST', param: {name: '123', pass: '222'}}).then((data) => {
            alert(data);
        }); 
    }

    render() {
        const {
            bg
        } = images;

        const {
            historyData
        } = this.state;

        return (
            <div
                className="banner-view"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="banner-view-marsk">{null}</div>
                <div className="banner">
                    <div className="banner-en-first-title">If not now, when?</div>
                    <div className="banner-en-second-title">If not me, who?</div>
                    <div className="banner-zh-title">此时此刻，非我莫属！</div>
                    <div className='banner-search'>
                        <input className='banner-search-input' id="search" type="text" placeholder={'请输入职位关键词'} onChange={this.onChange} onKeyUp={this.onKeyup} />
                        <div className='banner-search-btn' onClick={this.handleBtnClick}>搜索</div>
                    </div>
                    <div className="banner-search-history">
                        <div className="banner-search-history-offer" style={{ cursor: 'inherit', color: 'rgba(255, 255, 255, 0.80)' }}>热门搜索：</div>
                        {
                            historyData && historyData.length > 0 && historyData.map((item, index) => {
                                return (
                                    <div className="banner-search-history-offer" key={index}>
                                        {item}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default Banner;