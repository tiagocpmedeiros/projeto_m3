-- 6- Quais os 3 episódios com a menor avaliação?

select Title, Rating
from got_episodes_v4
where Rating
order by Rating asc limit 3;  

