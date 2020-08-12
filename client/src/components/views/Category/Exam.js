import React from 'react'
import CategoryDetail from './CategoryDetail'
import { Route } from "react-router-dom"

function Exam({ match }) {
    return (
        <div>
            <Route exact path={match.path} component={CategoryDetail} />
        </div>
    )
}

export default Exam
