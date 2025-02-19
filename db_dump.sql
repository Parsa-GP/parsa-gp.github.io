-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 19, 2025 at 10:18 PM
-- Server version: 11.6.2-MariaDB
-- PHP Version: 8.3.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(64) NOT NULL,
  `type` varchar(64) NOT NULL,
  `category` varchar(64) NOT NULL,
  `date` varchar(64) NOT NULL,
  `title` varchar(256) NOT NULL,
  `poster` varchar(128) NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_persian_ci NOT NULL,
  `summary` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `type`, `category`, `date`, `title`, `poster`, `content`, `summary`) VALUES
(1, 'article', 'Travel', '2024-10-18', 'The strategy to watch YouTube and not stay at it for hours', '', 'So I was in one of my friends\' home and he had an extension for removing recommendations.<br><br>\r\n\r\nat the time I hadn\'t a problem. But with the help of another extension, it reported that I watch NEARLY 70+ FUCKING VIDEOS **PER DAY**!<br><br>\r\n\r\nI don\'t watch < 1 minute videos (yt shorts, IG reels, tikTok) so most of my videos are longer than 20min.<br><br>\r\n\r\nSo I decided to use a strategy that I created<br><br><br>\r\n\r\n\r\n1. open youtube\r\nit shows your recommendations<br>\r\n2. click and open videos with your middle mouse click to open the video in a new tab\r\ncongratulations! You\'ve made a mess!<br>\r\n3. Watch the first video<br>\r\n4. After that before switching to the next tab, hover your mouse on the tab name to see the full title of the video\r\nand press with the middle mouse again to close tabs you don\'t want to watch<br><br>\r\n\r\nThe strategy is choosing which video you want to watch without any thumbnails, seeing who it is (like if it was X\'s video, without thinking, \"I have to watch it when I don\'t need to\"). The reason you have to watch a video before managing the videos you want to watch is that you forget you are in an infinite scroll of recommendations and have to choose between the videos you want to watch.<br><br><br>\r\n\r\n\r\n![youtube tabs example](../assets/post_media/tabs.jpg)<br><br><br>\r\n\r\n\r\nSo I am much more productive with the help of this strategy.<br><br>\r\n\r\nIt\'s better than removing the thumbnail because you get a peek at the video before playing it fully (the whole purpose of a thumbnail)<br><br>\r\n\r\n', 'So I was in one of my friends\' home and he had an extension for removing recommendations. So I decided to use a strategy that I created.'),
(2, 'article', 'Travel', '2024-10-04', 'Lorem ipsum dolor sit amet!', '', 'Lorem ipsum dolor sit amet, pro ea decore invenire, per audire oportere eu, has virtute corrumpit dissentias an. Cu eam dolor nostro, vim aliquid consectetuer at. Ex nulla dolores mea, te eros dicant salutandi duo. Movet errem recusabo in mea, ea usu nisl semper, ut dicta simul patrioque has. Ridens nostro graecis ex eum.<br><br>Eos in decore diceret vituperatoribus, cu has impetus virtute contentiones, no ignota pertinacia quo. Mei cu vitae partiendo intellegebat. Te vix congue possim lobortis, vix vidit accumsan et. Ei mel quis timeam facilisis.<br><br>Cum aeque impetus conclusionemque ex, nusquam voluptaria nec ad. Vim in dicta deleniti, duis ponderum in vim, urbanitas intellegat ne sit. In noster maluisset mea, vim ne tota eligendi. Eu consul gubergren efficiendi ius. Cum meis graecis blandit ut. Ad eos accusam pericula voluptatum, postea percipitur temporibus cu sed, ut facer altera nusquam nec.<br><br>Enim minim consul ex nam. Ut eos deserunt constituam repudiandae. Qui mutat postulant an. Ei est senserit suavitate accommodare, vis et wisi percipitur. Semper causae prodesset has id, ne quod erat definiebas has, in nam dolore prodesset. Duo in sumo alterum legimus.<br><br>Putant tritani id pro. Qui vocibus efficiantur ne, et quo habeo deserunt, ius ei ferri tollit. Eos te magna suscipit, quem facilis efficiantur an ius, meis impetus regione no ius. Eu repudiare rationibus usu, no mea assentior conceptam. Ut cum quidam iuvaret, modus tractatos ex vel.', 'Lorem ipsum dolor sit amet, pro ea decore invenire, per audire oportere eu, has virtute corrumpit dissentias an. Cu eam dolor nostro.'),
(3, 'post', 'Nature', '2024-10-02', 'Beautiful Sunset', '[\"sunset_beach.jpg\", \"beach.jpg\"]', '', 'A breathtaking view of a colorful sunset over the horizon.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
