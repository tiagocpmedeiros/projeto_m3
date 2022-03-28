--  Qual o Top 5 episódios mais votados?
SELECT season as Temporada, episode as Episódio, title as Título, votes as Votos
FROM got_episodes_v4 ORDER BY Votos DESC LIMIT 5;
