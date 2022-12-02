import defaultJSON from '../data/default.json';
export const numberLongToDate = (numberLong) => {
    const yymmdd = (t) => {
        const date = t.split(". ");
        return date[0] + "-" + date[1] + "-" + date[2];
    };
    const date = new Date(parseInt(numberLong));
    return yymmdd(date.toLocaleString());
}

export const findUserById = (id) => {
    const idx = defaultJSON.findIndex((user) => user.id === id);
    return idx;
}