import React from 'react'
import Row from './Row'
import Col from './Col'

interface RowColProps {
    children?: React.ReactNode
}

const RowCol: React.FC<RowColProps> = ({ children }) => {
    return (
        <Row>
            <Col>{children}</Col>
        </Row>
    )
}

export default RowCol
