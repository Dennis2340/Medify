/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import ViewHealthProfile from './ViewHealthProfile'

export type HealthProfileData = {
  age?: number
  gender?: 'male' | 'female' | 'other'
  weight?: number
  height?: number
  allergies: string[]
  currentMedications: string[]
  medicalConditions: string[]
  medicalHistory?: string
  dietaryRestrictions: string[]
  familyHistory?: string
  lifestyle?: {
    smoker: boolean
    alcoholConsumption: 'none' | 'light' | 'moderate' | 'heavy'
    exerciseFrequency: 'sedentary' | 'light' | 'moderate' | 'active'
  }
  pregnancyStatus?: 'not_applicable' | 'not_pregnant' | 'pregnant' | 'breastfeeding'
  bloodType?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
}

const HealthProfile = () => {
  const [loading, setLoading] = useState(true)
  const [healthProfile, setHealthProfile] = useState<HealthProfileData | null>(null)
  const [formData, setFormData] = useState<HealthProfileData>({
    allergies: [],
    currentMedications: [],
    medicalConditions: [],
    dietaryRestrictions: [],
  })
  const [step, setStep] = useState(1)

  useEffect(() => {
    const fetchHealthProfile = async () => {
      try {
        const response = await axios.get('/api/healthprofile')
        setHealthProfile(response.data)
      } catch (error) {
        console.error('Error fetching health profile:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchHealthProfile()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleArrayInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value.split(',').map(item => item.trim()) }))
  }

  const handleLifestyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    //@ts-ignore
    setFormData(prev => ({
      ...prev,
      lifestyle: { ...prev.lifestyle, [name]: value }
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // Prevent default form submission
    try {
      setLoading(true)
      const response = await axios.post('/api/healthprofile', formData)
      setHealthProfile(response.data.healthProfile)
    } catch (error) {
      console.error('Error saving health profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Age</label>
                <input
                  name="age"
                  type="number"
                  value={formData.age || ''}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender || ''}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Weight (kg)</label>
                <input
                  name="weight"
                  type="number"
                  value={formData.weight || ''}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Height (cm)</label>
                <input
                  name="height"
                  type="number"
                  value={formData.height || ''}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </>
        )
      case 2:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Medical Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Allergies (comma-separated)</label>
                <input
                  name="allergies"
                  type="text"
                  value={formData.allergies.join(',')}
                  onChange={handleArrayInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Current Medications (comma-separated)</label>
                <input
                  name="currentMedications"
                  type="text"
                  value={formData.currentMedications.join(',')}
                  onChange={handleArrayInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Medical Conditions (comma-separated)</label>
                <input
                  name="medicalConditions"
                  type="text"
                  value={formData.medicalConditions.join(',')}
                  onChange={handleArrayInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </>
        )
      case 3:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Health History</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block mb-2">Medical History</label>
                <textarea
                  name="medicalHistory"
                  value={formData.medicalHistory || ''}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  rows={3}
                ></textarea>
              </div>
              <div>
                <label className="block mb-2">Family History</label>
                <textarea
                  name="familyHistory"
                  value={formData.familyHistory || ''}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  rows={3}
                ></textarea>
              </div>
            </div>
          </>
        )
      case 4:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Lifestyle</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-2">Smoker</label>
                <select
                  name="smoker"
                  value={formData.lifestyle?.smoker ? 'true' : 'false'}
                  onChange={handleLifestyleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Alcohol Consumption</label>
                <select
                  name="alcoholConsumption"
                  value={formData.lifestyle?.alcoholConsumption || ''}
                  onChange={handleLifestyleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select</option>
                  <option value="none">None</option>
                  <option value="light">Light</option>
                  <option value="moderate">Moderate</option>
                  <option value="heavy">Heavy</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Exercise Frequency</label>
                <select
                  name="exerciseFrequency"
                  value={formData.lifestyle?.exerciseFrequency || ''}
                  onChange={handleLifestyleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select</option>
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Light</option>
                  <option value="moderate">Moderate</option>
                  <option value="active">Active</option>
                </select>
              </div>
            </div>
          </>
        )
      case 5:
        return (
          <>
            <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Blood Type</label>
                <select
                  name="bloodType"
                  value={formData.bloodType || ''}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select Blood Type</option>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2">Pregnancy Status</label>
                <select
                  name="pregnancyStatus"
                  value={formData.pregnancyStatus || ''}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select Status</option>
                  <option value="not_applicable">Not Applicable</option>
                  <option value="not_pregnant">Not Pregnant</option>
                  <option value="pregnant">Pregnant</option>
                  <option value="breastfeeding">Breastfeeding</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Dietary Restrictions (comma-separated)</label>
                <input
                  name="dietaryRestrictions"
                  type="text"
                  value={formData.dietaryRestrictions.join(',')}
                  onChange={handleArrayInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </>
        )
    }
  }

  if (loading) {
    return <div className="flex justify-center items-center h-full">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  }

  if (healthProfile) {
    return <ViewHealthProfile healthProfile={healthProfile} onUpdate={() => setHealthProfile(null)} />
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Create Your Health Profile</h2>
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                s <= step ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {s}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>
      </div>
      {renderStep()}
      <div className="mt-6 flex justify-between">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
          >
            Previous
          </button>
        )}
        {step < 5 ? (
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            disabled={loading}
            className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Saving...' : 'Save Health Profile'}
          </button>
        )}
      </div>
    </form>
  )
}

export default HealthProfile