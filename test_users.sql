-- Test Admin User
INSERT INTO users (name, email, password, role, created_at, updated_at)
VALUES (
    'Test Admin',
    'admin@test.com',
    '$2b$10$YourHashedPasswordHere', -- You'll need to generate this with bcrypt
    'admin',
    NOW(),
    NOW()
);

-- Test Regular User
INSERT INTO users (name, email, password, role, created_at, updated_at)
VALUES (
    'Test User',
    'user@test.com',
    '$2b$10$YourHashedPasswordHere', -- You'll need to generate this with bcrypt
    'user',
    NOW(),
    NOW()
);
