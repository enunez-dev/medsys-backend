
drop table appointment;
drop table doctor_schedule;
drop table patient;
drop table doctor;
drop table specialty;
drop table person;

create table person(
id int primary key not null,
fullName varchar(150),
birthday date,
sexo varchar(1)
);

create table specialty(
id int primary key not null,
name varchar(100) not null
);

create table doctor(
id int primary key not null,
specialty_id int not null references specialty(id)
);

create table patient(
id int primary key not null,
medical_history int,
email varchar(100),
pass varchar(100)
);

create table doctor_schedule(
id SERIAL  unique not null,
date_schedule date not null,
doctor_id int references doctor(id),
primary key(date_schedule, doctor_id)
);

create table appointment(
id SERIAL unique not null ,
hour TIME not null,
doctor_schedule_id int references doctor_schedule(id),
patient_id int references patient(id),
date_register_patient TIMESTAMP,
status smallint,
primary key(hour, doctor_schedule_id)
);

insert into specialty values(1,'Cardiología');
insert into specialty values(2,'Dermatología');
insert into specialty values(3,'Gastroenterología');
insert into specialty values(4,'Oftalmología');
insert into specialty values(5,'Pediatría');

insert into person values(1,'Mario Alfredo Martinez Amaral','1980-01-01','M');
insert into person values(2,'Andrea Mendez Correa','1980-01-01','F');
insert into person values(3,'Juan Pablo Pizarro Antelo','1980-01-01','M');
insert into person values(4,'Carla Patricia Aguilar Lopez','1980-01-01','F');
insert into person values(5,'Pedro Cuellar Suarez','1980-01-01','M');

/*insert into patient values(1,null,'correo1@gmail.com','12345');
insert into patient values(4,null,'correo2@gmail.com','12345');*/

insert into doctor values(1,1);
insert into doctor values(2,2);
insert into doctor values(3,4);
insert into doctor values(4,5);
insert into doctor values(5,5);

insert into doctor_schedule(date_schedule,doctor_id) values('2024-03-06',1);
insert into appointment(hour,doctor_schedule_id,status) values('08:00',1,1);
insert into appointment(hour,doctor_schedule_id,status) values('08:15',1,1);
insert into appointment(hour,doctor_schedule_id,status) values('08:30',1,1);
insert into appointment(hour,doctor_schedule_id,status) values('08:45',1,1);
insert into appointment(hour,doctor_schedule_id,status) values('09:00',1,1);
insert into appointment(hour,doctor_schedule_id,status) values('09:15',1,1);
insert into appointment(hour,doctor_schedule_id,status) values('09:30',1,1);
insert into appointment(hour,doctor_schedule_id,status) values('09:45',1,1);
insert into appointment(hour,doctor_schedule_id,status) values('10:00',1,1);
insert into appointment(hour,doctor_schedule_id,status) values('10:15',1,1);
insert into appointment(hour,doctor_schedule_id,status) values('10:30',1,1);
insert into appointment(hour,doctor_schedule_id,status) values('10:45',1,1);
insert into appointment(hour,doctor_schedule_id,status) values('11:00',1,1);
insert into appointment(hour,doctor_schedule_id,status) values('11:15',1,1);
insert into appointment(hour,doctor_schedule_id,status) values('11:30',1,1);
insert into appointment(hour,doctor_schedule_id,status) values('11:45',1,1);


insert into doctor_schedule(date_schedule,doctor_id) values('2024-03-06',3);
insert into appointment(hour,doctor_schedule_id,status) values('14:00',2,1);
insert into appointment(hour,doctor_schedule_id,status) values('14:15',2,1);
insert into appointment(hour,doctor_schedule_id,status) values('14:30',2,1);
insert into appointment(hour,doctor_schedule_id,status) values('14:45',2,1);
insert into appointment(hour,doctor_schedule_id,status) values('15:00',2,1);
insert into appointment(hour,doctor_schedule_id,status) values('15:15',2,1);
insert into appointment(hour,doctor_schedule_id,status) values('15:30',2,1);
insert into appointment(hour,doctor_schedule_id,status) values('15:45',2,1);
insert into appointment(hour,doctor_schedule_id,status) values('16:00',2,1);
insert into appointment(hour,doctor_schedule_id,status) values('16:15',2,1);
insert into appointment(hour,doctor_schedule_id,status) values('16:30',2,1);
insert into appointment(hour,doctor_schedule_id,status) values('16:45',2,1);
insert into appointment(hour,doctor_schedule_id,status) values('17:00',2,1);
insert into appointment(hour,doctor_schedule_id,status) values('17:15',2,1);
insert into appointment(hour,doctor_schedule_id,status) values('17:30',2,1);
insert into appointment(hour,doctor_schedule_id,status) values('17:45',2,1);

insert into doctor_schedule(date_schedule,doctor_id) values('2024-03-07',1);
insert into appointment(hour,doctor_schedule_id,status) values('08:00',3,1);
insert into appointment(hour,doctor_schedule_id,status) values('08:15',3,1);
insert into appointment(hour,doctor_schedule_id,status) values('08:30',3,1);
insert into appointment(hour,doctor_schedule_id,status) values('08:45',3,1);
insert into appointment(hour,doctor_schedule_id,status) values('09:00',3,1);
insert into appointment(hour,doctor_schedule_id,status) values('09:15',3,1);
insert into appointment(hour,doctor_schedule_id,status) values('09:30',3,1);
insert into appointment(hour,doctor_schedule_id,status) values('09:45',3,1);


