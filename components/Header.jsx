import React from 'react'
import cartIcon from '../public/assets/cart.svg';
import loginIcon from '../public/assets/login.svg';
import userIcon from '../public/assets/user.svg';
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from "next/router";
export default function Header() {
  const [loginClicked, setLoginClicked] = useState(false);
  const [userClicked, setUserClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()


  const handleLogin = (e) => {
    e.preventDefault();
    if (password == '1234' && email == 'test@gmail.com') {
      setIsLoggedIn(true);
      setLoginClicked(false);
    }
  }
  return (
    <div className='header-wrapper container-fluid'>
      <div className='container'>
        <div className='logo-wrapper' onClick={() => router.push('/')}>
          COMPANY
        </div>
        <div className='search-wrapper'>
          <input tyoe='text' placeholder='Search for area, street name...'></input>
        </div>
        <div className='icons-wrapper'>
          <div className='cart-icon me-3'>
            <Image src={cartIcon} height='30' width='30' onClick={() => router.push('/cart')}></Image>
          </div>
          <div className='profile-icon'>
            {
              isLoggedIn ? (
                <Image src={userIcon} height='30' width='30' onClick={() => setUserClicked(!userClicked)}></Image>
              ) : (
                <Image src={loginIcon} height='30' width='30' onClick={() => setLoginClicked(!loginClicked)}></Image>
              )
            }
          </div>
        </div>
        {
          loginClicked && (
            <div className="nav-sign-in-box">
              <div className="login-wrapper">
                <form onSubmit={handleLogin}>
                  <div className="s_input-wrapper ">
                    <label className="text-label">Email<span className='required-field'> *</span></label>
                    <input
                      type="email"
                      className="text-input"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      autoComplete="on">

                    </input>
                  </div>
                  <div className="s_input-wrapper my-3">
                    <div className="d-flex justify-content-between">
                      <label className="text-label">Password<span className='required-field'> *</span></label>
                      <label className="text-label-forgot">Forgot?</label>
                    </div>
                    <input
                      type='password'
                      autoComplete="new-password"
                      className="text-input"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    >
                    </input>
                  </div>
                  <div className="s_input-wrapper my-3 d-flex align-items-center">
                    <input
                      type="checkbox">
                    </input>
                    <label className="text-label ms-2">Show password</label>
                  </div>
                  <div className="d-flex justify-content-start mb-3">
                    <button className="login_btn" type="submit">
                      <span>SIGN IN</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )
        }
        {
          userClicked && (
            <div className="profile-content-wrapper">
              {
                userClicked ? (
                  <div className="user d-flex flex-column align-items-start">
                    <div className="text-username">John Kido</div>
                    <div className="text-email">test@gmail.com</div>
                  </div>
                ) : null
              }
              <div className="content">
                <div className="content-wrapper cursor-pointer" onClick={() => router.push('/create-ad')}>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36.857 29.897">
                      <g id="up" transform="translate(0 0)">
                        <path id="Path_18" data-name="Path 18" d="M15.749,14.5l1.817-3.956L21.5,8.749,17.566,6.956,15.749,3,14,6.956,10,8.749l4,1.794Z" transform="translate(8.443 -3)" fill="#000000" />
                        <path id="Path_19" data-name="Path 19" d="M6.6,15.2l.92-3.68,3.68-.92-3.68-.92L6.6,6,5.68,9.68,2,10.6l3.68.92Z" transform="translate(-2 0.899)" fill="#000000" />
                        <path id="Path_20" data-name="Path 20" d="M35.4,6a3.437,3.437,0,0,0-3.11,4.922l-6.934,6.922a3.4,3.4,0,0,0-2.972,0L20.06,15.521a3.167,3.167,0,0,0,.369-1.472,3.456,3.456,0,1,0-6.565,1.472L6.93,22.443a3.491,3.491,0,1,0,1.636,1.633L15.5,17.154a3.4,3.4,0,0,0,2.972,0L20.8,19.477a3.167,3.167,0,0,0-.369,1.472,3.456,3.456,0,1,0,6.565-1.472l6.934-6.922A3.445,3.445,0,1,0,35.4,6Z" transform="translate(-2 0.899)" fill="#000000" />
                      </g>
                    </svg>
                  </div>
                  <div className="account-text">Post new ads</div>
                </div>
                <div className="content-wrapper" onClick={() => { setIsLoggedIn(false); setUserClicked(false) }}>
                  <div>
                    <svg width="16" height="16" viewBox="0 0 32 32" id="i-signout" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M28 16 L8 16 M20 8 L28 16 20 24 M11 28 L3 28 3 4 11 4" />
                    </svg>
                  </div>
                  <div className="account-text">Sign out</div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
