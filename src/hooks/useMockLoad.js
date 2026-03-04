import { useEffect, useState } from 'react'

const MOCK_LOAD_DELAY_MS = 600

export function useMockLoad() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), MOCK_LOAD_DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  return loading
}
