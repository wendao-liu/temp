import React from 'react'

const styles = {
    fontFamily: 'PingFangSC-Regular',
    margin: '0 auto',
    lineHeight: '44px',
    textAlign: 'center',
    color: 'rgba(255,255,255,0.4)',
    height: '44px',
    background: '#2C2F33'
}


const Foot = () => {
    return (
        <div style={styles}>
            <a href='http://www.beian.miit.gov.cn/'>浙ICP备19012132号-1</a>
        </div>
    )
}


export default Foot;