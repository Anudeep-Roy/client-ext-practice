export default function Button ({link, text}) {
    return (
        <a className="custom-button" href={link}>
            {text}
        </a>
    )
}