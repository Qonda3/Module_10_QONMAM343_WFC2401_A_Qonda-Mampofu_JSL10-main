// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Attach event listener for solving Room 1
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                // Find the most recent book
                const mostRecentBook = findMostRecentBook(books);
                // Display the key to the next room
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    // Attach event listener for solving Room 2
    document.getElementById("solveRoom2").addEventListener("click", () => {
        // Define JavaScript and React concepts sets
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // Find common concepts between sets
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        // Display the code to unlock the door
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // Attach event listener for solving Room 3
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => response.json())
            .then(directions => {
                // Navigate the labyrinth asynchronously
                navigateLabyrinth(directions)
                    .then(message => {
                        // Display the success message
                        document.getElementById("room3Result").textContent = message;
                    });
            });
    });
});

// Function to find the most recent book
function findMostRecentBook(books) {
    // Logic error corrected
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}

// Function to find the intersection of two sets
function findIntersection(setA, setB) {
    // Corrected logic for finding intersection
    const intersection = new Set([...setA].filter(item => setB.has(item)));
    return intersection;
}

// Asynchronous function to navigate the labyrinth
async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // Add delay between navigation steps
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    // Return success message
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
