import api from './api'
export const postImportArticle = (data) => {
    return api
        .post("/article/import", data)
}
export const updateStock = () => {
    return api
        .get("/article/update_stock")
}