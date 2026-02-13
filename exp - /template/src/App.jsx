import { lazy, Suspense, useState } from 'react'
const Dashboard = lazy(() => import('./components/dashboard'))
import './App.css'

function App() {
  return (
    <Suspense fallback = {<h3>Loading...</h3>}>
      <Dashboard />
    </Suspense>
  )
}

export default App

