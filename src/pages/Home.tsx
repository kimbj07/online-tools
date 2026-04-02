import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const tools = [
  {
    title: '글자수 세기',
    description: '텍스트의 글자수, 단어수, 바이트를 실시간으로 계산합니다.',
    path: '/character-counter',
    icon: '✏️',
  },
  {
    title: 'JSON 포매터',
    description: 'JSON 데이터를 보기 좋게 정렬하거나 압축합니다.',
    path: '/json-formatter',
    icon: '{}',
  },
  {
    title: 'QR 코드 생성기',
    description: 'URL이나 텍스트를 QR 코드로 변환합니다.',
    path: '/qr-generator',
    icon: '📱',
  },
  {
    title: '멍사주',
    description: '우리 강아지의 사주팔자를 알아보세요. AI가 분석하는 반려견 운세!',
    path: 'https://mengsaju.vercel.app/',
    icon: '🐶',
    external: true,
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>온라인 도구 모음 - 무료 웹 유틸리티</title>
        <meta name="description" content="글자수 세기, JSON 포매터, QR 코드 생성기 등 개발자와 일반 사용자를 위한 무료 온라인 도구 모음" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">온라인 도구 모음</h1>
            <p className="text-lg text-gray-600">개발자와 일반 사용자를 위한 무료 웹 유틸리티</p>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool) => {
              const className = "block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
              const content = (
                <>
                  <div className="text-3xl mb-4">{tool.icon}</div>
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {tool.title}
                    {'external' in tool && <span className="text-xs text-gray-400 ml-2">↗</span>}
                  </h2>
                  <p className="text-sm text-gray-500">{tool.description}</p>
                </>
              )
              return 'external' in tool ? (
                <a key={tool.path} href={tool.path} target="_blank" rel="noopener noreferrer" className={className}>
                  {content}
                </a>
              ) : (
                <Link key={tool.path} to={tool.path} className={className}>
                  {content}
                </Link>
              )
            })}
          </div>
        </main>
        <footer className="border-t border-gray-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
            © 2026 온라인 도구 모음. 모든 도구는 무료로 제공됩니다.
          </div>
        </footer>
      </div>
    </>
  )
}
