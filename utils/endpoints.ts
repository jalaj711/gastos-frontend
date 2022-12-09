export const API_BASE = process.env.API_BASE || "/api/"

export const USER_URLS = {
    GET: "/user/get/",
    DASHBOARD_STATS: "/user/dashboard/"
}

export const TRANSACTION_URLS = {
    CREATE: "/trxn/create/",
    SEARCH: "/trxn/search/",
}

export const LABEL_URLS = {
    CREATE: "/label/create/",
    GET: "/label/get/",
    STATS: "/label/stats/",
    SEARCH: "/label/search/",
}

export const WALLET_URLS ={
    CREATE: "/wallet/create/",
    GET: "/wallet/get/",
    STATS: "/wallet/stats/",
    SEARCH: "/wallet/search/",
}

export const AUTH_URLS = {
    SOCIAL: {
        GOOGLE: "/auth/social/google/",
        FACEBOOK: "/auth/social/facebook/"
    },
    LOGIN: "/auth/login/",
    LOGOUT: "/auth/logout/",
    SIGNUP: "/auth/signup/",
    FORGOT_PASSWORD: "/auth/forgot-password/",
}

const URLs = {
    AUTH: AUTH_URLS,
    WALLET: WALLET_URLS,
    LABELS: LABEL_URLS,
    TRANSACTIONS: TRANSACTION_URLS,
    USER: USER_URLS
}

export default URLs;
