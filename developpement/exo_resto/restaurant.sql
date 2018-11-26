-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 09 Novembre 2018 à 17:19
-- Version du serveur :  5.7.24-0ubuntu0.16.04.1
-- Version de PHP :  7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `restaurant`
--

-- --------------------------------------------------------

--
-- Structure de la table `Booking`
--

CREATE TABLE `Booking` (
  `Id` int(11) NOT NULL,
  `BookingDate` date NOT NULL,
  `BookingTime` time NOT NULL,
  `NumberOfSeats` tinyint(4) NOT NULL,
  `User_Id` int(11) NOT NULL,
  `CreationTimestamp` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Booking`
--

INSERT INTO `Booking` (`Id`, `BookingDate`, `BookingTime`, `NumberOfSeats`, `User_Id`, `CreationTimestamp`) VALUES
(35, '2018-08-23', '19:00:00', 6, 14, '2018-08-10 15:18:55'),
(36, '2018-08-23', '20:00:00', 5, 14, '2018-08-10 17:01:31'),
(37, '2018-08-15', '20:00:00', 4, 14, '2018-08-13 09:47:27'),
(38, '2018-08-15', '20:00:00', 4, 14, '2018-08-13 09:47:49'),
(39, '2019-04-19', '12:00:00', 6, 23, '2018-10-30 16:53:40'),
(40, '2018-12-12', '20:00:00', 6, 23, '2018-10-30 16:53:53');

-- --------------------------------------------------------

--
-- Structure de la table `Meal`
--

CREATE TABLE `Meal` (
  `Id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Photo` varchar(30) NOT NULL,
  `Description` varchar(250) NOT NULL,
  `QuantityInStock` tinyint(4) NOT NULL,
  `BuyPrice` double NOT NULL,
  `SalePrice` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Meal`
--

INSERT INTO `Meal` (`Id`, `Name`, `Photo`, `Description`, `QuantityInStock`, `BuyPrice`, `SalePrice`) VALUES
(1, 'Bacon Cheeseburger', 'bacon_cheeseburger.jpg', 'Ce délicieux cheeseburger contient un steak haché viande française de 150g ainsi que d\'un buns grillé juste comme il faut, le tout accompagné de frites fraîches maison !', 14, 6, 12.5),
(2, 'Bagel Thon', 'bagel_thon.jpg', 'Notre bagel est constitué d\'un pain moelleux avec des grains de sésame et du thon albacore, accompagné de feuilles de salade fraîche du jour  et d\'une sauce renversante :-)', 18, 2.75, 5.5),
(3, 'Carrot Cake', 'carrot_cake.jpg', 'Le carrot cake maison ravira les plus gourmands et les puristes : tous les ingrédients sont naturels !\r\nÀ consommer sans modération', 9, 3, 6.75),
(4, 'Donut Chocolat', 'chocolate_donut.jpg', 'Les donuts sont fabriqués le matin même et sont recouvert d\'une délicieuse sauce au chocolat !', 16, 3, 6.2),
(5, 'Milkshake', 'milkshake.jpg', 'Notre milkshake bien crémeux contient des morceaux d\'Oréos et est accompagné de crème chantilly et de smarties en guise de topping. Il éblouira vos papilles !', 12, 2, 5.35),
(6, 'Coca-Cola', 'coca.jpg', 'Mmmm, le Coca-Cola avec 10 morceaux de sucres et tout plein de caféine !', 72, 0.6, 3),
(7, 'Dr. Pepper', 'drpepper.jpg', 'Son goût sucré avec de l\'amande vous ravira !', 53, 0.5, 2.9),
(19, 'cookies', 'cookies.jpg', 'gâteau très sucré :)', 70, 2, 4);

-- --------------------------------------------------------

--
-- Structure de la table `Order`
--

CREATE TABLE `Order` (
  `Id` int(11) NOT NULL,
  `User_Id` int(11) NOT NULL,
  `TotalAmount` double DEFAULT NULL,
  `TaxRate` float DEFAULT NULL,
  `TaxAmount` double DEFAULT NULL,
  `CreationTimestamp` datetime DEFAULT NULL,
  `CompleteTimestamp` datetime DEFAULT NULL,
  `Statut` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Order`
--

INSERT INTO `Order` (`Id`, `User_Id`, `TotalAmount`, `TaxRate`, `TaxAmount`, `CreationTimestamp`, `CompleteTimestamp`, `Statut`) VALUES
(1, 23, 37.95, 20, 7.59, '2018-11-07 15:51:04', '2018-11-07 15:51:04', 'not payed'),
(2, 23, 37.95, 20, 7.59, '2018-11-07 15:51:37', '2018-11-07 15:51:37', 'not payed'),
(3, 23, 37.95, 20, 7.59, '2018-11-08 09:52:06', '2018-11-08 09:52:06', 'not payed'),
(4, 23, 37.95, 20, 7.59, '2018-11-08 09:55:18', '2018-11-08 09:55:18', 'not payed'),
(5, 23, 37.95, 20, 7.59, '2018-11-08 09:55:42', '2018-11-08 09:55:42', 'not payed'),
(6, 23, 37.95, 20, 7.59, '2018-11-08 11:33:17', '2018-11-08 11:33:17', 'not payed'),
(7, 23, 14.7, 20, 2.94, '2018-11-08 11:33:49', '2018-11-08 11:33:49', 'not payed'),
(8, 23, 14.7, 20, 2.94, '2018-11-08 12:03:47', '2018-11-08 12:03:47', 'not payed'),
(9, 23, 21.45, 20, 4.29, '2018-11-08 12:05:12', '2018-11-08 12:05:12', 'not payed'),
(10, 23, 21.45, 20, 4.29, '2018-11-08 12:06:04', '2018-11-08 12:06:04', 'payed'),
(11, 23, 21.45, 20, 4.29, '2018-11-08 12:08:48', '2018-11-08 12:08:48', 'not payed'),
(12, 23, 375, 20, 75, '2018-11-08 12:12:39', '2018-11-08 12:12:39', 'payed');

-- --------------------------------------------------------

--
-- Structure de la table `OrderLine`
--

CREATE TABLE `OrderLine` (
  `Id` int(11) NOT NULL,
  `QuantityOrdered` int(4) NOT NULL,
  `Meal_Id` int(11) NOT NULL,
  `Order_Id` int(11) NOT NULL,
  `PriceEach` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `OrderLine`
--

INSERT INTO `OrderLine` (`Id`, `QuantityOrdered`, `Meal_Id`, `Order_Id`, `PriceEach`) VALUES
(1, 2, 2, 1, 5.5),
(2, 1, 5, 1, 5.35),
(3, 1, 6, 1, 3),
(4, 3, 4, 1, 6.2),
(5, 2, 2, 2, 5.5),
(6, 1, 5, 2, 5.35),
(7, 1, 6, 2, 3),
(8, 3, 4, 2, 6.2),
(9, 2, 2, 3, 5.5),
(10, 1, 5, 3, 5.35),
(11, 1, 6, 3, 3),
(12, 3, 4, 3, 6.2),
(13, 2, 2, 4, 5.5),
(14, 1, 5, 4, 5.35),
(15, 1, 6, 4, 3),
(16, 3, 4, 4, 6.2),
(17, 2, 2, 5, 5.5),
(18, 1, 5, 5, 5.35),
(19, 1, 6, 5, 3),
(20, 3, 4, 5, 6.2),
(21, 2, 2, 6, 5.5),
(22, 1, 5, 6, 5.35),
(23, 1, 6, 6, 3),
(24, 3, 4, 6, 6.2),
(25, 1, 2, 7, 5.5),
(26, 1, 4, 7, 6.2),
(27, 1, 6, 7, 3),
(28, 1, 2, 8, 5.5),
(29, 1, 4, 8, 6.2),
(30, 1, 6, 8, 3),
(31, 1, 3, 9, 6.75),
(32, 1, 4, 9, 6.2),
(33, 1, 6, 9, 3),
(34, 1, 2, 9, 5.5),
(35, 1, 3, 10, 6.75),
(36, 1, 4, 10, 6.2),
(37, 1, 6, 10, 3),
(38, 1, 2, 10, 5.5),
(39, 1, 3, 11, 6.75),
(40, 1, 4, 11, 6.2),
(41, 1, 6, 11, 3),
(42, 1, 2, 11, 5.5),
(43, 30, 1, 12, 12.5);

-- --------------------------------------------------------

--
-- Structure de la table `User`
--

CREATE TABLE `User` (
  `Id` int(11) NOT NULL,
  `FirstName` varchar(40) NOT NULL,
  `LastName` varchar(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(64) NOT NULL,
  `BirthDate` date NOT NULL,
  `Address` varchar(250) NOT NULL,
  `City` varchar(40) NOT NULL,
  `ZipCode` char(5) NOT NULL,
  `Country` varchar(20) DEFAULT NULL,
  `Phone` char(10) NOT NULL,
  `CreationTimestamp` datetime NOT NULL,
  `LastLoginTimestamp` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `User`
--

INSERT INTO `User` (`Id`, `FirstName`, `LastName`, `Email`, `Password`, `BirthDate`, `Address`, `City`, `ZipCode`, `Country`, `Phone`, `CreationTimestamp`, `LastLoginTimestamp`) VALUES
(14, 'Houmahani', 'Kane', 'houmahanikane@gmail.com', '$2y$10$IV3Dsu2PEO0usnzB3R/S/.XrKvxnNMvx5LW64L4Z8V.Rj605Be5s.', '1994-11-07', 'rue Jean Etienne', 'Etampes', '91150', 'France', '0695240066', '2018-07-31 14:16:54', NULL),
(15, 'Laura', 'Martin', 'laura@gmail.com', '$2y$10$SKG/bQRMyEinnNemMpFkoOMNCXy0ufR83EbrY9mwwfXgHQEVb1hSi', '1993-07-17', 'rue La Vida', 'Paris', '75000', 'France', '0658956475', '2018-07-31 14:25:36', NULL),
(16, 'Martin', 'Lau', 'martin@gmail.com', '$2y$10$J7s1PILxHM9wyQLzNQPcPeH0dEQRRsIqxnrznk5j142IO7Qo0vYbC', '2018-07-04', 'rue La Vida', 'Paris', '75000', 'France', '0685957552', '2018-07-31 15:55:52', NULL),
(17, 'Houmahani', 'Depp', 'dfdsfsd@gmail.com', '$2y$10$FXP0Ajk3JZpmaplE5JAMKu/LuDjSXB6K0KAShh72zISPo5CV8T/vu', '2018-08-22', 'rue Jean', 'Paris', '75000', 'France', '0695240066', '2018-08-14 10:15:05', NULL),
(18, 'Houmahani', 'Kane', 'houmahani@gmail', '$2y$10$vzdzzMJzCmTAhUfC5DpfQOSNVHK77y1hwT4LkJFaHTFzFeFMTFBDq', '2018-08-14', 'rue La Vida', 'Paris', '75000', 'France', '0685957552', '2018-08-14 10:19:30', NULL),
(19, 'Houmahani', 'Kane', 'test@gmail.com', '$2y$10$BCOnx1evxuP/RVAtkBDizuofPO40CpYj5SrCsNRWB8vClFF0FPmMG', '2018-08-22', 'rue La Vida', 'Paris', '75000', 'France', '0685957552', '2018-08-14 10:36:10', NULL),
(20, 'a', 'a', 'a', 'a', '2018-02-03', 'a', 'a', '70', NULL, '0606', '2018-10-29 16:06:14', NULL),
(21, 'alan', 'perreira', 'add@hotmail.fr', 'azerty', '1995-01-01', 'hggghgghghgg', 'ghghghhg', '93170', NULL, '612234356', '2018-10-29 16:06:25', NULL),
(22, 'jean', 'Amazan', 'bubu@hotmail.fr', '$2y$11$fd8df8360d600485e5a22umFDduBl5oaj98xCal.Zpdms07TlbS2C', '1995-01-01', 'eeeffeafa', 'FEFEFE', '94752', NULL, '454562112', '2018-10-29 16:35:05', NULL),
(23, 'lucy', 'artefilia', 'lucy@hotmail.fr', '$2y$11$ac030fdaf42f1d22b2929uZUCBLGZK6q518WjvhJPU2LvWGYOPbWy', '1942-04-05', 'hjrjrhj', 'hrdjhrj', '93500', NULL, '063588496', '2018-10-30 09:57:18', NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Booking`
--
ALTER TABLE `Booking`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `User_Id` (`User_Id`);

--
-- Index pour la table `Meal`
--
ALTER TABLE `Meal`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Order`
--
ALTER TABLE `Order`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `User_Id` (`User_Id`);

--
-- Index pour la table `OrderLine`
--
ALTER TABLE `OrderLine`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `UniciteMealOrder` (`Meal_Id`,`Order_Id`),
  ADD KEY `Meal_Id` (`Meal_Id`),
  ADD KEY `Order_Id` (`Order_Id`);

--
-- Index pour la table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Booking`
--
ALTER TABLE `Booking`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT pour la table `Meal`
--
ALTER TABLE `Meal`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT pour la table `Order`
--
ALTER TABLE `Order`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `OrderLine`
--
ALTER TABLE `OrderLine`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
--
-- AUTO_INCREMENT pour la table `User`
--
ALTER TABLE `User`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `Booking`
--
ALTER TABLE `Booking`
  ADD CONSTRAINT `Booking_ibfk_1` FOREIGN KEY (`User_Id`) REFERENCES `User` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `Order`
--
ALTER TABLE `Order`
  ADD CONSTRAINT `Order_ibfk_1` FOREIGN KEY (`User_Id`) REFERENCES `User` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `OrderLine`
--
ALTER TABLE `OrderLine`
  ADD CONSTRAINT `OrderLine_ibfk_1` FOREIGN KEY (`Meal_Id`) REFERENCES `Meal` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `OrderLine_ibfk_2` FOREIGN KEY (`Order_Id`) REFERENCES `Order` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
