import Link from "next/link"
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'


function StudioNavbar(props: any) {
  return (
    <div>
        <div className=" flex justify-between item-center p-5">
            <Link href="/" className="text-[#f7ab0a] flex item-center">
                <ArrowUturnLeftIcon className="h-6 w-6 mr-2 text-[#f7ab0a]" />
                Got to website</Link>
            
        </div>
        <>{props.renderDefault(props)}</>
    
    </div>
  )
}

export default StudioNavbar