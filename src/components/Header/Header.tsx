import { HeaderRoot } from './header-styled'
import logo from '../../assets/img/startupMentor_logo.png'
import { svgs } from '../../assets/svgs/exportSvg'

const Header = () => {
  return (
    <HeaderRoot>
        <a href='/'><img src={logo} alt='startup mentor logo' /></a>
        <div className="handleMenu"><span>STARTUP</span><span>MENTORS</span></div>
        <ul>
            <li><a href='https://www.youtube.com/@StartupMentors'>{svgs.youtube}<span>Youtube</span></a></li>
            <li><a href='https://t.me/StartupMentorsClub'>{svgs.telegram}<span>Telegram</span></a></li>
            <li><a href='https://startupmentors.club/podcast/'>{svgs.podcast}<span>Podcast</span></a></li>
            <li><a href='https://startupmentors.club/blog/'>{svgs.blog}<span>Blog</span></a></li>
        </ul>
    </HeaderRoot>
  )
}

export default Header