import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const[articles , setArticles] = useState([]);

    useEffect(()=>{
    
       let fetchArticles = async ()=>{
        let URL = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&apikey=ba9e89e1e7e4fded6e0d1126a5b04763`

        let response = await fetch(URL);
        let data = await response.json();
        
        console.log(data.articles);
        
        setArticles(data.articles);
       }
       fetchArticles();

    }, [category])
  return (
    <div>
        <h2 className='text-center my-3' >Latest <span className='badge bg-primary'>News</span></h2>
        {articles.map((news, index)=>{
            return <NewsItem key= {index} title = {news.title} description = {news.description} src = {news.image} url = {news.url}/>
        })}
        
    </div>

    
    

  )
}

export default NewsBoard