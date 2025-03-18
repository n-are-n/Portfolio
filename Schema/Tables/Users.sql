-- Select or create the database named 'Portfolio' (Not needed in SQLite, just for reference)
USE Portfolio;

-- Create the 'Users' table to store client contact details
CREATE TABLE Users (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,  -- Unique ID for each user, auto-incremented
    Name TEXT NOT NULL,                    -- User's name, required (cannot be NULL)
    Mail TEXT NOT NULL UNIQUE,             -- User's email, must be unique and not NULL
    Description TEXT NOT NULL,             -- Description provided by the user, required
    Created_at DATETIME DEFAULT CURRENT_TIMESTAMP  -- Automatically sets the current date/time on creation
);
