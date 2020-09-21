// TODO 使用解构的方式取出data与column
const parseData = (input) => {
    let resultList = [];
    // TODO 数组与数组的转化用map，无需声明resultList
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
