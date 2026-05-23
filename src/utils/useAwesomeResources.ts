import { ref } from 'vue'
import type { AwesomeResource } from './data'

const RESOURCES_URL =
  'https://raw.githubusercontent.com/itsmmunoz/awesome-resources/refs/heads/main/data/resources.json'
const CACHE_KEY = 'awesome-resources'
const CACHE_TTL = 1000 * 60 * 60

const resources = ref<AwesomeResource[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

let fetched = false

function loadCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return false
    const { data, ts } = JSON.parse(raw)
    if (Date.now() - ts > CACHE_TTL) return false
    resources.value = data
    return true
  } catch {
    return false
  }
}

function saveCache(data: AwesomeResource[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }))
  } catch {}
}

async function fetchResources() {
  if (fetched) return
  fetched = true
  error.value = null

  if (loadCache()) return

  loading.value = true

  try {
    const res = await fetch(RESOURCES_URL)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    resources.value = await res.json()
    saveCache(resources.value)
  } catch (e) {
    error.value = (e as Error).message
  } finally {
    loading.value = false
  }
}

function retry() {
  fetched = false
  fetchResources()
}

export function useAwesomeResources() {
  fetchResources()
  return { resources, loading, error, retry }
}
