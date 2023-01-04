import {useFetch} from "../hooks/useFetch.js";
import {useCounter} from "../hooks/useCounter.js";

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://dummyjson.com/quotes/${counter}`);
    const { author, quote } = !!data && data;

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                isLoading ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>
                )
            }

            <button
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => increment() }
            >
                Next quote
            </button>
        </>
    );
}