-- 8: Qual o TOP 10 DIRETORES COM MAIS EPISÓDIOS DIRIGIDOS?
SELECT director as Diretor, COUNT(*) AS TOTAL  
FROM got_episodes_v4 
GROUP BY Diretor 
ORDER BY TOTAL DESC LIMIT 10;