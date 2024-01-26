/**
 *    React Native se puede configurar creando un react-native.config.js en la raíz del proyecto.
 *    Dependiendo del tipo de paquete, el conjunto de propiedades válidas es diferente.
 *
 * *  Configuración
 *    https://github.com/react-native-community/cli/blob/main/docs/configuration.md
 *
 * *  Ejemplo
 *    Podrás correr el comando pod install para iOS directamente desde la raíz con el siguiente flag
 * *  pod install --project-directory=ios
 *
 */

module.exports = {
  dependencies: {
    ...(process.env.NO_FLIPPER ? {'react-native-flipper': {platforms: {ios: null}}} : {}), // Improve Performance on iOS Turn Off Flipper
  },
  project: {
    ios: {sourceDir: './ios'},
    android: {sourceDir: './android'},
  },
  assets: ['./src/assets/fonts'],
};
