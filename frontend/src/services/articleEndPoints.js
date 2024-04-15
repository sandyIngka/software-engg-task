import api from './api'
export const postImportArticle = (data) => {
    return api
        .post("/article/import", data)
}