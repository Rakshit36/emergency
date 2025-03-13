import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-blue text-white hover:bg-gray-900 hover:shadow-md active:scale-95",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 hover:shadow-md active:scale-95",
        outline:
          "border border-input bg-background text-black hover:bg-gray-200 hover:shadow-md active:scale-95",
        secondary:
          "bg-gray-800 text-white hover:bg-gray-700 hover:shadow-md active:scale-95",
        ghost: "text-black hover:bg-gray-200 hover:shadow-md active:scale-95",
        link: "text-black underline-offset-4 hover:underline hover:text-gray-700",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-xl px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"


export { Button, buttonVariants }
