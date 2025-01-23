CREATE TABLE employees_history (
    id SERIAL PRIMARY KEY,
    is_active_arkus BOOLEAN,
    is_active_mind BOOLEAN,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(50),
    level VARCHAR(50),
    cv_link TEXT,
    tech_profile_1 VARCHAR(100),
    entry_type VARCHAR(100),
    mt_entry_date DATE,
    mt_exit_date DATE,
    business_days_in_mt INTEGER,
    office_location VARCHAR(100),
    city_of_residence VARCHAR(100),
    time_zone VARCHAR(50),
    assigned_account_or_clients VARCHAR(255),
    english_level VARCHAR(50),
    mt_exit_projection_date DATE,
    base_income_money NUMERIC,
    tech_profile_2 VARCHAR(100),
    mt_validated TEXT,
    company_exit_type VARCHAR(100),
    company_exit_date DATE,
    entry_type_details TEXT
);
INSERT INTO employees_history (is_active_arkus, is_active_mind, full_name, role, level, cv_link, tech_profile_1, entry_type, mt_entry_date, mt_exit_date, business_days_in_mt, office_location, city_of_residence, time_zone, assigned_account_or_clients, english_level, mt_exit_projection_date, base_income_money, tech_profile_2, mt_validated, company_exit_type, company_exit_date, entry_type_details) VALUES
(FALSE, TRUE, 'Alvaro Munoz', 'Developer', 'Mid', 'http://arkusnexus.com', 'JavaScript', 'Internal Transfer', '2023-01-10', NULL, 220, 'Tijuana HQ', 'Tecate', 'PST', 'Client A', 'C1', NULL, 10000.00, 'React', 'Yes', NULL, NULL, NULL),
(FALSE, TRUE, 'Beatriz Ramirez', 'Scrum Master', 'Senior', 'http://arkusnexus.com', 'Scrum', 'Internal Transfer', '2022-09-15', '2024-02-01', 360, 'Guadalajara Office', 'Zapopan', 'CST', 'Client B', 'B2', '2024-02-01', 12000.00, 'Kanban', 'Yes', 'Retirement', '2024-02-01', 'Personal reasons'),
(TRUE, FALSE, 'Carlos Lopez', 'Frontend Developer', 'Junior', 'http://arkusnexus.com', 'Vue.js', 'External Hire', '2023-03-20', NULL, 180, 'Monterrey Office', 'San Pedro', 'CST', 'Client C', 'B1', NULL, 9000.00, 'CSS', 'No', NULL, NULL, NULL),
(TRUE, TRUE, 'Diana Herrera', 'Tech Lead', 'Senior', 'http://arkusnexus.com', 'Python', 'Internal Promotion', '2021-07-10', NULL, 500, 'Ciudad de Mexico HQ', 'Coyoacan', 'CST', 'Client D', 'C2', NULL, 15000.00, 'Flask', 'Yes', NULL, NULL, NULL),
(FALSE, TRUE, 'Ernesto Torres', 'Backend Developer', 'Mid', 'http://arkusnexus.com', 'Node.js', 'Internal Transfer', '2022-11-01', '2024-03-01', 400, 'Puebla Office', 'Cholula', 'CST', 'Client E', 'C1', '2024-03-01', 11000.00, 'Docker', 'Yes', 'Termination', '2024-03-01', 'Client budget cut'),
(TRUE, FALSE, 'Fernanda Guzman', 'QA Engineer', 'Junior', 'http://arkusnexus.com', 'Testing', 'External Hire', '2023-05-05', NULL, 150, 'Tijuana HQ', 'Rosarito', 'PST', 'Client F', 'C1', NULL, 8500.00, 'Selenium', 'No', NULL, NULL, NULL),
(FALSE, TRUE, 'Gabriel Flores', 'System Admin', 'Senior', 'http://arkusnexus.com', 'Linux', 'Internal Transfer', '2020-01-10', '2023-12-15', 800, 'Guadalajara Office', 'Tlajomulco', 'CST', 'Client G', 'C2', '2023-12-15', 14000.00, 'Networking', 'Yes', 'Retirement', '2023-12-15', 'Age limit'),
(TRUE, TRUE, 'Helena Cruz', 'DevOps Engineer', 'Mid', 'http://arkusnexus.com', 'AWS', 'External Hire', '2023-04-10', NULL, 200, 'Monterrey Office', 'Santa Catarina', 'CST', 'Client H', 'B2', NULL, 13000.00, 'Terraform', 'Yes', NULL, NULL, NULL),
(FALSE, TRUE, 'Ignacio Morales', 'QA Tester', 'Mid', 'http://arkusnexus.com', 'JUnit', 'Internal Promotion', '2021-09-01', '2024-01-31', 500, 'Ciudad de Mexico HQ', 'Tlalpan', 'CST', 'Client I', 'C1', '2024-01-31', 11000.00, 'Testing Strategies', 'Yes', 'Resignation', '2024-01-31', 'Relocation'),
(TRUE, FALSE, 'Julia Sanchez', 'Support Specialist', 'Junior', 'http://arkusnexus.com', 'IT Support', 'External Hire', '2023-08-20', NULL, 100, 'Puebla Office', 'Atlixco', 'CST', 'Client J', 'B1', NULL, 8000.00, 'Helpdesk', 'No', NULL, NULL, NULL);



-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255),
--     email VARCHAR(255) NOT NULL UNIQUE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- INSERT INTO users(name, email) 
--     VALUES ('Eduardo RS', 'erendon@arkusnexus.com'), 
--     ('Gael Felix', 'gfelix@arkusnexus.com'), 
--     ('Eduardo de Anda', 'edeanda@arkusnexus.com'), 
--     ('Alvaro Munoz', 'amunoz@arkusnexus.com'), 
--     ('Fernanda Gonzalez', 'mgonzalez@arkusnexus.com');
