import React from 'react'

type GridConfiguratorType = {
    cols?: number
    gap?: number
    rowMargin?: number
    contentPadding?: number
}

const GridConfiguratorContext = React.createContext<GridConfiguratorType>({
    cols: 3,
    gap: 0.5,
    rowMargin: 10
})

export default GridConfiguratorContext
