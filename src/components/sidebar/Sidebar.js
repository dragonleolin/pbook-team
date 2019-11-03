import React from 'react'
import './sidebar.scss'

const Sidebar = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />

      
      <div className="side-menu" >
        <nav className="sidebar" >
          <ul className="list-unstyled components">
            <li className="active">
              <a
              >
                修改資料
              </a>
              <ul >
                <li>
                  <a href="#">修改密碼</a>
                </li>
              </ul>
              <ul >
                <li>
                  <a href="#">修改密碼</a>
                </li>
              </ul>
            </li>
            <li>
              <a
              >
                Pages
              </a>
              <ul >
                <li>
                  <a href="#">Page 1</a>
                </li>
                <li>
                  <a href="#">Page 2</a>
                </li>
                <li>
                  <a href="#">Page 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
