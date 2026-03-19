import React from 'react'
import { recruitmentList } from '../data/joinusrecruitmentjob'
import Recruitmentjob from '../components/Recruitmentjob'
import "../css/joinus.css"
const JoinUs = () => {
    return (
        <>
        <div className='jutitle'>
            <h1>加入我們</h1>
            <p>成為我們使命的一部分，幫助成千上萬的成年人實現職業夢想。</p>
        </div>
        <div className='whyju'>
            <div className='top'>
                <h2>為什麼加入我們？</h2>
                <p>我們相信每個人都應該有機會實現自己的潛力。我們的團隊由充滿熱情的專業人士組成，致力於改變教育行業。</p>
            </div>
            <div className='bottom'>
                <div className='bg'>
                    <i class="fa-regular fa-heart"></i>
                    <h3>競爭力薪資</h3>
                    <p>根據經驗和能力提供具有競爭力的薪資待遇</p>
                </div>
                <div div className='bg'>
                    <i class="fa-solid fa-users"></i>
                    <h3>友善的團隊</h3>
                    <p className='p1'>與志同道合的專業人士一起工作，建立長期的職業關係</p>
                </div>
                <div div className='bg'>
                    <i class="fa-solid fa-suitcase"></i>
                    <h3>職業發展</h3>
                    <p className='p1'>提供培訓和發展機會，幫助您實現職業目標靈活工作</p>
                </div>
                <div div className='bg'>
                    <i class="fa-solid fa-location-dot"></i>
                    <h3>靈活工作</h3>
                    <p>支持遠端工作和靈活的工作時間安排</p>
                </div>
            </div>
        </div>
        <div className='jurecruitment'>
            <h2>現在招聘的職位</h2>
            <p className='jutitlep1'>我們正在尋找有才華和熱情的人加入我們的團隊。</p>
            <div className='job'>
                {recruitmentList.map((item)=>(
                    <Recruitmentjob key={item.id}
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
        <div className='Applicationprocess'>
            <div className='top'>
                <h2>應聘流程</h2>
                <p>我們的招聘過程簡單透明，通常需要 2-4 週。</p>
            </div>
            <div className='process'>
                <div className='bg'>
                    <i className="fa-solid fa-1"></i>
                    <h6>提交申請</h6>
                    <p>填寫申請表並上傳您的履歷和作品集</p>
                </div>
                <div className='bg'>
                    <i className="fa-solid fa-2"></i>
                    <h6>初步篩選</h6>
                    <p>我們會審查您的申請並選擇符合條件的候選人</p>
                </div>
                <div className='bg'>
                    <i className="fa-solid fa-3"></i>
                    <h6>面試</h6>
                    <p>與我們的團隊進行一對一或小組面試</p>
                </div>
                <div className='bg'>
                    <i className="fa-solid fa-4"></i>
                    <h6>錄用</h6>
                    <p>成功的候選人將收到錄用通知</p>
                </div>
            </div>
        </div>
        <div className='readyjoinus'>
            <h2>準備好加入我們了嗎？</h2>
            <h3>選擇一個職位並提交您的申請。我們期待聽到您的故事！</h3>
            <a href='mailto:2053953491@qq.com'>提交申請</a>
        </div>
        </>
    )
}

export default JoinUs