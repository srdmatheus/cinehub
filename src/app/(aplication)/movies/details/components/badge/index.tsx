type BadgeProps = {
  description: string
  title: string
  color?: 'default' | 'orange'
}
export const Badge = ({
  title,
  description,
  color = 'default'
}: BadgeProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 rounded-md border-2 border-primary/10 p-4 ${
        color === 'orange' ? 'bg-orange' : ''
      }`}
    >
      <h3
        className={`text-sm font-semibold ${
          color === 'orange' ? 'text-background' : 'text-primary'
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-base font-semibold ${
          color === 'orange' ? 'text-background' : 'text-primary'
        }`}
      >
        {description}
      </p>
    </div>
  )
}
