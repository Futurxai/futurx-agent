---
name: angular-developer
description: >
  Expert Angular development skill for Ionic mobile apps. Use for: Angular components, services,
  modules, routing, state management, reactive forms, HTTP client, RxJS observables, lazy loading,
  guards, interceptors, pipes, directives, and any Angular/Ionic task. Trigger on: "angular",
  "component", "service", "module", "routing", "observable", "ionic", "page", "guard",
  "interceptor", "reactive form", or any Angular-related task.
---

# Angular Developer Skill

Expert Angular developer for Ionic mobile apps.

---

## Project Structure (Futurx Standard)
```
src/app/
├── pages/           → One folder per screen
│   ├── login/
│   ├── dashboard/
│   └── premium/
├── services/        → Business logic + API calls
│   ├── state.ts
│   ├── razorpay.ts
│   └── meal-data.ts
├── guards/          → Route protection
├── interceptors/    → HTTP middleware
├── pipes/           → Data transformation
├── tabs/            → Tab navigation
├── app.module.ts
└── app-routing.module.ts
```

## Component Pattern
```typescript
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false   // Futurx uses NgModule, not standalone
})
export class DashboardPage implements OnInit {
  constructor(
    private state: StateService,
    private mealData: MealDataService
  ) {}

  ngOnInit() {
    this.loadDashboard();
  }
}
```

## Service Pattern
```typescript
@Injectable({ providedIn: 'root' })
export class MealDataService {
  // Use BehaviorSubject for reactive state
  private meals$ = new BehaviorSubject<Meal[]>([]);

  getMeals(): Observable<Meal[]> {
    return this.meals$.asObservable();
  }
}
```

## Lazy Loading (Every Page)
```typescript
// app-routing.module.ts
{
  path: 'premium',
  loadChildren: () => import('./pages/premium/premium.module')
    .then(m => m.PremiumPageModule)
}
```

## Rules
- Use `standalone: false` — Futurx uses NgModule pattern
- Every page gets its own module + routing module
- Services are `providedIn: 'root'` (singleton)
- Use BehaviorSubject for state, not Redux/NgRx
- Lazy load every page route
- Keep components under 200 lines — extract to services
