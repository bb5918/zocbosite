import React, { useState, useEffect, Component } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import Dropzone from 'react-dropzone';
import Axios from 'axios';
import { useSelector } from "react-redux";


const { Title } = Typography;
const { TextArea } = Input;



function UploadProblemPage({ props, history, match }) {



    const user = useSelector(state => state.user);
    const postId = match.params.examId



    const [Content, setContent] = useState("");
    const [Images, setImages] = useState([])

    const [Files, setFiles] = useState([])



    const handleChangeContent = (event) => {
        setContent(event.currentTarget.value)
    }

    const multipleFileChangedHandler = (event) => {
        setFiles(event.target.files)
    }

    const multipleFileUploadHandler = (event) => {
        event.preventDefault();

        const data = new FormData();// If file selected
        if (Files) {
            for (let i = 0; i < Files.length; i++) {
                data.append('galleryImage', Files[i], Files[i].name)
            }
            Axios.post('/api/profile/multiple-file-upload', data, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            })
                .then((response) => {
                    if (200 === response.status) {
                        // If file size is larger than expected.
                        if (response.data.error) {
                            if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                                console.log('limit')
                            } else {
                                console.log(response.data);// If not the given file type
                                console.log(response.data.error)
                            }
                        } else {
                            // Success
                            let fileName = response.data;
                            console.log('filedata', fileName);
                            console.log('File uploaded')
                            console.log(fileName.locationArray)
                            setImages(fileName.locationArray)
                        }
                    }
                }).catch((error) => {
                    // If another error
                    console.log(error)
                });
        } else {
            // if file not selected throw error
            console.log('Please upload file')
        }
    };




    const submitHandler = (event) => {
        event.preventDefault();



        //서버에 채운 값들을 request로 보낸다.

        const body = {
            //로그인 된 사람의 ID 
            writer: user.userData._id,
            postId: postId,
            content: Content,
            images: Images,


        }

        Axios.post('/api/problem/uploadProblem', body)
            .then(response => {
                if (response.data.success) {
                    history.goBack()
                } else {
                    console.log(response.data)
                    alert('문제 업로드에 실패 했습니다.')
                }
            })
    }









    return (

        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2} >문제 올리기</Title>
            </div>



            <Form onSubmit={submitHandler}>
                <label>사진으로 올리기 - proegress bar 추가 / 5초만 기다려주세요</label>
                <input type="file" multiple onChange={multipleFileChangedHandler} />
                <button onClick={multipleFileUploadHandler}>upload</button>

                <br />
                <br />

                <label>글로 올리기</label>

                <TextArea onChange={handleChangeContent} value={Content} />
                <br />
                <br />
                <button type="submit">
                    확인
                </button>
            </Form>
        </div>
    )
}

export default UploadProblemPage
