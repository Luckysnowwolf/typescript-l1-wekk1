// Initial count value
let count: number = 0;
let draftcount: string | number;

// Update the count display
const updateCountDisplay = (count:number) => {
    const countElement = document.getElementById('count');
    countElement.textContent = count;
};

// Increment the count
const increment = (count:number) => {
    count += 1;
    updateCountDisplay(); 
    return count + 1

};

// Decrement the count
const decrement = (count:number) => {
    count -= 1;
    updateCountDisplay();
    return count - 1
};

// Reset the count
const reset = (count:number) => {
    count = 0;
    updateCountDisplay();
    return count = 0

};

// Attach event listeners to buttons
document.getElementById('increment-button').onclick = increment;
document.getElementById('decrement-button').onclick = decrement;
document.getElementById('reset-button').onclick = reset;
