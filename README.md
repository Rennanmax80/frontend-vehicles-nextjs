
---

# 📁 README — FRONTEND (Next.js)

```md
# 🚘 Vehicle Management Frontend

Aplicação frontend desenvolvida em **Next.js 16 (App Router)** para gerenciamento e visualização de veículos, integrada com API Flask.

---

## 🧱 Stack Utilizada

- Next.js 16 (Turbopack)
- React
- TypeScript
- MUI (Material UI)
- React Hook Form
- Zod
- React Query (@tanstack)
- Axios
- Docker

---

## 📂 Estrutura de Pastas

frontend-vehicles-nextjs
    /src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx                # Login
    │   ├── auth/
    │   │   ├── callback/           #callback magic link
    │   │   │   └── page.tsx
    │   ├── dashboard/
    │   │   ├── layout.tsx          # Sidebar + Outlet
    │   │   ├── page.tsx            # Redirect padrão
    │   │   ├── vehicle-panel/
    │   │   │   └── page.tsx
    │   │   ├── vehicle-decade/
    │   │   │   └── page.tsx
    │   │   ├── vehicle-brand/
    │   │   │   └── page.tsx
    │   ├── veiculos/
    │   │   │   └── page.tsx
    │
    ├── components/
    │   ├── AsideMenu/
    │   ├── Dialog/
    │   ├── Feedback/
    │   ├── Spinner/
    │   ├── Table/
    │   └── forms/
    │       ├── FormControl.tsx
    │       ├── InputText.tsx
    │       └── AutoComplete.tsx
    │
    ├── features/
    │   └── vehicles/
    │       ├── VehicleDetailsModal/
    │       ├── VehicleRegistrationPanel/
    │       ├── VehicleFindByDecade/
    │       └── VehicleFindByBrand/
    │       └── VehicleTableRowByDecade/
    │
    ├── services/
    │   └── vehicles/
    │       └── deleteVehicle.ts
    │       └── getVehicleById.ts
    │       └── getVehicles.ts
    │       └── getVehicleByBrand.ts
    │       └── getVehicleByDecade.ts
    │       └── getVehicleByWeek.ts
    │       └── postVehicle.ts
    │       └── putVehicle.ts
    │   └── auth.service.ts
    │
    ├── types/
    │   ├── vehicle.types.ts
    │   ├── vehicle-brand.types.ts
    │   └── vehicle-decade.types.ts
    │
    ├── lib/
    │   ├── axios.ts
    │   └── react-query.tsx
    │
    └── theme/
        └── theme.ts
    └── .Dockerfile



---

## ⚙️ Variáveis de Ambiente (`.env.local`)

env
NEXT_PUBLIC_API_URL=http://localhost:5000

npm install
npm run dev

## 📍 Frontend disponível em:
http://localhost:3000


## ▶️ Frontend com Docker

docker build -t vehicle-front .
docker run -p 3000:3000 vehicle-front