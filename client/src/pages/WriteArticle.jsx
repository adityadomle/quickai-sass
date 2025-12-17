import { Edit, Sparkles } from "lucide-react"
import { useState } from "react"
import Markdown from "react-markdown"

const WriteArticle = () => {
  const articleLength = [
    { length: 800, text: "Short (500-800 words)" },
    { length: 1200, text: "Medium (800-1200 words)" },
    { length: 1600, text: "Long (1200+ words)" },
  ]

  const [selectedLength, setSelectedLength] = useState(articleLength[2])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState("")

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setContent("## Demo article\n\nThis is frontend preview.")
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="h-full p-6 bg-slate-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl">

        {/* Left */}
        <form
          onSubmit={onSubmitHandler}
          className="bg-white rounded-xl border border-slate-200 p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 text-blue-600" />
            <h1 className="text-sm font-semibold">Article Configuration</h1>
          </div>

          <label className="text-xs font-medium text-slate-600">
            Article Topic
          </label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="mt-2 w-full text-sm px-3 py-2 rounded-md border border-slate-300 outline-none"
            placeholder="The future of artificial intelligence is..."
            required
          />

          <p className="mt-5 text-xs font-medium text-slate-600">
            Article Length
          </p>

          <div className="mt-3 flex gap-2 flex-wrap">
            {articleLength.map((item, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setSelectedLength(item)}
                className={`text-xs px-3 py-1 rounded-full border ${
                  selectedLength.text === item.text
                    ? "border-blue-500 text-blue-600 bg-blue-50"
                    : "border-slate-300 text-slate-500"
                }`}
              >
                {item.text}
              </button>
            ))}
          </div>

          <button
            disabled={loading}
            className="mt-6 w-full text-sm py-2 rounded-md text-white bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin" />
            ) : (
              <Edit className="w-4" />
            )}
            Generate article
          </button>
        </form>

        {/* Right */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 min-h-[420px] flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Edit className="w-4 text-blue-600" />
            <h1 className="text-sm font-semibold">Generated article</h1>
          </div>

          {!content ? (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-400 text-sm gap-3">
              <Edit className="w-8 h-8" />
              <p>Enter a topic and click “Generate article” to get started</p>
            </div>
          ) : (
            <div className="flex-1 overflow-y-scroll text-sm text-slate-700">
              <Markdown>{content}</Markdown>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default WriteArticle
