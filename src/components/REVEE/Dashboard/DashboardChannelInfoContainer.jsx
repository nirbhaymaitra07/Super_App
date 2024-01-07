import React from "react";
import style from './dashboard.module.css'
import MainScreen from "../screens/MainScreen";
import { useNavigate } from "react-router";

export default function DashboardChannelInfoContainer() {
 let navigate=useNavigate();     

  let channels=[
    {
        channellogo:"/images/espnlogo.png",
        channelInfo:[// Morning Shows
        { title: "Morning News", duration: 60 },
        { title: "Health and Fitness", duration: 45 },
        { title: "Kids Cartoons", duration: 120 },
        { title: "Home Improvement", duration: 60 },
        { title: "Fashion Trends", duration: 30 },
        { title: "Nature Documentary", duration: 90 },
        
        // Afternoon Shows
        { title: "Lunchtime Cooking", duration: 45 },
        { title: "Game Show", duration: 30 },
        { title: "Music Hits", duration: 90 },
        { title: "Business Report", duration: 60 },
        { title: "Animal Planet", duration: 60 },
        { title: "Travel Diaries", duration: 75 },
        
        // Evening Shows
        { title: "Drama Series", duration: 45 },
        { title: "Science and Technology", duration: 60 },
        { title: "Food Network", duration: 45 },
        { title: "Reality Competition", duration: 60 },
        { title: "Political Talk", duration: 30 },
        { title: "Classic Movies", duration: 120 },
        
        // Night Shows
        { title: "Late Night Comedy", duration: 60 },
        { title: "Conspiracy Theories", duration: 45 },
        { title: "Crime Investigation", duration: 60 },
        { title: "Music Concert", duration: 90 },
        { title: "Horror Movie Marathon", duration: 120 }, ]
    },
    {
        channellogo:"/images/cnnlogo.png",
        channelInfo:[
            { title: "Morning Yoga", duration: 60 },
            { title: "Financial News", duration: 30 },
            { title: "Animated Adventures", duration: 90 },
            { title: "Cooking Extravaganza", duration: 45 },
            { title: "Science Discoveries", duration: 60 },
            { title: "Family Movie Time", duration: 120 },
          
            { title: "Afternoon Talk Show", duration: 45 },
            { title: "Tech Trends", duration: 60 },
            { title: "Nature Explorations", duration: 75 },
            { title: "Reality TV Marathon", duration: 120 },
            { title: "International Cuisine", duration: 30 },
            { title: "Art and Creativity", duration: 60 },
          
            { title: "Evening News", duration: 30 },
            { title: "Travel Stories", duration: 60 },
            { title: "Comedy Special", duration: 45 },
            { title: "Drama Series Marathon", duration: 120 },
            { title: "Historical Documentaries", duration: 75 },
            { title: "Music Vibes", duration: 90 },
          
            { title: "Late Night Talk Show", duration: 60 },
            { title: "Mystery Series", duration: 45 },
            { title: "Culinary Delights", duration: 60 },
            { title: "Concert Spectacular", duration: 90 },
          ]
    },
    {
        channellogo:"/images/cnbc.png",
        channelInfo:[
            { title: "Tech Talk", duration: 45 },
            { title: "Morning News", duration: 60 },
            { title: "Kids Fun Time", duration: 90 },
            { title: "Cooking Fiesta", duration: 60 },
            { title: "Nature Wonders", duration: 75 },
            { title: "Classic Movie Classics", duration: 120 },
          
            { title: "Afternoon Delights", duration: 60 },
            { title: "Reality Check", duration: 45 },
            { title: "Travel Adventures", duration: 90 },
            { title: "Gaming Zone", duration: 30 },
            { title: "Health and Wellness", duration: 60 },
            { title: "Artistic Expressions", duration: 120 },
          
            { title: "Evening Symphony", duration: 90 },
            { title: "Comedy Hour", duration: 30 },
            { title: "Drama Series Extravaganza", duration: 120 },
            { title: "Science Insights", duration: 45 },
            { title: "World Cuisine", duration: 60 },
            { title: "Music Jamboree", duration: 75 },
          
            { title: "Late Night Laughs", duration: 60 },
            { title: "Mystery Thrills", duration: 45 },
            { title: "Culinary Masterclass", duration: 60 },
          ]
    }
 ]

 const timeArray = [
    '| 00:00', '| 00:15', '| 00:30', '| 00:45',
    '| 01:00', '| 01:15', '| 01:30', '| 01:45',
    '| 02:00', '| 02:15', '| 02:30', '| 02:45',
    '| 03:00', '| 03:15', '| 03:30', '| 03:45',
    '| 04:00', '| 04:15', '| 04:30', '| 04:45',
    '| 05:00', '| 05:15', '| 05:30', '| 05:45',
    '| 06:00', '| 06:15', '| 06:30', '| 06:45',
    '| 07:00', '| 07:15', '| 07:30', '| 07:45',
    '| 08:00', '| 08:15', '| 08:30', '| 08:45',
    '| 09:00', '| 09:15', '| 09:30', '| 09:45',
    '| 10:00', '| 10:15', '| 10:30', '| 10:45',
    '| 11:00', '| 11:15', '| 11:30', '| 11:45',
    '| 12:00', '| 12:15', '| 12:30', '| 12:45',
    '| 13:00', '| 13:15', '| 13:30', '| 13:45',
    '| 14:00', '| 14:15', '| 14:30', '| 14:45',
    '| 15:00', '| 15:15', '| 15:30', '| 15:45',
    '| 16:00', '| 16:15', '| 16:30', '| 16:45',
    '| 17:00', '| 17:15', '| 17:30', '| 17:45',
    '| 18:00', '| 18:15', '| 18:30', '| 18:45',
    '| 19:00', '| 19:15', '| 19:30', '| 19:45',
    '| 20:00', '| 20:15', '| 20:30', '| 20:45',
    '| 21:00', '| 21:15', '| 21:30', '| 21:45',
    '| 22:00', '| 22:15', '| 22:30', '| 22:45',
    '| 23:00', '| 23:15', '| 23:30', '| 23:45'
  ]

let gridColumn = 1;


  return <div className={`${style.bottomContainer}`}>

            <div className={`${style.channelContainer}`}> 
                 <div className={`${style.channelDate}`}>
                    <img src="svgs/leftArrow.svg" alt="leftArrow" />
                    <p>Today</p>
                    <img src="svgs/leftArrow.svg" alt="leftArrow" />
                 </div>

                <div className={`${style.channelListContainer}`}>
                       {channels.map((item, index) => {
          return <div className={`${style.channels}`} key={index}> <img src={item.channellogo} alt="channellogo" /> </div>;
        })}
                </div>

            </div>

          
            <table className={`${style.channelInformationContainer}`}>
                <thead>
                    <tr>
                        {timeArray.map((item, index) => {
            return <th key={index}>{item}</th>;
          })}
                    </tr>
                </thead>
                <tbody>
                    {channels.map((channel, index) => {
          {
            gridColumn = 1;
          }
          return <tr key={index}>
                                {channel.channelInfo.map((item, index) => {
              return <td key={index} style={{
                gridColumn: `${gridColumn}/${gridColumn + item.duration / 15}`
              }} colSpan={`${item.duration / 15}`}>
                                            <span style={{
                  display: "none"
                }}>{gridColumn += item.duration / 15}</span>
                                            <div className={style.gridItem} onClick={()=>{
                                               navigate("/main-screen")
                                            }}>
                                             <p>{item.title}</p>
                                             <img src="/svgs/clockRemainder.svg" alt="clockRemaindersvg" />
                                            </div>
                                        </td>;
            })}
                            </tr>;
        })}
                </tbody>
            </table>
           </div>;
}
  