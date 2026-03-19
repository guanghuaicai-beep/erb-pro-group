import React from 'react'
import {companyrecruitmentList} from "../data/companyrecruitmentjob"
import CompanyRecruitmentjob from '../components/CompanyRecruitmentjob'
import "../css/companyrecruitment.css"
const Companyrecruitment = () => {
    return (
        <>
            <div className='companyrecruitment'>
                <h2>Current Openings</h2>
                <p className='companytitlep1'>Our parnters are looking for talented and passionate people to join our team.</p>
                <div className='companyjob'>
                    {companyrecruitmentList.map((item)=>(
                        <CompanyRecruitmentjob key={item.id}
                            workjob={item.workjob}
                            department={item.department} 
                            position={item.position}
                            workingmode={item.workingmode}
                            monsalary={item.monsalary}
                            jobrequeirment1={item.jobrequeirment1}
                            jobrequeirment2={item.jobrequeirment2}
                            jobrequeirment3={item.jobrequeirment3}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Companyrecruitment