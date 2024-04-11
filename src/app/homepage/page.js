import React, { Fragment, useState } from 'react'
import Form from '../components/Form'
import { ToastContainer, toast } from 'react-toast'
import Shimmer from '../components/Shimmer'
import Result from '../components/Result'
import { fetchUserDetails } from '@/utils/api'
import { countryCodesMap } from '@/utils/countryCodes'

const Homepage = () => {

  // When You click on submit button. 
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState({});
  const [openModel, setOpenModel] = useState(false)
  const handleSubmit = async (name) => {
    try {
      if(!name) {
        toast.error("Enter valid name")
        return;
      }
      // set loading to true, openmodel - true
      setOpenModel(true)
      setLoading(true);
      const response = await fetchUserDetails(name)
      console.log(response)
      const resultObj = {
        name: name,
        age: response?.ageData?.age ? response.ageData.age : "Unknown",
        gender: response?.genderData?.gender ? response.genderData.gender : "Unknown",
        countryId: response?.nation?.country_id ? response.nation.country_id : "Unknown",
        country: response?.nation?.country_id ? countryCodesMap[response.nation.country_id] : "Unknown"
      }
      setUserData(resultObj);
      setLoading(false);
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <Fragment>
      <ToastContainer delay={3000} position='top-center'/>
      {openModel ? (
            <div className='flex w-full h-[calc(100vh-120px)] bg-[#f1f2f6]'>
            <div className='flex justify-center items-center w-1/2 h-full border-2'>
              <Form handleSubmit={handleSubmit}/>
            </div>
            <div  className='flex justify-center items-center w-1/2 h-full border-2'>
            {loading ? <Shimmer /> : <Result userData={userData}/>}
            </div>
          </div>
      ): (
        <div className='flex justify-center bg-[#e6fdff] items-center w-full h-[calc(100vh-120px)]'>
          <Form handleSubmit={handleSubmit}/>
        </div>
      )}
    </Fragment>
  )
}
export default Homepage