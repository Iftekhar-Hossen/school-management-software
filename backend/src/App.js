import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ProtectedRoutes from './components/PrivateRoute'
import PreventPublicRoute from './components/PreventPublicRoute'

import PageLayout from './components/PageLayout'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'


import Teachers from './pages/Teachers'
import AddTeacher from './pages/Teachers/add'

import Class from './pages/Academics/Class'
import GradeSystem from './pages/Academics/GradeSystem'

import AddStudent from './pages/Students/add'


import Fees from './pages/Accounting/Fees'




import { ConfigProvider, Button } from 'antd';
import FeesType from './pages/Accounting/FeesType'

export default function App() {
  return (
    <ConfigProvider
    >
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route element={<PageLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='teachers'>
              <Route index element={<Teachers />} />
              <Route path='add' element={<AddTeacher />} />
            </Route>
            <Route path='students'>
              <Route index element={<Teachers />} />
              <Route path='add' element={<AddStudent />} />
            </Route>
            <Route path='academics'>
              <Route path='class' element={<Class />} />
              <Route path='grading-system' element={<GradeSystem />} />
            </Route>
            <Route path='accounting'>
              <Route path='pay-fees' element={<Fees />} />
              <Route path='fees-type' element={<FeesType />} />
            </Route>
          </Route>
        </Route>
        <Route path='/login' element={<PreventPublicRoute />}>
          <Route index element={<Login />} />
        </Route>

        <Route path='/reset-password' element={<PreventPublicRoute />}>
          <Route index element={<ResetPassword />} />
        </Route>


      </Routes>
    </ConfigProvider>

  )
}


/*


*/
