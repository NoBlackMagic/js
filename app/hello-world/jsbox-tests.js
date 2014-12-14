
function artifactHelloWorld() {
    window.spy = sinon.spy(window, 'alert');
}

function testHelloWorld() {
    var h1 = !jsbox.source.js.length;
    var h2 = jsbox.source.js.indexOf('alert') === -1;
    var h3 = jsbox.source.js.indexOf(';') === -1;
    jsbox.hint('In order to solve the exercise you may want to write some code!', h1);
    jsbox.hint('Try to search <b>"Javascript alert hello world"</b> on Google, you will find a lot of tutorials!', !h1 && h2);
    jsbox.hint('It is always a good practice to end each isntruction with a <code>;</code>', !h1 && !h2 && h3);
    return window.spy.called;
}
