
USE UNIVERSITY;

INSERT INTO Student(StudentID, Password, Name, phoneNumber)
            VALUES(20160710, '1q2w3e4r', 'Youngkyu Hong', '01035858953');
INSERT INTO Student(StudentID, Password, Name, phoneNumber)
            VALUES(20160140, '1q2w3e4r', 'Yoonseo Kim', '01044542659');
INSERT INTO Student(StudentID, Password, Name, phoneNumber)
            VALUES(20160022, 20160022, 'Hyunwoo Kang', '01024237147');
                        
INSERT INTO DEPARTMENT VALUES('SoC', 'Computer Science', '0423503502');
INSERT INTO DEPARTMENT VALUES('MAS', 'Mathematical Science', '0423502702');
INSERT INTO DEPARTMENT VALUES('EE', 'Electrical Engineering', '0423503402');

INSERT INTO BOOK(BookName, Author, CurrentEdition) 
  VALUES('Operating System Concepts', 'Abraham Silberschatz', 9);
INSERT INTO BOOK(BookName, Author, CurrentEdition)
  VALUES('Fundamentals of Database Systems', 'Ramez Elmasri', 7);
INSERT INTO BOOK(BookName, Author, CurrentEdition)
  VALUES('Computer System Architecture', 'M. Morris Mano',  3);
INSERT INTO BOOK(BookName, Author, CurrentEdition)
  VALUES('Computer Networking: A Top-Down Approach', 'Jim Kurose',  7);
INSERT INTO BOOK(BookName, Author, CurrentEdition)
  VALUES('Programming Languages: Application and Interpretation', 'Shriram Krishnamurthi',  2);
INSERT INTO BOOK(BookName, Author, CurrentEdition)
  VALUES('Semiconductor Physics and Devices', 'Donald A. Neamen',  4);
INSERT INTO BOOK(BookName, Author, CurrentEdition)
  VALUES('The C Programming Language', 'Brian Kernighan',  2);
INSERT INTO BOOK(BookName, Author, CurrentEdition)
  VALUES('Fundamentals of Electric Circuits', 'Charles K Alexander', 6);
INSERT INTO BOOK(BookName, Author, CurrentEdition)
  VALUES('Introduction to Probability and Statistics for Engineers and Scientists', 'Sheldon M. Ross', 5);
INSERT INTO BOOK(BookName, Author, CurrentEdition)
  VALUES('Signals and Systems', 'Alan V. Oppenheim', 2);
INSERT INTO BOOK(BookName, Author, CurrentEdition)
  VALUES('Linear Algebra', 'Hoffman and Kunz Prentice Hall', 2);

INSERT INTO COURSE VALUES('CS330', 'Operating System and Lab', 'Junehwa Song', 'SoC', 1);
INSERT INTO COURSE VALUES('CS360', 'Introduction to Database', 'SoonJoo Hyun', 'SoC', 2);
INSERT INTO COURSE VALUES('CS311', 'Computer Architecture', 'Hyunsoo Yoon', 'SoC', 3);
INSERT INTO COURSE VALUES('CS341', 'Introduction to Network', 'Sung-Ju Lee', 'SoC', 4);
INSERT INTO COURSE VALUES('CS320', 'Programming Language', 'Sukyoung Ryu', 'SoC', 5);
INSERT INTO COURSE VALUES('EE211', 'Introduction to Physical Electronic', 'Kyounghoon Yang', 'EE', 6);
INSERT INTO COURSE VALUES('EE209', 'Programming Structure for Electrical Engineering', 'KyoungSoo Park', 'EE', 7);
INSERT INTO COURSE VALUES('EE201', 'Circuit Theory', 'SeongHwan Cho', 'EE', 8);
INSERT INTO COURSE VALUES('MAS250', 'Probability and Statistics', 'Ganguk Hwang', 'MAS', 9);
INSERT INTO COURSE VALUES('EE202', 'Signals and Systems', 'Jungwoo Choi', 'EE', 10);
INSERT INTO COURSE VALUES('MAS212', 'Linear Algebra', 'Sanggeun Hahn', 'MaS', 11);

