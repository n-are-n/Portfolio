IF NOT EXISTS ( SELECT
        *
        FROM sys.databases
        WHERE name = 'Portfolio')
BEGIN
    CREATE DATABASE Portfolio;
END;
