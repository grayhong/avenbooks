#initialization
CREATE DATABASE UNIVERSITY;
USE UNIVERSITY;

#table creation
CREATE TABLE STUDENT (
    StudentID integer PRIMARY KEY,
    Password varchar(30),
    Name varchar(30),
    PhoneNumber char(11)
);
    
CREATE TABLE DEPARTMENT (
    DepartmentID varchar(3) NOT NULL PRIMARY KEY,
    DeptName varchar(30),
    PhoneNumber varchar(11)
);

# 과목별 사용중인 책 목록
CREATE TABLE BOOK (
    BookID integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
    BookName varchar(100),
    CurrentEdition integer,
    Author varchar(30)
);

CREATE TABLE COURSE (
    CourseID varchar(8) NOT NULL PRIMARY KEY,
    CourseName varchar(40),
    Professor varchar(30),
    DepartmentID char(3) NOT NULL,
    BookID integer,
    FOREIGN KEY (DepartmentID) REFERENCES DEPARTMENT(DepartmentID),
    FOREIGN KEY (BookID) REFERENCES BOOK(BookID)
);

CREATE TABLE SELLING (
    SellingID integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
    BookID integer,
    Edition integer,
    SellerID integer,
    Price integer,
    Finished bool,
    SellingTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (BookID) REFERENCES BOOK(BookID),
    FOREIGN KEY (SellerID) REFERENCES STUDENT(StudentID)
);

CREATE TABLE TRADE (
    SellingID integer,
    BuyerID integer,
    Confirmed bool,
    Finished bool,
    TradeTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_TRADE PRIMARY KEY (SellingID, BuyerID),
    FOREIGN KEY (SellingID) REFERENCES SELLING(SellingID)
                            ON DELETE CASCADE,
    FOREIGN KEY (BuyerID) REFERENCES STUDENT(StudentID)
);