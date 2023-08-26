"use client"
import {
  User,
  CreditCard,
  Settings,
  Keyboard,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function CategoryDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ml-10" asChild>
        <Button className="text-lg font-semibold">Categories</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          Necklaces
        </DropdownMenuItem>
        <DropdownMenuItem>
          Rings
        </DropdownMenuItem>
        <DropdownMenuItem>
          Bracelets
        </DropdownMenuItem>
        <DropdownMenuItem>
          Earings
        </DropdownMenuItem>
        <DropdownMenuItem>
          Mens jewellery
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
