'use client'

import React from 'react'
const Result = ({userData}) => {
  const {name, age, gender, country, countryId} = userData;
  console.log(userData)

  const svg = gender == 'male' ? "bg-[url('../static/male.svg')] bg-cover bg-no-repeat" : gender == "female" ? "bg-[url('../static/female.svg')] bg-[length:20rem_20rem] bg-no-repeat bg-bottom" : "" 
  return (
    <div className={`flex border-2 border-black h-[30rem] w-[22rem] rounded-md shadow-xl ${svg}`}>
      <div className='font-bold font-mono text-xl'>
        <h3>Name: {name}</h3>
        <h3>age: {age}</h3>
        <h3>Gender: {gender}</h3>
        <h3>Country: {country}</h3>
        {country != "Unknown" ? (
          <img src={`https://flagsapi.com/${countryId}/flat/64.png`} />
        ) : (
          <p></p>
        )}
      </div>
    </div>
  )
}

export default Result