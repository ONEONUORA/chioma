# Mock API Setup - Frontend-Only Development

This guide explains how to run the frontend with demo data without needing the backend.

## Quick Start

### 1. Enable Mock API

The mock API is already enabled by default in `.env.local`:

```bash
NEXT_PUBLIC_USE_MOCK_API=true
```

If you need to disable it and use the real backend:

```bash
NEXT_PUBLIC_USE_MOCK_API=false
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 2. Start the Frontend

```bash
cd frontend
pnpm dev
```

The app will start at `http://localhost:3000`

### 3. Login with Demo Credentials

Use this demo account to login (password doesn't matter in mock mode):

| Email                   | Role     | Access                                     |
| ----------------------- | -------- | ------------------------------------------ |
| `admin@chioma.local`    | Admin    | All users dashboard - access all features  |

**Note:** Password field is ignored in mock mode. Just enter any password.

## Available Demo Data

### Tenant Pages

- ✅ Disputes List (`/tenant/disputes`)
- ✅ Dispute Detail (`/tenant/disputes/[id]`)
- ✅ Reviews List (`/tenant/reviews`)
- ✅ Review Detail (`/tenant/reviews/[id]`)

### Landlord Pages

- ✅ Documents List (`/landlords/documents`)
- ✅ Maintenance List (`/landlords/maintenance`)
- ✅ Maintenance Detail (`/landlords/maintenance/[id]`)

### Admin Pages

- ✅ Dashboard (`/admin`)
- ✅ Users (`/admin/users`)
- ✅ Disputes (`/admin/disputes`)
- ✅ Transactions (`/admin/transactions`)

## How It Works

### 1. Mock API Interceptor

When `NEXT_PUBLIC_USE_MOCK_API=true`, the API client (`lib/api-client.ts`) intercepts all requests and returns demo data from `lib/mock-api.ts` instead of calling the backend.

### 2. Demo Data Structure

Mock data is organized by endpoint:

```typescript
// Static endpoints
'/disputes' → Returns list of disputes
'/reviews' → Returns list of reviews
'/documents' → Returns list of documents
'/maintenance' → Returns list of maintenance requests

// Dynamic endpoints (with ID)
'/disputes/[id]' → Returns specific dispute detail
'/maintenance/[id]' → Returns specific maintenance detail
```

### 3. Adding More Mock Data

To add mock data for new endpoints:

1. Open `frontend/lib/mock-api.ts`
2. Add your data to the `mockData` object:

```typescript
const mockData: Record<string, unknown> = {
  '/your-endpoint': {
    data: [
      { id: '1', name: 'Item 1' },
      { id: '2', name: 'Item 2' },
    ],
  },
};
```

3. For dynamic routes, add a pattern to `dynamicPatterns`:

```typescript
const dynamicPatterns = [
  {
    pattern: /^\/your-endpoint\/(.+)$/,
    handler: (match) => ({
      data: {
        id: match[1],
        name: 'Dynamic Item',
      },
    }),
  },
];
```

## Switching Between Mock and Real API

### Use Mock API (Frontend Only)

```bash
# In frontend/.env.local
NEXT_PUBLIC_USE_MOCK_API=true
```

### Use Real Backend

```bash
# In frontend/.env.local
NEXT_PUBLIC_USE_MOCK_API=false
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Then restart the dev server:

```bash
pnpm dev
```

## Testing Different User Roles

Login with `admin@chioma.local` to access the all users dashboard with full access to all features and roles.

## Limitations

- **No data persistence**: Changes made in the UI won't be saved (no backend)
- **No real authentication**: Any password works in mock mode
- **Static demo data**: Data doesn't change between sessions
- **No file uploads**: File upload features won't work

## Troubleshooting

### Pages show "Access Denied"

- Make sure you're logged in with the correct role
- Check the email you used matches the role you want to test

### Mock data not showing

- Verify `NEXT_PUBLIC_USE_MOCK_API=true` in `.env.local`
- Restart the dev server after changing `.env.local`
- Check browser console for errors

### Want to use real backend?

- Set `NEXT_PUBLIC_USE_MOCK_API=false`
- Make sure backend is running on `http://localhost:3001`
- Restart the dev server

## Next Steps

When you're ready to use the real backend:

1. Start the backend server
2. Update `.env.local` to set `NEXT_PUBLIC_USE_MOCK_API=false`
3. Restart the frontend dev server
4. Login with real credentials

The app will automatically switch to using the real API without any code changes!
