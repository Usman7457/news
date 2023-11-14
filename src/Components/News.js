import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
   

    const capatalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async()=> {
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=685c07ea344441f38f6de96fb758c684&page=${page}&pageSize=${props.pageSize}`;
   setLoading(true);
   let data = await fetch(url);
   props.setProgress(30);
   let parsedData = await data.json();
   props.setProgress(70);
   setArticles(parsedData.articles);
   settotalResults(parsedData.totalResults);
   setLoading(false)
  props.setProgress(100);
    }

useEffect(() => {
  document.title = `${capatalizeFirstLetter(props.category)} - 24/7 NEWS`;
  updateNews();
  /* eslint-disable */
}, [])

// const next = async ()=> {
   //setPage(page + 1);
   //updateNews();
// }
//const prev = async ()=> {
  //setPage(page - 1);
   //updateNews();
//}

const fetchMoreData = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=685c07ea344441f38f6de96fb758c684&page=${page+1}&pageSize=${props.pageSize}`; 
  setPage(page + 1);
  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(articles.concat(parsedData.articles));
  settotalResults(parsedData.totalResults);
};

    return (
        <>
            <h1 className="text-center" style={{marginTop: '75px'}}>Today's Top {capatalizeFirstLetter(props.category)} News</h1>
            {loading && <Spinner/>}
            
            <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
            <div className="container">
            <div className="row my-3">
                {articles.map((element,index)=>{
                    return <div className="col-lg-4 my-3" key={index}>
                    <NewsItem title={element.title?element.title.slice(0, 20):""} description={element.description?element.description.slice(0, 40):""} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}
            </div>
            </div>
            </InfiniteScroll>

            {/* <div className="container d-flex justify-content-between my-3">
            <button disabled={page<2} type="button" className="btn btn-dark" onClick={prev}>&larr; Previous Page</button>
            <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={next}>Next Page &rarr;</button>
              </div> */}
        </>
    )
}


News.defaultProps = {
  country: 'us',
  pageSize: 6,
  category: 'health'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News