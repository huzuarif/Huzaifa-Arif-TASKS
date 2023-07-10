function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love Typescript'; }
    console.log("the  size of the shirt is ", size, "and message on the shirt is", message);
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'Hello World');
