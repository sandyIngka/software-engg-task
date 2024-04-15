/* Replace with your SQL commands */
CREATE TABLE tbl_product_articles (
    id SERIAL PRIMARY KEY,
    product_id integer DEFAULT NULL,
    article_id integer NOT NULL,
    amount_of integer NOT NULL,
    is_active bool NOT NULL DEFAULT TRUE,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
    blocked_at timestamp DEFAULT NULL,
    deleted_at timestamp DEFAULT NULL
);