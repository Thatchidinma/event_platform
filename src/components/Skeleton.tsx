import Divider from './divider'

const Skeleton = () => {
    return (
        <div className="border-b border-neutral-300 dark:border-neutral-700">
            <div className='flex flex-col lg:flex-row p-8 gap-4 items-center '>
                <div className='w-full h-[200px] lg:w-[300px] lg:h-[300px] skeleton  ' />
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <h3 className="h-5 md:h-6 lg:h-[30px] skeleton  rounded-3xl"></h3>
                        <div className="flex gap-4 ">
                            <p className="h-4 w-6 skeleton rounded-3xl"></p>
                            <Divider className='border-neutral-500' />
                            <p className="h-4 w-6 skeleton rounded-3xl"></p>
                        </div>
                    </div>
                    <p className="h-4 w-[200px] lg:max-w-[800] skeleton rounded-3xl lg:w-[300px]"></p>
                </div>
            </div>
        </div>
    )
}

export default Skeleton
