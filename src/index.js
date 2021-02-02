module.exports = function check(str, bracketsConfig) {
    let strArr = str.split("");
    let index = -1;
    bracketsConfig.forEach((item) => {
        if (str.indexOf(item.join("")) >= 0) {
            index = str.indexOf(item.join(""));
        }
    });
    if (index >= 0) {
        strArr = [...strArr.slice(0, index), ...strArr.slice(index + 2)];
        return check(strArr.join(""), bracketsConfig);
    } else {
        return !str ? true : false;
    }
};
