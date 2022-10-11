import React from "react"
import EduBox from "./EduBox/EduBox"
import "./FolderTree.scss"

const FolderTree = ({ tree, dataFolderTree }) => {
  let count = 0
  return (
    <>
      <div className="container folderTree">
        <div className={`folderTree__tree folderTree__tree--${tree}`}></div>
        <div className="folderTree__list">
          {dataFolderTree &&
            !!dataFolderTree &&
            dataFolderTree.map((data, index) => (
              <EduBox key={index} keyValue={count++} data={data} />
            ))}
        </div>
      </div>
    </>
  )
}

export default FolderTree
