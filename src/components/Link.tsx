import { ComponentProps, ReactNode } from "react"

type LinkProps = ComponentProps<'a'> & {
  children: ReactNode
}

export default function Link({ children, ...props }: LinkProps) {
  return (
    <div>
      <a
        className={`text-[0.925rem] text-dark_primary p-2 hover:cursor-pointer`}
        {...props}
      >
        {children}
      </a>
    </div>
  )
}