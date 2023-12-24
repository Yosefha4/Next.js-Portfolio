"use client"

import React, { useState } from 'react'



const RepoView = ({imgUrl,desc}) => {

  return (
    <div className='repo'>
        <div className="repoImg">
            <img className='img' src={imgUrl} width={400} height={300}  alt={desc}/>
        </div>
        <div className="repoDesc">
        <p className='descr'>Ultimate ReactJs Portfolio With Html & Css</p>
        </div>
        {/* {isModalOpen && <RepoModal repo={{ imgUrl, title:'title' }} onClose={closeModal} />} */}

    </div>
  )
}

export default RepoView