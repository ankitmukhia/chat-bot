interface ChatLayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: ChatLayoutProps) {
  return <div className="relative flex overflow-hidden">
    {children}
  </div>
}
