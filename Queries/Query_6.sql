-- 6: Qual o Top 10 episódios melhor classificados?
SELECT episode as Episódio, season as Temporada, rating as Classificação
FROM got_episodes_v4
ORDER BY Classificação DESC
LIMIT 10;