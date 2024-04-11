export const fetchUserDetails = async(name) => {
  try {
    const [ageResponse, genderResponse, nationDataResponse] = await Promise.all([
      fetch(`https://api.agify.io?name=${name}`),
      fetch(`https://api.genderize.io?name=${name}`),
      fetch(`https://api.nationalize.io?name=${name}`)
    ]);
    const [ageData, genderData, nationData] = await Promise.all([
      ageResponse.json(),
      genderResponse.json(),
      nationDataResponse.json(),
    ]);
    
    const nation = nationData?.country[0];
    return {ageData, genderData, nation}
  } catch (error) {
    console.log(error);
    return error
  }
}