import React from 'react';
import first from '../../assets/img/first.png';
import second from '../../assets/img/second.png';
import third from '../../assets/img/third.png';
import fourth from '../../assets/img/fourth.png';
import fifth from '../../assets/img/fifth.png';
import sixth from '../../assets/img/sixth.png';

function Follow() {
  return (
    <section className='mt-5 mb-2 md:container md:mx-auto md:px-28'>
        <div className='items-center justify-center'>
            <p className='text-[32px] text-center font-semibold'>Follow us on Instagram</p>
        </div>
        <div className='flex gap-2'>
            <div><img src={first}></img></div>
            <div><img src={second}></img></div>
            <div><img src={third}></img></div>
            <div><img src={fourth}></img></div>
            <div><img src={fifth}></img></div>
            <div><img src={sixth}></img></div>
        </div>
    </section>
  )
}

export default Follow