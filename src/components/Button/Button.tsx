import "./Button.scss"
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  secondary?: boolean
  dark?: boolean
}

const Button: React.FC<ButtonProps> = ({
  primary,
  secondary,
  dark,
  children,
  ...rest
}): JSX.Element => {
  if (primary && secondary) {
    throw Error("You can only pass either 'primary' or 'secondary', but not both at the same time.")
  }

  const className = `btn ${primary && "primary"} ${secondary && "secondary"} ${dark && "dark"}`
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  )
}

export default Button
