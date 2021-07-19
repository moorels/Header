import React from 'react'
import Header from './Header'
import styles from '../styles/Home.module.css'
import { Navbar } from './Navbar'
function about() {
    return (
        <div className={styles.container}>
        <Navbar/>
        <div  className={styles.main}>
        <div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
  <div>1345</div>
  <div>1345</div>
  <div>1345</div>
  <div>1435</div>
  <div>1345</div>
  <div>1345</div>
  <div>3451</div>
  <div>1345</div>
  <div>1345</div>
  
</div>
            About Page
        </div>
        </div>
    )
}

export default about
