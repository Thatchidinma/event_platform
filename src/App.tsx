import './App.css'
import NavBar from './components/NavBar'
import Posts from './components/Posts'
import { FilterProvider } from './context/searchContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Loading from './components/loading.tsx'
import { Suspense } from 'react'

function App() {
  const queryClient = new QueryClient();

  return (
    <Suspense fallback={<Loading />}>
      <FilterProvider>
        <QueryClientProvider client={queryClient}>
          <div className="">
            <NavBar />
            <main className=" h-[calc(100vh_-_96px)] overflow-scroll p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
              <Posts />
            </main>
          </div>
        </QueryClientProvider>
      </FilterProvider>
    </Suspense>
  )
}

export default App
