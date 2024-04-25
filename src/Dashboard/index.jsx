import React from 'react'


import Header from '../Header'
import SubHeader from '../subHeader'
import TeacherTable from './teacherTable'
import TopperStudents from './TopperStudents'

const Dashboard = () => {
  return (
    <div className='ml-[205px] '>
     
      <Header/>
      <SubHeader/>
      <TeacherTable/>
      <TopperStudents/>
      
    </div>
  )
}

export default Dashboard