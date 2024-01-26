# Experiencia-digital-frontend-app

1. Install React Native and set environment Setup
   https://reactnative.dev/docs/environment-setup

2. For iOS after install environment setup

iOS First Steps Dev environment
intel

```bash
  cd ios
  bundle install # only the first time
  bundle exec pod install # or pod install --project-directory=ios # when new package required
```

m1 - arms

```bash
  cd ios
  arch -arm64 bundle install
  arch -arm64 bundle exec pod install
``` 

## List of Dependencies Installed 

~~~

├──────── List of installed dependencies and their relationship
│
├── "react": "18.2.0", // React Core
├── "react-native": "0.71.3" // React Native Core
│
├── "react-native-azure-auth": "~1.8"// Azure B2C   !Required additional configuration on Android.
│ ├── https://github.com/vmurin/react-native-azure-auth
│
├── "react-native-remix-icon": "~0.4.0", // Icons remix-icons
│ ├──"react-native-svg": "~13.7.0" // Require for render SVG and Generate Qr Code
│ │ ├──"react-native-qrcode-svg": "~6.2.0",  //  Create Qr Code
│
├── "@react-navigation/native": "~6.1.2", // React Navigation Core    !Required additional configuration on Android.
│ ├── "react-native-screens": "~3.19.0", // React Navigation VirtualScreen
│ ├── "react-native-safe-area-context": "~4.5.0", // Area Segura platforms apps
│ ├── "@react-navigation/native-stack": "~6.9.8", // Navigating a new VirtualScreen as router.
│ ├── "@react-navigation/drawer": "~6.5.7", // CoreDrawer.
│ │ ├── "react-native-gesture-handler": "~2.9.0", // Handle Swipe for Open Drawer.
│ │ ├── "react-native-reanimated": "~2.14.4" // Required for Animation handle Drawer.
│
├── "@react-native-picker/picker": "^2.4.8", // React Native Select for Select Custom Profile
│
├── "react-native-drop-shadow": "~0.0.6", // React Shadow. On Android not work shadow offset. Apply on footerBar TODO: Change for other library more stable.
│
├── "graphql": "^16.6.0", // GraphQL is a query language for APIs
├── "@apollo/client": "^3.7.5", // Apollo Client is a fully-featured caching GraphQL client
│
├── "react-native-collapsible": "~1.6.0", // Custom button accordion
│
├────────

~~~

## Convención Para Instalar dependencies

```bash
yarn add <nombreDePaquete> -T
```

## Para Instalar devDependencies

```bash
yarn add <nombreDePaquete> -D -T
```

## Para Desinstalar Dependencies y remover los autolinks

```bash
yarn remove <nombreDePaquete> 
```

## Change Display Name App
### iOS

Folder: ios/miuss/Info.plist
Line 8

```xml
<string>Mi USS</string>
```

### Android

Folder: android/app/src/main/res/values/strings.xml
Line 2

```xml
<string name="app_name">Mi USS</string>
```

## Add assets

If you want links asset on the project you need install globally de next package

```bash 
yarn global add react-native-asset
```

After that, run de next code

```bash
react-native-asset
```

Read instruction of package
https://www.npmjs.com/package/react-native-asset

## Delete Assets

If you want delete assets and properly unlink of android & iOS project,
you need following the next steps;

1. Delete the asset file on the location `'src/assets/fonts/'`
2. run `react-native-asset`

## Problems

### Posibles soluciones Hard Reset

#### Eliminar carpeta Vendor solo se genera en ios

```bash
rm -rf vendor
```

#### Eliminar carpeta node_modules

```bash
rm -rf node_modules
```

#### Borrar cache de Yarn

```bash
yarn cache clean --all
```

#### Borrar cache watchman

```bash
watchman watch-del-all
```

#### Reset metro (reinicio)

```bash
rm -rf ${TMPDIR:-/tmp}/metro-*
```

#### Windows Users Git
Please config your bash for fineLine LF
```bash
git config --global core.autocrlf input
```

## Publish new Version of App
Two Steps
### First run command for upgrade package.json version

Patch version example 1.0.1 to 1.0.2

```bash
yarn version --patch
```

Minor version example 1.0.1 to 1.1.1

```bash
yarn version --minor
```

Major version example 1.0.1 to 2.0.1

```bash
yarn version --major
```

### Second run command for upgrade version Android and iOS
The following command puts the same version in package.json for the iOS and Android project

```bash
yarn postversion
```

read more [Here](https://github.com/stovmascript/react-native-version)





