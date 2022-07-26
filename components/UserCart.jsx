import React from 'react'
import backIcon from '../public/assets/back.svg';
import Image from 'next/image'
import { useRouter } from 'next/router';
export default function UserCart() {
  const router = useRouter();
  return (
    <div className='cart-wrapper container'>
      <div className='row'>
        <div className="col-8 cart-summary">
          <form>
            <div className='cart-box'>
              <div className='img-wrapper mb-3'>
                <Image src={backIcon} height='30' width='30' onClick={() => router.push('/create-ad')}></Image>
              </div>
              <h2>ADS DETAILS</h2>
              <div className='row' >
                <div className='input-details col-lg-6'>
                  <label>Name</label>
                  <input type='text' />
                </div>
                <div className='input-details col-lg-6'>
                  <label>Email</label>
                  <input type='text' />
                </div>
                <div className='input-details col-lg-6'>
                  <label>Company Name</label>
                  <input type='text' />
                </div>
                <div className='input-details col-lg-6'>
                  <label>Ads Tagline</label>
                  <input type='text' />
                </div>
                <div className='input-details col-lg-12'>
                  <label>Address</label>
                  <textarea />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-4 cart-summary">
          <div className='cart-box'>
            <h2>ADVERTISEMENT SUMMARY</h2>
            <div className='details'>
              <label>Purchased blocks</label>
              <p>5 Unit</p>
            </div>
            <div className='details'>
              <label>Price per block</label>
              <p>500/-</p>
            </div>
            <div className='details'>
              <label>Service fees</label>
              <p>80/-</p>
            </div>
            <hr />
            <div className='details'>
              <label>Total purchased</label>
              <p>2580/-</p>
            </div>
            <div className='button-wrapper text-center'>
              <button>Preview</button>
              <button className='ms-2'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
