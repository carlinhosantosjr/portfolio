import React from 'react'

interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function CustomModal({ isOpen, onClose, children }:CustomModalProps) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
        isOpen
? 'opacity-100 pointer-events-auto bg-black/50'
: 'opacity-0 pointer-events-none bg-transparent'
      }`}
    >
      <div
        className={`bg-gradient-to-tr from-[var(--gray-300)] via-[var(--fontcolor-mediumgray)] via-20% to-[var(--gray-300)] rounded-sm shadow-lg p-6 inline-block relative transform transition-transform duration-500 ease-in-out ${
          isOpen
? 'opacity-100'
: 'opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute p-3 text-xl top-0 right-0 text-gray-300 hover:text-gray-400 cursor-pointer"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  )
}
