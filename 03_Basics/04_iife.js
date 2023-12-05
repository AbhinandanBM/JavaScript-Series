// Immediately Invoked Function Expression (IIFE)

/*
IIFE, which stands for Immediately Invoked Function Expression, is a common pattern in JavaScript. It is used to create a function expression and execute it immediately after its definition. There are several reasons why IIFE is used in JavaScript:

    1. Encapsulation:
        IIFE helps in creating a new scope for variables, preventing them from polluting the global scope.
        Variables declared inside an IIFE are not accessible from the outside, providing a form of encapsulation.

    2. Avoiding Global Namespace Pollution:
        By encapsulating code within an IIFE, you reduce the risk of naming conflicts with other scripts or libraries in the global namespace.

    3. Module Pattern:
        IIFE is often used as a building block for creating modules in JavaScript. It allows you to define private variables and functions that are not accessible from the outside.

    4. Data Privacy:
        IIFE helps in achieving data privacy by restricting the visibility of variables to the inner scope, preventing unintended modifications.
*/

(function chai(){
    // named IIFE
    console.log(`DB Connected`);
})();

((name)=>{
    console.log(`DB Connected Two ${name}`);
})("Abhi")
