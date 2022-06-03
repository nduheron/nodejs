const myFunction = () => {
    try {
        console.log("Hello World");
    } catch (err) {
        console.err("Hello World");
    }
    eval('console.log("hello")')

    let counter = 0;
    counter++;
    const test = {};
    Object.defineProperty(test, "bar", {
        get: () => { "toto" }
    })
    setTimeout("bouh", 4)
};

myFunction();