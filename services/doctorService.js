const { executeQuery } = require('../dataAccess/dbPg');

exports.getDoctorBySpecialtyData = async (idSpecialty) => {
    try {
        const query = `SELECT * FROM doctor d inner join person p on d.id=p.id where d.specialty_id = ${idSpecialty}`;
        const result = await executeQuery(query);
        return {
            error: '',
            data: result.rows
        }
    } catch (error) {
        return {
            error: 'error getDoctorBySpecialtyData',
            data: []
        }
    }

}