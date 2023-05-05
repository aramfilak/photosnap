import React from "react"

interface BlockProps {
    src: string
    alt: string
    title: string
    text: string
    link?: {
        href: string
        text: string
    }
    dark?: boolean
    light?: boolean
    rightContent?: boolean
}
const Block: React.FC<BlockProps> = ({
    src,
    alt,
    dark,
    light,
    link,
    title,
    text,
    rightContent,
}): JSX.Element => {
    if (dark && light) {
        throw Error("You can only pass either 'light' or 'dark', but not both at the same time.")
    }

    return (
        <section
            className={`block ${dark && "dark"} ${light && "light"} ${rightContent && "right"}`}
        >
            <img src={src} alt={alt} />
            <div className="content">
                <h1 className="title">{title}</h1>
                <p className="text">{text}</p>
                {link && <a href={link.href}>{link.text}</a>}
            </div>
        </section>
    )
}

export default Block
