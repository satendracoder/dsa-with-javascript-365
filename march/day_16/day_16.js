var evalRPN = function(tokens) {

    let stack = [];

    for (let token of tokens) {

        if (token === "+" || token === "-" || token === "*" || token === "/") {

            let b = stack.pop();
            let a = stack.pop();

            if (token === "+") stack.push(a + b);
            if (token === "-") stack.push(a - b);
            if (token === "*") stack.push(a * b);
            if (token === "/") stack.push(Math.trunc(a / b));

        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop();
};
