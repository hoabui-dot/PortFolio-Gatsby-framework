import React from "react";
import SkillsItem from "../SkillsItem/SkillsItem";

const SkillsField = ({ data }) => {
  const { title, list } = data;
  return (
    <div className='field'>
      <div className='field__title'>
        <p>{title}</p>
      </div>
      <ul className='field__list'>
        {list &&
          !!list &&
          list.map((data, index) => <SkillsItem key={index} data={data} />)}
      </ul>
    </div>
  );
};

export default SkillsField;
