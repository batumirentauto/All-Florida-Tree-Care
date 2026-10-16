import React from 'react'

interface StarRatingProps {
  value?: number
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
}

export const StarRating: React.FC<StarRatingProps> = ({
  value = 5,
  size = 'sm',
  className = '',
}) => {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }
  const iconSize = sizeClasses[size]

  return (
    <div
      className={`inline-flex items-center gap-0.5 ${className}`}
      aria-label={`${value} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((starIndex) => {
        const fillPercentage = Math.max(0, Math.min(1, value - (starIndex - 1)))

        return (
          <div key={starIndex} className={`relative ${iconSize} shrink-0`}>
            {/* Background dim star */}
            <svg
              className={`${iconSize} text-slate-700 fill-current`}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            {/* Foreground gold filled star with percentage width */}
            {fillPercentage > 0 && (
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${Math.round(fillPercentage * 100)}%` }}
              >
                <svg
                  className={`${iconSize} text-amber-400 fill-current`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
