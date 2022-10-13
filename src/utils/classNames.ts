const classNames = (names: { [k: string]: boolean }, styles: { [k: string]: any }) => {
    const resultedClasses: any[] = Object.keys(names).reduce((result, currentKey) => {
        if (names[currentKey] === true) {
            result.push(styles[currentKey])
        }
        return result
    }, [] as any)
    return resultedClasses
}
export default classNames
