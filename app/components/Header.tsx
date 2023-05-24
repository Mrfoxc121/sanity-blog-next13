import Image from "next/image"
import Link from "next/link"

function Header() {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <div className="flex items-center space-x-2">
                <Link href="/">
                    <Image
                        className="rounded-full aspect-square object-cover"
                        height={50}
                        width={50}
                        src="https://images.pexels.com/photos/15645226/pexels-photo-15645226/free-photo-of-man-stretching-hand-through-fisheye-lens.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt="logo"
                    />
                </Link>
                <h1>The Hard Tides</h1>
            </div>

            <div>
                <Link href="#" 
                className="px-5 py-3 text-sm md:text-base bg-[#FF7F50] text-[#F5DEB3] flex items-center rounded-full text-center">
                    Visit our shop
                </Link>
            </div>
        </header>
    )
}

export default Header