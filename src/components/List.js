import React from 'react'

function List(props) {
  return (
    <>
        {props.news.map((article) => {
            const {title, description, urlToImage} = article;
            return <>
            <p>{title}</p>
            
            </>
        })}
    </>
  )
}

export default List
