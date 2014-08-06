

function testToCreateVariable() {
    var t1 = 'surname' in window;
    var t2 = jsbox.source.js.indexOf('var') !== -1;
    var t3 = jsbox.source.js.indexOf(';') !== -1;
                                    
    jsbox.hint('you should use the operator <code>var</code> to create the new variable', !t2);
    jsbox.hint('did you closed your instruction?<br>it seems you are missing a <code>;</code>!', t2 && !t3);
    
    return t1 && t2 && t3;
}

function testToAssignContentsToVariables() {
    var t1 = name === 'Darth Vader';
    var t2 = jsbox.source.js.length > 0 && jsbox.source.js.indexOf('var') === -1;
    var t3 = jsbox.source.js.indexOf(';') !== -1;
    
    jsbox.hint('<code>name</code> should contains "Darth Vader"', !t1);
    jsbox.hint('you don\'t need to create the variable again, <code>var</code> is useless here', !t2);
    jsbox.hint('did you closed your instruction?<br>it seems you are missing a <code>;</code>!', t2 && !t3);
    
    return t1 && t2;
}

function testReadVariableContent() {
    var t1 = 'fullName' in window;
    var t1b = 'fullname' in window;
    
    if (t1) {
        var t2 = fullName === 'Luke Skywalker';
    } else {
        var t2 = false;
    }
    
    var t3 = jsbox.source.js.indexOf('+') !== -1;
    var t4 = jsbox.source.js.indexOf('" "') !== -1 || jsbox.source.js.indexOf("' '") !== -1;
    var t5 = (jsbox.source.js.match(/;/g) || []).length >= 3;
    
    jsbox.hint('I don\'t see any <code>fullName</code> variable here,<br>you need to create such variable!', !t1 && !t1b);
    jsbox.hint('You wrote a <code>fullname</code> variable which is a different thing than <code><strong>fullName</strong></code>.<br><b>remember that uppercased and lowercased letters matter!</b>', t1b);
    jsbox.hint('you should create the new variable with the <code>var</code> operator!', t1 && (jsbox.source.js.match(/var/g) || []).length < 3);
    jsbox.hint('<code>fullName</code> should contain "Luke Skywalker"', t1 && !t2);
    jsbox.hint('you should use <code>+</code> operator to concatenate <code>name</code> and <code>surname</code> variables', t1 && !t3);
    jsbox.hint('you should concatenate a white space <code>+ \' \' +</code> in between of name and surname', t3 && !t4);
    jsbox.hint('did you closed your instruction?<br>it seems you are missing a <code>;</code>!', t1 && t2 && t3 && t4 && !t5);
    
    return t1 && t2 && t3 && t4 && t5;
}

