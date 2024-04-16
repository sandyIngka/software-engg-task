
### Backend
- Navigate to **backend** folder from root folder and run :
```bash
  npm install
```
- Rename the **example.env** file  to **development.env**

- Navigate to root folder and run 
```bash 
docker compose up --build ;

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

- By default backend will run on 5000. If there any change in the port, Once docker is running for backend copy  and paste the port number in **.env.development** file EX: BACK_END_ENDPOINT=http://localhost:{port}/api/. 

- Run 
 ```bash
    npm start
```
App  will open up in the default browser.




## Assumptions

- I was able to understand the functional requirements.
- Based on the requirement, started with Db structure and decided to keep 3 tables 
    - tbl_products : will have product master data 
    - tbl_product_articles : will have product articles with article id and product id;
    - tbl_articles : will have article master data like : id, name, stock

### First and Second requirement
- It should be possible to import articles and products from a file

    - Created a import function in react project and validating the JSON file type and if this is valid it will send the request to backend to save the data.

### Third requirement
- It should be possible to get a list of all products and their currently available quantities based on the current stock of articles.
    - I need to get the **products available quantities** based on the required product articles and subject to article avaialbility.
    - Ex: Product A requires  **articles** : leg-8 ,screw:2 , top:1 and **stock** is leg-17 ,screw-4, top-1 . Product avilable quantity should be 1

### Fourth requirement
- It should be possible to provide a list of products and quantities which are to be sold as part of an order. Your application should determine if this transaction is possible given the current stock state, and update the stock accordingly.

    - Once we have product availablity with all articles it shows the quantities. 
    - Taking product quantity input from user and check with the available quantity
        - If the input quantity is more than available quantity, there will be a pop up "Required quantity is more than available qty "
        - If input quantity is less or equal to available quantity then the transaction is processed. Article stock will be updated in DB based on the transaction. 
        - PS : Once the available quantity is 0 then show out of stock. 


## Further improvements
### Backend
    - We can write test cases for different scenario' to avoid the last minute issue's.
        - From writing test cases the code credibility will increase and there will be more flexiblity to enhance.

### Frontend
    - Can be provided with individual articles's stock update.
    - Adding single articles and product option.
    - Add/ Remove product articles and update required articles for products.
    - Report donwload options. 
    - Can show the expected stock available date.