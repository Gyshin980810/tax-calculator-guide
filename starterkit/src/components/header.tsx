import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          세법 검색 시스템
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            홈
          </Link>
          <Link href="/search" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            검색
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
