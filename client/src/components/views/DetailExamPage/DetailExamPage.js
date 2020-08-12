import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Descriptions, Card, Button, Drawer, Layout } from 'antd';
import './Sections/DetailExamPage.css'
import Comment from './New/Comment'
import Drawers from './New/Drawers'
const { Content, Sider } = Layout
function DetailExamPage(props) {


    const examId = props.match.params.examId
    const [Exam, setExam] = useState([])

    const [Problem, setProblem] = useState([])

    const examVariable = {
        examId: examId
    }
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };


    useEffect(() => {
        axios.post('/api/exam/getExam', examVariable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.exam)
                    setExam(response.data.exam)
                } else {
                    alert('Failed to get exam Info')
                }
            })
        axios.post('/api/problem/getProblems', examVariable)
            .then(response => {
                if (response.data.success) {
                    console.log('response.data.problems', response.data.problems)
                    setProblem(response.data.problems)
                } else {
                    alert('Failed to get problem')
                }
            })
    }, [])



    const renderCards = Problem.map((problem, index) => {
        const showSider = () => {
        }
        return (
            <div style={{ position: 'relative' }} key={index}>

                <Card>
                    <p id="p_wrap">
                        {problem.content}
                    </p>
                    {problem.images.map((image, index) => (
                        <div key={index}>
                            <img style={{ width: '50%', }}
                                src={image}
                                alt='img' />
                        </div>
                    ))}

                    <br />

                    <a href={`/exam/${examId}/${problem._id}`}>
                        <Button>댓글</Button>

                    </a>

                </Card>
            </div>

        )

    })




    if (Exam.writer) {
        return (
            <div>
                <div className="site-card-border-less-wrapper">
                    <Card title="강의 정보" bordered={true} >
                        <Descriptions>
                            <Descriptions.Item label="강의">{Exam.subject}</Descriptions.Item>
                            <Descriptions.Item label="강사">{Exam.professor} 교수님</Descriptions.Item>
                            <Descriptions.Item label="학년">{Exam.level}학년</Descriptions.Item>
                            <Descriptions.Item label="차시">{Exam.char}차(학기)</Descriptions.Item>
                            <Descriptions.Item label="설명">{Exam.description}</Descriptions.Item>
                        </Descriptions>
                    </Card>

                </div>
                <Button>
                    <a href={`${props.match.url}upload`}>문제 올리기</a>

                </Button>

                <div>
                    {renderCards}
                </div>




                {/* <div>
                    <Card title="족보" bordered={true} >
                        <Comments CommentLists={CommentLists} problemId={Exam._id} refreshFunction={updateComment} />

                    </Card>

                </div> */}
            </div>



        )

    } else {
        return (
            <div>Loading...</div>
        )
    }


}

export default DetailExamPage

