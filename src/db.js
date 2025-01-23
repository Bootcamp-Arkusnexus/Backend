import pg from 'pg'

// const dbParams = new Pool({
//     user: 'erendon',
//     host: 'localhost',
//     database: 'postgres',
//     password: 'arkus@123',
//     port: 5432,
// })

// export default dbParams;

export const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'arkus@123',
    port: 5432
})

// pool.query('SELECT NOW()').then(result => {
//     console.log(result);
// })