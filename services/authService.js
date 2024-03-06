const { executeQuery } = require('../dataAccess/dbPg');

exports.getLogin = async (email) => {
    try {
        const query = `SELECT * FROM patient pa
        inner join person pe on pa.id = pe.id
        where pa.email='${email}'`;
        const result = await executeQuery(query);
        return {
            error: '',
            data: result.rows
        }
    } catch (error) {
        return {
            error: 'error getLogin',
            data: []
        }
    }

}