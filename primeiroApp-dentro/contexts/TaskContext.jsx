import { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [localTasks, setLocalTasks] = useState([]);

  const clearTasks = async () => {
    try {
      await AsyncStorage.removeItem('@TaskApp:tasks');
      setLocalTasks([]);
    } catch(err) {
      console.error('Erro ao limpar tarefas:', err);
    }
  };

  const addTask = ({ title, description, id }) => {
    setLocalTasks((prev) => [
      ...prev,
      {
        id: id || `local-${Date.now()}`,
        title,
        description: description || '',
        completed: false,
      },
    ]);
  };

  const toggleTaskCompletion = (id) => {
    setLocalTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setLocalTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <TaskContext.Provider value={{ localTasks, addTask, toggleTaskCompletion, deleteTask, theme, toggleTheme, clearTasks }}>
      {children}
    </TaskContext.Provider>
  );  
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}
