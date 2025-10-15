import { UseFilter } from '../context/searchContext'
const SearchBar = ({className}:{className?:string}) => {
    const { search, setSearch } = UseFilter()
    return (
        <input
            type="search"
            name='search bar'
            className={`w-[300px] lg:w-[500px] outline-none border border-neutral-500 p-4 rounded-2xl focus:border-[#4F46E5] ${className}`}
            placeholder="search feed"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    )
}

export default SearchBar
