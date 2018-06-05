
USE UNIVERSITY;

INSERT INTO Student(StudentID, Password, Name, phoneNumber)
            VALUES(20160710, '1q2w3e4r', 'Youngkyu Hong', '01035858953');
INSERT INTO Student(StudentID, Password, Name, phoneNumber)
            VALUES(20160140, '1q2w3e4r', 'Yoonseo Kim', '01044542659');
INSERT INTO Student(StudentID, Password, Name, phoneNumber)
            VALUES(20160022, 20160022, 'Hyunwoo Kang', '01024237147');
                        
insert into DEPARTMENT values('SoC', 'Computer Science', '0423503502');
insert into DEPARTMENT values('MAS', 'Mathematical Science', '0423502702');
insert into DEPARTMENT values('EE', 'Electrical Engineering', '0423503402');

insert into book(BookName, Author, CurrentEdition) values('Operating System Concepts', 'Abraham Silberschatz', 9);
insert into book(BookName, Author, CurrentEdition) values('Fundamentals of Database Systems', 'Ramez Elmasri', 7);
insert into book(BookName, Author, CurrentEdition) values('Computer System Architecture', 'M. Morris Mano',  3);
insert into book(BookName, Author, CurrentEdition) values('Computer Networking: A Top-Down Approach', 'Jim Kurose',  7);
insert into book(BookName, Author, CurrentEdition) values('Programming Languages: Application and Interpretation', 'Shriram Krishnamurthi',  2);
insert into book(BookName, Author, CurrentEdition) values('Semiconductor Physics and Devices', 'Donald A. Neamen',  4);
insert into book(BookName, Author, CurrentEdition) values('The C Programming Language', 'Brian Kernighan',  2);
insert into book(BookName, Author, CurrentEdition) values('Fundamentals of Electric Circuits', 'Charles K Alexander', 6);
insert into book(BookName, Author, CurrentEdition) values('Introduction to Probability and Statistics for Engineers and Scientists', 'Sheldon M. Ross', 5);
insert into book(BookName, Author, CurrentEdition) values('Signals and Systems', 'Alan V. Oppenheim', 2);
insert into book(BookName, Author, CurrentEdition) values('Linear Algebra', 'Hoffman and Kunz Prentice Hall', 2);

insert into course values('CS330', 'Operating System and Lab', 'Junehwa Song', 'SoC', 1);
insert into course values('CS360', 'Introduction to Database', 'SoonJoo Hyun', 'SoC', 2);
insert into course values('CS311', 'Computer Architecture', 'Hyunsoo Yoon', 'SoC', 3);
insert into course values('CS341', 'Introduction to Network', 'Sung-Ju Lee', 'SoC', 4);
insert into course values('CS320', 'Programming Language', 'Sukyoung Ryu', 'SoC', 5);
insert into course values('EE211', 'Introduction to Physical Electronic', 'Kyounghoon Yang', 'EE', 6);
insert into course values('EE209', 'Programming Structure for Electrical Engineering', 'KyoungSoo Park', 'EE', 7);
insert into course values('EE201', 'Circuit Theory', 'SeongHwan Cho', 'EE', 8);
insert into course values('MAS250', 'Probability and Statistics', 'Ganguk Hwang', 'MAS', 9);
insert into course values('EE202', 'Signals and Systems', 'Jungwoo Choi', 'EE', 10);
insert into course values('MAS212', 'Linear Algebra', 'Sanggeun Hahn', 'MaS', 11);

