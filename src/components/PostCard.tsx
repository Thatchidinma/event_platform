import { Link } from 'react-router';
import Divider from './divider'
import sample from "./public/sample.webp"


type PostCardType = {
    title: string;
    body: string;
    id: string
}

const PostCard = ({ title, body,id }: PostCardType) => {
    return (
        <Link to={`/${id}`} className="not-[:last-child]:border-b border-neutral-300 dark:border-neutral-700">
            <div className='flex flex-col lg:flex-row p-8 gap-4 items-center cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:scale-[99%] '>
                <img src={sample} alt='thumbnail' width={300} height={300} className='w-full h-[200px] lg:w-[300px] lg:h-[300px] object-cover ' />
                <div className="flex flex-col gap-4">
                    <div className="">
                        <h3 className="text-[#4F46E5] text-xl lg:text-2xl font-bold">{title}</h3>
                        <div className="flex gap-4 text-neutral-500">
                            <p className="">B .A .Bels</p>
                            <Divider className='border-neutral-500' />
                            <p className="">20 Apri, 25</p>
                        </div>
                    </div>
                    <p className="">{body.slice(0, 150)}...</p>
                </div>
            </div>

        </Link>
    )
}

export default PostCard
