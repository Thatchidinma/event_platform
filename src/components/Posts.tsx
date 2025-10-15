import PostCard from './PostCard'
import Categories from './Categories'
import Skeleton from './Skeleton'
import SearchBar from './SearchBar'
import { useGetEvents } from '../actions/queries';
import { UseFilter } from '../context/searchContext';


const Posts = () => {
    const {
        data: events, // Renamed 'data' to 'events' for clarity
        isLoading
    } = useGetEvents();

    const { search, category } = UseFilter()

    return (
        <div className="w-full flex flex-col gap-8">
            <Categories />
            <SearchBar className=' sm:hidden m-auto' />
            <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start lg:max-w-[800] m-auto ">
                {isLoading ? <Skeleton /> : <>
                     {events?.length === 0 ?
                    <>No events available</>
                    : events?.filter(
                        (post) =>
                            String(post.title)
                                ?.toLowerCase()
                                .includes(search.toLowerCase()) ||
                            String(post.description)
                                ?.toLowerCase()
                                .includes(search.toLowerCase()),
                    ).filter(
                        (post) => {
                            if (category) {
                                if (category === "pets-allowed"){
                                    return post.petsAllowed
                                }
                                return String(post.title)
                                    ?.toLowerCase()
                                    .includes(category.toLowerCase()) ||
                                    String(post.description)
                                        ?.toLowerCase()
                                        .includes(category.toLowerCase())
                            } else {
                                return true
                            }
                        }
                    ).map((item, index) => {
                        return (
                            <PostCard key={index} title={item.title} body={item.description} time={item.time} date={item.date} pets={item.petsAllowed}  organizer={item.organizer}/>
                        )
                    })}
                </>}
            </div>
        </div>
    )
}

export default Posts
