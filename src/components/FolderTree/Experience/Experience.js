import React, { useState } from "react";
import TitleSection from "../../TitleSection/TitleSection";
import ExpIcon from "../../../../../assets/images/layers.png";
import FolderTree from "../FolderTree";
import MoreInfoExp from "./MoreInfoExp/MoreInfoExp";
import { experienceData } from "../../../../../utils/MockData";

const Experience = () => {
  const [state, setState] = useState(false);

  return (
    <section id='experience' className='experience'>
      <div className='container'>
        <TitleSection title='experience' urlIcon={ExpIcon} />
        <FolderTree
          setState={setState}
          dataFolderTree={experienceData}
          tree='exp'
        />
        <MoreInfoExp state={state} setState={setState} />
      </div>
    </section>
  );
};

export default Experience;
