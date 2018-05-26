#initialization
CREATE DATABASE UNIVERSITY;
USE UNIVERSITY;

#table creation
CREATE TABLE STUDENT (
	StudentID integer PRIMARY KEY,
    Password varchar(30),
	FirstName varchar(30),
    LastName varchar(30),
	Department varchar(5),
    PhoneNumber char(11)
);
    
CREATE TABLE DEPARTMENT (
	DepartmentID char(3) NOT NULL,
    DeptName varchar(30),
    PhoneNumber varchar(11),
	PRIMARY KEY (DepartmentID)
);
    
CREATE TABLE COURSE (
	CourseID char(5) NOT NULL,
    CourseName varchar(30),
    Professor varchar(15),
    DepartmentID char(3) NOT NULL,
	PRIMARY KEY (CourseID),
    FOREIGN KEY (DepartmentID) REFERENCES DEPARTMENT(DepartmentID)
);

# 과목별 사용중인 책 목록
CREATE TABLE BOOK (
	BookID integer NOT NULL AUTO_INCREMENT,
    BookName varchar(30),
    CurrentEdition integer,
	Author varchar(30),
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
    
CREATE TABLE TRADE (
	SellingID integer,
    BuyerID integer,
    Confirmed bool,
    Time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_TRADE PRIMARY KEY (SellingID, BuyerID),
    FOREIGN KEY (SellingID) REFERENCES SELLING(SellingID),
    FOREIGN KEY (BuyerID) REFERENCES STUDENT(StudentID)
);