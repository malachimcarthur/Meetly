# Meetly

Project for CSCE 378.

## Prerequisites

- Node.js and npm
- .NET SDK
- MySQL Server

## Frontend Setup

1. Open a terminal in the frontend directory:

   ```powershell
   cd frontend/meetly
   ```

2. Install the dependencies:

   ```powershell
   npm install
   ```

3. Run the project:

   ```powershell
   npm run dev
   ```

## Backend Setup

NOTE: NOT NEEDED FOR CURRENT BUILD

1. Open a terminal in the backend directory:

   ```powershell
   cd backend/meetly
   ```

2. Restore the dependencies:

   ```powershell
   dotnet restore
   ```

3. Run the backend:

   ```powershell
   dotnet run
   ```

## Database Setup

Meetly uses Entity Framework Core migrations to create or update the database.

1. Create a MySQL Database called `Meetly`
2. Start MySQL Server.
3. From the backend directory, configure the connection string with .NET User Secrets:

   ```powershell
   dotnet user-secrets init
   dotnet user-secrets set "ConnectionStrings:DefaultConnection" "Server=localhost;Database=Meetly;User=root;Password=YOUR_PASSWORD;"
   ```

   Replace `YOUR_PASSWORD` with your local MySQL password. Keep credentials out of source control. Remove any real password from `appsettings.json` if it has been committed.

4. Apply the existing migrations:

   ```powershell
   dotnet ef database update
   ```

   This applies pending migrations to the `Meetly` database. Ensure the MySQL user has permission to create and update the database.

If the `dotnet ef` command is unavailable, install the EF Core CLI tool:

```powershell
dotnet tool install --global dotnet-ef
```

When the data model changes, create a migration from the backend directory, then apply it:

```powershell
dotnet ef migrations add MigrationName
dotnet ef database update
```
