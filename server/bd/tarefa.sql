-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 03/07/2024 às 00:32
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `tarefas`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `tarefa`
--

CREATE TABLE `tarefa` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `prioridade` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `data` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tarefa`
--

INSERT INTO `tarefa` (`id`, `titulo`, `descricao`, `prioridade`, `status`, `data`) VALUES
(25, 'Tarefa 01', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt velit eget faucibus posuere. ', 'Baixa', 'Finalizada', '2024-07-30'),
(26, 'Tarefa 02', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt velit eget faucibus posuere.', 'Media', 'Em Andamento', '2024-07-31'),
(27, 'Tarefa 03', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt velit eget faucibus posuere.', 'Alta', 'A Fazer', '2024-07-06'),
(28, 'Tarefa 04', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt velit eget faucibus posuere.', 'Media', 'A Fazer', '2024-07-19'),
(29, 'Tarefa 05', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt velit eget faucibus posuere.', 'Baixa', 'A Fazer', '2024-07-30');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `tarefa`
--
ALTER TABLE `tarefa`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tarefa`
--
ALTER TABLE `tarefa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
