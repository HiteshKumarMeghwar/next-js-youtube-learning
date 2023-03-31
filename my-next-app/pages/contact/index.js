import Image from "next/image"
import { useRouter } from "next/router"
import Head from "next/head";
import Nav from "@/components/Nav";
const index = () => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Hitesh Kumar</title>
                <meta name="meghwar" content="3" />
            </Head>
            <Nav />
            <button><a onClick={() => router.push("/")}>Back to Home</a></button>
            <Image src="/3rd.PNG" width="500" height="300"></Image>
        </>
    )
}

export default index
