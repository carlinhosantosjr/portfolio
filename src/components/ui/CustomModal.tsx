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
        className={`bg-gradient-to-tr from-blue-100 via-slate-100 via-50% to-orange-100 rounded-sm shadow-lg p-6 inline-block relative transform transition-transform duration-500 ease-in-out ${
          isOpen
? 'scale-100 opacity-100'
: 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute p-3 text-xl top-0 right-0 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  )
}
