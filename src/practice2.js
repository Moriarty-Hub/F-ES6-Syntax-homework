// TODO 思考可否使用reduce
const inject = (targetArray, inputArray) => {
    let offset = 0;
    // TODO 逻辑纰漏，当sections内items顺序不是index顺序时会有问题
    // TODO 参数不要命名为object，它不是object
    inputArray.forEach((object) => {
        targetArray.splice(object.index + offset, 0, object.content);
        offset += 1;
    })
    return targetArray;
}
export { inject };
