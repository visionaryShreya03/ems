import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState({});
  const [userData, setUserData] = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [taskCounts, setTaskCounts] = useState({
    newTask: 0,
    completed: 0,
    active: 0,
    failed: 0,
  });

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data || {});
      const userTasks = userData.data?.tasks || [];
      setTasks(userTasks);
      setTaskCounts({
        newTask: userTasks.filter(task => task.newTask).length,
        completed: userTasks.filter(task => task.completed).length,
        active: userTasks.filter(task => task.active).length,
        failed: userTasks.filter(task => task.failed).length,
      });
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (userData) {
      const employee = userData.find((e) => email === e.email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        setTasks(employee.tasks || []);
        setTaskCounts({
          newTask: (employee.tasks || []).filter(task => task.newTask).length,
          completed: (employee.tasks || []).filter(task => task.completed).length,
          active: (employee.tasks || []).filter(task => task.active).length,
          failed: (employee.tasks || []).filter(task => task.failed).length,
        });
      }
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
    } else {
      alert("Invalid Credentials");
    }
  };

  const updateTaskStatus = (taskTitle, statusType) => {
    const updatedTasks = tasks.map(task => {
      if (task.title === taskTitle) {
        if (statusType === 'completed' && !task.completed) {
          task.completed = true;
          task.active = false;
          task.failed = false;
          setTaskCounts(prevCounts => ({
            ...prevCounts,
            completed: prevCounts.completed + 1,
            active: prevCounts.active > 0 ? prevCounts.active - 1 : prevCounts.active,
          }));
        } else if (statusType === 'failed' && !task.failed) {
          task.failed = true;
          task.active = false;
          task.completed = false;
          setTaskCounts(prevCounts => ({
            ...prevCounts,
            failed: prevCounts.failed + 1,
            active: prevCounts.active > 0 ? prevCounts.active - 1 : prevCounts.active,
          }));
        } else if (statusType === 'active' && !task.active) {
          task.active = true;
          task.newTask = false;
          setTaskCounts(prevCounts => ({
            ...prevCounts,
            active: prevCounts.active + 1,
            newTask: prevCounts.newTask > 0 ? prevCounts.newTask - 1 : prevCounts.newTask,
          }));
        }
      }
      return task;
    });
    setTasks(updatedTasks);

    const updatedUserData = { ...loggedInUserData, tasks: updatedTasks };
    setLoggedInUserData(updatedUserData);
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedUserData }));
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? (
        <AdminDashboard changeUser={setUser} setUserData={setUserData} userData={userData} />
      ) : (
        user === 'employee' ? (
          <EmployeeDashboard 
            changeUser={setUser} 
            data={{ ...loggedInUserData, taskCounts }} 
            updateTaskStatus={updateTaskStatus} 
          />
        ) : null
      )}
    </>
  );
};

export default App;



