#node-jsonl-db

Provides a simple way to store data in a jsonl file and read from it.

```js
import JSONLDatabase from 'node-jsonl-database'

const Database = new JSONLDatabase({
  path: '<directoy>',
  name: '<filename>'
})

Database.write(array)
Database.read() : array
```