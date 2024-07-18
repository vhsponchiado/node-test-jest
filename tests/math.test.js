const { add, subtract, multiply, divide, isEven, factorial } = require('../utils/functions');

describe('Math Functions', () => {

    // Teste para a função add
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    // Teste para a função subtract
    test('subtracts 5 - 2 to equal 3', () => {
        expect(subtract(5, 2)).toBe(3);
    });

    // Teste para a função multiply
    test('multiplies 3 * 4 to equal 12', () => {
        expect(multiply(3, 4)).toBe(12);
    });

    // Teste para a função divide
    test('divides 10 / 2 to equal 5', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('throws error when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    // Teste para a função isEven
    test('returns true for even number 4', () => {
        expect(isEven(4)).toBe(true);
    });

    test('returns false for odd number 5', () => {
        expect(isEven(5)).toBe(false);
    });

    // Teste para a função factorial
    test('returns 120 for factorial of 5', () => {
        expect(factorial(5)).toBe(120);
    });

    test('returns 1 for factorial of 0', () => {
        expect(factorial(0)).toBe(1);
    });

    test('throws error for negative number', () => {
        expect(() => factorial(-1)).toThrow('Negative numbers are not allowed');
    });
});
