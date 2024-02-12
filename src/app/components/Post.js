'use client'

export default function Post({id, title, content, authorName}) {

    return (
        <div style={{border: "1px solid white", padding: "10px", margin: "10px 0px"}}>
            <h1>{title}</h1>
            <p>{content}</p>
            <p>By {authorName}</p>
        </div>
    )
}