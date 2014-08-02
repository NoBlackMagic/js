

function testToCreateVariable() {
    var t1 = 'surname' in window;
    var t2 = jsbox.source.js.indexOf('var') !== -1;
    if (!t2) console.assert(t2, 'you should use the operator "var" to create the new variable');
    return t1 && t2;
}

function testToAssignContentsToVariables() {
    var t1 = name === 'Darth Vedar';
    var t2 = jsbox.source.js.length > 0 && jsbox.source.js.indexOf('var') === -1;
    if (!t1) console.assert(t1, '"name" should contains "Darth Vedar"');
    if (!t2) console.assert(t2, 'you should use the already existing "name" variable');
    return t1 && t2;
}

function testReadVariableContent() {
    var t1 = 'fullName' in window;
    
    if (t1) {
        var t2 = fullName === 'Luke Skywalker';
    } else {
        var t2 = false;
    }
    
    var t3 = jsbox.source.js.indexOf('+') !== -1;
    var t4 = jsbox.source.js.indexOf('" "') !== -1 || jsbox.source.js.indexOf("' '") !== -1;
    
    if (t1 && (jsbox.source.js.match(/var/g) || []).length < 3) {
        console.warn('you should create the new variable with the "var" operator!');
    }
    
    if (!t1) console.assert(t1, 'a variable "fullName" should have been created');
    
    if (t1) {
        if (!t2) console.assert(t2, '"fullName" should contain "Luke Skywalker"');
        if (!t3) console.assert(t3, 'you should use "+" operator to concatenate variables');
        if (t3) {
            if (!t4) console.assert(t4, 'you should concatenate a white space in between of name and surname');
        }
    }
    
    return t1 && t2 && t3 && t4;
}

