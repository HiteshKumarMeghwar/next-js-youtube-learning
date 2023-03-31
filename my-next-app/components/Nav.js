import Link from "next/link"
const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                <Link href='/'>
                    Home &nbsp;
                </Link>
                <Link href='/contact'>
                    Contact &nbsp;
                </Link>
                <Link href='/blog'>
                    Blog
                </Link>
                </ul>
            </nav>
        </>
    )
}

export default Nav
