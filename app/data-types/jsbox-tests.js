function testNameAsString() {
    
    jsbox.hint("It is a good practice to use the <code>'</code> string delimiter where possible!", /\"/.test(jsbox.source.js));
    
    return sourceType(jsbox.source.js) === 'string';
}

function testStringConcatenation() {
    
    var source = jsbox.source.js;
    var value = sourceVal(source);
    var type = sourceType(source);
    
    var hasCode = source.length > 0;
    var hasConcat = /\+/.test(source);
    var hasWrongDelim = /\"/.test(source);
    var concatCount = source.split('+').length - 1;
    
    var hasSpaces = /\ /.test(value);
    
    jsbox.hint("It is a good practice to use the <code>'</code> string delimiter where possible!", hasWrongDelim);
    jsbox.hint("It seems you have no concatenation in your code, try to use <code>+</code> to concatenate two or more strings", hasCode && !hasConcat);
    jsbox.hint("It seems there is no white space between <code>name</code> and <code>surname</code>.<br><br>You should <b>concatenate a white space</b> like this: <code>+ ' ' +</code> in between of name and surname.", hasCode && hasConcat && !hasSpaces);
    jsbox.hint("The outcome is correct but you placed a white space into the name or the surname.<br><br>Instead you should <b>concatenate a white space</b> like this: <code>+ ' ' +</code> in between of name and surname.", hasSpaces && concatCount < 2);
    
    return type === 'string' && hasSpaces;
}

function artifactNameCapitalized() {
    jsbox.spy = sinon.spy(String.prototype, 'toUpperCase');
}

function testNameCapitalized() {
    
    jsbox.hint('Have you tried to ask google for "<a href="https://www.google.se/search?q=MDN+string+uppercase&oq=MDN+string+uppercase&aqs=chrome..69i57j0.449j0j4&sourceid=chrome&es_sm=91&ie=UTF-8" target="_blank">MDN string uppercase</a>"?', !jsbox.spy.called);
    
    return jsbox.spy.called;
}

function artifactArrayReverse() {
    jsbox.spy = sinon.spy(Array.prototype, 'reverse');
    jsbox.spy1 = sinon.spy(console, 'log');
}

function testArrayReverse() {
    jsbox.hint('Have you tried to ask google for "<a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" target="_blank">MDN array reverse</a>"?', !jsbox.spy.called);    
    jsbox.hint('Use <code>console.log</code> to debug the result!', jsbox.spy.called && !jsbox.spy1.called);
    return jsbox.spy.called;
}




function sourceVal(source) {
    try {
        return (new Function('return ' + source))();
    } catch (e) {}
}

function sourceType(source) {
    return typeof sourceVal(source);
}