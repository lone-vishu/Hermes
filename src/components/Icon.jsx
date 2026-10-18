import clsx from 'clsx'

export default function Icon({ name, className }) {
  return <span className={clsx('material-symbols-outlined', className)}>{name}</span>
}
