-- 16: Qual a duração total (em minutos) da temporada final: 

select season as Temporada, sum(Duration) as Minutos_totais 
from  got_episodes_v4 where season = 8;  
