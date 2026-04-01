# Quick Start - Frontend with Mock API

## 🚀 Get Started in 2 Minutes

### Step 1: Start the Frontend

```bash
cd frontend
pnpm dev
```

The app will be available at `http://localhost:3000`

### Step 2: Login with Demo Account

Use the demo account to access the all users dashboard:

```
Email: admin@chioma.local
Password: (any password)
```

This account gives you access to all features and user roles.

### Step 3: Explore Demo Data

Once logged in, you can access:

**Tenant Features:**

- View disputes at `/tenant/disputes`
- View reviews at `/tenant/reviews`
- See dispute details by clicking on any dispute

**Landlord Features:**

- View documents at `/landlords/documents`
- View maintenance requests at `/landlords/maintenance`
- See maintenance details by clicking on any request

**Admin Features:**

- View admin dashboard at `/admin`
- View users, disputes, transactions, etc.

## 📋 Available Demo Data

### Disputes

- 2 sample disputes with different statuses
- Full detail pages with comments and evidence

### Reviews

- 2 sample reviews from tenants
- Different ratings and contexts

### Documents

- 2 sample lease and inspection documents
- Different statuses (active, archived)

### Maintenance Requests

- 2 sample maintenance requests
- Different priorities and statuses
- Assigned to maintenance personnel

## 🔧 Configuration

The mock API is enabled by default in `frontend/.env.local`:

```env
NEXT_PUBLIC_USE_MOCK_API=true
```

To switch to real backend:

```env
NEXT_PUBLIC_USE_MOCK_API=false
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Then restart: `pnpm dev`

## 📚 Full Documentation

See `MOCK_API_SETUP.md` for:

- How to add more mock data
- How to add new endpoints
- Troubleshooting guide
- Switching between mock and real API

## ✅ What Works

- ✅ All pages load with demo data
- ✅ Navigation between pages
- ✅ Role-based access control
- ✅ Responsive design
- ✅ All dashboards and detail pages
- ✅ Storybook components

## ❌ What Doesn't Work

- ❌ Data persistence (changes aren't saved)
- ❌ File uploads
- ❌ Real authentication
- ❌ Backend API calls

## 🎯 Next Steps

1. **Explore the UI** - Click around and get familiar with the app
2. **Test different roles** - Logout and login with different emails
3. **Check the code** - Look at `lib/mock-api.ts` to see how mock data works
4. **Add more data** - Follow the guide in `MOCK_API_SETUP.md` to add more demo data
5. **Connect backend** - When ready, switch to real API in `.env.local`

## 💡 Tips

- Use browser DevTools to inspect network requests (they'll show as successful with mock data)
- Check `lib/mock-api.ts` to see what data is available
- Add more mock data by following the pattern in that file
- The mock API automatically handles dynamic routes like `/disputes/[id]`

Enjoy exploring the app! 🎉
