module.exports.delay = (secs) => {
    for(let i = 0; i < 100000000 * secs; i++);
};

module.exports.getElementByxpath = async (client, pathx) => {
    return await client.$(pathx);
}
module.exports.arrowDown = (client, numberOfSteps = 1) => {
    for(let i = 0; i < numberOfSteps; i++){
        client.keys('ArrowDown');
        this.delay(1);
    }
}