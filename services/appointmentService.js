const { executeQuery } = require('../dataAccess/dbPg');

exports.getAppointmentByDoctorData = async (date, doctorId) => {
    try {
        const query = `SELECT a.id as appointment_id,
        a.hour,
        s.doctor_id,
        a.patient_id,
        a.date_register_patient
        FROM appointment a inner join doctor_schedule s on a.doctor_schedule_id = s.id
        where s.doctor_id=${doctorId} and 
        s.date_schedule = '${date}'`;
        const result = await executeQuery(query);
        return {
            error: '',
            data: result.rows
        }
    } catch (error) {
        return {
            error: 'error getAppointmentByDoctorData',
            data: []
        }
    }

}

exports.regAppointment = async (appointmentId, patientId) => {
    try {
        const query = `update appointment
        set patient_id = ${patientId},
        date_register_patient = '2024-03-05'
        where id = ${appointmentId};`;
        const result = (await executeQuery(query));
        return {
            error: '',
            data: result.rowCount
        }
    } catch (error) {
        return {
            error: 'error regAppointment',
            data: []
        }
    }

}

exports.getAppointmentByPatient = async (patientId) => {
    try {
        const query = `SELECT a.id as appointment_id,
        a.hour,
        s.doctor_id,
        p.fullname,
        sp.name,
        a.patient_id,
        a.date_register_patient
        FROM appointment a 
        inner join doctor_schedule s on a.doctor_schedule_id = s.id
        inner join doctor d on s.doctor_id=d.id
        inner join person p on d.id=p.id
        inner join specialty sp on sp.id=d.specialty_id
        where a.patient_id=${patientId}`;
        const result = (await executeQuery(query));
        return {
            error: '',
            data: result.rows
        }
    } catch (error) {
        return {
            error: 'error getAppointmentByPatient',
            data: []
        }
    }

}

exports.updateAppointmentCheckOut = async (id) => {
    try {
        const query = `UPDATE appointment 
        set patient_id = null
        where id=${id}`;
        const result = (await executeQuery(query));
        return {
            error: '',
            data: result.rowCount
        }
    } catch (error) {
        return {
            error: 'error updateAppointmentCheckOut',
            data: []
        }
    }

}