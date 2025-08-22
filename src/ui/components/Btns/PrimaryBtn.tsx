import React from 'react'

function PrimaryBtn({ children, className, event }: { children: React.ReactNode, className?: string, event?: () => void }) {
    return (
        <button onClick={event} className={`inline-flex items-center gap-3 bg-[#5C6BC01A] text-primary-text text-sm 2xl:text-base font-medium px-6 py-2 hover:bg-[#5c6bc077] transition-colors ${className?.includes("rounded-full")? className:"rounded-md"}`}>
            {children}
        </button>
    )
}

export default PrimaryBtn
