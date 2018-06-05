
USE UNIVERSITY;

INSERT INTO Student(StudentID, Password, Name, phoneNumber)
						VALUES(20160710, '1q2w3e4r', 'Youngkyu Hong', '01035858953');
                        
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
insert into book(BookName, Author, CurrentEdition) values('Fundamentals of Electric Circuits', 'Charles K Alexander',  6);
insert into book(BookName, Author, CurrentEdition) values('Principles of Quantum Mechanics', 'R. Shankar', 'PH301', 2);
insert into book(BookName, Author, CurrentEdition) values('Introduction to Probability and Statistics for Engineers and Scientists', 'Sheldon M. Ross', 'MAS250', 5);
insert into book(BookName, Author, CurrentEdition) values('Signals and Systems', 'Alan V. Oppenheim', 'EE202', 2);

insert into course values('CS360', 'Introduction to Database', 'SoonJoo Hyun', 'SoC');
insert into course values('CS330', 'Operating System and Lab', 'Junehwa Song', 'SoC');
insert into course values('CS341', 'Introduction to Network', 'Sung-Ju Lee', 'SoC');
insert into course values('CS311', 'Computer Architecture', 'Hyunsoo Yoon', 'SoC');
insert into course values('CS320', 'Programming Language', 'Sukyoung Ryu', 'SoC');
insert into course values('EE209', 'Programming Structure for Electrical Engineering', 'KyoungSoo Park', 'EE');
insert into course values('EE201', 'Circuit Theory', 'SeongHwan Cho', 'EE');
insert into course values('EE211', 'Introduction to Physical Electronic', 'Kyounghoon Yang', 'EE');
insert into course values('EE202', 'Signals and Systems', 'Jungwoo Choi', 'EE');
insert into course values('PH301', 'Quantum Mechanics', 'Yeongkwan Kim', 'PHY');
insert into course values('MAS250', 'Probability and Statistics', 'Ganguk Hwang', 'MAS');
-- insert into course values('CS376', 'Machine Learning', 'Eunho Yang', 'SoC');


 
insert into SELLING(BookID, SellerID, Edition, Price) values(1, 20160710, 6, 20000);
insert into SELLING(BookID, SellerID, Edition, Price) values(1, 20160710, 6, 5000);


insert into trade(Sellingid, buyerid, confirmed) values (2, 20160710, false);