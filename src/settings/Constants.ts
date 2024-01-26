/* eslint-disable @typescript-eslint/no-namespace */
export namespace CONSTANTS {
  export enum ROUTES {
    LOGIN = '/auth/signin',
    DASHBOARD = '/dashboard',
    SUPPORT_PHONE = 'tel:+566007713000',
    CLASSIC_PORTAL = 'https://estudiante.uss.cl/login/',
    EMPLOYMENT_PORTAL = 'https://portalempleo.uss.cl/',
    OUTLOOK_MAIL = 'https://outlook.office365.com/mail/',
    CHANGE_PASSWORD = 'https://claveunica.uss.cl/',
    FACEBOOK = 'https://www.facebook.com/ComunidadUSS/',
    TWITTER = 'https://twitter.com/USanSebastian',
    YOUTUBE = 'https://www.youtube.com/channel/UC22O4-WupSB0XfaiQnMzK3g',
    INSTAGRAM = 'https://www.instagram.com/usansebastian/?hl=es/',
    CLASSROOM = 'https://srv01.uss.cl/login/login_uss.php',
    BLACKBOARD = 'https://uss.blackboard.com/',
    SOPORTE_TECNICO = 'https://help-miuss.uss.cl/',
    FEEDBACK = 'https://forms.gle/4QKjzWecF33KgGkp9',
    MIS_CALIFICACIONES = 'https://miqa.uss.cl/miscalificaciones',
    MI_SEMANA = 'https://miqa.uss.cl/misemana',
    MIS_ARANCELES = 'https://miqa.uss.cl/misaranceles',
    ACTIVIDADES = 'https://www.uss.cl/actualidad-uss/agenda/',
    AUTOSERVICIO = 'http://autoservicio.uss.cl/PROD/twbkwbis.P_GenMenu?name=homepage',
  }

  export enum STORAGE {
    API_ACCESS_TOKEN = 'STORAGE_API_ACCESS_TOKEN',
  }

  export enum GraphQLErrors {
    UNAUTHENTICATED = 'UNAUTHENTICATED',
    BAD_USER_INPUT = 'BAD_USER_INPUT',
    INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
    GRAPHQL_VALIDATION_FAILED = 'GRAPHQL_VALIDATION_FAILED',
    GRAPHQL_PARSE_FAILED = 'GRAPHQL_PARSE_FAILED',
    FORBIDDEN = 'FORBIDDEN',
  }

  export enum ProfileEnum {
    ADVANCE_ONLINE = 0,
    ESTUDIANTES = 1,
    ADVANCE_PRESENCIAL = 2,
    POSTGRADO = 3,
    EGRESADOS = 4,
    COLABORADOR = 5,
  }

  export enum ProfileContext {
    GET_PROFILES = 'GET_PROFILES',
    GET_USER_PROFILE = 'GET_USER_PROFILE',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    GET_USER_CLASSES_TODAY = 'GET_USER_CLASSES_TODAY',
    GET_USER_DATE_TODAY = 'GET_USER_DATE_TODAY',
    GET_TEST_ENVIRONMENT = 'GET_TEST_ENVIRONMENT',
    GET_USER_DATA = 'GET_USER_DATA',
    GET_CREDENTIAL = 'GET_CREDENTIAL',
    SET_CREDENTIAL = 'SET_CREDENTIAL',
  }

  export enum ModalContext {
    GET_STATE_MODAL = 'GET_STATE_MODAL',
    SET_STATE_MODAL = 'SET_STATE_MODAL',
    TOGGLE_STATE_MODAL = 'TOGGLE_STATE_MODAL',
  }

  export enum AuthContext {
    CLIENT_ID = 'b797f278-7b83-4d16-b1a5-d0ca53ea1699',
    SIGN_IN = 'SIGN_IN',
    SIGN_OUT = 'SIGN_OUT',
    AZURE_ACCESS_TOKEN = 'AZURE_ACCESS_TOKEN',
    AZURE_REFRESH_TOKEN = 'AZURE_REFRESH_TOKEN',
    API_ACCESS_TOKEN = 'API_ACCESS_TOKEN',
    API_REFRESH_TOKEN = 'API_REFRESH_TOKEN',
    IS_LOADING = 'IS_LOADING',
    AUTHORIZED = 'AUTHORIZED',
  }

  export enum Apollo {
    URI = 'https://miqa.uss.cl/uss-exp-digital-backend-qa',
  }

  export enum LibraryScreens {
    SUMMARY = 'Summary',
    LENDINGS = 'Lendings',
  }
}
