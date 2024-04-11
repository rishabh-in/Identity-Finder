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
    let imgResponse;
    const nation = nationData?.country[0];
    // if(nation && nation.country_id) {
    //   const flagImg = await fetch(`https://flagsapi.com/${nation.country_id}/flat/64.png`);
    //   imgResponse = flagImg.json();
    // }
    return {ageData, genderData, nation, imgResponse}
  } catch (error) {
    console.log(error);
    return error
  }
}