-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 29, 2024 at 05:59 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `referensi_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `landing_pages`
--

CREATE TABLE `landing_pages` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `preview_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `landing_pages`
--

INSERT INTO `landing_pages` (`id`, `title`, `description`, `preview_url`) VALUES
(1, 'Landing Page Tas', 'https://ibrani.my.id/artic-backpack-gg-ib-2-5/', 'https://ibrani.my.id/artic-backpack-gg-ib-2-5/'),
(2, 'Landing Page Sepatu Veloz', 'https://produk.simantep.id/Sepatu-Veloz-copy', 'https://produk.simantep.id/Sepatu-Veloz-copy'),
(3, 'Landing Page Sepatu Richard', 'https://produk.simantep.id/Richard-Shoes-copy', 'https://produk.simantep.id/Richard-Shoes-copy');

-- --------------------------------------------------------

--
-- Table structure for table `video_ads`
--

CREATE TABLE `video_ads` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `video_url_1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `video_url_2` varchar(255) NOT NULL,
  `video_url_3` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `video_ads`
--

INSERT INTO `video_ads` (`id`, `title`, `description`, `video_url_1`, `video_url_2`, `video_url_3`) VALUES
(1, 'Video Ads Tas', 'Tas berkualitas tinggi.', 'https://file.simantep.workers.dev/0:/Fajar%20Store/Revina%20Blazzer/Video/Revina%20Slide.mp4', 'https://file.simantep.workers.dev/0:/Fajar%20Store/Revina%20Blazzer/Video/Revina%20Slide.mp4', 'https://file.simantep.workers.dev/0:/Fajar%20Store/Revina%20Blazzer/Video/Revina%20Slide.mp4'),
(3, 'Sepatu', 'Sepatu kulit bagus', 'https://youtube.com/embed/PKLgkoMPNZs?si=3dFXN_IV1u-jDCyV', 'https://file.simantep.workers.dev/0:/Fajar%20Store/Revina%20Blazzer/Video/Revina%20Slide.mp4', 'https://youtube.com/embed/PKLgkoMPNZs?si=3dFXN_IV1u-jDCyV');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `landing_pages`
--
ALTER TABLE `landing_pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `video_ads`
--
ALTER TABLE `video_ads`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `landing_pages`
--
ALTER TABLE `landing_pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `video_ads`
--
ALTER TABLE `video_ads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
