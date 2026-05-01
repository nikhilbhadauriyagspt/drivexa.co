import React, { createContext, useContext, useState } from 'react';

const RequestContext = createContext();

export const useRequest = () => {
  const context = useContext(RequestContext);
  if (!context) {
    throw new Error('useRequest must be used within a RequestProvider');
  }
  return context;
};

export const RequestProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');

  const openRequestModal = (topic = '') => {
    setSelectedTopic(topic);
    setIsModalOpen(true);
  };

  const closeRequestModal = () => {
    setIsModalOpen(false);
    setSelectedTopic('');
  };

  return (
    <RequestContext.Provider value={{ isModalOpen, openRequestModal, closeRequestModal, selectedTopic }}>
      {children}
    </RequestContext.Provider>
  );
};
