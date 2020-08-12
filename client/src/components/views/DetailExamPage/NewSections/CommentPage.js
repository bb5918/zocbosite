import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Comments from '../Sections/Comments'
import { Card } from 'antd';

function CommentPage(props) {
    const problemId = props.match.params.problemId
    const [Problem, setProblem] = useState([])
    const [CommentLists, setCommentLists] = useState([])

    console.log(problemId)

    const problemVariable = {
        problemId: problemId
    }

    useEffect(() => {
        axios.post('/api/problem/getProblem', problemVariable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.problem)
                    setProblem(response.data.problem)
                } else {
                    alert('Failed to get problem Info')
                }
            })


        axios.post('/api/comment/getComments', problemVariable)
            .then(response => {
                if (response.data.success) {
                    console.log('response.data.comments', response.data.comments)
                    setCommentLists(response.data.comments)
                } else {
                    alert('Failed to get exam Info')
                }
            })


    }, [])

    const updateComment = (newComment) => {
        setCommentLists(CommentLists.concat(newComment))
    }

    return (
        <div>
            <div className="site-card-border-less-wrapper">
                <Card title="문제" bordered={true} >
                    {Problem.content}
                </Card>

            </div>
            <div>
                <Card title="댓글" bordered={true} >
                    <Comments CommentLists={CommentLists} problemId={Problem._id} refreshFunction={updateComment} />

                </Card>
            </div>
        </div>

    )
}

export default CommentPage
