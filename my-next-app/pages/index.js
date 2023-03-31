import Link from "next/link"
const index = () => {
  return (
    <>
      <nav>
        <ul>
          <Link href='/'>
            Home
          </Link>
          <Link href='/contact'>
            Contact
          </Link>
          <Link href='/about'>
            About
          </Link>
        </ul>
      </nav>
    </>
  )
}
export default index