export default function Toolbar( {focusPage }) {
    return (
        <nav>
            <button onClick={() => {focusPage(0)}}>Back</button>
        </nav>
    )
}