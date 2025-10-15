import { forwardRef } from 'react'
import type { SVGProps } from '../../types/global'

const LoadingIcon = forwardRef<SVGSVGElement, SVGProps>(({ className, ...props }, ref) => {
    return (
        <svg ref={ref} className={`text-[#4F46E5] animate-spin ${className}`} width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fillOpacity="0.01"></rect>
                <path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    )
})
LoadingIcon.displayName = "LoadingIcon"

export default LoadingIcon
