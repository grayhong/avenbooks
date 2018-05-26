
INSERT INTO Student(StudentID, Password, FirstName, LastName, Department, PhoneNumber)
						VALUES(20160710, '1q2w3e4r', 'Youngkyu', 'Hong', 'CS', '01035858953');
                        
 insert into DEPARTMENT values('CS', 'Computer Science', '0423503502');
 insert into DEPARTMENT values('MAS', 'Mathematical Science', '0423502702');
 insert into DEPARTMENT values('EE', 'Electrical Engineering', '0423503402');
 
 
 insert into course values('cs360', 'Databse', 'hsj', 'cs');
 insert into course values('cs341', 'Network', 'lsj', 'cs');
 insert into course values('cs330', 'OS', 'lsj', 'cs');
 
 
insert into book(BookName, author, CurrentEdition, courseid) values('intro to db', 'hsj', 6, 'cs360');
insert into book(BookName, author, CurrentEdition, courseid) values('intro to network', 'lsj', 6, 'cs341');
insert into book(BookName, author, CurrentEdition, courseid) values('intro to OS', 'sis',  7, 'cs330');
 
 
insert into SELLING(BookID, SellerID, Edition, Price) values(1, 20160710, 6, 20000);
insert into SELLING(BookID, SellerID, Edition, Price) values(1, 20160710, 6, 5000);


insert into trade(Sellingid, buyerid, confirmed) values (2, 20160710, false);
insert into trade(Sellingid, buyerid, confirmed) values (2, 20160710, false);