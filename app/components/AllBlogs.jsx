import React from 'react'
import { Link } from 'react-router'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    const { allBlogs, handleBlogClick, userEmail } = this.props
    return (
      <div id='blogCanvas'>
        <span id='rip'>
          <h1 id='tit'>Blogs</h1>
          <span className="ripple"></span>
        </span>
      </div>
    )
    // return (
    //   <div>
    //     <div id='allBlogHeader'>
    //       <span id='allBlogTitle'>All Blogs</span>
    //        {
    //          userEmail==='alancampbell4444@gmail.com'&&(
    //            <Link to='/blogs/new'>
    //              <button className='btn-sm btn-success' id='createBlog'>
    //                <span className='glyphicon glyphicon-plus' id='newBlogGlyphicon'></span>
    //                  Create
    //              </button>
    //            </Link>
    //           )
    //        }
    //     </div>
    //     <ol>
    //       {
    //         allBlogs.map((blog, idx) =>
    //           <li className='indivBlogs'
    //               key={idx}
    //           >
    //             <Link to='/blog' className='blogList'
    //                onClick={e => handleBlogClick(blog.id)}>{blog.title}
    //             </Link>
    //           </li>
    //         )
    //       }
    //     </ol>
    //   </div>
    // )
  }
}
