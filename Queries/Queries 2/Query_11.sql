-- 11: Qual o Top 10 personagens que mais apareceram?
select Episodes_appeared as Aparições, `character` as Personagem
from  characters_v4
where `actor/ess`  like '%'
group by Aparições limit 10;