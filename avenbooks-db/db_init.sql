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
    DepartmentID varchar(3) NOT NULL,
    DeptName varchar(30),
    PhoneNumber varchar(11),
    PRIMARY KEY (DepartmentID)
);

# 과목별 사용중인 책 목록
CREATE TABLE BOOK (
    BookID integer NOT NULL AUTO_INCREMENT,
    BookName varchar(100),
    CurrentEdition integer,
    Author varchar(30),
    PRIMARY KEY (BookID)
);

CREATE TABLE COURSE (
    CourseID varchar(8) NOT NULL,
    CourseName varchar(40),
    Professor varchar(30),
    DepartmentID char(3) NOT NULL,
    BookID integer,
    PRIMARY KEY (CourseID),
    FOREIGN KEY (DepartmentID) REFERENCES DEPARTMENT(DepartmentID),
    FOREIGN KEY (BookID) REFERENCES BOOK(BookID)
);

CREATE TABLE SELLING (
    SellingID integer NOT NULL AUTO_INCREMENT,
    BookID integer,
    Edition integer,
    SellerID integer,
    Price integer,
    Finished bool,
    SellingTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (SellingID),
    FOREIGN KEY (BookID) REFERENCES BOOK(BookID),
    FOREIGN KEY (SellerID) REFERENCES STUDENT(StudentID)
);

CREATE TABLE TRADE (
    SellingID integer,
    BuyerID integer,
    Confirmed bool,
    TradeTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_TRADE PRIMARY KEY (SellingID, BuyerID),
    FOREIGN KEY (SellingID) REFERENCES SELLING(SellingID)
                            ON DELETE CASCADE,
    FOREIGN KEY (BuyerID) REFERENCES STUDENT(StudentID)
);