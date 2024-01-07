import React from "react";
import CurrentTime from './CurrentTime';
import style from './dashboard.module.css'
import { useNavigate } from "react-router";

export function DashboardInformation() 
{
    const navigate=useNavigate();

    const today = new Date();
        const date = today. getDate();
        const month = today.getMonth() + 1;
        const monthNames = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
         const monthInWords = monthNames[month - 1];

       let object={
        time:12,
        watchingCount:"35k",
        title:"Sunday NFL Countdown",
        description:"Sunday NFL Countdown is an American pre-game show broadcast by ESPN as part of the network's coverage of the National Football League. Host Samantha Ponder introduces the features and directs the storylines associated with the day's games",
        showImage:"/images/showImages.png",
        showVideo:"showvideo.mp4"

    }

  return <div className={`${style.topContainer}`}>
                 <img src="/images/backgroundimage.png" alt="showImages" className={`${style.showbackgroundImage}`} />
                 <div className={`${style.topNavbar}`}>
                    <div className={`${style.navLeft}`}>
                        <img src="/images/RevveeLogo.png" alt="ReveeLogo" />
                        <img src="/svgs/home.svg" alt="homeIcons" onClick={()=>{
                            navigate("/");
                        }}/>
                        <p>TV Guide</p>
                    </div>
                    <div className={`${style.navRight}`}>
                        <div className={`${style.dateandTime}`}>
                            <p><span>{date}</span><span>{monthInWords}</span><span>|</span> <span><CurrentTime /></span></p>
                            <p>Lower Manhattan, NYC</p>
                        </div>
                        <img src="/images/Profile.png" alt="profileImages" />
                    </div>
                 </div>
                 <div className={`${style.showInfoContainer}`}>

                       <div className={`${style.leftshowinfocontainer}`}>
                           <div className={`${style.showtimecontainer}`}>
                            <p><span>{object.time} min</span> <span>left</span></p>
                            <p><span>{object.watchingCount}</span> <span>watching now</span></p>
                           </div>
                           <p className={`${style.showName}`}>{object.title}</p>
                           <p className={`${style.showdescribtion}`}>{object.description}</p>
                           <p className={`${style.showDetail}`}>
                              <span>U/A</span><span>Action</span><span>.</span><span>Drama</span><span>.</span><span>45 mins</span>
                           </p>
                       </div>

                       <div className={`${style.rightshowinfocontainer}`}>
                          <img src={object.showImage} alt="showImage" />
                       </div>
                 </div>
           </div>;
}
  