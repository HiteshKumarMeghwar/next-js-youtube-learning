import { useEffect } from "react"
import { useRouter } from "next/router"

const errorPage = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 1000);
    }, [])
    return (
        <>
            <h1>404 Page</h1>
        </>
    )
}

export default errorPage
