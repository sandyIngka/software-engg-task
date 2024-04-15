/* Replace with your SQL commands */
CREATE TABLE tbl_articles (
    id SERIAL PRIMARY KEY,
    name varchar DEFAULT NULL,
    stock integer NOT NULL,
    is_active bool NOT NULL DEFAULT TRUE,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp DEFAULT NULL
);