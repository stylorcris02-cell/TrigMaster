// trigonometric calculations and mathematical operations in JavaScript

// Function to calculate sine of an angle in radians
function calculateSine(angle) {
    return Math.sin(angle);
}

// Function to calculate cosine of an angle in radians
function calculateCosine(angle) {
    return Math.cos(angle);
}

// Function to calculate tangent of an angle in radians
function calculateTangent(angle) {
    return Math.tan(angle);
}

// Function to calculate the hypotenuse of a triangle
function calculateHypotenuse(a, b) {
    return Math.hypot(a, b);
}

// Exporting functions for external use
module.exports = {
    calculateSine,
    calculateCosine,
    calculateTangent,
    calculateHypotenuse
};