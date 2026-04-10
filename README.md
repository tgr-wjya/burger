# burger

## 10 april 2026

> yes, you heard that right. this is a burger shop backend.

i'm bored and want to work on a project, i figured this is the perfect idea for me.

planning to add a frontend to this soon.

## menu endpoints

| method | what it does |
| --- | --- |
| `GET  /menu` | list available items (filterable by category) |
| `POST /menu` | add item (admin) |
| `PATCH  /menu/:id` | update price / toggle availability |
| `DELETE  /menu/:id` | remove item |

## order endpoints

| method | what it does |
| --- | --- |
| `POST  /orders` | create order (validate items exist + available) |
| `GET /orders` | list orders (filterable by status) |
| `GET  /orders/:id` | single order + its items |
| `PATCH  /orders/:id/status` | advance status |
| `DELETE /orders/:id` | cancel (only if pending) |

## stack

- bun + hono + sqlite + zod + drizzle orm

## find me

[portfolio](https://tgr-wjya.github.io) · [linkedin](https://linkedin.com/in/tegar-wijaya-kusuma-591a881b9) · [email](mailto:tgr.wjya.queue.top126@pm.me)

---

made with ◉‿◉
