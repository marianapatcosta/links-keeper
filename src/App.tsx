import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { LinksKeeper } from './components'
import styles from './App.module.scss'

const demoProfile = {
  links: [
    {
      id: '1',
      label: 'My LinkedIn',
      url: 'https://www.linkedin.com/in/marianapatcosta/',
      icon: faLinkedin,
    },
    {
      id: '2',
      label: 'My GitHub',
      url: 'https://github.com/marianapatcosta/',
      icon: faGithub,
    },
    {
      id: '3',
      label: 'My Portfolio',
      url: 'https://mariana-costa.web.app',
      icon: faBriefcase,
    },
  ],
  username: 'Mariana Costa',
  avatarUrl: 'https://github.com/marianapatcosta.png',
}

function App() {
  return (
    <div className={styles.app}>
      <LinksKeeper
        profile={demoProfile}
        /*  colors={{ primary: '#ff0000', secondary: '#00ff00', font: '#0000ff' }} */
      />
    </div>
  )
}

export default App
