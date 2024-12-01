Here's a comprehensive guide for the SplitFn application:

# SplitFn - Bill Splitting Application

## Business Overview
SplitFn is a web application that helps users manage and split expenses with friends and family. Key features include:
- User authentication (signup/login)
- Group expense management
- Bill splitting functionality
- Real-time expense tracking
- Smart settlement suggestions

## Technical Stack
- **Frontend**: React + Vite
  - React Router for navigation
  - Context API for state management
  - CSS Modules for styling
- **Backend**: Node.js + Express
  - JWT for authentication
  - Prisma ORM for database operations
- **Database**: PostgreSQL
- **Development Tools**: ESLint, Nodemon

## Local Setup Guide

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL
- Git

### Step 1: Clone and Setup Frontend
```bash
# Clone repository
git clone [repository-url]
cd split-fn

# Install dependencies
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:5000" > .env
```

### Step 2: Setup Backend
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file for backend
cat > .env << EOL
DATABASE_URL="postgresql://username:password@localhost:5432/splitfn"
JWT_SECRET="your-secret-key"
PORT=5000
EOL
```

### Step 3: Database Setup
```bash
# Initialize Prisma
npx prisma init

# Run migrations
npx prisma migrate dev

# Seed database (if available)
npx prisma db seed
```

### Step 4: Start Development Servers
```bash
# Terminal 1 - Frontend (from root directory)
npm run dev

# Terminal 2 - Backend (from server directory)
npm run dev
```

## Project Structure
```
split-fn/
├── src/
│   ├── components/
│   │   └── dashboard/
│   ├── contexts/
│   │   └── AuthContext.jsx
│   ├── hooks/
│   │   └── useAuth.jsx
│   ├── pages/
│   │   ├── Auth.jsx
│   │   ├── Dashboard.jsx
│   │   └── HomePage.jsx
│   └── styles/
│       ├── Forms.css
│       └── Home.css
├── server/
│   ├── index.js
│   └── prisma/
│       └── schema.prisma
└── package.json
```

## Key Features Implementation

### Authentication Flow
```javascript
// Frontend authentication in src/hooks/useAuth.jsx
const login = async (credentials) => {
  const response = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  // ... handle response
};
```

### API Endpoints
```javascript
// Backend routes in server/index.js
app.post("/api/register", async (req, res) => {
  // Handle user registration
});

app.post("/api/login", async (req, res) => {
  // Handle user login
});

app.get("/api/user", authenticateToken, async (req, res) => {
  // Get user data
});
```

## Development Notes
1. Use `npm run dev` for hot-reload development
2. Backend runs on port 5000, frontend on port 5173
3. JWT tokens are stored in localStorage
4. API calls use CORS for security
5. Responsive design breakpoints at 1440px, 1024px, 768px, and 480px

## Common Issues & Solutions
1. CORS errors: Check backend CORS configuration
2. Database connection: Verify PostgreSQL credentials
3. JWT errors: Ensure JWT_SECRET is properly set
4. Port conflicts: Check if ports 5000/5173 are available

