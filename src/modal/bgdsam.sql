-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2024 at 06:49 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bgdsam`
--

-- --------------------------------------------------------

--
-- Table structure for table `5d`
--

CREATE TABLE `5d` (
  `id` int(11) NOT NULL,
  `period` bigint(20) DEFAULT 0,
  `result` varchar(5) NOT NULL DEFAULT '0',
  `game` int(11) NOT NULL DEFAULT 1,
  `status` int(11) DEFAULT 0,
  `time` varchar(50) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;


-- --------------------------------------------------------

--
-- Table structure for table `admin`
--
CREATE TABLE `admin` (
  `id` int NOT NULL,
  `wingo1` varchar(255) NOT NULL DEFAULT '''-1''',
  `wingo3` varchar(255) NOT NULL DEFAULT '''-1''',
  `wingo5` varchar(255) NOT NULL DEFAULT '''-1''',
  `wingo10` varchar(255) NOT NULL DEFAULT '''-1''',
  `k5d` varchar(255) NOT NULL DEFAULT '''-1''',
  `k5d3` varchar(255) NOT NULL DEFAULT '''-1''',
  `k5d5` varchar(255) DEFAULT '''-1''',
  `k5d10` varchar(255) NOT NULL DEFAULT '''-1''',
  `k3d` varchar(255) NOT NULL DEFAULT '''-1''',
  `k3d3` varchar(255) NOT NULL DEFAULT '''-1''',
  `k3d5` varchar(255) NOT NULL DEFAULT '''-1''',
  `k3d10` varchar(255) NOT NULL DEFAULT '''-1''',
  `win_rate` int NOT NULL DEFAULT '0',
  `telegram` varchar(100) NOT NULL DEFAULT '0',
  `cskh` varchar(100) NOT NULL DEFAULT '0',
  `app` varchar(255) DEFAULT '0',
  `recharge_bonus` int DEFAULT NULL,
  `recharge_bonus_2` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `wingo1`, `wingo3`, `wingo5`, `wingo10`, `k5d`, `k5d3`, `k5d5`, `k5d10`, `k3d`, `k3d3`, `k3d5`, `k3d10`, `win_rate`, `telegram`, `cskh`, `app`, `recharge_bonus`, `recharge_bonus_2`) VALUES
(4, '-1', '-1', '-1', '-1', '-1', '-1', '-1', '-1', '-1', '-1', '-1', '-1', 80, 'https://t.me/jososir', 'https://t.me/basusev', '#', NULL, NULL);


-- --------------------------------------------------------

--
-- Table structure for table `admin_txn`
--

CREATE TABLE `admin_txn` (
  `id` int(11) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `amount` double NOT NULL,
  `type` enum('Add','Minus') NOT NULL DEFAULT 'Add',
  `date_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `admin_txn`
--

INSERT INTO `admin_txn` (`id`, `phone`, `amount`, `type`, `date_time`) VALUES
(1, 'admin', 10, 'Add', '2024-06-03 20:00:56'),
(2, '5457267550', 100, 'Add', '2024-06-03 20:06:50'),
(3, '9928994030', 1050, 'Add', '2024-06-03 21:18:11'),
(4, '8003097111', 1050, 'Add', '2024-06-03 21:18:34');

-- --------------------------------------------------------

--
-- Table structure for table `aviset`
--

