import { CloseSquare } from 'iconsax-reactjs'
import { UseFilter, type categoryEnum } from '../context/searchContext'

const Categories = () => {
  const { category, setCategory, clear } = UseFilter()
  const Categories = ['Educative', 'Food', 'Tech', 'pets-allowed']
  return (
    <div className='w-[300px] md:w-[500px] lg:w-[700px] xl:w-[1000px] m-auto flex gap-4 overflow-x-scroll'>
      {[...Categories].map((current, index) => {
        return (
          <div key={index} onClick={() => setCategory(current as categoryEnum)}
            className={`p-2 rounded-xl min-w-24 text-center cursor-pointer ${category === current ? "bg-[#4F46E5] text-white" : "bg-neutral-200 text-neutral-400 dark:bg-neutral-900 dark:text-neutral-700 hover:bg-[#4F46E5]/50 hover:text-white"} font-bold `}>
            <p className="text-sm">{current}</p>
          </div>
        )
      })}
      {category && <div onClick={clear}
        className={`rounded-xl text-center cursor-pointer text-neutral-400 dark:text-neutral-700 hover:text-[#4F46E5] `}>
       <CloseSquare size={30} color='currentColor' /> 
      </div>}
    </div>
  )
}

export default Categories
