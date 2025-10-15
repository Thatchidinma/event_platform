import Divider from './divider'
import sample from "../../public/sample.webp"

type PostCardType = {
    title: string;
    body: string;
    date?: string
    time?:string
    pets?: boolean
    organizer?:string
}

const PostCard = ({ title, body, date, time, pets, organizer }: PostCardType) => {
    return (
        <div className="not-[:last-child]:border-b border-neutral-300 dark:border-neutral-700 w-full">
            <div className='flex flex-col lg:flex-row p-8 gap-4 items-center cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:scale-[99%] '>
                <img src={sample} alt='thumbnail' width={300} height={300} className='w-full h-[200px] lg:w-[300px] lg:h-[300px] object-cover ' />
                <div className="flex flex-col gap-4">
                    <div className="">
                        <h3 className="text-[#4F46E5] text-xl lg:text-2xl font-bold">{title}</h3>
                        <div className="flex gap-4 text-neutral-500">
                            <p className="">{date}</p>
                            <Divider className='border-neutral-500' />
                            <p className="">{time}</p>
                        </div>
                        <div className="flex gap-4 text-[#4F46E5]/80">
                            <p className="">👤Orgabized By: {organizer}</p>
                            <p className="">{pets ? "✅" : "❌ No"} Pets Allowed</p>
                        </div>
                    </div>
                    <p className="">{body}</p>
                </div>
            </div>

        </div>
    )
}

export default PostCard
