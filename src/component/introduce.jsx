import React from 'react';
import { Input } from 'antd';
import './introduce.scss'

const images = {
    bg: 'https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png'
}


class Introduce extends React.Component {

    static defaultProps = {
        jobData: [
            {
                job: 'Enterprise Intelligence Business Unit-Manager, MIS/ IT Service Advisor-HK',
                jobLink: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP562606&',
                city: '杭州',
                time: '2',
                company: '小时'
            },
            {
                job: '钉钉(DingTalk)-（高级）产品专家-智能硬件',
                jobLink: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP562606&',
                city: '杭州',
                time: '2',
                company: '小时'

            }, {
                job: '钉钉(DingTalk)-（高级）产品专家-智能硬件',
                jobLink: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP562606&',
                city: '杭州',
                time: '222',
                company: '小时'
            }, {
                job: '钉钉(DingTalk)-（高级）产品专家-智能硬件',
                jobLink: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP562606&',
                city: '杭州',
                time: '2',
                company: '小时'
            }, {
                job: '钉钉(DingTalk)-（高级）产品专家-智能硬件',
                jobLink: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP562606&',
                city: '杭州',
                time: '2'
            }, {
                job: '钉钉(DingTalk)-（高级）产品专家-智能硬件',
                jobLink: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP562606&',
                city: '杭州',
                time: '2'
            }, {
                job: '钉钉(DingTalk)-（高级）产品专家-智能硬件',
                jobLink: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP562606&',
                city: '杭州',
                time: '2'
            }, {
                job: '钉钉(DingTalk)-（高级）产品专家-智能硬件',
                jobLink: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP562606&',
                city: '杭州',
                time: '2'
            }, {
                job: '钉钉(DingTalk)-（高级）产品专家-智能硬件',
                jobLink: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP562606&',
                city: '杭州',
                time: '2'
            }, {
                job: '钉钉(DingTalk)-（高级）产品专家-智能硬件',
                jobLink: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP562606&',
                city: '杭州',
                time: '2'
            }, {
                job: '钉钉(DingTalk)-（高级）产品专家-智能硬件',
                jobLink: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP562606&',
                city: '杭州',
                time: '2'
            }, {
                job: '钉钉(DingTalk)-（高级）产品专家-智能硬件',
                jobLink: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP562606&',
                city: '杭州',
                time: '2'
            }, {
                job: '钉钉(DingTalk)-（高级）产品专家-智能硬件',
                jobLink: 'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP562606&',
                city: '杭州',
                time: '6'
            },
        ]
    }

    constructor(props) {
        super(props);
        const { jobData } = props;
        this.state = {
            jobData,
            jobTabHeight: 0,
            jobTabHeightLog: 0
        }
    }

    scrollEvent = () => {
        const { jobTabHeight, jobTabHeightLog } = this.state;
        if (jobTabHeightLog <= 250 - jobTabHeight) {
            this.setState({
                jobTabHeightLog: 0
            })
        } else {
            this.setState({
                jobTabHeightLog: jobTabHeightLog - 1
            })
        }
    }

    componentDidMount() {
        let jobTab = window.document.getElementById("job-tab");
        this.setState({
            jobTabHeight: jobTab.clientHeight
        }, () => {
            this.state.ulInterVal = setInterval(this.scrollEvent, 50);
        })
    }

    onMouseEnter = () => {
        let { ulInterVal } = this.state;
        clearInterval(ulInterVal);
    }

    onMouseLeave = () => {
        this.state.ulInterVal = setInterval(this.scrollEvent, 50);
    }


    render() {
        const {
            jobData,
            jobTabHeightLog
        } = this.state;

        return (
            <div
                className="introduce-view"
            >
                <div className="introduce">
                    <div className="introduce-left">
                        <div className="introduce-left-title">
                            <div>最新职位</div>
                            <a href={'https://job.alibaba.com/zhaopin/positionList.html?'} target="_blank" className="introduce-left-title-style">更多</a>
                        </div>
                        <div className="introduce-left-list-view">
                            <div
                                className="introduce-left-list"
                                id="job-tab"
                                style={{ top: jobTabHeightLog ? jobTabHeightLog : 0 }}
                                onMouseEnter={this.onMouseEnter}
                                onMouseLeave={this.onMouseLeave}
                            >
                                {
                                    jobData && jobData.length > 0 && jobData.map((item, index) => {
                                        const { job = null, jobLink = null, city = null, time = null, company = '小时' } = item;
                                        return (
                                            <div
                                                key={index}
                                                className="introduce-left-list-offer"
                                            >
                                                <a href={jobLink ? jobLink : null} className="offer-job">
                                                    {job ? job : null}
                                                </a>
                                                <div className="offer-city">
                                                    {city ? city : null}
                                                </div>
                                                <div className="offer-time">
                                                    {time ? `${time}${company}前` : null}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="introduce-right">
                        <a
                            href="https://job.alibaba.com/zhaopin/informationPlatformBu.htm?"
                            target="_blank"
                        >
                            <div
                                style={{ backgroundImage: `url(https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png)` }}
                            >{null}</div>
                        </a>
                        <a
                            href="https://job.alibaba.com/zhaopin/informationPlatformBu.htm?"
                            target="_blank"
                        >
                            <div
                                style={{ backgroundImage: `url(https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg)` }}
                            >{null}</div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}

export default Introduce;