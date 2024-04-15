/* Replace with your SQL commands */
CREATE TABLE tbl_products (
    id SERIAL PRIMARY KEY,
    name varchar DEFAULT NULL,
    price varchar NOT NULL DEFAULT '',
    is_active bool NOT NULL DEFAULT TRUE,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp DEFAULT NULL
);