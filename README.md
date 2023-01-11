# Links Keeper

Links Keeper is a package to group, manage and display all your network links, e-mail and phone numbers in the same place. It was developed with TypeScript, React, Vite and SCSS modules.
It is available in 2 modes: **Static mode** and **Dynamic mode**, which are configured based on providing or not _props_ to the LinksKeeper component.

![links-keeperA](https://user-images.githubusercontent.com/43031902/211227133-9630d919-62fc-4264-8d49-9725ddfdeaf7.png)

A Static demo is deployed [here](https://marianapatcosta.github.io/links-keeper).

A Dynamic demo is deployed as an installable, offline-first PWA [here](https://linkskeeper.web.app/).

## Installation

### **_npm_**

```shell
npm install @marianapatcosta/links-keeper
```

### **_yarn_**

```shell
yarn add @marianapatcosta/links-keeper
```

## Static Mode

In this mode, LinksKeeper can be used as an external component to pass the information to be displayed as props. The application can be deployed and the static information displayed in the app.

Provides the following functionalities:

- Custom app colors and data by passing them as props.
- Visualize user's avatar, name and links.
- Generate QRCode, sharing URL, download link card (1).

(1) Note: if the provided avatar is site url instead of an upload image, only the QR code will be available in the card.

### Get Started

You can customize the component, by defining your own _profile_ and _colors_ object passing them as props. For Static mode, `LinksKeeper` component can be used as described in the example below and in `App.tsx` file:

```jsx
const Component = () => {
  return (
    <LinksKeeper
      profile={{
        links: [
          {
            id: '1',
            label: 'My LinkedIn',
            url: 'https://www.linkedin.com/in/',
            icon: faLinkedin,
          },
        ],
        username: 'Username',
        avatarUrl: 'https://your-avatar-url',
      }}
      colors={{ primary: '#023e83', secondary: '#2174d4', font: '#ffffff' }}
    />
  )
}
```

#### **Props**

| Prop name         | Type           |                                                                          Description | Default |
| ----------------- | :------------- | -----------------------------------------------------------------------------------: | ------: |
| profile\*         | Profile        |  Provides information to display. Includes _avatarUrl_, _username_ and _links_ array |       - |
| colors\*          | ColorsSettings | Provides de colors to be used in the app. Includes _primary_, _secondary_ and _font_ |       - |
| additionalClass\* | string         |                                       css class name to apply to the base component. |       - |


#### **Colors prop**

| Field name  | Type             |                                    Description |   Default |
| ----------- | :--------------- | ---------------------------------------------: | --------: |
| primary\*   | string (hexcode) | Hexcode for the primary/main color of the app. | '#023e83' |
| secondary\* | string (hexcode) |    Hexcode for the secondary color of the app. | '#2174d4' |
| font\*      | string (hexcode) |        Hexcode for the fontn color of the app. | '#ffffff' |


#### **Profile prop**

| Field name  | Type   |                                                                                                                                        Description | Default |
| ----------- | :----- | -------------------------------------------------------------------------------------------------------------------------------------------------: | ------: |
| avatarUrl\* | string |                                                                                                                              URL for user's avatar |       - |
| username\*  | string |                                                                                                                                   name of the user |       - |
| links       | Link[] | Array of links, e-mails, phone numbers to be displayed. Each link must have and _id_ (string), _label_ (string), _url_ (string), and _icon_ (Icon) |       - |

\*optional

These objects must following structure:

```ts
interface LinksKeeperProps {
  profile?: Profile
  colors?: ColorSettings
  additionalClass?: string
}

type Profile = {
  links: Link[]
  username?: string
  avatarUrl?: string
}

type ColorSettings = {
  primary?: string
  secondary?: string
  font?: string
}

type Link = {
  id: string
  label: string
  url: string
  icon: Icon // Font-awesome icons; the available icons are stated below
}

type Icon = 
  faApple|
  faDiscord|
  faDribbble|
  faFigma|
  faGithub|
  faGoogleDrive|
  faGooglePlay|
  faInstagram|
  faLinkedin|
  faMastodon|
  faPatreon|
  faReddit|
  faShopify|
  faSpotify|
  faStackOverflow|
  faTelegram|
  faTiktok|
  faTwitch|
  faTwitter|
  faWhatsapp|
  faYoutube|
  faBlog|
  faBriefcase|
  faCartShopping|
  faEnvelope|
  faGraduationCap|
  faHouse|
  faMobileScreen|
  faUser
```

## Dynamic Mode

In this mode, LinksKeeper can be used as an external component without passing any props. It relies on browser's LocalStorage API to manage (display, add, edit and delete) user's links, e-mails and phone. The application can be deployed and the dynamic information displayed in the app. This is useful for a personal contact list with users's own contacts and contacts from other people. Can be particularly useful if integrated in an offline-first application.

Provides the following functionalities:

- Add, edit, filter, delete links, e-mails or phone numbers.
- Generate QRCode, sharing URL, download link card.
- Custom the app colors.

### Get Started

For dynamic mode, `LinksKeeper` component can be used as described in the example below and in `App.tsx` file:

```jsx
const Component = () => {
  return <LinksKeeper />
}
```

## Available Scripts

### `yarn install`

Installs all the dependencies required to run and develop this application.

### `yarn dev`

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### `yarn build`

Build a production-ready application.

### `yarn preview`

Runs the production build locally

### `yarn deploy`

Deploys Demo page to github pages
