#initialization

#table creation

USE UNIVERSITY;

drop table student;

CREATE TABLE STUDENT (
	StudentID integer PRIMARY KEY,
    Password varchar(15),
	FirstName varchar(15),
    LastName varchar(15),
	Department varchar(5),
    PhoneNumber varchar(11)
    );
    
show tables;
SHOW databases;

select * from student;

INSERT INTO Student(StudentID, Password, FirstName, LastName, Department, PhoneNumber)
						VALUES(20160710, '1q2w3e4r', 'Youngkyu', 'Hong', 'CS', '01035858953');
                        
SELECT *
FROM Student
WHERE StudentID=20160710 && Password = '1q2w3e4r';
drop table DEPARTMENT;
drop table book;

CREATE TABLE DEPARTMENT (
	DepartmentID char(3) NOT NULL,
    Name varchar(30),
    PhoneNumber varchar(11),
	PRIMARY KEY (DepartmentID)
    );
    
ALTER TABLE DEPARTMENT
	MODIFY COLUMN Name varchar(30);

CREATE TABLE COURSE (
	CourseID char(5) NOT NULL,
    Name varchar(15),
    Professor varchar(15),
    DepartmentID char(3) NOT NULL,
	PRIMARY KEY (CourseID),
    FOREIGN KEY (DepartmentID) REFERENCES DEPARTMENT(DepartmentID)
    );

# 과목별 사용중인 책 목록
CREATE TABLE BOOK (
	BookID integer NOT NULL AUTO_INCREMENT,
    Name varchar(15),
    Edition integer,
	Author varchar(15),
    CourseID char(5),
	PRIMARY KEY (BookID),
    FOREIGN KEY (CourseID)
		REFERENCES COURSE (CourseID)
		ON DELETE CASCADE
    );

CREATE TABLE SELLING (
	SellingID integer NOT NULL AUTO_INCREMENT,
    BookID integer,
    Edition integer,
    SellerID integer,
    Price integer,
    Time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (SellingID),
    FOREIGN KEY (BookID) REFERENCES BOOK(BookID),
    FOREIGN KEY (SellerID) REFERENCES STUDENT(StudentID)
    );
    
 select * from selling;
 drop table selling;
 
CREATE TABLE TRADE (
	SellingID integer,
    BuyerID integer,
    Confirmed bool,
    Time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_TRADE PRIMARY KEY (SellingID, BuyerID),
    FOREIGN KEY (SellingID) REFERENCES SELLING(SellingID),
    FOREIGN KEY (BuyerID) REFERENCES STUDENT(StudentID)
);
drop table trade;
 select * from TRADE;
 
 insert into DEPARTMENT values('cs', 'computer science', '0423500101');
 insert into course values('cs360', 'db', 'hsj', 'cs');
 insert into course values('cs341', 'network', 'lsj', 'cs');
 
insert into book(BookName, author, courseid) values('intro to db', 'hsj',  'cs360');
insert into book(BookName, author, courseid) values('intro to network', 'lsj',  'cs341');
ALTER TABLE book CHANGE COLUMN name BookName VARCHAR(30);
ALTER TABLE course CHANGE COLUMN name CourseName VARCHAR(30);

insert into SELLING(BookID, SellerID, price) values(1, 20160710, 20000);
insert into SELLING(BookID, SellerID, price) values(1, 20160710, 5000);
select * from book;

select bookid, min(price) from selling group by bookid;


select * from course;
select * from selling order by price;

select *  from course natural join (
	select * from book as b left join (
		select bookid as s_bookid, min(price) as min_price from selling group by bookid
		) as s on b.bookid = s.s_bookid ) as c;

select * from book as b inner join selling as s on b.bookid = s.bookid group by s.bookid;

insert into trade(Sellingid, buyerid, confirmed) values (2, 20160710, false);
update trade set confirmed=true where Sellingid=1 && buyerid = 20160710;
select * from trade;

select * from trade as t 
			inner join (
				select * from selling where sellerid=20160710 )  as s where s.sellingid = t.sellingid;