const { executeQuery } = require('../dataAccess/dbPg');

exports.getSpecialtyData = async () => {
    try {
        const query = 'SELECT * FROM specialty';
        const result = await executeQuery(query);
        return {
            error: '',
            data: result.rows
        }
    } catch (error) {
        return {
            error: 'error getSpecialtyData',
            data: []
        }
    }

}