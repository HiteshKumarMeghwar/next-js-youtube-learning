import Nav from '@/components/Nav'

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const paths = data.map((curElem) => {
        return {
            params: {
                pageno: curElem.id.toString(),
            }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pageno;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return {
        props: {
            data,
        }
    }
}

const pageno = ({data}) => {
    return (
        <>
            <Nav />
            <h1>Single Blog Data</h1>
            <h1>{data.id}</h1>
            <h3>{data.title}</h3>
            <h6>{data.body}</h6>
        </>
    )
}

export default pageno
