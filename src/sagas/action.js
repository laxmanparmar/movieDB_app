
export const checkMovieIdExist = (result, movieId) => {
    const data = Object.keys(result).filter((val) => {
        return result[val]["movieId"] == movieId
    })
    return data.length > 0;
}

export const processData = (Obj) => {
    const result = [];
    Object.keys(Obj).forEach((val, index) => {

        result.push({
            ...Obj[val],
            storeId: val
        });
    })
    return result;
}


export const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const getMoviewReview = (result, movieId) => {
    const data = Object.keys(result).filter((val) => {
        if (result[val]["movieId"] === movieId) {
            return result;
        }

    })

    return data.length > 0 ? [result[data[0]]] : [];
}