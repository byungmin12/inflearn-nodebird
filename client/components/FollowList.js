import React from 'react'
import {List, Card, Button} from 'antd'
import PropTypes from 'prop-types'
import {StopOutlined} from "@ant-design/icons"


function FollowList({header, data}) {
    return (
        <List 
            style={{marginBottom :20}}
            grid={{gutter:4, sx:2, md: 3}}
            size="small"
            loadMore={<div style={{textAlign: "center", margin: "10px 0"}}><Button>더 보기</Button></div>}
            bordered
            dataSource={data}
            header={<div>{header}</div>}
            renderItem={(item)=>(
                <List.Item style={{marginTop: 20}}>
                    <Card actions={[<StopOutlined key="stop"/>]}>
                        <Card.Meta description={item.nickname}/>
                    </Card>

                   
                </List.Item>
            )}
        />
    )
}

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}

export default FollowList
