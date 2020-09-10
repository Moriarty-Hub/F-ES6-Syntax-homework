const parseData = (input) => {
    let resultList = [];
    input.data.forEach(person => {
        let result = {};
        person.forEach((value, i) => {
            result[input.column[i].name] = value;
        })
        resultList.push(result);
    })
    return resultList;
}
export { parseData };
