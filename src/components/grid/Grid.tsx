import React from 'react'
import GridConfiguratorContext from './GridConfiguratorContext'
import GridWrapper from './GridWrapper'

interface GridProps {
    children: React.ReactNode
    cols?: number
    gap?: number
    rowMargin?: number
    contentPadding?: number
}

const Grid: React.FC<GridProps> = ({ children, cols, gap, rowMargin, contentPadding }) => {
    return (
        <GridConfiguratorContext.Provider value={{ cols, gap, rowMargin, contentPadding }}>
            <GridWrapper>{children}</GridWrapper>
        </GridConfiguratorContext.Provider>
    )
}

Grid.defaultProps = {
    cols: 3,
    gap: 10,
    rowMargin: 5,
    contentPadding: 10
}

export default Grid
