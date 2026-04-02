import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

interface ToolLayoutProps {
  title: string
  description: string
  children: React.ReactNode
}

export default function ToolLayout({ title, description, children }: ToolLayoutProps) {
  return (
    <>
      <Helmet>
        <title>{title} - 온라인 도구 모음</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} - 온라인 도구 모음`} />
        <meta property="og:description" content={description} />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
            <Link to="/" className="text-gray-500 hover:text-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">{title}</h1>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-gray-200 bg-white mt-auto">
          <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
            © 2026 온라인 도구 모음. 모든 도구는 무료로 제공됩니다.
          </div>
        </footer>
      </div>
    </>
  )
}
