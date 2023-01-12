import {
  faApple,
  faDiscord,
  faDribbble,
  faFigma,
  faGithub,
  faGoogleDrive,
  faGooglePlay,
  faInstagram,
  faLinkedin,
  faMastodon,
  faPatreon,
  faReddit,
  faShopify,
  faSpotify,
  faStackOverflow,
  faTelegram,
  faTiktok,
  faTwitch,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faBlog,
  faBriefcase,
  faCartShopping,
  faEnvelope,
  faGraduationCap,
  faHouse,
  faMobileScreen,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const DATABASE_NAME = '@links-keeper'

export const COLLECTION_USER_DATA = `${DATABASE_NAME}:user-data`

export const LINK_ICONS_METADATA = [
  {
    label: 'Apple Store',
    value: 'apple',
    icon: faApple,
  },
  {
    label: 'Blog',
    value: 'blog',
    icon: faBlog,
  },
  {
    label: 'Discord',
    value: 'discord',
    icon: faDiscord,
  },
  {
    label: 'Dribbble',
    value: 'dribbble',
    icon: faDribbble,
  },
  {
    label: 'E-mail',
    value: 'mail',
    icon: faEnvelope,
  },
  {
    label: 'Figma',
    value: 'figma',
    icon: faFigma,
  },
  {
    label: 'GitHub',
    value: 'github',
    icon: faGithub,
  },
  {
    label: 'Google Drive',
    value: 'drive.google',
    icon: faGoogleDrive,
  },
  {
    label: 'Instagram',
    value: 'instagram',
    icon: faInstagram,
  },
  {
    label: 'iTunes',
    value: 'itunes',
    icon: faApple,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin',
    icon: faLinkedin,
  },
  {
    label: 'Mastodon',
    value: 'mastodon',
    icon: faMastodon,
  },
  {
    label: 'Other',
    value: 'learn',
    icon: faGraduationCap,
  },
  {
    label: 'Other',
    value: 'home',
    icon: faHouse,
  },
  {
    label: 'Other',
    value: 'user',
    icon: faUser,
  },
  {
    label: 'Patreon',
    value: 'patreon',
    icon: faPatreon,
  },
  {
    label: 'Phone',
    value: 'phone',
    icon: faMobileScreen,
  },
  {
    label: 'Play Store',
    value: 'play.google',
    icon: faGooglePlay,
  },
  {
    label: 'Portfolio',
    value: 'portfolio',
    icon: faBriefcase,
  },
  {
    label: 'Reddit',
    value: 'reddit',
    icon: faReddit,
  },
  {
    label: 'Shop',
    value: 'shop',
    icon: faCartShopping,
  },
  {
    label: 'Shopify',
    value: 'shopify',
    icon: faShopify,
  },
  {
    label: 'Spotify',
    value: 'spotify',
    icon: faSpotify,
  },
  {
    label: 'StackOverflow',
    value: 'stackoverflow',
    icon: faStackOverflow,
  },
  {
    label: 'Telegram',
    value: 'telegram',
    icon: faTelegram,
  },
  {
    label: 'TikTok',
    value: 'tiktok',
    icon: faTiktok,
  },
  {
    label: 'Twitch',
    value: 'twitch',
    icon: faTwitch,
  },
  {
    label: 'Twitter',
    value: 'twitter',
    icon: faTwitter,
  },
  {
    label: 'WhatsApp',
    value: 'whatsapp',
    icon: faWhatsapp,
  },
  {
    label: 'Youtube',
    value: 'youtube',
    icon: faYoutube,
  },
]

export const linkIcons = LINK_ICONS_METADATA.map(({ icon }) => icon)

export const KEYBOARD_KEY = {
  ENTER_KEY: 'Enter',
  ESCAPE_KEY: 'Escape',
  SPACE_KEY: ' ',
  LEFT_ARROW_KEY: 'ArrowLeft',
  UP_ARROW_KEY: 'ArrowUp',
  RIGHT_ARROW_KEY: 'ArrowRight',
  DOWN_ARROW_KEY: 'ArrowDown',
}

export const imageTypes = ['jpg', '.jpeg', '.png', '.svg']
