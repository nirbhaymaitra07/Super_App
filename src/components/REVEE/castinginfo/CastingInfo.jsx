import React, { useState } from "react";
import style from "./castingInfo.module.css";

const CastMember = ({ personDetails }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleToggleMoreInfo = () => {
    setShowMoreInfo((prev) => !prev);
  };

  return (
    <>
    <div className={style.middle_container}>
      <div
        className={style.middle_container_person_details}
        onClick={handleToggleMoreInfo}
        >
        <div className={style.middle_container_person_img}>
          <img
            className={style.img_middle_container}
            src={personDetails.imageSrc}
            alt={personDetails.name}
            />
        </div>
        <div className={style.middle_container_person_para}>
          <p className={style.img_middle_container_heading}>
            {personDetails.name}
          </p>
          <p className={style.middle_container_intro}>{personDetails.role}</p>
        </div>
      </div>

      
    </div>
    {showMoreInfo && (
        <div className={style.more_info_container}>
          <div className={style.more_info_container_para}>
            <p className={style.more_info_container_para_info}>
              {personDetails.bio}
            </p>
          </div>
          <div className={style.more_info_container_readmore}>
            <p className={style.more_info_container_readmore_em}>Read more</p>
          </div>
        </div>
      )}
</>
  );
};

const CastingInfo = () => {
  const castMembers = [
    {
      name: "Samantha Ponder",
      role: "American sports commentator and presenter",
      bio: "Prior to hosting Sunday NFL Countdown, Ponder worked as a reporter/host for ESPN college football and as a basketball sideline reporter.",
      imageSrc: "/svgs/Samantha.svg",
    },
    {
      name: "Matt Hasslebeck",
      role: "American former American football quarterback",
      bio: "Prior to hosting Sunday NFL Countdown, Ponder worked as a reporter/host for ESPN college football and as a basketball sideline reporter.",
      imageSrc: "/svgs/Matt.svg",
    },
    {
      name: "Randy Moss",
      role: "American football wide receiver",
      bio: "Prior to hosting Sunday NFL Countdown, Ponder worked as a reporter/host for ESPN college football and as a basketball sideline reporter.",
      imageSrc: "/svgs/Randy.svg",
    },
  ];

  return (
    <div className={style.main_container}>
      <div className={style.upper_container}>
        <img
          className={style.img_upper_container}
          src="svgs/Back.svg"
          alt="Back"
        />
      </div>

      {castMembers.map((personDetails, index) => (
        <CastMember key={index} personDetails={personDetails} />
      ))}
    </div>
  );
};

export default CastingInfo;
