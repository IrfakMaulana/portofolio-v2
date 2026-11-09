import { AiOutlineLink } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import React from 'react'

type Props = React.HTMLProps<HTMLLIElement> & {
  title: string
  link?: string
  sentences?: (string | React.ReactNode)[]
  notAllowed?: boolean
  techStack?: { name: string; icon?: React.ComponentType<{ className?: string }> }[]
  badge?: string
}

export default function Experience({
  title,
  link,
  sentences,
  className,
  notAllowed,
  techStack,
  badge,
  onClick,
  ...props
}: Props) {
  const isExternal = link && (link.startsWith('http://') || link.startsWith('https://') || link.startsWith('mailto:'))

  return (
    <li
      className={`text-2xl sm:text-3xl ${onClick ? 'cursor-pointer' : ''} ${className || ''}`}
      onClick={onClick}
      {...props}
    >
      <div>
        <p className="flex flex-wrap items-center gap-2 font-poppins text-lg sm:text-xl lg:text-2xl font-semibold text-white">
          <span className={onClick ? 'transition-colors hover:text-yellow-300' : ''}>{title}</span>
          {badge && (
            <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 px-2.5 py-0.5 text-xs font-poppins font-medium text-yellow-300">
              {badge}
            </span>
          )}
          {notAllowed || !link || link === '/' ? null : isExternal ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-white/60 transition-colors hover:text-yellow-300"
              title="Buka tautan"
            >
              <AiOutlineLink className="inline text-lg" />
            </a>
          ) : (
            <Link
              to={link}
              onClick={(e) => e.stopPropagation()}
              className="text-white/60 transition-colors hover:text-yellow-300"
            >
              <AiOutlineLink className="inline text-lg" />
            </Link>
          )}
        </p>

        {sentences && sentences.length > 0 && (
          <div className="mt-1 flex flex-col gap-0.5 font-poppins text-sm sm:text-base text-secondary opacity-75">
            {sentences.map((line, i) => (
              <p key={i} className="m-0 leading-snug">
                {line}
              </p>
            ))}
          </div>
        )}

        {techStack && techStack.length > 0 && (
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {techStack.map((tech, idx) => {
              const IconComponent = tech.icon
              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs font-poppins text-white/75"
                >
                  {IconComponent && <IconComponent className="text-xs text-yellow-300" />}
                  <span>{tech.name}</span>
                </span>
              )
            })}
          </div>
        )}
      </div>
    </li>
  )
}
