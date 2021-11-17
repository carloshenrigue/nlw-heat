import styles from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
export function App() {
  return(
    <main className={styles.contentwrapper}>
    <MessageList></MessageList>
    <LoginBox></LoginBox>
    </main>
  )
}

export default App
