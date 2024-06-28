export default function Loader ({theme}) {
    return (
        <div className="loader">
            <div class={`spinner-grow text-${theme}`}></div>
        </div>
    )
}