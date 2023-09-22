import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'; //shortcut to import proptypes is to simply type impt.

// The main use of proptype is that we can ensure that the props that we are passing from App.js(in our case) must be of the type that we require means suppose kisi prop mein humne string pass karni thi, aur humne galti se number pass kar diya to ek error  aayega aur app run nahi hoga hamara so isi wajah se so to avoid such cases hum log prop-types use karte hai jisme hum props ki default value k saath props ka type decalare karte hai..

// Note -:jo bhi hum je category , county, language wagareh ye sab pass kar rahe hai to hume iske baare mein newapi ki documentation se pata chala ki ye sab hota hai , go to documentation aur headlines k neeche ye sab mention hoga,to tension mat lena.

export class News extends Component {
// with the help of static keyword we can set the defaultPropTypes.
  static defaultProps = {
    country:'in',
    pageSize:8,
    category:'general'
  }
  // Now setting proptypes.
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string //pts shortcut for proptype.string.
  }

  // below we have articles variables containing an array each element is an object.
  constructor() {
    super();
    console.log("constructor");

    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }

  
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=67731dcdf96849bf96844cefcc276e59&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    console.log("This below is data");
    console.log(data);
    // converting data we get from news api link to json
    let parsedata = await data.json();
    this.setState({ articles: parsedata.articles });
  }
 

  // This componentDidMount runs after the render at first the constructor runs then render() and thn at last componentDidMound() runs.

  // if we use async keyword before componentDidMount() then this method will become asyncronous means this method can wait to fully execute until certain conditions occur.

  // inside this async function we can use await such that the url we are fetching will take

  async componentDidMount() {
    // creating a variable to store link.
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=67731dcdf96849bf96844cefcc276e59&page=1&pageSize=${this.props.pageSize}`;


    // fetch api takes url and returns a promise, now until the promise is resolved the function will wait.
    // now we can convert this data into json or text or any other form.

    // let data = await fetch(url);
    // console.log("This below is data");
    // console.log(data);


    // converting data we get from news api link to json

    // let parsedata = await data.json();
    // this.setState({ articles: parsedata.articles });
    this.updateNews();
  }

  handleonPrev=async()=>{
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=67731dcdf96849bf96844cefcc276e59&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedata = await data.json();
    // this.setState({
    //   articles:parsedata.articles,
    //   page:this.state.page-1,
    //   loading:false
    // })

    this.setState({page:this.state.page-1});
    this.updateNews();
  }
    handleonNext=async()=>{
    //  if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){
    //  }
      // We have gone through the documentation of news api and we get to know from the 'everything' section that pagesize bascially tell us about how many news(or articles) elements will be in a page.

      // so here we are setting page size as 20 which means that each page will consist of 20 elements of news.

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
      this.setState({page:this.state.page+1});
      this.updateNews();
    }
  render() {
    return (
      <>
        <div className="container my-4 " >
          <h1 className="text-center">News Headlines</h1>

             {/* This below statement means if this.state.loading is true only then Spinner will be visible otherwise not. */}
          {this.state.loading && <Spinner/>}
          <div className="row">
            {/* To iterate articles we have the following sytax */}
            {
              /* yaha par state mein jo array tha article us article mein we have many objects and by using map method when we iterate over this array and printed the element of the article array we will get objects in return so but hum console.log hamare main objective nahi hai hum console.log ki jagah cards ko return karenge aur jo bhi elements iterate ho rahe hai using . operator we will use their value. */
            }
            {/* {this.state.articles.map((element)=>{console.log(element)})} */}
            {!this.state.loading &&this.state.articles.map((element) => {
              return <div className="col-md-3 mx-4 my-2  ">
                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} publishedAt={element.publishedAt} source ={element.source.name}/>
              </div>
            })}

          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark" onClick={this.handleonPrev} disabled={this.state.page<=1}>&larr;Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleonNext} disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}>Next&rarr;</button>
        </div>
      </>
    )
  }
}
export default News