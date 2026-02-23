import { createContext, useContext, useMemo, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const resume = {
    name: 'Shubham Sharma',
    objective:
      'Driven Computer Science student with solid problem-solving skills and practical coding experience. Looking to contribute as an Associate Software Engineer by building scalable, efficient, and high-performance software solutions in a fast-paced, product-focused team.',
    role: 'Frontend Developer'
  }

  const value = useMemo(
    () => ({
      resume,
      theme,
      toggleTheme: () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }),
    [resume, theme]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }

  return context
}
