import React, { useState } from "react";


import Home from './Home'

const CreateSurvey = () => {
  

  const [survey_name, setSurvey_Name] = useState("");
  const [survey_description, setSurvey_Description] = useState("");
  
   const SaveData = () => {
       console.log({survey_name,survey_description});
       let data ={survey_name,survey_description}
     fetch("https://izrmdya4vg.execute-api.ap-south-1.amazonaws.com/prod/create_survey_request",{
      method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },

              body: JSON.stringify(data)
              }).then((response)=>{
               console.log("sweta",response)
     })
}
  
  return (
    <div className="flex">
    <div>
    <Home/>
    </div>
    <div className='w-full ml-6'>
      <div className="bg-[#ededed] py-4">
        <h2 className="text-[#1f6bd9] text-lg font-medium ml-6">Create Survey</h2>
        <p className="text-xs ml-6 text-gray-400">Home / My Survey / <span className="text-xs text-[#1f6bd9] ">CreateSurvey</span></p>
      </div>
      <div className="mt-16 ml-8 ">
        <h1 className="font-bold text-xl">Survey Subject & Description</h1>
      </div>
  <div className="flex flex-col mt-12 gap-8 ml-8">
     <input type="text" required className="border-2 border-[#ffe482] w-60 h-12 px-4" 
     placeholder="Survey Name" onChange={(e) => setSurvey_Name(e.target.value)} />
          <textarea
          required
              type="text"
              placeholder="Describe your survey"
              className="border-2 border-[#ffe482] w-1/2 h-20 px-4 py-4"
              onChange={(e) => setSurvey_Description(e.target.value)}
            />
        </div>
        <div className="divider mt-40"></div>
            <div className='bg-[#1f6bd9] rounded-md w-24'>
           <button className="py-1 text-white text-lg ml-7" onClick={SaveData}>
         Next
        </button>
        </div> 
    </div>
    </div>
  );
};

export default CreateSurvey;





