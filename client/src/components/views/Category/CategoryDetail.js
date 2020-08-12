import React from 'react'
import { Menu } from 'antd';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"


const { SubMenu } = Menu;


class CategoryDetail extends React.Component {
    // submenu keys of first level
    rootSubmenuKeys = ['1', '2', '3', '4'];

    state = {
        openKeys: ['1'],
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <div>
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    style={{ width: 256 }}
                >
                    <SubMenu key="1" title="1학년">
                        <SubMenu title="생화학">
                            <SubMenu title="이항 교수님">
                                <Menu.Item ><a href='/exam/5f05a4bd631b145e203d5cc5'>1차</a></Menu.Item>
                                <Menu.Item >2차</Menu.Item>
                                <Menu.Item >3차</Menu.Item>
                                <Menu.Item >4차</Menu.Item>
                                <Menu.Item >5차</Menu.Item>
                            </SubMenu>
                            <SubMenu title="조제열 교수님">
                                <Menu.Item ><a href='/exam/5f05a786f101dc3fd881ba9b'>1차</a></Menu.Item>
                                <Menu.Item >2차</Menu.Item>
                                <Menu.Item >3차</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu title="생리학">
                            <SubMenu title="한호재 교수님">
                                <Menu.Item >1차</Menu.Item>
                                <Menu.Item >2차</Menu.Item>
                                <Menu.Item >3차</Menu.Item>
                                <Menu.Item >4차</Menu.Item>
                                <Menu.Item >5차</Menu.Item>
                            </SubMenu>
                            <SubMenu title="이장헌 교수님">
                                <Menu.Item >1차</Menu.Item>
                                <Menu.Item >2차</Menu.Item>
                                <Menu.Item >3차</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu title="발생학">
                            <SubMenu title="한호재 교수님">
                                <Menu.Item >1차</Menu.Item>
                                <Menu.Item >2차</Menu.Item>
                                <Menu.Item >3차</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu title="해부학">
                            <SubMenu title="기무라 교수님">
                                <Menu.Item >1차</Menu.Item>
                                <Menu.Item >2차</Menu.Item>
                            </SubMenu>
                            <SubMenu title="남상섭 교수님">
                                <Menu.Item >1차</Menu.Item>
                            </SubMenu>
                            <SubMenu title="황인구 교수님">
                                <Menu.Item >1차</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu title="조직학">
                            <SubMenu title="윤여성 교수님">
                                <Menu.Item >1차</Menu.Item>
                                <Menu.Item >2차</Menu.Item>
                                <Menu.Item >3차</Menu.Item>
                                <Menu.Item >4차</Menu.Item>
                                <Menu.Item >5차</Menu.Item>
                                <Menu.Item >6차</Menu.Item>
                                <Menu.Item >7차</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu title="생물공학">
                            <SubMenu title="백승준 교수님">
                                <Menu.Item >1차</Menu.Item>
                                <Menu.Item >2차</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu title="기생충학">
                            <SubMenu title="윤희정 교수님">
                                <Menu.Item >1차</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu title="미생물학">
                            <SubMenu title="박용호 교수님">
                                <Menu.Item >1차</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu title="약리학">
                            <SubMenu title="이소영 교수님">
                                <Menu.Item >2차</Menu.Item>
                            </SubMenu>
                            <SubMenu title="류판동 교수님">
                                <Menu.Item >1차</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="2" title="2학년">
                        <Menu.Item >Option 5</Menu.Item>
                        <Menu.Item >Option 6</Menu.Item>

                    </SubMenu>
                    <SubMenu key="3" title="3학년">
                        <SubMenu title="방사선과학">
                            <SubMenu title="윤정희 교수님">
                                <Menu.Item ><a href='/exam/5f0c4ba8b4136d2b0c0939a0'>1학기</a></Menu.Item>
                                <Menu.Item >2학기</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="4" title="4학년">
                    </SubMenu>
                </Menu>

            </div>












        );
    }
}

export default CategoryDetail
