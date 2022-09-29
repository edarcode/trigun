## Sincronizar prisma con db

Migra lo seteado en prisma a la db, "init" hace refencia al nombre de migración que se crea automaticamente

```
npx prisma migrate dev --name init
```

## Resetear contenido de cada tabla (db)

```
npx prisma migrate reset
```

## Consologuear mas chevere

```
console.dir(allUsers, { depth: null })
```

## API prisma client

https://www.prisma.io/docs/concepts/components/prisma-client
