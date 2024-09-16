""
import React from 'react'
import { HealthProfileData } from './HealthProfile'

interface ViewHealthProfileProps {
  healthProfile: HealthProfileData
  onUpdate: () => void
}

const ViewHealthProfile: React.FC<ViewHealthProfileProps> = ({ healthProfile, onUpdate }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Your Health Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProfileSection title="Basic Information">
          <ProfileItem label="Age" value={healthProfile.age} />
          <ProfileItem label="Gender" value={healthProfile.gender} />
          <ProfileItem label="Weight" value={`${healthProfile.weight} kg`} />
          <ProfileItem label="Height" value={`${healthProfile.height} cm`} />
        </ProfileSection>
        <ProfileSection title="Medical Information">
          <ProfileItem label="Allergies" value={healthProfile.allergies.join(', ')} />
          <ProfileItem label="Current Medications" value={healthProfile.currentMedications.join(', ')} />
          <ProfileItem label="Medical Conditions" value={healthProfile.medicalConditions.join(', ')} />
        </ProfileSection>
        <ProfileSection title="Health History">
          <ProfileItem label="Medical History" value={healthProfile.medicalHistory} />
          <ProfileItem label="Family History" value={healthProfile.familyHistory} />
        </ProfileSection>
        <ProfileSection title="Lifestyle">
          <ProfileItem label="Smoker" value={healthProfile.lifestyle?.smoker ? 'Yes' : 'No'} />
          <ProfileItem label="Alcohol Consumption" value={healthProfile.lifestyle?.alcoholConsumption} />
          <ProfileItem label="Exercise Frequency" value={healthProfile.lifestyle?.exerciseFrequency} />
        </ProfileSection>
        <ProfileSection title="Additional Information">
          <ProfileItem label="Blood Type" value={healthProfile.bloodType} />
          <ProfileItem label="Pregnancy Status" value={healthProfile.pregnancyStatus} />
          <ProfileItem label="Dietary Restrictions" value={healthProfile.dietaryRestrictions.join(', ')} />
        </ProfileSection>
      </div>
      <button 
        onClick={onUpdate}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Update Health Profile
      </button>
    </div>
  )
}

const ProfileSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-4">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="bg-gray-50 p-4 rounded-md">{children}</div>
  </div>
)

const ProfileItem: React.FC<{ label: string; value: string | number | undefined }> = ({ label, value }) => (
  <div className="mb-2">
    <span className="font-medium">{label}:</span> {value || 'Not provided'}
  </div>
)

export default ViewHealthProfile