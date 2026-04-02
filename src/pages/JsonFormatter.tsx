import { useState } from 'react'
import ToolLayout from '../components/ToolLayout'

export default function JsonFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [indent, setIndent] = useState(2)

  function format() {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, indent))
      setError('')
    } catch (e) {
      setError((e as Error).message)
      setOutput('')
    }
  }

  function minify() {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed))
      setError('')
    } catch (e) {
      setError((e as Error).message)
      setOutput('')
    }
  }

  function copyOutput() {
    navigator.clipboard.writeText(output)
  }

  return (
    <ToolLayout
      title="JSON 포매터"
      description="JSON 데이터를 보기 좋게 정렬(포맷)하거나 압축(미니파이)합니다. 유효성 검사도 함께 수행됩니다."
    >
      <div className="flex gap-3 mb-4 flex-wrap items-center">
        <button
          onClick={format}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          포맷
        </button>
        <button
          onClick={minify}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
        >
          압축
        </button>
        <label className="flex items-center gap-2 text-sm text-gray-600">
          들여쓰기:
          <select
            value={indent}
            onChange={(e) => setIndent(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value={2}>2 칸</option>
            <option value={4}>4 칸</option>
            <option value={8}>탭</option>
          </select>
        </label>
        {output && (
          <button
            onClick={copyOutput}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm ml-auto"
          >
            결과 복사
          </button>
        )}
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">입력</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='{"key": "value"}'
            className="w-full h-96 p-4 bg-white border border-gray-200 rounded-lg font-mono text-sm text-gray-900 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">결과</label>
          <textarea
            value={output}
            readOnly
            placeholder="포맷 또는 압축 버튼을 클릭하세요"
            className="w-full h-96 p-4 bg-gray-50 border border-gray-200 rounded-lg font-mono text-sm text-gray-900 resize-y focus:outline-none"
          />
        </div>
      </div>
    </ToolLayout>
  )
}
