import "./Button.css"

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export function Button({
  children,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className="vyntrax-button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}