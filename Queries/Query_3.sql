-- 3: Qual a duração total (em minutos) da ultima temporada? 

select Season, sum(Duration)
as total_minutes
from got_episodes_v4 where Season = 8;