const textColorPairs = {
  'text-black': '#000',
  'text-white': '#fff',
  'text-rose-50': '#fff1f2',
  'text-rose-100': '#ffe4e6',
  'text-rose-200': '#fecdd3',
  'text-rose-300': '#fda4af',
  'text-rose-400': '#fb7185',
  'text-rose-500': '#f43f5e',
  'text-rose-600': '#e11d48',
  'text-rose-700': '#be123c',
  'text-rose-800': '#9f1239',
  'text-rose-900': '#881337',
  'text-pink-50': '#fdf2f8',
  'text-pink-100': '#fce7f3',
  'text-pink-200': '#fbcfe8',
  'text-pink-300': '#f9a8d4',
  'text-pink-400': '#f472b6',
  'text-pink-500': '#ec4899',
  'text-pink-600': '#db2777',
  'text-pink-700': '#be185d',
  'text-pink-800': '#9d174d',
  'text-pink-900': '#831843',
  'text-fuchsia-50': '#fdf4ff',
  'text-fuchsia-100': '#fae8ff',
  'text-fuchsia-200': '#f5d0fe',
  'text-fuchsia-300': '#f0abfc',
  'text-fuchsia-400': '#e879f9',
  'text-fuchsia-500': '#d946ef',
  'text-fuchsia-600': '#c026d3',
  'text-fuchsia-700': '#a21caf',
  'text-fuchsia-800': '#86198f',
  'text-fuchsia-900': '#701a75',
  'text-purple-50': '#faf5ff',
  'text-purple-100': '#f3e8ff',
  'text-purple-200': '#e9d5ff',
  'text-purple-300': '#d8b4fe',
  'text-purple-400': '#c084fc',
  'text-purple-500': '#a855f7',
  'text-purple-600': '#9333ea',
  'text-purple-700': '#7e22ce',
  'text-purple-800': '#6b21a8',
  'text-purple-900': '#581c87',
  'text-violet-50': '#f5f3ff',
  'text-violet-100': '#ede9fe',
  'text-violet-200': '#ddd6fe',
  'text-violet-300': '#c4b5fd',
  'text-violet-400': '#a78bfa',
  'text-violet-500': '#8b5cf6',
  'text-violet-600': '#7c3aed',
  'text-violet-700': '#6d28d9',
  'text-violet-800': '#5b21b6',
  'text-violet-900': '#4c1d95',
  'text-indigo-50': '#eef2ff',
  'text-indigo-100': '#e0e7ff',
  'text-indigo-200': '#c7d2fe',
  'text-indigo-300': '#a5b4fc',
  'text-indigo-400': '#818cf8',
  'text-indigo-500': '#6366f1',
  'text-indigo-600': '#4f46e5',
  'text-indigo-700': '#4338ca',
  'text-indigo-800': '#3730a3',
  'text-indigo-900': '#312e81',
  'text-blue-50': '#eff6ff',
  'text-blue-100': '#dbeafe',
  'text-blue-200': '#bfdbfe',
  'text-blue-300': '#93c5fd',
  'text-blue-400': '#60a5fa',
  'text-blue-500': '#3b82f6',
  'text-blue-600': '#2563eb',
  'text-blue-700': '#1d4ed8',
  'text-blue-800': '#1e40af',
  'text-blue-900': '#1e3a8a',
  'text-lightBlue-50': '#f0f9ff',
  'text-lightBlue-100': '#e0f2fe',
  'text-lightBlue-200': '#bae6fd',
  'text-lightBlue-300': '#7dd3fc',
  'text-lightBlue-400': '#38bdf8',
  'text-lightBlue-500': '#0ea5e9',
  'text-lightBlue-600': '#0284c7',
  'text-lightBlue-700': '#0369a1',
  'text-lightBlue-800': '#075985',
  'text-lightBlue-900': '#0c4a6e',
  'text-sky-50': '#f0f9ff',
  'text-sky-100': '#e0f2fe',
  'text-sky-200': '#bae6fd',
  'text-sky-300': '#7dd3fc',
  'text-sky-400': '#38bdf8',
  'text-sky-500': '#0ea5e9',
  'text-sky-600': '#0284c7',
  'text-sky-700': '#0369a1',
  'text-sky-800': '#075985',
  'text-sky-900': '#0c4a6e',
  'text-cyan-50': '#ecfeff',
  'text-cyan-100': '#cffafe',
  'text-cyan-200': '#a5f3fc',
  'text-cyan-300': '#67e8f9',
  'text-cyan-400': '#22d3ee',
  'text-cyan-500': '#06b6d4',
  'text-cyan-600': '#0891b2',
  'text-cyan-700': '#0e7490',
  'text-cyan-800': '#155e75',
  'text-cyan-900': '#164e63',
  'text-teal-50': '#f0fdfa',
  'text-teal-100': '#ccfbf1',
  'text-teal-200': '#99f6e4',
  'text-teal-300': '#5eead4',
  'text-teal-400': '#2dd4bf',
  'text-teal-500': '#14b8a6',
  'text-teal-600': '#0d9488',
  'text-teal-700': '#0f766e',
  'text-teal-800': '#115e59',
  'text-teal-900': '#134e4a',
  'text-emerald-50': '#ecfdf5',
  'text-emerald-100': '#d1fae5',
  'text-emerald-200': '#a7f3d0',
  'text-emerald-300': '#6ee7b7',
  'text-emerald-400': '#34d399',
  'text-emerald-500': '#10b981',
  'text-emerald-600': '#059669',
  'text-emerald-700': '#047857',
  'text-emerald-800': '#065f46',
  'text-emerald-900': '#064e3b',
  'text-green-50': '#f0fdf4',
  'text-green-100': '#dcfce7',
  'text-green-200': '#bbf7d0',
  'text-green-300': '#86efac',
  'text-green-400': '#4ade80',
  'text-green-500': '#22c55e',
  'text-green-600': '#16a34a',
  'text-green-700': '#15803d',
  'text-green-800': '#166534',
  'text-green-900': '#14532d',
  'text-lime-50': '#f7fee7',
  'text-lime-100': '#ecfccb',
  'text-lime-200': '#d9f99d',
  'text-lime-300': '#bef264',
  'text-lime-400': '#a3e635',
  'text-lime-500': '#84cc16',
  'text-lime-600': '#65a30d',
  'text-lime-700': '#4d7c0f',
  'text-lime-800': '#3f6212',
  'text-lime-900': '#365314',
  'text-yellow-50': '#fefce8',
  'text-yellow-100': '#fef9c3',
  'text-yellow-200': '#fef08a',
  'text-yellow-300': '#fde047',
  'text-yellow-400': '#facc15',
  'text-yellow-500': '#eab308',
  'text-yellow-600': '#ca8a04',
  'text-yellow-700': '#a16207',
  'text-yellow-800': '#854d0e',
  'text-yellow-900': '#713f12',
  'text-amber-50': '#fffbeb',
  'text-amber-100': '#fef3c7',
  'text-amber-200': '#fde68a',
  'text-amber-300': '#fcd34d',
  'text-amber-400': '#fbbf24',
  'text-amber-500': '#f59e0b',
  'text-amber-600': '#d97706',
  'text-amber-700': '#b45309',
  'text-amber-800': '#92400e',
  'text-amber-900': '#78350f',
  'text-orange-50': '#fff7ed',
  'text-orange-100': '#ffedd5',
  'text-orange-200': '#fed7aa',
  'text-orange-300': '#fdba74',
  'text-orange-400': '#fb923c',
  'text-orange-500': '#f97316',
  'text-orange-600': '#ea580c',
  'text-orange-700': '#c2410c',
  'text-orange-800': '#9a3412',
  'text-orange-900': '#7c2d12',
  'text-red-50': '#fef2f2',
  'text-red-100': '#fee2e2',
  'text-red-200': '#fecaca',
  'text-red-300': '#fca5a5',
  'text-red-400': '#f87171',
  'text-red-500': '#ef4444',
  'text-red-600': '#dc2626',
  'text-red-700': '#b91c1c',
  'text-red-800': '#991b1b',
  'text-red-900': '#7f1d1d',
  'text-warmGray-50': '#fafaf9',
  'text-warmGray-100': '#f5f5f4',
  'text-warmGray-200': '#e7e5e4',
  'text-warmGray-300': '#d6d3d1',
  'text-warmGray-400': '#a8a29e',
  'text-warmGray-500': '#78716c',
  'text-warmGray-600': '#57534e',
  'text-warmGray-700': '#44403c',
  'text-warmGray-800': '#292524',
  'text-warmGray-900': '#1c1917',
  'text-trueGray-50': '#fafafa',
  'text-trueGray-100': '#f5f5f5',
  'text-trueGray-200': '#e5e5e5',
  'text-trueGray-300': '#d4d4d4',
  'text-trueGray-400': '#a3a3a3',
  'text-trueGray-500': '#737373',
  'text-trueGray-600': '#525252',
  'text-trueGray-700': '#404040',
  'text-trueGray-800': '#262626',
  'text-trueGray-900': '#171717',
  'text-gray-50': '#fafafa',
  'text-gray-100': '#f4f4f5',
  'text-gray-200': '#e4e4e7',
  'text-gray-300': '#d4d4d8',
  'text-gray-400': '#a1a1aa',
  'text-gray-500': '#71717a',
  'text-gray-600': '#52525b',
  'text-gray-700': '#3f3f46',
  'text-gray-800': '#27272a',
  'text-gray-900': '#18181b',
  'text-coolGray-50': '#f9fafb',
  'text-coolGray-100': '#f3f4f6',
  'text-coolGray-200': '#e5e7eb',
  'text-coolGray-300': '#d1d5db',
  'text-coolGray-400': '#9ca3af',
  'text-coolGray-500': '#6b7280',
  'text-coolGray-600': '#4b5563',
  'text-coolGray-700': '#374151',
  'text-coolGray-800': '#1f2937',
  'text-coolGray-900': '#111827',
  'text-blueGray-50': '#f8fafc',
  'text-blueGray-100': '#f1f5f9',
  'text-blueGray-200': '#e2e8f0',
  'text-blueGray-300': '#cbd5e1',
  'text-blueGray-400': '#94a3b8',
  '': '#64748b',
  'text-blueGray-600': '#475569',
  'text-blueGray-700': '#334155',
  'text-blueGray-800': '#1e293b',
  'text-blueGray-900': '#0f172a'
}

const textColors = Object.keys(textColorPairs)
export default textColors