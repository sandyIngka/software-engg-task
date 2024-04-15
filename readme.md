
### Backend
- Navigate to **backend** folder from root folder and run :
```bash
  npm install
```
- Rename the **example.env** file  to **development.env**

- Navigate to root folder and run 
```bash 
docker compose build ;
docker compose up ; 

```
Note: Had issue with db migration command while using docker, So kindly navigate to 
**backend/migration/sqls** and open the *-up.sql files(produts,product_articles,articles table) and in docker container under postgress image select **Exec** tab and connect to db by using bellow commnds
```bash
psql;
\c task_db;
```
and run the create table SQL quries from migration files.

### Frontend
- Navigate to **frontend** folder from root folder and run :
```bash
  npm install
```
- Rename the **.env.example** file  to **.env.development**

- By default backend will run on 5000. If there any change in the port, Once docker is running for backend copy  and paste the port number in **.env.example** file EX: BACK_END_ENDPOINT=http://localhost:{port}/api/. 

- Run 
 ```bash
    npm start
```
App  will open up in the default browser.




## Assumptions

- I was able to understand the functional requirements.
- Based on the requirement strated with Db structure, Desided to keep 3 tables 
    - tbl_products : will have product master data 
    - tbl_product_articles : will have product required articles with artical id and product id;
    - tbl_articles : will have articles master data like : id, name, stock

### First and Second requirement
- It should be possible to import articles and products from a file

    - Created a import function in react project and validating the JSON file type and if this is valid will send the request to backend to save the data.

### Third requirement
- It should be possible to get a list of all products and their currently available quantities based on the current stock of articles.
    - I need to get the **products avilable quantities** based on the required poduct articles on stock avilable of articles
    - Ex: Product A requires  **articles** : leg-8 ,screw:2 , top:1 and **stock** is leg-17 ,screw-4, top-1 . Product avilable quantity should be 1

### Fourth requirement
- It should be possible to provide a list of products and quantities which are to be sold as part of an order. Your application should determine if this transaction is possible given the current stock state, and update the stock accordingly.

    - Once we have product avilable with all articles it show the quantities. 
    - Taking product quantity input from user need to check the avilable quatity
        - If the input quantity is more than avilable quantity, we should not proceide the transaction
        - If input quantity is less or equal to avilable quantity need to process the transaction. Once the avilable quantity is 0 then show out of stock. 

https://readme.so/editor