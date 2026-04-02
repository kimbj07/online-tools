import { useState, useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import ToolLayout from '../components/ToolLayout'

export default function QrGenerator() {
  const [text, setText] = useState('')
  const [size, setSize] = useState(256)
  const canvasRef = useRef<HTMLDivElement>(null)

  function download() {
    const canvas = canvasRef.current?.querySelector('canvas')
    if (!canvas) return
    const url = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = url
    a.download = 'qrcode.png'
    a.click()
  }

  return (
    <ToolLayout
      title="QR 코드 생성기"
      description="URL이나 텍스트를 QR 코드 이미지로 변환합니다. PNG 파일로 다운로드할 수 있습니다."
    >
      <div className="max-w-lg mx-auto">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="URL 또는 텍스트를 입력하세요"
          className="w-full p-4 bg-white border border-gray-200 rounded-lg text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
        />

        <div className="flex gap-4 items-center mb-6">
          <label className="flex items-center gap-2 text-sm text-gray-600">
            크기:
            <select
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value={128}>128px</option>
              <option value={256}>256px</option>
              <option value={512}>512px</option>
            </select>
          </label>
          {text && (
            <button
              onClick={download}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              PNG 다운로드
            </button>
          )}
        </div>

        {text && (
          <div ref={canvasRef} className="flex justify-center p-8 bg-white rounded-lg border border-gray-200">
            <QRCodeCanvas value={text} size={size} level="M" includeMargin />
          </div>
        )}

        {!text && (
          <div className="flex items-center justify-center h-64 bg-white rounded-lg border border-gray-200 text-gray-400">
            텍스트를 입력하면 QR 코드가 생성됩니다
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
