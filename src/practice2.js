const inject = (targetArray, inputArray) => {
    let offset = 0;
    inputArray.forEach((object) => {
        targetArray.splice(object.index + offset, 0, object.content);
        offset += 1;
    })
    return targetArray;
}
export { inject };
