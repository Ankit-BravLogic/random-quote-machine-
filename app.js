const { useState } = React;

const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vincent Peale"
    }
];


function getRandomQuote() {

    const randomIndex = Math.floor(
        Math.random() * quotes.length
    );

    return quotes[randomIndex];
}


function App() {

    const [quote, setQuote] = useState(getRandomQuote());


    function newQuote() {

        let newQuote;

        do {
            newQuote = getRandomQuote();
        } while (
            newQuote.text === quote.text &&
            quotes.length > 1
        );

        setQuote(newQuote);
    }


    const tweetUrl =
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(
            `"${quote.text}" — ${quote.author}`
        );


    return (

        <div className="page">

            <div id="quote-box">

                <div className="quote-icon">
                    ❝
                </div>

                <div id="text">
                    {quote.text}
                </div>

                <div id="author">
                    — {quote.author}
                </div>

                <div className="buttons">

                    <a
                        id="tweet-quote"
                        href={tweetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        𝕏 Tweet
                    </a>


                    <button
                        id="new-quote"
                        onClick={newQuote}
                    >
                        New Quote
                    </button>

                </div>

            </div>

            <p className="footer">
                Random Quote Machine • React
            </p>

        </div>
    );
}


const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App />);