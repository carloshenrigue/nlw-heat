import styles from './styles.module.scss'
  import {VscGithubInverted} from 'react-icons/vsc'

export function LoginBox() {
  return (
    <div className={styles.loginbox}>                                                    
    <strong>Entre e compartilhe suas mensagens</strong>
    <a href="#"  className={styles.SigninWithGit}>
    <VscGithubInverted/>
      Entrar com github</a>
    </div>                                
    )
}