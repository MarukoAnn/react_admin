import { Component } from "react";
import './main.scss'
import {Row, Col, Card, Avatar, Divider, Progress, Table} from 'antd'
import {UserSwitchOutlined, AlertOutlined, SoundOutlined, ContainerOutlined, AppstoreOutlined} from '@ant-design/icons'
import userLogo from '../../../assets/images/img.jpg'
const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		render: (text) => <a>{text}</a>,
	},
	{
		title: 'Age',
		dataIndex: 'age',
	},
	{
		title: 'Address',
		dataIndex: 'address',
	},
];
const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
	},
	{
		key: '4',
		name: 'Disabled User',
		age: 99,
		address: 'Sidney No. 1 Lake Park',
	},
];
const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: (record) => ({
		disabled: record.name === 'Disabled User',
		// Column configuration not to be checked
		name: record.name,
	}),
};
class Main extends Component{
		constructor(props) {
			super(props);
			this.state = {
				imgUrl: userLogo,
				progressList: [
					{label: 'Vue', percent: '70', color: '#42B983'},
					{label: 'React', percent: '50', color: '#61DAFB'},
					{label: 'Angular', percent: '25', color: '#DD0031'},
					{label: 'JavaScript', percent: '90', color: '#F1E05A'},
				],
				staisList: [
					{icon: 'UserSwitchOutlined', label: '用户访问', num: 1234, color: '#2D8CF0'},
					{icon: 'BellOutlined', label: '系统消息', num: 213, color: '#64D572'},
					{icon: 'SoundOutlined', label: '数量', num: 52, color: '#F25E43'},
				]
			}
		}
    /*进度条视图*/
	progressView = () => {
	 return this.state.progressList.map((progress, index) => {
			return (
				<div style={{height: '46px'}} key={index}>
					<span>{progress.label}</span>
					<Progress percent={progress.percent} strokeColor={progress.color} />
				</div>
			)
		})

	}


	getIconView = (value) => {
		switch (value){
			case 'UserSwitchOutlined':
				return <UserSwitchOutlined style={{fontSize: '30px', color:'#fff'}} />
			case 'BellOutlined':
				return <AlertOutlined style={{fontSize: '30px', color:'#fff'}} />
			case 'SoundOutlined':
				return <SoundOutlined style={{fontSize: '30px', color:'#fff'}} />
		}
	}


    render(){
        return (
            <div className="main">
				<Row>
					<Col span={8} style={{paddingRight: '10px'}}>
						<Card  hoverable bordered={true} style={{borderRadius: 4 }}>
							<div className="user-info">
								<Avatar src={this.state.imgUrl} size={120} />
								<div className="info">
									<span>admin</span>
									<span>超级管理员</span>
								</div>
							</div>
							<Divider style={{borderBottom: '2px solid #ccc'}} />
							<p className="login-time">
								上次登录时间：
								<span>2019-11-01</span>
							</p>
							<p className="login-address">
								上次登录地点：
								<span>广州</span>
							</p>
						</Card>
						<Card  hoverable title="语言详情" bordered={true} style={{borderRadius: 4 ,marginTop: '1vh',textAlign: 'left'}}>
							{
								this.progressView()
							}
						</Card>
					</Col>
					<Col span={16}>
						<Row className="tab-card">
							{
								this.state.staisList.map((item, index) => {
									return (
										<Col span={8} key={index}>
											<div className="statis-num" style={{marginRight: index !==this.state.staisList.length -1?'10px': ''}}>
												<div className="sn-left" style={{background: item.color}}>
													{
														this.getIconView(item.icon)
													}
												</div>
												<div className="sn-right">
													<span style={{color: item.color}}>{item.num}</span>
													<span>{item.label}</span>
												</div>
											</div>
										</Col>
									)
								})
							}
						</Row>
						<Row>
							<Card  hoverable title="待办事项" bordered={true} style={{ width: '100%', height: '464px', borderRadius: 4 ,marginTop: '1vh',textAlign: 'left'}}
							       extra={<span style={{color: '#409EFF'}}>添加</span>} >
								{
									<Table
										rowSelection={{
											...rowSelection,
										}}
										columns={columns}
										dataSource={data}
									/>
								}
							</Card>
						</Row>

					</Col>
				</Row>
            </div>
        )
    }
}

export default Main;
