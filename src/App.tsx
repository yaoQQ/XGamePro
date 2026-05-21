import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import KnowledgeGraph from '@/pages/KnowledgeGraph'
import ApiDocs from '@/pages/ApiDocs'
import InheritanceTree from '@/pages/InheritanceTree'
import ModuleOverview from '@/pages/ModuleOverview'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<KnowledgeGraph />} />
        <Route path="/api" element={<ApiDocs />} />
        <Route path="/inheritance" element={<InheritanceTree />} />
        <Route path="/modules" element={<ModuleOverview />} />
      </Route>
    </Routes>
  )
}
