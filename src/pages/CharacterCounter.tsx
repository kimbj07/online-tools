import { useState } from 'react'
import ToolLayout from '../components/ToolLayout'

export default function CharacterCounter() {
  const [text, setText] = useState('')

  const charCount = text.length
  const charCountNoSpaces = text.replace(/\s/g, '').length
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
  const lineCount = text === '' ? 0 : text.split('\n').length
  const byteCount = new TextEncoder().encode(text).length

  const stats = [
    { label: '전체 글자수', value: charCount },
    { label: '공백 제외', value: charCountNoSpaces },
    { label: '단어수', value: wordCount },
    { label: '줄 수', value: lineCount },
    { label: '바이트', value: byteCount },
  ]

  return (
    <ToolLayout
      title="글자수 세기"
      description="텍스트의 글자수, 단어수, 바이트를 실시간으로 계산합니다. 공백 포함/제외 글자수를 확인하세요."
    >
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{stat.value.toLocaleString()}</div>
            <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="여기에 텍스트를 입력하세요..."
        className="w-full h-80 p-4 bg-white border border-gray-200 rounded-lg text-base text-gray-900 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </ToolLayout>
  )
}
