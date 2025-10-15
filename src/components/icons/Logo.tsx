import { forwardRef } from 'react'
import type { SVGProps } from '../../types/global'

const Logo =forwardRef<SVGSVGElement, SVGProps>(({ className, ...props }, ref) => {
    return (
        <svg ref={ref} className={className} width="60" height="62" viewBox="0 0 60 62" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="2.5" y="2.5" width="55" height="56.7323" fill="white" stroke="#4F46E5" strokeWidth="5" />
            <path d="M22.9966 12.9638C25.5435 12.9638 27.4481 15.3025 26.9324 17.7966L26.2344 21.1724C25.4143 25.1385 29.3146 28.4365 33.0893 26.9687L42.2728 23.3978C45.771 22.0375 48.527 26.5668 45.7112 29.0485V29.0485C44.7847 29.865 44.381 31.1241 44.6599 32.3271L45.2776 34.9913C46.4871 40.2084 40.7745 44.2761 36.2401 41.4265L34.1242 40.0969C32.1726 38.8704 29.6909 38.8704 27.7392 40.0969L25.6234 41.4265C21.0889 44.2761 15.3763 40.2084 16.5859 34.9913L17.2837 31.9816C17.7819 29.8327 17.0607 27.5837 15.4058 26.1252L12.9771 23.9847C9.00867 20.4871 11.1792 13.9385 16.4511 13.5037L22.9966 12.9638V12.9638Z" fill="#4F46E5" />
        </svg>
    )
})
Logo.displayName = "Logo"

export default Logo
