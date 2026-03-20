import style from './style.module.css'
import { type PropsWithChildren } from 'react'
import clsx from 'clsx'

function Card({children, className} : PropsWithChildren<{className?: string}>) {
  return <div className={clsx(style.card, className)}>{children}</div>
}

export default Card