CREATE TABLE `aviset` (
  `id` int(11) NOT NULL,
  `nxt` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `aviset`
--

INSERT INTO `aviset` (`id`, `nxt`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `balance_transfer`
--

CREATE TABLE `balance_transfer` (
  `id` int(11) NOT NULL,
  `sender_phone` bigint(255) NOT NULL,
  `receiver_phone` bigint(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Table structure for table `bank_recharge`
--

CREATE TABLE `bank_recharge` (
  `id` int(11) NOT NULL,
  `name_bank` varchar(50) NOT NULL DEFAULT '0',
  `name_user` varchar(100) NOT NULL DEFAULT '0',
  `stk` varchar(100) NOT NULL DEFAULT '0',
  `qr_code_image` varchar(255) NOT NULL,
  `type` varchar(20) NOT NULL DEFAULT 'bank',
  `time` varchar(30) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `bank_recharge`
--

INSERT INTO `bank_recharge` (`id`, `name_bank`, `name_user`, `stk`, `qr_code_image`, `type`, `time`) VALUES
(186, 'UPI', 'UPI', 'realconsultants@axl', '0xb069f606d3934857D016fd59D74FaF8600D58B91', 'momo', '0'),
(187, 'UPI', 'UPI', 'realconsultants@axl', '0xb069f606d3934857D016fd59D74FaF8600D58B91', 'bank', '0');

-- --------------------------------------------------------

--
-- Table structure for table `bet`
--

CREATE TABLE `bet` (
  `TIME` datetime NOT NULL DEFAULT current_timestamp(),
  `id` int(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `commission`
--

CREATE TABLE `commission` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `amount` double NOT NULL,
  `date_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `crashbetrecord`
--

CREATE TABLE `crashbetrecord` (
  `id` int(11) NOT NULL,
  `username` varchar(211) NOT NULL,
  `amount` int(11) NOT NULL,
  `status` varchar(211) NOT NULL DEFAULT 'pending',
  `winpoint` varchar(211) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `crashbetrecord`
--



--
-- Table structure for table `crashgamerecord`
--

CREATE TABLE `crashgamerecord` (
  `id` int(11) NOT NULL,
  `crashpoint` varchar(211) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `crashgamerecord`
--


-- --------------------------------------------------------

--
-- Table structure for table `financial_details`
--

CREATE TABLE `financial_details` (
  `id` int(11) NOT NULL,
  `phone` varchar(50) NOT NULL DEFAULT '0',
  `phone_used` varchar(50) NOT NULL DEFAULT '0',
  `money` int(11) NOT NULL DEFAULT 0,
  `type` varchar(50) NOT NULL DEFAULT '0',
  `time` varchar(50) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `financial_details`
--

INSERT INTO `financial_details` (`id`, `phone`, `phone_used`, `money`, `type`, `time`) VALUES
(1, 'AO02014YD', '387636509', 1000, '1', '1657373080436'),
(2, 'AO02014YD', '387636509', 1000, '2', '1657373264811'),
(3, 'AO02014YD', '387636509', 1000, '2', '1657373269339'),
(4, 'AO02014YD', '387636509', 3000, '1', '1657448535900'),
(5, 'AO02014YD', '387636509', 2000, '1', '1657448801632');

-- --------------------------------------------------------

--
-- Table structure for table `inc_direct`
--

CREATE TABLE `inc_direct` (
  `id` int(11) NOT NULL,
  `process_id` int(11) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `from_id` varchar(50) NOT NULL,
  `total_amount` double NOT NULL,
  `returns` double NOT NULL,
  `net_amount` double NOT NULL,
  `date` date NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `inc_direct`
--

INSERT INTO `inc_direct` (`id`, `process_id`, `phone`, `from_id`, `total_amount`, `returns`, `net_amount`, `date`, `date_time`) VALUES
(1, 1, '9991231231', '9991231232', 1000, 4, 1040, '2024-05-29', '2024-05-29 11:37:37'),
(2, 1, '9991231231', '9991231232', 1000, 4, 1040, '2024-05-29', '2024-05-29 11:46:27'),
(3, 1, '9991231231', '9991231232', 1000, 4, 40, '2024-05-29', '2024-05-29 11:47:34'),
(4, 6, '7011050346', '9953402120', 100, 4, 4, '2024-06-03', '2024-06-03 11:00:52'),
(5, 6, '9810764937', '9323675879', 100, 4, 4, '2024-06-03', '2024-06-03 12:45:59'),
(6, 6, '9810764937', '9323675879', 100, 4, 4, '2024-06-03', '2024-06-03 12:46:22'),
(7, 6, '9839097099', '7380598657', 100, 4, 4, '2024-06-03', '2024-06-03 12:46:38'),
(8, 6, '9936760732', '8546042567', 100, 4, 4, '2024-06-03', '2024-06-03 13:13:40'),
(9, 6, '9081918657', '9235330415', 1000, 4, 40, '2024-06-03', '2024-06-03 13:42:56'),
(10, 6, '9648474005', '8299145857', 200, 4, 8, '2024-06-03', '2024-06-03 13:43:31'),
(11, 6, 'admin', '5457267550', 100, 4, 4, '2024-06-03', '2024-06-03 14:36:51'),
(12, 6, '9625036814', '9928994030', 1050, 4, 42, '2024-06-03', '2024-06-03 15:48:11'),
(13, 6, '9625036814', '8003097111', 1050, 4, 42, '2024-06-03', '2024-06-03 15:48:34'),
(14, 6, '6393692299', '8795162467', 100, 4, 4, '2024-06-03', '2024-06-03 16:28:18');

-- --------------------------------------------------------

--
-- Table structure for table `inc_level`
--

CREATE TABLE `inc_level` (
  `id` int(11) NOT NULL,
  `process_id` int(11) NOT NULL,
  `bet_id` int(11) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `from_id` varchar(50) NOT NULL,
  `level` int(11) NOT NULL,
  `amount` double NOT NULL,
  `returns` double NOT NULL,
  `net_amount` double NOT NULL,
  `date` date NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `inc_level`
--


--
-- Table structure for table `inc_recharge_salary`
--

CREATE TABLE `inc_recharge_salary` (
  `id` int(11) NOT NULL,
  `process_id` int(11) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `amount` double NOT NULL,
  `date_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `inc_recharge_salary`
--

INSERT INTO `inc_recharge_salary` (`id`, `process_id`, `phone`, `amount`, `date_time`) VALUES
(1, 1, '9991231231', 1000, '2024-05-29 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `k3`
--

CREATE TABLE `k3` (
  `id` int(11) NOT NULL,
  `period` bigint(20) NOT NULL DEFAULT 0,
  `result` int(11) NOT NULL,
  `game` int(11) NOT NULL DEFAULT 1,
  `status` int(11) NOT NULL DEFAULT 0,
  `time` varchar(100) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `k3`
--


-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE `level` (
  `id` int(11) NOT NULL,
  `level` int(11) NOT NULL DEFAULT 0,
  `f1` varchar(50) NOT NULL,
  `f2` varchar(50) NOT NULL,
  `f3` varchar(50) NOT NULL,
  `f4` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `level`
--

INSERT INTO `level` (`id`, `level`, `f1`, `f2`, `f3`, `f4`) VALUES
(0, 0, '0.25', '0.25', '0.25', '0.25'),
(1, 1, '0.25', '0.25', '0.25', '0.25'),
(2, 2, '0.25', '0.25', '0.25', '0.25'),
(3, 3, '0.25', '0.25', '0.25', '0.25'),
(4, 4, '0.25', '0.25', '0.25', '0.25'),
(5, 5, '0.25', '0.25', '0.25', '0.25'),
(6, 6, '0.25', '0.25', '0.25', '0.25'),
(7, 7, '0.25', '0.25', '0.25', '0.25'),
(8, 8, '0.25', '0.25', '0.25', '0.25'),
(9, 9, '0.25', '0.25', '0.25', '0.25'),
(10, 10, '0.5', '0.5', '0.5', '0.5'),
(11, 11, '0.5', '0.5', '0.5', '0.5'),
(12, 12, '0.5', '0.05', '0.5', '0.5'),
(13, 13, '0.5', '0.5', '0.5', '0.5'),
(14, 14, '0.5', '0.5', '0.5', '0.5');

-- --------------------------------------------------------

--
-- Table structure for table `minutes_1`
--

CREATE TABLE `minutes_1` (
  `id` int(11) NOT NULL,
  `id_product` varchar(100) NOT NULL DEFAULT '0',
  `phone` varchar(20) NOT NULL DEFAULT '0',
  `code` varchar(30) NOT NULL DEFAULT '0',
  `invite` varchar(30) NOT NULL DEFAULT '0',
  `stage` varchar(255) NOT NULL DEFAULT '0',
  `result` int(11) NOT NULL DEFAULT 0,
  `more` int(11) NOT NULL DEFAULT 0,
  `level` int(11) NOT NULL DEFAULT 0,
  `money` double NOT NULL,
  `amount` double NOT NULL,
  `fee` double NOT NULL,
  `get` int(11) NOT NULL DEFAULT 0,
  `game` varchar(50) NOT NULL DEFAULT '0',
  `bet` varchar(10) NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT 0,
  `today` varchar(50) NOT NULL DEFAULT '0',
  `time` varchar(30) NOT NULL DEFAULT '0',
  `date_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `minutes_1`
--
-- --------------------------------------------------------

--
-- Table structure for table `point_list`
--

CREATE TABLE `point_list` (
  `id` int(11) NOT NULL,
  `phone` varchar(50) NOT NULL DEFAULT '0',
  `telegram` varchar(100) NOT NULL DEFAULT '0',
  `money` int(11) NOT NULL DEFAULT 0,
  `money_us` int(11) NOT NULL DEFAULT 0,
  `level` int(11) NOT NULL DEFAULT 0,
  `total1` int(11) NOT NULL DEFAULT 20,
  `total2` int(11) NOT NULL DEFAULT 50,
  `total3` int(11) NOT NULL DEFAULT 150,
  `total4` int(11) NOT NULL DEFAULT 350,
  `total5` int(11) NOT NULL DEFAULT 850,
  `total6` int(11) NOT NULL DEFAULT 5000,
  `total7` int(11) NOT NULL DEFAULT 18050,
  `total8` int(11) NOT NULL DEFAULT 20000
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `point_list`
--



-- --------------------------------------------------------

--
-- Table structure for table `recharge`
--

CREATE TABLE `recharge` (
  `id` int(11) NOT NULL,
  `id_order` varchar(100) NOT NULL DEFAULT '0',
  `transaction_id` varchar(100) DEFAULT '0',
  `utr` varchar(255) DEFAULT NULL,
  `phone` varchar(50) NOT NULL DEFAULT '0',
  `money` int(11) NOT NULL DEFAULT 0,
  `bmoney` double NOT NULL DEFAULT 0,
  `type` varchar(25) NOT NULL DEFAULT 'bank',
  `status` int(11) NOT NULL DEFAULT 0,
  `today` varchar(50) NOT NULL DEFAULT '0',
  `date_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `url` varchar(255) DEFAULT NULL,
  `time` varchar(30) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;


--
-- Table structure for table `redenvelopes`
--

CREATE TABLE `redenvelopes` (
  `id` int(11) NOT NULL,
  `id_redenvelope` varchar(100) NOT NULL DEFAULT '0',
  `phone` varchar(50) NOT NULL DEFAULT '0',
  `money` int(11) NOT NULL DEFAULT 0,
  `used` int(11) NOT NULL DEFAULT 0,
  `amount` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `time` varchar(50) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `redenvelopes`
--


--
-- Table structure for table `redenvelopes_used`
--

CREATE TABLE `redenvelopes_used` (
  `id` int(11) NOT NULL,
  `phone` varchar(50) NOT NULL DEFAULT '0',
  `phone_used` varchar(50) NOT NULL DEFAULT '0',
  `id_redenvelops` varchar(50) NOT NULL DEFAULT '0',
  `money` int(11) NOT NULL DEFAULT 0,
  `time` varchar(50) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `redenvelopes_used`
--


--
-- Table structure for table `result_5d`
--

CREATE TABLE `result_5d` (
  `id` int(11) NOT NULL,
  `id_product` varchar(100) NOT NULL DEFAULT '0',
  `phone` varchar(20) DEFAULT '0',
  `code` varchar(30) NOT NULL DEFAULT '0',
  `invite` varchar(30) NOT NULL DEFAULT '0',
  `stage` bigint(20) DEFAULT 0,
  `result` varchar(5) NOT NULL DEFAULT '0',
  `level` int(11) NOT NULL DEFAULT 0,
  `money` int(11) NOT NULL DEFAULT 0,
  `price` int(11) NOT NULL DEFAULT 0,
  `amount` int(11) NOT NULL DEFAULT 0,
  `fee` int(11) NOT NULL DEFAULT 0,
  `get` int(11) NOT NULL DEFAULT 0,
  `game` int(11) NOT NULL,
  `join_bet` varchar(10) NOT NULL DEFAULT '0',
  `bet` varchar(20) NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT 0,
  `time` varchar(50) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `result_5d`
--


--
-- Table structure for table `result_k3`
--

CREATE TABLE `result_k3` (
  `id` int(11) NOT NULL,
  `id_product` varchar(100) NOT NULL DEFAULT '0',
  `phone` varchar(50) NOT NULL DEFAULT '0',
  `code` varchar(50) NOT NULL DEFAULT '0',
  `invite` varchar(50) NOT NULL DEFAULT '0',
  `stage` varchar(50) NOT NULL DEFAULT '0',
  `result` varchar(5) NOT NULL DEFAULT '0',
  `level` int(11) NOT NULL DEFAULT 0,
  `money` int(11) NOT NULL DEFAULT 0,
  `price` int(11) NOT NULL DEFAULT 0,
  `amount` int(11) NOT NULL DEFAULT 0,
  `fee` int(11) NOT NULL DEFAULT 0,
  `get` int(11) NOT NULL DEFAULT 0,
  `game` varchar(5) NOT NULL DEFAULT '0',
  `join_bet` varchar(100) NOT NULL DEFAULT '0',
  `typeGame` varchar(100) NOT NULL DEFAULT '0',
  `bet` varchar(100) NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT 0,
  `time` varchar(50) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `result_k3`
--

--
-- Table structure for table `roses`
--

CREATE TABLE `roses` (
  `id` int(11) NOT NULL,
  `phone` varchar(50) DEFAULT '0',
  `code` varchar(50) NOT NULL DEFAULT '0',
  `invite` varchar(50) NOT NULL DEFAULT '0',
  `f1` int(11) NOT NULL DEFAULT 0,
  `f2` int(11) NOT NULL DEFAULT 0,
  `f3` int(11) NOT NULL DEFAULT 0,
  `f4` int(11) NOT NULL DEFAULT 0,
  `time` varchar(50) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `roses`
--

--
-- Table structure for table `salary`
--

CREATE TABLE `salary` (
  `id` int(11) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `amount` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `time` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `salary`

-- --------------------------------------------------------

--
-- Table structure for table `tbl_process`
--

CREATE TABLE `tbl_process` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `status` enum('Y','N') NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `tbl_process`
--

INSERT INTO `tbl_process` (`id`, `date`, `status`) VALUES
(1, '2024-05-29', 'Y'),
(2, '2024-05-30', 'Y'),
(3, '2024-05-31', 'Y'),
(4, '2024-06-01', 'Y'),
(5, '2024-06-02', 'Y'),
(6, '2024-06-03', 'N');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `value` varchar(255) NOT NULL,
  `value_2` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `value`, `value_2`) VALUES
(1, '1265', 'DaqcR97419'),
(2, '1266', 'DaqcR97419'),
(3, '1267', 'DaqcR97419'),
(4, '1268', 'DaqcR97419'),
(5, '1269', 'DaqcR97419'),
(6, '1270', 'DaqcR97419'),
(7, '1271', 'DaqcR97419'),
(8, '1272', 'tfBhj89355'),
(9, '1273', 'tfBhj89355'),
(10, '1274', 'tfBhj89355'),
(11, '1275', 'tfBhj89355'),
(12, '1276', 'tfBhj89355'),
(13, '1277', 'UmLoi72443'),
(14, '1278', 'UmLoi72443'),
(15, '1279', 'wfSDI78480'),
(16, '1280', 'wfSDI78480'),
(17, '1281', 'scQqd57029'),
(18, '1282', 'UmLoi72443'),
(19, '1283', 'wfSDI78480'),
(20, '1284', 'wfSDI78480'),
(21, '1285', 'scQqd57029'),
(22, '1286', 'wfSDI78480'),
(23, '1287', 'scQqd57029'),
(24, '1288', 'wfSDI78480'),
(25, '1289', 'scQqd57029'),
(26, '1290', 'wfSDI78480'),
(27, '1291', 'wfSDI78480'),
(28, '1292', 'scQqd57029'),
(29, '1293', 'scQqd57029'),
(30, '1294', 'scQqd57029'),
(31, '1295', 'oYFgx92255'),
(32, '1296', 'scQqd57029'),
(33, '1297', 'scQqd57029'),
(34, '1298', 'scQqd57029'),
(35, '1299', 'scQqd57029'),
(36, '1300', 'scQqd57029'),
(37, '1301', 'mtXGX97551'),
(38, '1302', 'oYFgx92255'),
(39, '1303', 'scQqd57029'),
(40, '1304', 'mtXGX97551'),
(41, '1305', 'scQqd57029'),
(42, '1306', 'scQqd57029'),
(43, '1307', 'mtXGX97551'),
(44, '1308', 'oYFgx92255'),
(45, '1309', 'scQqd57029'),
(46, '1310', 'scQqd57029'),
(47, '1311', 'mtXGX97551'),
(48, '1312', 'scQqd57029'),
(49, '1313', 'tfBhj89355'),
(50, '1314', 'tfBhj89355'),
(51, '1315', 'nKRYF14691'),
(52, '1316', 'tfBhj89355'),
(53, '1317', 'mtXGX97551'),
(54, '1318', 'DaqcR97419'),
(55, '1319', 'nKRYF14691'),
(56, '1320', 'UmLoi72443'),
(57, '1321', 'Bjigc18863'),
(58, '1322', 'cCbWO18321'),
(59, '1323', 'UmLoi72443'),
(60, '1324', 'Bjigc18863'),
(61, '1325', 'AcyoU75296'),
(62, '1326', 'tfBhj89355'),
(63, '1327', 'DaqcR97419'),
(64, '1328', 'mtXGX97551'),
(65, '1329', 'cCbWO18321'),
(66, '1330', 'AcyoU75296'),
(67, '1331', 'tfBhj89355'),
(68, '1332', 'UmLoi72443'),
(69, '1333', 'Bjigc18863'),
(70, '1334', 'mtXGX97551'),
(71, '1335', 'mtXGX97551'),
(72, '1336', 'UmLoi72443'),
(73, '1337', 'cCbWO18321'),
(74, '1338', 'AcyoU75296'),
(75, '1339', 'tfBhj89355'),
(76, '1340', 'Bjigc18863'),
(77, '1341', 'mtXGX97551'),
(78, '1342', 'tfBhj89355'),
(79, '1343', 'UmLoi72443'),
(80, '1344', 'DaqcR97419'),
(81, '1345', 'DaqcR97419'),
(82, '1346', 'DaqcR97419'),
(83, '1347', 'AcyoU75296'),
(84, '1348', 'Bjigc18863'),
(85, '1349', 'cCbWO18321'),
(86, '1350', 'mtXGX97551'),
(87, '1351', 'nKRYF14691'),
(88, '1352', 'nKRYF14691'),
(89, '1353', 'tfBhj89355'),
(90, '1354', 'cCbWO18321'),
(91, '1355', 'Bjigc18863'),
(92, '1356', 'UmLoi72443'),
(93, '1357', 'mtXGX97551'),
(94, '1358', 'nKRYF14691'),
(95, '1359', 'cCbWO18321'),
(96, '1360', 'tfBhj89355'),
(97, '1361', 'UmLoi72443'),
(98, '1362', 'DaqcR97419'),
(99, '1363', 'mtXGX97551'),
(100, '1364', 'Bjigc18863');

-- --------------------------------------------------------

--
-- Table structure for table `turn_over`
--

CREATE TABLE `turn_over` (
  `id` int(11) NOT NULL,
  `phone` varchar(250) NOT NULL,
  `code` varchar(250) NOT NULL,
  `invite` varchar(250) NOT NULL,
  `daily_turn_over` decimal(20,2) NOT NULL DEFAULT 0.00,
  `total_turn_over` decimal(20,2) NOT NULL DEFAULT 0.00,
  `date_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `turn_over`
--



-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `id_user` varchar(50) NOT NULL DEFAULT '0',
  `username` varchar(255) DEFAULT NULL,
  `phone` varchar(20) NOT NULL DEFAULT '0',
  `token` varchar(100) NOT NULL DEFAULT '0',
  `name_user` varchar(50) NOT NULL DEFAULT '0',
  `password` varchar(50) NOT NULL DEFAULT '0',
  `plain_password` varchar(250) DEFAULT NULL,
  `money` double UNSIGNED NOT NULL DEFAULT 0,
  `balance` double NOT NULL DEFAULT 0,
  `total_money` double NOT NULL DEFAULT 0,
  `account` bigint(255) NOT NULL DEFAULT 1111111111,
  `roses_f1` int(11) NOT NULL DEFAULT 0,
  `roses_f` int(11) NOT NULL DEFAULT 0,
  `roses_today` int(11) NOT NULL DEFAULT 0,
  `level` int(11) NOT NULL DEFAULT 0,
  `rank` int(11) NOT NULL DEFAULT 0,
  `code` varchar(30) NOT NULL DEFAULT '0',
  `invite` varchar(30) NOT NULL DEFAULT '0',
  `ctv` varchar(50) NOT NULL DEFAULT '0',
  `veri` int(11) NOT NULL DEFAULT 0,
  `otp` varchar(10) NOT NULL DEFAULT '0',
  `ip_address` varchar(50) NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT 0,
  `today` datetime NOT NULL DEFAULT current_timestamp(),
  `time` varchar(50) NOT NULL DEFAULT '0',
  `time_otp` varchar(50) NOT NULL DEFAULT '0',
  `user_level` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `parent_id`, `id_user`, `username`, `phone`, `token`, `name_user`, `password`, `plain_password`, `money`, `balance`, `total_money`, `account`, `roses_f1`, `roses_f`, `roses_today`, `level`, `rank`, `code`, `invite`, `ctv`, `veri`, `otp`, `ip_address`, `status`, `today`, `time`, `time_otp`, `user_level`) VALUES
(1, 0, '15936', '', 'admin', '32a7d98f6a1a5b4b46569d21f672bdc3', 'Admin', 'ba00819f263287af1ff0100c5a323355', '567890', 54.60249999999999, 0, 29650, 1111111111, 0, 31, 0, 1, 1, 'bet7s03124', 'cCtPJ28060', '3124003124', 1, '139093', '103.220.81.55', 1, '2023-10-04 12:00:25', '1700227388142', '0', 3),
(1025, 1, '78402', '', '9667111763', 'd71e41da6189c644aacd3ada99ae83cf', 'Member85284', 'b716f48a42a0b17ec645e8a7dc451900', 'vpfx007@', 9602.3075, 0, 100, 1111111111, 0, 0, 0, 0, 0, 'UmLoi72443', 'bet7s03124', '3124003124', 1, '113352', '106.195.57.244', 1, '2024-05-23 13:52:08', '1716465128926', '0', 5);

-- --------------------------------------------------------

--
-- Table structure for table `user_bank`
--

CREATE TABLE `user_bank` (
  `id` int(11) NOT NULL,
  `phone` varchar(50) NOT NULL DEFAULT '0',
  `name_bank` varchar(100) NOT NULL DEFAULT '0',
  `name_user` varchar(100) DEFAULT '0',
  `stk` varchar(100) NOT NULL DEFAULT '0',
  `tp` varchar(100) NOT NULL DEFAULT '0',
  `email` varchar(100) NOT NULL DEFAULT '0',
  `sdt` varchar(20) DEFAULT '0',
  `tinh` varchar(100) NOT NULL DEFAULT '0',
  `cryptoAdd` varchar(255) DEFAULT NULL,
  `chi_nhanh` varchar(100) NOT NULL DEFAULT '0',
  `time` varchar(30) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `user_bank`
--

-- --------------------------------------------------------

--
-- Table structure for table `wingo`
--

CREATE TABLE `wingo` (
  `id` int(11) NOT NULL,
  `period` varchar(100) NOT NULL,
  `amount` int(11) NOT NULL DEFAULT 0,
  `game` varchar(10) NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT 0,
  `time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `wingo`
--


-- --------------------------------------------------------

--
-- Table structure for table `withdraw`
--

CREATE TABLE `withdraw` (
  `id` int(11) NOT NULL,
  `id_order` varchar(100) NOT NULL DEFAULT '0',
  `phone` varchar(50) NOT NULL DEFAULT '0',
  `money` int(11) NOT NULL DEFAULT 0,
  `stk` varchar(100) NOT NULL DEFAULT '0',
  `name_bank` varchar(100) NOT NULL DEFAULT '0',
  `name_user` varchar(100) NOT NULL DEFAULT '0',
  `ifsc` varchar(255) NOT NULL,
  `sdt` varchar(255) NOT NULL DEFAULT '0',
  `tp` varchar(211) NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT 0,
  `today` varchar(50) NOT NULL DEFAULT '0',
  `time` varchar(30) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `5d`
--
ALTER TABLE `5d`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_txn`
--
ALTER TABLE `admin_txn`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `aviset`
--
ALTER TABLE `aviset`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `balance_transfer`
--
ALTER TABLE `balance_transfer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bank_recharge`
--
ALTER TABLE `bank_recharge`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bet`
--
ALTER TABLE `bet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `commission`
--
ALTER TABLE `commission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `crashbetrecord`
--
ALTER TABLE `crashbetrecord`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `crashgamerecord`
--
ALTER TABLE `crashgamerecord`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `financial_details`
--
ALTER TABLE `financial_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inc_direct`
--
ALTER TABLE `inc_direct`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inc_level`
--
ALTER TABLE `inc_level`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inc_recharge_salary`
--
ALTER TABLE `inc_recharge_salary`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `k3`
--
ALTER TABLE `k3`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `minutes_1`
--
ALTER TABLE `minutes_1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `point_list`
--
ALTER TABLE `point_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recharge`
--
ALTER TABLE `recharge`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `redenvelopes`
--
ALTER TABLE `redenvelopes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `redenvelopes_used`
--
ALTER TABLE `redenvelopes_used`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `result_5d`
--
ALTER TABLE `result_5d`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `result_k3`
--
ALTER TABLE `result_k3`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roses`
--
ALTER TABLE `roses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `salary`
--
ALTER TABLE `salary`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_process`
--
ALTER TABLE `tbl_process`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `turn_over`
--
ALTER TABLE `turn_over`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`),
  ADD UNIQUE KEY `id_user` (`id_user`);

--
-- Indexes for table `user_bank`
--
ALTER TABLE `user_bank`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wingo`
--
ALTER TABLE `wingo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `withdraw`
--
ALTER TABLE `withdraw`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `5d`
--
ALTER TABLE `5d`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=383976;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `admin_txn`
--
ALTER TABLE `admin_txn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `aviset`
--
ALTER TABLE `aviset`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `balance_transfer`
--
ALTER TABLE `balance_transfer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `bank_recharge`
--
ALTER TABLE `bank_recharge`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=188;

--
-- AUTO_INCREMENT for table `commission`
--
ALTER TABLE `commission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `crashbetrecord`
--
ALTER TABLE `crashbetrecord`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=260;

--
-- AUTO_INCREMENT for table `crashgamerecord`
--
ALTER TABLE `crashgamerecord`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT for table `financial_details`
--
ALTER TABLE `financial_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `inc_direct`
--
ALTER TABLE `inc_direct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `inc_level`
--
ALTER TABLE `inc_level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9721;

--
-- AUTO_INCREMENT for table `inc_recharge_salary`
--
ALTER TABLE `inc_recharge_salary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `k3`
--
ALTER TABLE `k3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=412713;

--
-- AUTO_INCREMENT for table `level`
--
ALTER TABLE `level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `minutes_1`
--
ALTER TABLE `minutes_1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3406;

--
-- AUTO_INCREMENT for table `point_list`
--
ALTER TABLE `point_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1641;

--
-- AUTO_INCREMENT for table `recharge`
--
ALTER TABLE `recharge`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `redenvelopes`
--
ALTER TABLE `redenvelopes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `redenvelopes_used`
--
ALTER TABLE `redenvelopes_used`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `result_5d`
--
ALTER TABLE `result_5d`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=376;

--
-- AUTO_INCREMENT for table `result_k3`
--
ALTER TABLE `result_k3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=574;

--
-- AUTO_INCREMENT for table `roses`
--
ALTER TABLE `roses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1040;

--
-- AUTO_INCREMENT for table `salary`
--
ALTER TABLE `salary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_process`
--
ALTER TABLE `tbl_process`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=603;

--
-- AUTO_INCREMENT for table `turn_over`
--
ALTER TABLE `turn_over`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=316;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1766;

--
-- AUTO_INCREMENT for table `user_bank`
--
ALTER TABLE `user_bank`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `wingo`
--
ALTER TABLE `wingo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=414531;

--
-- AUTO_INCREMENT for table `withdraw`
--
ALTER TABLE `withdraw`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
