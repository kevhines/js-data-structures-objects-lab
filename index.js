// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(oldDriver, key, value) {
    // const newDriver = {...oldDriver}
    // newDriver[key] = value
    // return newDriver
    return Object.assign({}, oldDriver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(oldDriver, key, value){
    oldDriver[key] = value
    return oldDriver
}

function deleteFromDriverByKey(oldDriver, key, value) {
    const newDriver = Object.assign({}, oldDriver);
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(oldDriver, key, value) {
    delete oldDriver[key]
    return oldDriver
}