import api from './api'
export const postCreateProduct = (data) => {
    return api
        .post("/product/create", data)
}
export const getFetchProducts = () => {
    return api
        .get("/product/fetch")
}
export const bookProduct = (data) => {
    return api
        .post("/product/book",data)
}