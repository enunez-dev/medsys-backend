const { transaction } = require('../dataAccess/dbPg');
const bcrypt = require('bcryptjs');

exports.registerPatient = async (data) => {
    const client = await transaction();
    try {
        await client.begin();

        let query = 'select max(id)+1 as next from person p';
        const result = await client.query(query);
        const id = result.rows[0].next;

        const { fullName, birthday, sexo, email, password } = data;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(hashedPassword)

        await client.query('INSERT INTO person (id, fullname, birthday, sexo) VALUES($1,$2,$3,$4)', [id, fullName, birthday, sexo]),
            await client.query('INSERT INTO patient (id, medical_history, email, pass) VALUES($1,$2,$3,$4)', [id, null, email, hashedPassword])
        await client.commit();
        return {
            error: '',
            data: '1'
        }
    } catch (error) {
        await client.rollback();
        return {
            error: 'error registerPatient',
            data: []
        }
    } finally {
        client.release();
    }
}


