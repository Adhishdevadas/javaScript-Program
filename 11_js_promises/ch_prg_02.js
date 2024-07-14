const doSomething = callback => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS'];
        callback(false, skills);  // Calling the callback with parameters (err, result)
    }, 2000);
};
doSomething((err, result) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
});
