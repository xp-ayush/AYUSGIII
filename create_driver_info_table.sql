CREATE TABLE IF NOT EXISTS driverInfo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    driverName VARCHAR(100) NOT NULL,
    driverMobile VARCHAR(15) NOT NULL UNIQUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
