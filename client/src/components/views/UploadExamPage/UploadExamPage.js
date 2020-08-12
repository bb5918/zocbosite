import React, { useState } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";

const { Title } = Typography;
const { TextArea } = Input;

const Char = [
    { value: 1, label: '1차' },
    { value: 2, label: '2차' },
    { value: 3, label: '3차' },
    { value: 4, label: '4차' },
    { value: 5, label: '5차' },
    { value: 6, label: '6차' },
    { value: 7, label: '7차' },
    { value: 8, label: '1학기' },
    { value: 9, label: '2학기' },
    { value: 10, label: '중간고사' },
    { value: 11, label: '기말고사' }
]
const Level = [
    { value: 1, label: '1학년' },
    { value: 2, label: '2학년' },
    { value: 3, label: '3학년' },
    { value: 4, label: '4학년' },

]

function UploadExamPage(props) {
    const user = useSelector(state => state.user);

    const [subject, setSubject] = useState("");
    const [Professor, setProfessor] = useState("");
    const [Description, setDescription] = useState("")
    const [char, setChar] = useState(1)
    const [level, setLevel] = useState(1)



    const handleChangeSubject = (event) => {
        setSubject(event.currentTarget.value)
    }
    const handleChangeDescription = (event) => {
        setDescription(event.currentTarget.value)
    }

    const handleChangeProfessor = (event) => {
        console.log(event.currentTarget.value)

        setProfessor(event.currentTarget.value)
    }

    const handleChangeChar = (event) => {
        setChar(event.currentTarget.value)
    }
    const handleChangeLevel = (event) => {
        setLevel(event.currentTarget.value)
    }



    const onSubmit = (event) => {

        event.preventDefault();

        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in First')
        }

        const variables = {
            writer: user.userData._id,
            subject: subject,
            professor: Professor,
            description: Description,
            char: char,
            level: level

        }

        axios.post('/api/exam/uploadExam', variables)
            .then(response => {
                if (response.data.success) {
                    alert('exam Uploaded Successfully')
                    props.history.push('/')
                } else {
                    alert('Failed to upload exam')
                }
            })

    }


    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2} >과목 업로드</Title>
            </div>

            <Form onSubmit={onSubmit}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                </div>

                <br /><br />
                <label>과목</label>
                <Input
                    onChange={handleChangeSubject}
                    value={subject}
                />
                <br /><br />
                <label>교수</label>
                <Input
                    onChange={handleChangeProfessor}
                    value={Professor}
                />
                <br /><br />
                <label>설명</label>
                <TextArea
                    onChange={handleChangeDescription}
                    value={Description}
                />
                <br /><br />

                <select onChange={handleChangeChar}>
                    {Char.map((item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
                <br /><br />

                <select onChange={handleChangeLevel}>
                    {Level.map((item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
                <br /><br />

                <Button type="primary" size="large" onClick={onSubmit}>
                    제출
            </Button>

            </Form>
        </div>
    )
}

export default UploadExamPage
