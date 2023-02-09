// Select the target element
const subContainer = document.querySelector(".sub-container");

// Define the text to type
const text = "FeatherAPI, an open-source project";

// Initialize the text as an empty string
let typedText = "";

// Define the animation function
const type = () => {
if (typedText.length < text.length) {
// Add a character to the typed text
typedText += text.charAt(typedText.length);

// Update the text in the target element
subContainer.innerHTML = typedText;
} else {
typedText = "";
}
};

// Start the animation and repeat it every 100ms
setInterval(type, 100);