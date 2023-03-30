import {useState, useEffect} from 'react';

export function GetQuotes(){
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        async function fetchQuotes(){
            const response = await fetch('https://type.fit/api/quotes')
            const data = await response.json()
            const quoteData = data[Math.floor(Math.random()* data.length)]
            setQuotes(quoteData)
            console.log(data);
        }
        fetchQuotes();
    }, [])
    return(
        <>
        {/* {quotes.map(({text, author}) => (
            <div className='quotes'>
                <h2>Daily Quote:</h2>
                <p>{text}</p>
                <p>{author}</p>
            </div>
        ))} */}
        <div className='quotes'>
                <h2>Daily Quote:</h2>
                <p>{quotes.text}</p>
                <p>{quotes.author}</p>
            </div>
        </>
    )
}
