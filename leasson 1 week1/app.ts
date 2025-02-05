// Initial count value
let count: number = 0;
let draftcount: string | number;


// Update the count display
const updateCountDisplay = (element:HTMLElement) => {
    const countElement = document.getElementById('count');
    countElement.textContent = count.toString();
};

// Increment the count
const increment = (count:number) : void => {
    count += 1;
    updateCountDisplay(); 

};

// Decrement the count
const decrement = (count:number) : void => {
    count -= 1;
    updateCountDisplay();

};

// Reset the count
const reset = (count:number) : void => {
    count = 0;
    updateCountDisplay();


};

// Attach event listeners to buttons
document.getElementById('increment-button')as HTMLElement).onclick = increment;
document.getElementById('decrement-button')as HTMLElement).onclick = decrement;
document.getElementById('reset-button')as HTMLElement).onclick = reset;
