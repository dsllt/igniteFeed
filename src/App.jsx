import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author='Diego' 
            content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aspernatur expedita, culpa veniam unde iure, sequi inventore dicta fuga aperiam et corporis a maiores?'
          />
          <Post 
            author='Diego' 
            content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aspernatur expedita, culpa veniam unde iure, sequi inventore dicta fuga aperiam et corporis a maiores?'
          />
        </main>
      </div>
    </div>
  )
}


