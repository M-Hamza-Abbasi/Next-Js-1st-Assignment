import React from 'react';
import Link from 'next/link';

const Servicepage = () => (
  <div>
    <h1>Services</h1>
    <ul>
      <li><Link href="/services/app-development">App Development</Link></li>
      <li><Link href="/services/web-development">Web Development</Link></li>
    </ul>
    
  </div>
);

export default Servicepage;
