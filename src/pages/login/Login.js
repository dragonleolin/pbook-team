import React from 'react'
import './login.css'
import { log } from 'util'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      container_back: "container_back",
      container_front: "container_front",
      container_right: "container_right _center",
      container_left: "container_left _center"
    }
  }

  componentDidMount() {

  }
  flipOne = () =>{
    let newClassName = {
      container_back: `container_back  flip-to-right`,
      container_front: `_opacity`,
    }
    this.setState(newClassName)
  }
  flipTwo = () =>{
    let newClassName = {
      container_right: `container_right _center  flip-to-left`,
      container_front: `container_front`,
      container_left: `container_left _center`
    }
    this.setState(newClassName)
  }
  

  render() {

    return (
      <div className="container_login">
        <div className="form-container">
          <form action="#" className={this.state.container_back}>
            <div className="login_title">
              <img src={require('./icon_MR_m.svg')} alt="" style={{ width: '30px' }} />
              <h2>品書人註冊</h2>
            </div>
            <input className="login_input" type="text" placeholder="電子郵件" />
            <input
              className="login_input"
              type="text"
              placeholder="使用者名稱"
            />
            <input className="login_input" type="password" placeholder="密碼" />
            <input
              className="login_input"
              type="password"
              placeholder="請再次確認密碼"
            />
            <input className="login_input" type="text" placeholder="新增照片" />
            <div className="serial"></div>
            <input
              className="login_input"
              type="text"
              placeholder="輸入驗證碼"
            />
            <button type="button" className="singUp_btn">
              確認
            </button>
            <button type="button" className="singUp_btn">
              取消
            </button>
          </form>
          <form action="#" className={this.state.container_front}>
            <div className="login_title">
              <img src={require('./icon_MR_m.svg')} alt="" style={{ width: '30px' }} />
              <h2>品書人登入</h2>
            </div>
            <input className="login_input" type="email" placeholder="Email" />
            <input
              className="login_input"
              type="password"
              placeholder="Password"
            />
            <button className="login_btn">登入</button>
            <a href="#">Forgot your password?</a>
            <div className="social-container">
              <div>快速登入</div>
              <a href="#" className="social"></a>
              <a href="#" className="social"></a>
            </div>
          </form>
        </div>

        <div className="form-container" data-left>
          <div className={this.state.container_left}>
            <img src={require('./品書logo.png')}alt="" style={{ width: '120px' }} />
            <h4 style={{ margin: '10px' }}>還沒有帳號就快來加入品書人行列</h4>
            <button className="login_btn" onClick={this.flipOne}>
              品書人註冊
            </button>
          </div>
        </div>
        <div className="form-container">
          <div className={this.state.container_right}>
            <img src={require('./品書logo.png')} alt="" style={{ width: '120px' }} />
            <button className="login_btn" onClick={this.flipTwo}>
              品書人登入
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
