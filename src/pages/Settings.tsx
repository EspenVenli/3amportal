import React, { useState } from 'react';
import { Upload, Bell, Globe, Lock, Users, Palette } from 'lucide-react';

const Settings = () => {
  const [newLanguage, setNewLanguage] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#3B82F6');
  const [secondaryColor, setSecondaryColor] = useState('#10B981');
  const [accentColor, setAccentColor] = useState('#F59E0B');
  const [guideVoiceModel, setGuideVoiceModel] = useState('en-US');
  const [newGuideName, setNewGuideName] = useState('');
  const [guideIcon, setGuideIcon] = useState<File | null>(null);
  const [notificationEmail, setNotificationEmail] = useState('');
  const [defaultCurrency, setDefaultCurrency] = useState('USD');
  const [timeZone, setTimeZone] = useState('UTC');

  // Mock data for current settings
  const currentSettings = {
    availableLanguages: ['English', 'Danish', 'German', 'Swedish', 'Norwegian'],
    characters: ['Hans Christian Andersen', 'Queen Margrethe II', 'Niels Bohr', 'Karen Blixen'],
  };

  const handleAddLanguage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newLanguage) {
      console.log('Adding new language:', newLanguage);
      setNewLanguage('');
      alert('New language added successfully!');
    }
  };

  const handleColorChange = (color: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(color);
    console.log('Color updated:', color);
  };

  const handleAddGuide = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding new guide:', { name: newGuideName, voiceModel: guideVoiceModel, icon: guideIcon });
    alert('New guide added successfully!');
  };

  const handleIconUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setGuideIcon(e.target.files[0]);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Current Settings</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Available Languages</h3>
              <ul className="list-disc list-inside">
                {currentSettings.availableLanguages.map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Current Characters</h3>
              <ul className="list-disc list-inside">
                {currentSettings.characters.map((character, index) => (
                  <li key={index}>{character}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <form onSubmit={handleAddLanguage} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Globe className="mr-2" /> Add New Language
            </h2>
            <div className="mb-4">
              <label htmlFor="newLanguage" className="block text-sm font-medium text-gray-700">
                New Language
              </label>
              <input
                type="text"
                id="newLanguage"
                value={newLanguage}
                onChange={(e) => setNewLanguage(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="e.g. French"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Language
            </button>
          </form>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Palette className="mr-2" /> App Colors
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="primaryColor" className="block text-sm font-medium text-gray-700">
                  Primary Color
                </label>
                <input
                  type="color"
                  id="primaryColor"
                  value={primaryColor}
                  onChange={(e) => handleColorChange(e.target.value, setPrimaryColor)}
                  className="mt-1 block w-full h-10"
                />
              </div>
              <div>
                <label htmlFor="secondaryColor" className="block text-sm font-medium text-gray-700">
                  Secondary Color
                </label>
                <input
                  type="color"
                  id="secondaryColor"
                  value={secondaryColor}
                  onChange={(e) => handleColorChange(e.target.value, setSecondaryColor)}
                  className="mt-1 block w-full h-10"
                />
              </div>
              <div>
                <label htmlFor="accentColor" className="block text-sm font-medium text-gray-700">
                  Accent Color
                </label>
                <input
                  type="color"
                  id="accentColor"
                  value={accentColor}
                  onChange={(e) => handleColorChange(e.target.value, setAccentColor)}
                  className="mt-1 block w-full h-10"
                />
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleAddGuide} className="bg-white p-6 rounded-lg shadow col-span-full">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="mr-2" /> Add New Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="newGuideName" className="block text-sm font-medium text-gray-700">
                Guide Name
              </label>
              <input
                type="text"
                id="newGuideName"
                value={newGuideName}
                onChange={(e) => setNewGuideName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="e.g. Viking Warrior"
              />
            </div>
            <div>
              <label htmlFor="guideVoiceModel" className="block text-sm font-medium text-gray-700">
                Guide Voice Model
              </label>
              <select
                id="guideVoiceModel"
                value={guideVoiceModel}
                onChange={(e) => setGuideVoiceModel(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="en-US">English (US)</option>
                <option value="da-DK">Danish</option>
                <option value="de-DE">German</option>
                <option value="sv-SE">Swedish</option>
                <option value="nb-NO">Norwegian</option>
              </select>
            </div>
            <div className="col-span-full">
              <label htmlFor="guideIcon" className="block text-sm font-medium text-gray-700">
                Guide Icon
              </label>
              <div className="mt-1 flex items-center">
                <label htmlFor="guideIcon" className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <Upload className="h-5 w-5 inline-block mr-2" />
                  Upload Icon
                </label>
                <input
                  type="file"
                  id="guideIcon"
                  onChange={handleIconUpload}
                  className="hidden"
                  accept="image/*"
                />
                {guideIcon && <span className="ml-3">{guideIcon.name}</span>}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add New Guide
          </button>
        </form>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Bell className="mr-2" /> Notification Settings
          </h2>
          <div className="mb-4">
            <label htmlFor="notificationEmail" className="block text-sm font-medium text-gray-700">
              Notification Email
            </label>
            <input
              type="email"
              id="notificationEmail"
              value={notificationEmail}
              onChange={(e) => setNotificationEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="your@email.com"
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => alert('Notification settings updated!')}
          >
            Update Notification Settings
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Globe className="mr-2" /> Regional Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="defaultCurrency" className="block text-sm font-medium text-gray-700">
                Default Currency
              </label>
              <select
                id="defaultCurrency"
                value={defaultCurrency}
                onChange={(e) => setDefaultCurrency(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="DKK">DKK</option>
              </select>
            </div>
            <div>
              <label htmlFor="timeZone" className="block text-sm font-medium text-gray-700">
                Time Zone
              </label>
              <select
                id="timeZone"
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="UTC">UTC</option>
                <option value="Europe/Copenhagen">Europe/Copenhagen</option>
                <option value="Europe/London">Europe/London</option>
                <option value="America/New_York">America/New_York</option>
              </select>
            </div>
          </div>
          <button
            type="button"
            className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => alert('Regional settings updated!')}
          >
            Update Regional Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;