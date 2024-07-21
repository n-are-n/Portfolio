IF NOT EXISTS ( SELECT 
        *
        FROM sysobjects
        WHERE name='Contact' AND xtype='U')
BEGIN
    CREATE TABLE Contact (
        Id INT PRIMARY KEY,
        Name VARCHAR(50) NOT NULL,
        Number VARCHAR(10) NOT NULL UNIQUE CHECK (Number LIKE '[0-9]%'),
        Description VARCHAR(255) NOT NULL,
        DTStamp DATETIME NOT NULL DEFAULT GETDATE()
    );
END;
