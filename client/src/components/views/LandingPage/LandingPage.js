import React, { useEffect, useState } from 'react'
import { Card, Col, Typography, Row } from 'antd';
import axios from 'axios';
const { Title } = Typography;


function LandingPage() {

    const [Exams, setExams] = useState([])

    useEffect(() => {
        axios.get('/api/exam/getExams')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.exams)
                    setExams(response.data.exams)
                } else {
                    alert('Failed to get Exams')
                }
            })
    }, [])





    const renderCards = Exams.map((exam, index) => {


        return <Col lg={6} md={8} xs={24}>
            <div style={{ position: 'relative' }}>
                <Card title={exam.subject} extra={<a href={`/exam/${exam._id}`}>More</a>} style={{ width: 250 }}>
                    <p>{exam.professor} 교수님</p>
                    <p>{exam.level}학년</p>
                    <p>{exam.char}차</p>
                </Card>
            </div><br />
        </Col>

    })



    return (



        // <>
        //     <div className="app">
        //         <span style={{ fontSize: '2rem' }}>서울대학교 수의학과 족보사이트</span>
        //     </div>


        <div style={{ width: '85%', margin: '3rem auto' }}>
            <Title level={2} > 과목 목록 </Title>
            <hr />

            <Row gutter={16}>
                {renderCards}
            </Row>
        </div>
    )
}

export default LandingPage
