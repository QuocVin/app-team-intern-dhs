export function createData(month, sl, total, userId) {
    return { month, sl, total, userId };
}

export const converData = (data, key) => {
    if (key === 'months') {
        return data.map((item) => { return `thang ${item[`${key}`]}` })
    }
    return data.map((item) => { return item[`${key}`] })
}

export const formatChartYear = (data) => {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    data.map((i) => {
        arr[i?.months - 1] = i?.total
    })
    return arr
}