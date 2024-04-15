import React, { useEffect } from 'react';
import { getFetchProducts, bookProduct } from '../../services/productEndpoints';
const List = () => {
    const [productList, setproductList] = React.useState([]);
    const [productQty, setproductQty] = React.useState([])

    const getProducts = () => {
        getFetchProducts().then((res) => {
            setproductList(res.data.products)
        })
    }
    const book = (list,) => {
        const inputIndex = getIndex(list.id + '_qty', productQty, 'name');
        const res = validateQuantity(inputIndex, list.avl_qty)
        if (res.status) {
            let data = { 'product_id': list.id ,'qty':list.avl_qty}
            bookProduct(data).then((res) => {
                if (res.status === 200) {
                    alert(res.data.message)
                    window.location.reload()
                }
            })
        } if (!res.status) {
            alert(res.message);
        }



    }
    const validateQuantity = (index, avl_qty) => {
        if (index !== -1) {
            let qty = productQty[index].qty;
            return qty <= avl_qty ? { 'status': true, 'message': 'Stock avilable' } : { 'status': false, 'message': 'Stock not avilable' };
        } else {
            return { 'status': false, 'message': 'Please enter the quantity' };
        }
    }
    const getIndex = (value, arr, prop) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][prop] === value) {
                return i;
            }
        }
        return -1;
    }
    const onChange = (e) => {
        const { name, value } = e.target;
        const inputIndex = getIndex(name, productQty, 'name');
        if (inputIndex === -1) {
            setproductQty([...productQty, { 'name': name, 'qty': value }])
        } else {
            const updatedProductQty = [...productQty];
            updatedProductQty[inputIndex].qty = value;
            setproductQty(updatedProductQty);
        }
        console.log(productQty)
    }
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div className='container'>
            <h3 >Products List</h3>
            <table className='table table-striped' style={{ fontSize: 14 + 'px' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Articles Required</th>
                        <th>Avilable Qunatity</th>
                        <th>Book</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.length > 0 ?
                        productList.map((list, index) => {
                            return (
                                <tr>
                                    <td>{list.name}</td>
                                    <td>{list.price}</td>
                                    <td>
                                        {
                                            list.articles.map((article) => {
                                                return (article.name + ':' + article.req_articles + '\n')
                                            })
                                        }
                                    </td>
                                    <td>
                                        {list.avl_qty}
                                    </td>
                                    <td>
                                        {list.avl_qty > 0 ?
                                            <div>
                                                <input type="text" name={list.id + '_qty'} placeholder='Enter quantity' onChange={(e) => { onChange(e) }} /><a href='#' onClick={() => { book(list) }}>Book</a>
                                            </div>
                                            :
                                            'Out of Stock'
                                        }
                                    </td>
                                </tr>
                            )
                        }
                        )
                        :
                        <tr><td colSpan="14" text-align="center">No records</td></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List;