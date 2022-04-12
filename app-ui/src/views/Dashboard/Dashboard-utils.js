export function createData(stt, sl, total, month, year) {
    return { stt, sl, total, month, year };
}

export const converData = (data, key) => {
    if (key === 'month') {
        return data.map((item) => { return `thang ${item[`${key}`]}` })
    }
    return data.map((item) => { return item[`${key}`] })
}

export const formatChartYear = (data) => {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    data.map((i) => {
        arr[i?.month - 1] = i?.total
    })
    return arr
}