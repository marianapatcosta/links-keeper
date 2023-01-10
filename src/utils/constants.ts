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
    label: 'E-mail',
    value: 'mail',
    icon: faEnvelope,
  },
  {
    label: 'Phone',
    value: 'phone',
    icon: faMobileScreen,
  },
  {
    label: 'Portfolio',
    value: 'portfolio',
    icon: faBriefcase,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin',
    icon: faLinkedin,
  },
  {
    label: 'WhatsApp',
    value: 'whatsapp',
    icon: faWhatsapp,
  },
  {
    label: 'Telegram',
    value: 'telegram',
    icon: faTelegram,
  },
  {
    label: 'Discord',
    value: 'discord',
    icon: faDiscord,
  },
  {
    label: 'Reddit',
    value: 'reddit',
    icon: faReddit,
  },
  {
    label: 'Instagram',
    value: 'instagram',
    icon: faInstagram,
  },
  {
    label: 'Twitter',
    value: 'twitter',
    icon: faTwitter,
  },
  {
    label: 'Figma',
    value: 'figma',
    icon: faFigma,
  },
  {
    label: 'Dribbble',
    value: 'dribbble',
    icon: faDribbble,
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
    label: 'Youtube',
    value: 'youtube',
    icon: faYoutube,
  },
  {
    label: 'GitHub',
    value: 'github',
    icon: faGithub,
  },
  {
    label: 'Mastodon',
    value: 'mastodon',
    icon: faMastodon,
  },
  {
    label: 'StackOverflow',
    value: 'stackoverflow',
    icon: faStackOverflow,
  },
  {
    label: 'Patreon',
    value: 'patreon',
    icon: faPatreon,
  },
  {
    label: 'Blog',
    value: 'blog',
    icon: faBlog,
  },
  {
    label: 'Apple Store',
    value: 'apple',
    icon: faApple,
  },
  {
    label: 'iTunes',
    value: 'itunes',
    icon: faApple,
  },
  {
    label: 'Spotify',
    value: 'spotify',
    icon: faSpotify,
  },
  {
    label: 'Shopify',
    value: 'shopify',
    icon: faShopify,
  },
  {
    label: 'Shop',
    value: 'shop',
    icon: faCartShopping,
  },
  {
    label: 'Play Store',
    value: 'play.google',
    icon: faGooglePlay,
  },
  {
    label: 'Google Drive',
    value: 'drive.google',
    icon: faGoogleDrive,
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
