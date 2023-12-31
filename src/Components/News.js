import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'; //shortcut to import proptypes is to simply type impt.



const News =(props)=>{
// with the help of static keyword we can set the defaultPropTypes.
      // Function so that we can capitalize first letter of our Heading and title of our webpage.
 const[articles,setArticles] = useState([])
 const[loading,setLoading] = useState(false)
 const[page,setPage] = useState(1)


 const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
//  const[title,setTitle] =useState({pcategory})
  // below we have articles variables containing an array each element is an object.



    //Setting title of our webpage such that it changes according to the news category selected by the user.
    // document.title=`${capitalizeFirstLetter(category)} News`;

  document.title =`${capitalizeFirstLetter(props.category)}  News`;


 const updateNews = async()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
   
    let data = await fetch(url);
    console.log("This below is data");
    console.log(data);
    props.setProgress(30);
    // converting data we get from news api link to json
    let parsedata = await data.json();
    props.setProgress(50);
    setArticles(parsedata.articles);
    props.setProgress(100);
  }
 

  // This componentDidMount runs after the render at first the constructor runs then render() and thn at last componentDidMound() runs.

  // if we use async keyword before componentDidMount() then this method will become asyncronous means this method can wait to fully execute until certain conditions occur.

  // inside this async function we can use await such that the url we are fetching will take



      useEffect(() => {
          updateNews();
          // eslint-disable-next-line
      },[page])
  
 const handleonPrev=async()=>{
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=67731dcdf96849bf96844cefcc276e59&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedata = await data.json();
    // this.setState({
    //   articles:parsedata.articles,
    //   page:this.state.page-1,
    //   loading:false
    // })
   
    setPage(page-1);
    console.log("clicked previous");
    console.log(page);
   
  }
   const handleonNext=async()=>{
    //  if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){
    //  }
      // We have gone through the documentation of news api and we get to know from the 'everything' section that pagesize bascially tell us about how many news(or articles) elements will be in a page.

      // so here we are setting page size as 20 which means that each page will consist of 20 elements of news.

      // from our sample input we came to know that there is an key named totalresult which bascially shows that how articles or data is fetched from the api if totalresult =30 means a toatal of 30 news articles are fetched from the api and if the pagesize = 10 then we will require 3 pages to show all of them.
      // from our sample input we came to know that there is an key named totalresult which bascially shows that how articles or data is fetched from the api if totalresult =30 means a toatal of 30 news articles are fetched from the api and if the pagesize = 10 then we will require 3 pages to show all of them.
      // else{
      //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=67731dcdf96849bf96844cefcc276e59&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      //   this.setState({loading:true});
      //   let data = await fetch(url)
      //   let parsedata = await data.json();
      //   this.setState(
      //     {
      //       articles:parsedata.articles,
      //       page : this.state.page+1,
      //       loading:false
      //     }
      //   )
      // }
      setPage(page+1);
    console.log("clicked next");
    console.log(page);
 
    }
 
    return (
      <>

        <div className="container my-4 " >
          <h1 className="text-center">{capitalizeFirstLetter(props.category)} News Headlines</h1>

             {/* This below statement means if this.state.loading is true only then Spinner will be visible otherwise not. */}
          {loading && <Spinner/>}
          <div className="row">
            {/* To iterate articles we have the following sytax */}
            {
              /* yaha par state mein jo array tha article us article mein we have many objects and by using map method when we iterate over this array and printed the element of the article array we will get objects in return so but hum console.log hamare main objective nahi hai hum console.log ki jagah cards ko return karenge aur jo bhi elements iterate ho rahe hai using . operator we will use their value. */
            }
            {/* articles.map((element)=>{console.log(element)})} */}
            {!loading &&articles.map((element) => {
              return <div className="col-md-3 mx-4 my-2  ">
                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} publishedAt={element.publishedAt} source ={element.source.name}/>
              </div>
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark" onClick={handleonPrev} disabled={props.page<=1}>&larr;Previous</button>
          <button type="button" className="btn btn-dark" onClick={handleonNext} disabled={props.page+1>Math.ceil(props.totalResults/props.pageSize)}>Next&rarr;</button>
        </div>
      </>
    ) 
        }
        
// defaultProps and proptypes are kept at last in functional react component.

News.defaultProps = {
    country:'in',
    pageSize:8,
    category:'general'
  }
  // Now setting proptypes.
 News.propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string //pts shortcut for proptype.string.
  }
export default News