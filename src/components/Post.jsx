import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
export function Post(props){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>

          <Avatar src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' />
        
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='11 de Maio às 08:50' dateTime='2022-05-11 08:50:13'> Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p> Fala galeraa 👋</p>
        <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p> 👉 {' '}<a href='#'>jane.design/doctorcare</a></p>
        <p> 
          <a href='#'>#novoprojeto</a>{' '}
          <a href='h'>#nlw</a> {' '}
          <a href='h'>#rocketseat </a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário'/>
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>

    </article>
  )
}