import Nav from "@/components/Nav"
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
        props: {
            data,
        }
    }
}

const index = ({data}) => {
    return (
        <>
            <Nav />
            <h1>All Blog Data</h1>
            {/* {data.map((curElem) => {
                return <div key={curElem.id}>  
                    <h1>{curElem.id}</h1>
                    <h3>{curElem.title}</h3>
                    <h6>{curElem.title}</h6>
                    <hr />
                </div>
            })} */}
            {data.slice(0,5).map((curElem) => {
                return <div key={curElem.id}>  
                    <h1>{curElem.id}</h1>
                    <h3><Link href={`/blog/${curElem.id}`}>{curElem.title}</Link></h3>
                    <h6>{curElem.body}</h6>
                    <hr />
                </div>
            })}
        </>
    )
}

export default index
