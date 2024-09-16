"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { Loader2, AlertCircle, CheckCircle, AlertTriangle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type DrugInfo = {
  id: string
  name: string
  activeIngredients: string[]
  usage: string
  sideEffects: string[]
  contraindications: string[]
}

type VerificationResult = {
  suitability: string
  suitabilityColor: string
  reasoning: string
  warnings: string[]
  suggestions: string[]
  additionalInfo: string
}

const DrugVerificationDashboard: React.FC = () => {
  const [drugInfo, setDrugInfo] = useState<DrugInfo>({
    id: '',
    name: '',
    activeIngredients: [],
    usage: '',
    sideEffects: [],
    contraindications: []
  })
  const [useCase, setUseCase] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<VerificationResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showPopup, setShowPopup] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setDrugInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleArrayInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setDrugInfo(prev => ({ ...prev, [name]: value.split(',').map(item => item.trim()) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const response = await axios.post('/api/verification', { drugInfo, useCase })
      setResult(response.data)
      setShowPopup(true)
    } catch (error) {
      console.error('Error during drug verification:', error)
      setError('An error occurred during drug verification. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const renderSuitabilityIcon = (suitability: string) => {
    switch (suitability) {
      case 'Highly Suitable':
      case 'Suitable':
        return <CheckCircle className="w-12 h-12 text-green-500" />
      case 'Use with Caution':
        return <AlertTriangle className="w-12 h-12 text-yellow-500" />
      case 'Potentially Unsuitable':
      case 'Not Recommended':
        return <AlertCircle className="w-12 h-12 text-red-500" />
      default:
        return null
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Drug Verification Dashboard</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Drug Name</label>
          <input
            type="text"
            name="name"
            value={drugInfo.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Active Ingredients (comma-separated)</label>
          <textarea
            name="activeIngredients"
            value={drugInfo.activeIngredients.join(', ')}
            onChange={handleArrayInputChange}
            className="w-full p-2 border rounded"
            rows={2}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Usage</label>
          <textarea
            name="usage"
            value={drugInfo.usage}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Side Effects (comma-separated)</label>
          <textarea
            name="sideEffects"
            value={drugInfo.sideEffects.join(', ')}
            onChange={handleArrayInputChange}
            className="w-full p-2 border rounded"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Contraindications (comma-separated)</label>
          <textarea
            name="contraindications"
            value={drugInfo.contraindications.join(', ')}
            onChange={handleArrayInputChange}
            className="w-full p-2 border rounded"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Use Case</label>
          <textarea
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            className="w-full p-2 border rounded"
            rows={3}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? <Loader2 className="animate-spin mx-auto" /> : 'Verify Drug'}
        </button>
      </form>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <AnimatePresence>
        {showPopup && result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-center justify-center mb-4">
                {renderSuitabilityIcon(result.suitability)}
              </div>
              <h2 className="text-2xl font-bold text-center mb-4" style={{ color: result.suitabilityColor }}>
                {result.suitability}
              </h2>
              <p className="mb-4 text-center">{result.reasoning}</p>
              {result.warnings.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-bold mb-2">Warnings:</h3>
                  <ul className="list-disc pl-5">
                    {result.warnings.map((warning, index) => (
                      <li key={index}>{warning}</li>
                    ))}
                  </ul>
                </div>
              )}
              {result.suggestions.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-bold mb-2">Suggestions:</h3>
                  <ul className="list-disc pl-5">
                    {result.suggestions.map((suggestion, index) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
              )}
              {result.additionalInfo && (
                <div>
                  <h3 className="font-bold mb-2">Additional Information:</h3>
                  <p>{result.additionalInfo}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DrugVerificationDashboard
