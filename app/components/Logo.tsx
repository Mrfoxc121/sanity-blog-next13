import Image from "next/image"

function Logo(props: any) {
    const { renderDefault, title } = props
  return (
    <div className="flex items-center justify-center">
        <Image
        className="rounded-full aspect-square object-cover"
        height={50}
        width={50}
        src="https://images.pexels.com/photos/15645226/pexels-photo-15645226/free-photo-of-man-stretching-hand-through-fisheye-lens.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        alt="logo"
        />
        {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo