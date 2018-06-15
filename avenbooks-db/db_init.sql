#initialization
CREATE DATABASE UNIVERSITY;
USE UNIVERSITY;

#table creation
CREATE TABLE STUDENT (
    StudentID integer NOT NULL PRIMARY KEY,
    Password varchar(30) NOT NULL,
    Name varchar(30) NOT NULL,
    PhoneNumber char(11)
);
    
CREATE TABLE DEPARTMENT (
    DepartmentID varchar(3) NOT NULL PRIMARY KEY,
    DeptName varchar(30) NOT NULL,
    PhoneNumber varchar(11)
);

# 과목별 사용중인 책 목록
CREATE TABLE BOOK (
    BookID integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
    BookName varchar(100) NOT NULL,
    CurrentEdition integer,
    Author varchar(30) NOT NULL
);

CREATE TABLE COURSE (
    CourseID varchar(8) NOT NULL PRIMARY KEY,
    CourseName varchar(40) NOT NULL,
    Professor varchar(30) NOT NULL,
    DepartmentID char(3) NOT NULL,
    BookID integer NOT NULL,
    FOREIGN KEY (DepartmentID) REFERENCES DEPARTMENT(DepartmentID),
    FOREIGN KEY (BookID) REFERENCES BOOK(BookID)
);

CREATE TABLE SELLING (
    SellingID integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
    BookID integer NOT NULL,
    Edition integer,
    SellerID integer NOT NULL,
    Price integer NOT NULL,
    Finished bool NOT NULL,
    SellingTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (BookID) REFERENCES BOOK(BookID),
    FOREIGN KEY (SellerID) REFERENCES STUDENT(StudentID)
);

CREATE TABLE TRADE (
    SellingID integer NOT NULL,
    BuyerID integer NOT NULL,
    Confirmed bool NOT NULL,
    TradeTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_TRADE PRIMARY KEY (SellingID, BuyerID),
    FOREIGN KEY (SellingID) REFERENCES SELLING(SellingID)
                            ON DELETE CASCADE,
    FOREIGN KEY (BuyerID) REFERENCES STUDENT(StudentID)
);

